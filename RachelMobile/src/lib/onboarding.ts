
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

export type StyleProfilePayload = {
  preferences: Record<string, unknown>;
  experimentingWith?: Record<string, unknown>;
  lifestyle?: Record<string, unknown>;
  occasions?: Record<string, boolean>;
  desiredAppearance?: Record<string, unknown>;
  summary?: string;
};

export type SavedStyleProfile = {
  id: string;
  userId: string;
  preferences: Record<string, unknown>;
  experimentingWith: Record<string, unknown> | null;
  lifestyle: Record<string, unknown> | null;
  occasions: Record<string, boolean> | null;
  desiredAppearance: Record<string, unknown> | null;
  summary: string | null;
  updatedAt: string;
  createdAt: string;
};

export async function getAccessToken(): Promise<string> {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session) {
    throw new Error("Please log in to continue.");
  }

  return session.access_token;
}

export async function getOnboardingStatus(): Promise<OnboardingStatus> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/onboarding/status`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

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

export async function getStyleProfile(): Promise<SavedStyleProfile | null> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/onboarding/style`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Unable to load your saved style profile."
    );
  }

  return result.styleProfile ?? null;
}

export async function saveStyleProfile(
  payload: StyleProfilePayload
): Promise<SavedStyleProfile> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/onboarding/style`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Unable to save your style preferences."
    );
  }
  console.log("saving style");
  return result.styleProfile;
}



export type AvailablePersona = {
  id: string;
  name: string;
};

async function readApiResponse(response: Response) {
  const result = await response.json().catch(() => null);

  if (!result || typeof result !== "object") {
    throw new Error(
      `Invalid API response (HTTP ${response.status}). Check the backend route and server logs.`,
    );
  }

  return result;
}

export async function getAvailablePersonas(): Promise<AvailablePersona[]> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/personas`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const result = await readApiResponse(response);

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || `Unable to load personas (HTTP ${response.status}).`,
    );
  }

  if (!Array.isArray(result.personas)) {
    throw new Error("Unexpected response from GET /api/personas.");
  }

  return result.personas.map(
    (persona: { id: string; name: string }) => ({
      id: persona.id,
      name: persona.name,
    }),
  );
}

export async function getActivePersona(): Promise<AvailablePersona | null> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/personas/active`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const result = await response.json().catch(() => null);

  // No active stylist selected yet is a valid state.
  if (
    response.status === 404 &&
    result?.message === "No active persona selected"
  ) {
    return null;
  }

  if (!response.ok || !result?.success) {
    console.error("Active persona API failed:", {
      status: response.status,
      body: result,
    });

    throw new Error(
      result?.message ||
        `Unable to load selected stylist (HTTP ${response.status}). Check the API route and response.`,
    );
  }

  const persona = result.userPersona?.persona;

  if (!persona?.id || !persona?.name) {
    throw new Error(
      "The active-persona API response is missing userPersona.persona.id or name.",
    );
  }

  return {
    id: persona.id,
    name: persona.name,
  };
}

export async function selectPersona(personaId: string): Promise<void> {
  if (!personaId) {
    throw new Error("A persona ID is required.");
  }

  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/personas/select`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ personaId }),
  });

  const result = await response.json().catch(() => null);

  if (!result || typeof result !== "object") {
    throw new Error(
      `Invalid persona-selection response (HTTP ${response.status}).`,
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(
      result.message ||
        `Unable to save selected stylist (HTTP ${response.status}).`,
    );
  }

  console.log("Persona selection confirmed by backend:", {
    personaId,
    userPersona: result.userPersona,
  });
}


export type AvatarGender = "FEMALE" | "MALE";

export type AvatarSelection = {
  gender: AvatarGender;
  hairstyle: number | null;
  faceShape: number | null;
  skinTone: number | null;
  bodyType: number | null;
};

export type SavedAvatar = AvatarSelection & {
  id: string;
  userId: string;
  imageCode: string;
  imagePath: string;
  version: number;
  metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
};

export async function getAvatar(): Promise<SavedAvatar | null> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/avatar`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message ||
        `Unable to load your Style Mirror (HTTP ${response.status}).`,
    );
  }

  return result.avatar ?? null;
}

export async function saveAvatar(
  payload: AvatarSelection,
): Promise<SavedAvatar> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}/api/avatar`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result?.success || !result.avatar) {
    throw new Error(
      result?.message ||
        `Unable to save your Style Mirror (HTTP ${response.status}).`,
    );
  }

  return result.avatar as SavedAvatar;
}