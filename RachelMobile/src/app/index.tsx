import { useEffect } from "react";
import { ActivityIndicator, Text, Pressable, View } from "react-native";
import { router } from "expo-router";
import { supabase } from "../lib/supabase";
import { ensureUserProfile } from "../lib/ensureUserProfile";
import { getOnboardingStatus } from "../lib/onboarding";
import { useState } from "react";

export default function Index() {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let active = true;

    async function checkSession() {
      setErrorMessage("");

      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (!active) return;

      if (error || !session) {
        router.replace("/welcome");
        return;
      }

      try {
        // Ensure the Prisma User row exists first.
        await ensureUserProfile();

        if (!active) return;

        // Now onboarding status can be retrieved safely.
        const status = await getOnboardingStatus();

        if (!active) return;

        if (status.onboardingCompleted) {
          router.replace("/home");
        } else {
          router.replace("/onboarding");
        }
      } catch (error) {
        console.error("Session initialization failed:", error);

        if (!active) return;

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Unable to load your profile. Please try again."
        );
      }
    }

    checkSession();

    return () => {
      active = false;
    };
  }, []);

  if (errorMessage) {
    return (
      <View className="flex-1 items-center justify-center bg-[#FAF7F2] px-6">
        <Text className="mb-4 text-center text-[#65463A]">
          {errorMessage}
        </Text>

        <Pressable
          onPress={() => {
            setErrorMessage("");
            router.replace("/");
          }}
          className="rounded-full bg-[#3F5792] px-6 py-3"
        >
          <Text className="text-white">Try again</Text>
        </Pressable>

        <Pressable
          onPress={async () => {
            await supabase.auth.signOut();
            router.replace("/welcome");
          }}
          className="mt-4 px-4 py-2"
        >
          <Text className="text-[#65463A]">Log out</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#FAF7F2]">
      <ActivityIndicator size="large" color="#3F5792" />
    </View>
  );
}
