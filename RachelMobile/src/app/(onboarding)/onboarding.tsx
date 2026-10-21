import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, router } from "expo-router";
import { ActivityIndicator, Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "../../lib/supabase";

import {
  getStyleProfile,
  saveStyleProfile,
  getAvailablePersonas,
  getActivePersona,
  selectPersona,
  getAvatar,
  saveAvatar,
  completeOnboarding,
  type AvailablePersona,
  type AvatarSelection,
} from "../../lib/onboarding";

import {
  fromStyleProfile,
  toStyleProfilePayload,
} from "../../lib/styleQuestionnaire";

import {
  Step1ChooseStylist,
  Step2StylePreferences,
  type Stylist,
  initialStyleAnswers,
  type StyleQuestionnaireAnswers,
} from "../../components/onboarding/steps";

import Step3StyleMirror from "../../components/onboarding/step3StyleMirror";
import Step4WardrobeSetup from "../../components/onboarding/step4WardrobeSetup";

const TOTAL_STEPS = 4;

const SUPPORTED_STYLISTS: Stylist[] = ["Rachel", "KJay", "Mira"];

const INITIAL_AVATAR_SELECTION: AvatarSelection = {
  gender: "FEMALE",
  hairstyle: 1,
  faceShape: 1,
  skinTone: 2,
  bodyType: 2,
};

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const [selectedStylist, setSelectedStylist] = useState<Stylist>("Rachel");

  const [availablePersonas, setAvailablePersonas] = useState<
    AvailablePersona[]
  >([]);

  const [isContinuing, setIsContinuing] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isLoadingStylist, setIsLoadingStylist] = useState(true);
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);

  const [hasSavedWardrobe, setHasSavedWardrobe] = useState(false);

  const [styleAnswers, setStyleAnswers] = useState<StyleQuestionnaireAnswers>({
    ...initialStyleAnswers,
  });

  const [avatarSelection, setAvatarSelection] = useState<AvatarSelection>(
    INITIAL_AVATAR_SELECTION,
  );

  // Restore the selected stylist whenever onboarding gains focus.
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
                  name.toLowerCase() === matchingPersona.name.toLowerCase(),
              );

              if (stylistName) {
                setSelectedStylist(stylistName);
              }
            }
          }
        } catch (error) {
          if (active) {
            console.error("Failed to restore selected persona:", error);

            Alert.alert(
              "Couldn't load your stylist",
              error instanceof Error ? error.message : "Please try again.",
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
          setStyleAnswers(fromStyleProfile(profile, initialStyleAnswers));
        }
      } catch (error) {
        console.error("Failed to load saved style profile:", error);

        if (active) {
          Alert.alert(
            "Couldn't load your saved preferences",
            error instanceof Error ? error.message : "Please try again.",
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

  // Load the avatar whenever the user enters Step 3.
  useEffect(() => {
    if (step !== 3) return;

    let active = true;

    async function loadSavedAvatar() {
      setIsLoadingAvatar(true);

      try {
        const avatar = await getAvatar();

        if (!active) return;

        if (avatar) {
          setAvatarSelection({
            gender: avatar.gender,
            hairstyle: avatar.hairstyle,
            faceShape: avatar.faceShape,
            skinTone: avatar.skinTone,
            bodyType: avatar.bodyType,
          });
        } else {
          setAvatarSelection(INITIAL_AVATAR_SELECTION);
        }
      } catch (error) {
        console.error("Failed to load saved avatar:", error);

        if (active) {
          Alert.alert(
            "Couldn't load your Style Mirror",
            error instanceof Error ? error.message : "Please try again.",
          );
        }
      } finally {
        if (active) {
          setIsLoadingAvatar(false);
        }
      }
    }

    void loadSavedAvatar();

    return () => {
      active = false;
    };
  }, [step]);

  const isLoading =
    isLoadingProfile ||
    (step === 1 && isLoadingStylist) ||
    (step === 3 && isLoadingAvatar);

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
          throw new Error(
            `Could not find ${selectedStylist} in the available personas.`,
          );
        }

        await selectPersona(persona.id);

        setStep(2);
      } catch (error) {
        console.error("Failed to save selected persona:", error);

        Alert.alert(
          "Couldn't save your stylist",
          error instanceof Error ? error.message : "Please try again.",
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
        console.error("Failed to save style profile:", error);

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

    // STEP 3: Persist Style Mirror before advancing.
    if (step === 3) {
      setIsContinuing(true);

      try {
        const savedAvatar = await saveAvatar(avatarSelection);

        setAvatarSelection({
          gender: savedAvatar.gender,
          hairstyle: savedAvatar.hairstyle,
          faceShape: savedAvatar.faceShape,
          skinTone: savedAvatar.skinTone,
          bodyType: savedAvatar.bodyType,
        });

        setStep(4);
      } catch (error) {
        console.error("Failed to save Style Mirror:", error);

        Alert.alert(
          "Couldn't save your Style Mirror",
          error instanceof Error
            ? error.message
            : "Your selections are still here. Please try again.",
        );
      } finally {
        setIsContinuing(false);
      }

      return;
    }

    // STEP 4: Complete onboarding after a wardrobe item is saved.
    if (step === 4) {
      if (!hasSavedWardrobe) return;

      setIsContinuing(true);

      try {
        await completeOnboarding();

        router.replace("/(main)/home");
      } catch (error) {
        console.error("Failed to complete onboarding:", error);

        Alert.alert(
          "Couldn't complete onboarding",
          error instanceof Error
            ? error.message
            : "Your wardrobe may already be saved. Please try again.",
        );
      } finally {
        setIsContinuing(false);
      }
    }
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
        return (
          <Step3StyleMirror
            value={avatarSelection}
            onChange={setAvatarSelection}
          />
        );

      case 4:
        return (
          <Step4WardrobeSetup onWardrobeSaved={handleWardrobeSaved} />
        );

      default:
        return null;
    }
  };

  const continueDisabled = busy || (step === 4 && !hasSavedWardrobe);

  const continueLabel =
    step === 1
      ? `Continue with ${selectedStylist}`
      : step === 2
        ? "Create my Style Snapshot"
        : step === 3
          ? "Continue"
          : "Complete my wardrobe";

  const handleWardrobeSaved = useCallback(() => {
    setHasSavedWardrobe(true);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#FAF7F2]" edges={["top", "bottom"]}>
      {/* Shared onboarding header */}
      <View className="h-[49px] flex-row items-center justify-center">
        {step > 1 && (
          <Pressable
            onPress={handleBack}
            disabled={busy}
            className="absolute left-[12px] h-[36px] w-[36px] items-center justify-center"
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Ionicons name="chevron-back" size={25} color="#2B1B16" />
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
                  item <= step ? "bg-[#3F5792]" : "bg-[#E9DDCF]"
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

      {/* Active onboarding step */}
      <View className="flex-1">
        {isLoading ? (
          <View className="flex-1 items-center justify-center px-6">
            <ActivityIndicator size="large" color="#3F5792" />

            <Text
              className="mt-3 text-center text-[13px] text-[#64748B]"
              style={{ fontFamily: "Manrope" }}
            >
              {step === 1
                ? "Loading your stylist..."
                : step === 3
                  ? "Loading your Style Mirror..."
                  : "Loading your saved preferences..."}
            </Text>
          </View>
        ) : (
          renderStep()
        )}
      </View>

      {/* Shared footer for all four steps */}
      <View className="px-[22px] pb-[8px] pt-[7px]">
        <Text
          className="mb-[14px] text-center text-[11px] leading-[17px] text-[#64748B]"
          style={{ fontFamily: "Manrope" }}
        >
          {step === 1
            ? "You can change your stylist anytime in Settings."
            : step === 2
              ? `Step ${step} of ${TOTAL_STEPS} · Your style, your way.`
              : step === 3
                ? "Your Style Mirror helps personalise your experience."
                : "Your wardrobe is the first step toward outfits made for you."}
        </Text>

        <Pressable
          onPress={handleContinue}
          disabled={continueDisabled}
          accessibilityRole="button"
          className={`h-[52px] w-full flex-row items-center justify-center rounded-full ${
            continueDisabled ? "bg-[#0D3767]/60" : "bg-[#0D3767]"
          }`}
          style={({ pressed }) => ({
            opacity: continueDisabled ? 0.7 : pressed ? 0.88 : 1,
          })}
        >
          {isContinuing ? (
            <ActivityIndicator color="#FAF7F2" />
          ) : (
            <>
              <Text
                className="text-[17px] text-[#FAF7F2]"
                style={{ fontFamily: "DMSerifDisplay" }}
              >
                {continueLabel}
              </Text>

              <Ionicons
                name={step === 4 ? "checkmark-circle-outline" : "arrow-forward"}
                size={22}
                color="#FAF7F2"
                style={{ marginLeft: 9 }}
              />
            </>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
