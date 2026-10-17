import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";

import {
  Step1ChooseStylist,
  Step2StylePreferences,
  Step3WardrobeSetup,
  Step4Review,
  type Stylist,
  initialStyleAnswers,
  type StyleQuestionnaireAnswers,
} from "../../components/onboarding/steps";

const TOTAL_STEPS = 4;

const stepTitles = [
  "Choose your stylist",
  "Your personal style",
  "Your wardrobe",
  "Almost ready",
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedStylist, setSelectedStylist] = useState<Stylist>("Rachel");
  const [isContinuing, setIsContinuing] = useState(false);

  const [styleAnswers, setStyleAnswers] =
    useState<StyleQuestionnaireAnswers>(initialStyleAnswers);

  const handleBack = () => {
    if (isContinuing) return;

    if (step > 1) {
      setStep((current) => current - 1);
    } else {
      router.back();
    }
  };

  const handleContinue = async () => {
    if (isContinuing) return;

    if (step < TOTAL_STEPS) {
      setStep((current) => current + 1);
      return;
    }

    // Final completion will be connected to the backend
    // after the required onboarding data and APIs are ready.
    Alert.alert(
      "Not finished yet",
      "Onboarding completion will be connected after all steps are implemented.",
    );
  };

  const handleLogout = async () => {
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
        return <Step4Review />;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FAF7F2]" edges={["top", "bottom"]}>
      {/* SHARED HEADER */}
      <View className="h-[49px] flex-row items-center justify-center">
        <Pressable
          onPress={handleBack}
          className="absolute left-[12px] h-[36px] w-[36px] items-center justify-center"
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={25} color="#2B1B16" />
        </Pressable>

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
      <View className="flex-1">{renderStep()}</View>

      {/* SHARED FOOTER */}
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
          disabled={isContinuing}
          accessibilityRole="button"
          className="h-[52px] w-full flex-row items-center justify-center rounded-full bg-[#0D3767]"
          style={({ pressed }) => ({
            opacity: pressed ? 0.88 : 1,
          })}
        >
          <Text
            className="text-[17px] text-[#FAF7F2]"
            style={{ fontFamily: "DMSerifDisplay" }}
          >
            {step === 1
              ? `Continue with ${selectedStylist}`
              : step === 2
                ? "Create my Style Snapshot"
                : step === TOTAL_STEPS
                  ? "Finish setup"
                  : "Continue"}
          </Text>

          <Ionicons
            name={step === TOTAL_STEPS ? "checkmark" : "arrow-forward"}
            size={22}
            color="#FAF7F2"
            style={{ marginLeft: 9 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
