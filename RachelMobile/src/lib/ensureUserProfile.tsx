import { supabase } from "./supabase";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error("Missing EXPO_PUBLIC_API_URL");
}

export async function ensureUserProfile(): Promise<void> {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session) {
    throw new Error("Your session has expired. Please log in again.");
  }

  const response = await fetch(
    `${API_URL}/api/auth/ensure-profile`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
        Accept: "application/json",
      },
    }
  );

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Unable to set up your profile. Please retry."
    );
  }
}
