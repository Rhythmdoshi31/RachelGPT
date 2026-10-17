// to check if the user is already onboarded or do we need to go to onboarding pages...

import { supabase } from "./supabase";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("Missing EXPO_PUBLIC_API_URL");
}

export type OnboardingStatus = {
  onboardingCompleted: boolean;
  onboardingStep: number;
  onboardingCompletedAt: string | null;
};

export async function getOnboardingStatus(): Promise<OnboardingStatus> {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session) {
    throw new Error("Please log in to continue.");
  }

  const response = await fetch(
    `${API_URL}/api/onboarding/status`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        Accept: "application/json",
      },
    }
  );

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Unable to check onboarding status."
    );
  }

  return {
    onboardingCompleted: result.onboardingCompleted,
    onboardingStep: result.onboardingStep,
    onboardingCompletedAt: result.onboardingCompletedAt,
  };
}
