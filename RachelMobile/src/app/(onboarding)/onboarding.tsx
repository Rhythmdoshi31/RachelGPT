import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, router } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "../../lib/supabase";

import {
  getStyleProfile,
  saveStyleProfile,
  getAvailablePersonas,
  getActivePersona,
  selectPersona,
  type AvailablePersona,
} from "../../lib/onboarding";

import {
  fromStyleProfile,
  toStyleProfilePayload,
} from "../../lib/styleQuestionnaire";

import {
  Step1ChooseStylist,
  Step2StylePreferences,
  Step3WardrobeSetup,
  type Stylist,
  initialStyleAnswers,
  type StyleQuestionnaireAnswers,
} from "../../components/onboarding/steps";

import Step4WardrobeSetup from "../../components/onboarding/step4WardrobeSetup";

const TOTAL_STEPS = 4;

const SUPPORTED_STYLISTS: Stylist[] = ["Rachel", "KJay", "Mira"];

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const [selectedStylist, setSelectedStylist] =
    useState<Stylist>("Rachel");

  const [availablePersonas, setAvailablePersonas] = useState<
    AvailablePersona[]
  >([]);

  const [isContinuing, setIsContinuing] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isLoadingStylist, setIsLoadingStylist] = useState(true);

  const [styleAnswers, setStyleAnswers] =
    useState<StyleQuestionnaireAnswers>({
      ...initialStyleAnswers,
    });

  // Restore the saved stylist whenever onboarding gains focus.
  useFocusEffect(
    useCallback(() => {
      let active = true;

      async function loadSavedStylist() {
        setIsLoadingStylist(true);

        try {
          const [personas, activePersona] = await Promise.all([
            getAvailablePersonas(),
            getActivePersona(),
          ]);

          if (!active) return;

          setAvailablePersonas(personas);

          if (activePersona) {
            const matchingPersona = personas.find(
              (persona) => persona.id === activePersona.id,
            );

            if (matchingPersona) {
              const stylistName = SUPPORTED_STYLISTS.find(
                (name) =>
                  name.toLowerCase() ===
                  matchingPersona.name.toLowerCase(),
              );

              if (stylistName) {
                setSelectedStylist(stylistName);
              }
            }
          }
        } catch (error) {
          if (active) {
            console.error(
              "Failed to restore selected persona:",
              error,
            );

            Alert.alert(
              "Couldn't load your stylist",
              error instanceof Error
                ? error.message
                : "Please try again.",
            );
          }
        } finally {
          if (active) {
            setIsLoadingStylist(false);
          }
        }
      }

      void loadSavedStylist();

      return () => {
        active = false;
      };
    }, []),
  );

  // Restore saved Step 2 preferences.
  useEffect(() => {
    let active = true;

    async function loadSavedStyleProfile() {
      try {
        const profile = await getStyleProfile();

        if (active && profile) {
          setStyleAnswers(
            fromStyleProfile(profile, initialStyleAnswers),
          );
        }
      } catch (error) {
        console.error(
          "Failed to load saved style profile:",
          error,
        );

        if (active) {
          Alert.alert(
            "Couldn't load your saved preferences",
            error instanceof Error
              ? error.message
              : "Please try again.",
          );
        }
      } finally {
        if (active) {
          setIsLoadingProfile(false);
        }
      }
    }

    void loadSavedStyleProfile();

    return () => {
      active = false;
    };
  }, []);

  const isLoading =
    isLoadingProfile || (step === 1 && isLoadingStylist);

  const busy = isContinuing || isLoading;

  const handleBack = () => {
    if (busy) return;

    if (step > 1) {
      setStep((current) => current - 1);
    } else {
      router.back();
    }
  };

  const handleContinue = async () => {
    if (busy) return;

    // STEP 1: Save the selected stylist.
    if (step === 1) {
      setIsContinuing(true);

      try {
        const persona = availablePersonas.find(
          (item) =>
            item.name.trim().toLowerCase() ===
            selectedStylist.trim().toLowerCase(),
        );

        if (!persona) {
          console.log("Selected stylist:", selectedStylist);
          console.log(
            "Available personas in app:",
            availablePersonas,
          );

          throw new Error(
            `Could not find ${selectedStylist} in the available personas.`,
          );
        }

        console.log("Saving selected persona:", {
          id: persona.id,
          name: persona.name,
        });

        await selectPersona(persona.id);

        console.log("Persona saved successfully.");

        setStep(2);
      } catch (error) {
        console.error(
          "Failed to save selected persona:",
          error,
        );

        Alert.alert(
          "Couldn't save your stylist",
          error instanceof Error
            ? error.message
            : "Please try again.",
        );
      } finally {
        setIsContinuing(false);
      }

      return;
    }

    // STEP 2: Save style preferences.
    if (step === 2) {
      setIsContinuing(true);

      try {
        const payload = toStyleProfilePayload(styleAnswers);

        await saveStyleProfile(payload);

        setStep(3);
      } catch (error) {
        console.error(
          "Failed to save style profile:",
          error,
        );

        Alert.alert(
          "Couldn't save your style",
          error instanceof Error
            ? error.message
            : "Your answers are still here. Please try again.",
        );
      } finally {
        setIsContinuing(false);
      }

      return;
    }

    // STEP 3: Keep the existing Style Mirror step unchanged.
    if (step === 3) {
      setStep(4);
      return;
    }

    // STEP 4: Wardrobe photo selection is handled inside
    // Step4WardrobeSetup. Its upload and completion flow
    // can be connected separately.
  };

  const handleLogout = async () => {
    if (isContinuing) return;

    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Logout failed", error.message);
      return;
    }

    router.replace("/welcome");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1ChooseStylist
            selectedStylist={selectedStylist}
            setSelectedStylist={setSelectedStylist}
          />
        );

      case 2:
        return (
          <Step2StylePreferences
            answers={styleAnswers}
            setAnswers={setStyleAnswers}
          />
        );

      case 3:
        return <Step3WardrobeSetup />;

      case 4:
        return <Step4WardrobeSetup />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#FAF7F2]"
      edges={["top", "bottom"]}
    >
      {/* SHARED HEADER */}
      <View className="h-[49px] flex-row items-center justify-center">
        {step > 1 && (
          <Pressable
            onPress={handleBack}
            disabled={busy}
            className="absolute left-[12px] h-[36px] w-[36px] items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Ionicons
              name="chevron-back"
              size={25}
              color="#2B1B16"
            />
          </Pressable>
        )}

        <View className="items-center">
          <Text
            className="text-[14px] leading-[19px] text-[#64748B]"
            style={{ fontFamily: "Manrope" }}
          >
            Step {step} of {TOTAL_STEPS}
          </Text>

          <View className="mt-[5px] flex-row gap-[8px]">
            {[1, 2, 3, 4].map((item) => (
              <View
                key={item}
                className={`h-[8px] w-[8px] rounded-full ${
                  item <= step
                    ? "bg-[#3F5792]"
                    : "bg-[#E9DDCF]"
                }`}
              />
            ))}
          </View>
        </View>

        <Pressable
          onPress={handleLogout}
          disabled={isContinuing}
          className="absolute right-[12px] h-[36px] justify-center px-2"
          accessibilityRole="button"
          accessibilityLabel="Log out"
        >
          <Text
            className="text-[12px] text-[#64748B]"
            style={{ fontFamily: "Manrope" }}
          >
            Log out
          </Text>
        </Pressable>
      </View>

      {/* ACTIVE STEP */}
      <View className="flex-1">
        {isLoading ? (
          <View className="flex-1 items-center justify-center px-6">
            <ActivityIndicator
              size="large"
              color="#3F5792"
            />

            <Text
              className="mt-3 text-center text-[13px] text-[#64748B]"
              style={{ fontFamily: "Manrope" }}
            >
              {step === 1
                ? "Loading your stylist..."
                : "Loading your saved preferences..."}
            </Text>
          </View>
        ) : (
          renderStep()
        )}
      </View>

      {/* SHARED FOOTER: Step 4 has its own actions. */}
      {step !== 4 && (
        <View className="px-[22px] pb-[8px] pt-[7px]">
          <Text
            className="mb-[14px] text-center text-[11px] leading-[17px] text-[#64748B]"
            style={{ fontFamily: "Manrope" }}
          >
            {step === 1
              ? "You can change your stylist anytime in Settings."
              : `Step ${step} of ${TOTAL_STEPS} · Your style, your way.`}
          </Text>

          <Pressable
            onPress={handleContinue}
            disabled={busy}
            accessibilityRole="button"
            className="h-[52px] w-full flex-row items-center justify-center rounded-full bg-[#0D3767]"
            style={({ pressed }) => ({
              opacity: busy ? 0.65 : pressed ? 0.88 : 1,
            })}
          >
            {busy ? (
              <ActivityIndicator color="#FAF7F2" />
            ) : (
              <>
                <Text
                  className="text-[17px] text-[#FAF7F2]"
                  style={{ fontFamily: "DMSerifDisplay" }}
                >
                  {step === 1
                    ? `Continue with ${selectedStylist}`
                    : step === 2
                      ? "Create my Style Snapshot"
                      : "Continue"}
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={22}
                  color="#FAF7F2"
                  style={{ marginLeft: 9 }}
                />
              </>
            )}
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
