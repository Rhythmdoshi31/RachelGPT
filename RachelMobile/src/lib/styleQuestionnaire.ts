// Mapper for Onboarding Step 3, converting UI text to API request type
import type { StyleQuestionnaireAnswers } from "../components/onboarding/steps";
import type { StyleProfilePayload } from "./onboarding";
import type { SavedStyleProfile } from "./onboarding";

const normalize = (value: string) =>
  value.trim().toLowerCase();

const slug = (value: string) =>
  normalize(value).replace(/\s+/g, "-");

const occasionKey = (value: string) =>
  ({
    "Night out": "night_out",
    "Family events": "family_events",
    "Religious events": "religious_events",
  }[value] ?? slug(value));

const avoidedFitMap: Record<string, string> = {
  "Very fitted": "very tight",
  "Skinny fits": "skinny",
};

const avoidedColorMap: Record<string, string> = {
  "Bright colours": "bright colors",
};

const avoidedFabricMap: Record<string, string> = {
  "Rough fabrics": "rough fabrics",
  "Stiff fabrics": "stiff fabrics",
  "Scratchy wool": "scratchy wool",
  "Synthetic fabrics": "synthetic fabrics",
  "Heavy fabrics": "heavy fabrics",
};

const avoidedPatternMap: Record<string, string> = {
  "Large prints": "large prints",
  "Animal prints": "animal prints",
  "Bold graphics": "bold graphics",
  "Florals": "florals",
  "Busy patterns": "busy patterns",
};

const experimentingFitMap: Record<string, string> = {
  "Oversized fits": "oversized",
  "Wide-leg trousers": "wide-leg",
};

const comfortMap: Record<string, string> = {
  "Comfort first": "high",
  Balanced: "balanced",
  "Style first": "low",
};

export function toStyleProfilePayload(
  answers: StyleQuestionnaireAnswers,
): StyleProfilePayload {
  const avoidedItems = answers.avoidedItems;

  const avoidedFits = [
    ...answers.avoidedFits.map(normalize),
    ...avoidedItems
      .filter((item) => item in avoidedFitMap)
      .map((item) => avoidedFitMap[item]),
  ];

  const avoidedColors = [
    ...answers.avoidedColors.map(normalize),
    ...avoidedItems
      .filter((item) => item in avoidedColorMap)
      .map((item) => avoidedColorMap[item]),
  ];

  const fabricAvoidances = [
    ...answers.fabricAvoidances.map(normalize),
    ...avoidedItems
      .filter((item) => item in avoidedFabricMap)
      .map((item) => avoidedFabricMap[item]),
  ];

  const patternAvoidances = [
    ...answers.patternAvoidances.map(normalize),
    ...avoidedItems
      .filter((item) => item in avoidedPatternMap)
      .map((item) => avoidedPatternMap[item]),
  ];

  const unique = (values: string[]) => [...new Set(values)];

  const preferences: Record<string, unknown> = {
    preferredStyles: unique(answers.preferredStyles.map(slug)),
    dressingPriorities: unique(
      answers.dressingPriorities.map(normalize),
    ),
    avoidedItems: unique(avoidedItems.map(normalize)),
    preferredFits: unique(answers.preferredFits.map(slug)),
    avoidedFits: unique(avoidedFits),
    preferredColors: unique(
      answers.preferredColors.map((value) =>
        value === "Bright colours" ? "bright colors" : normalize(value),
      ),
    ),
    avoidedColors: unique(avoidedColors),
    shoePreferences: unique(answers.shoePreferences.map(normalize)),
    fabricPreferences: unique(
      answers.fabricPreferences.map(normalize),
    ),
    fabricAvoidances: unique(fabricAvoidances),
    patternPreferences: unique(
      answers.patternPreferences.map(normalize),
    ),
    patternAvoidances: unique(patternAvoidances),
    comfortPriority: comfortMap[answers.comfortPriority] ?? "",
  };

  const experimentingWith = {
    styles: unique(answers.experimentingStyles.map(slug)),
    colors: unique(answers.experimentingColors.map(normalize)),
    fits: unique(
      answers.experimentingFits.map(
        (value) => experimentingFitMap[value] ?? slug(value),
      ),
    ),
    patterns: unique(answers.experimentingPatterns.map(normalize)),
    pieces: unique(answers.experimentingPieces.map(normalize)),
  };

  const lifestyle: Record<string, string> = {};

  if (answers.workEnvironment) {
    lifestyle.work =
      answers.workEnvironment === "Mostly at home"
        ? "home"
        : normalize(answers.workEnvironment);
  }

  if (answers.climate) {
    lifestyle.climate = normalize(answers.climate).replace(" climate", "");
  }

  if (answers.activityLevel) {
    lifestyle.activityLevel = normalize(answers.activityLevel);
  }

  if (answers.dailyEnvironment) {
    lifestyle.dailyEnvironment =
      answers.dailyEnvironment === "Indoor and outdoor"
        ? "mixed indoor and outdoor"
        : normalize(answers.dailyEnvironment);
  }

  if (answers.fashionPriority) {
    lifestyle.fashionPriority = normalize(answers.fashionPriority);
  } else if (answers.comfortPriority === "Balanced") {
    lifestyle.fashionPriority = "balanced comfort and style";
  }

  const occasionLabels = [
    "Work",
    "Casual",
    "Dates",
    "Brunch",
    "Dinners",
    "Parties",
    "Business",
    "Travel",
    "Vacation",
    "Weddings",
    "Festivals",
    "Night out",
    "Interviews",
    "Family events",
    "Religious events",
    "Beach",
    "Gym",
    "Formal",
    "College",
  ];

  const selectedOccasions = new Set(answers.occasions);

  const occasions = Object.fromEntries(
    occasionLabels.map((label) => [
      occasionKey(label),
      selectedOccasions.has(label),
    ]),
  );

  const desiredAppearance = {
    goals: unique(answers.desiredGoals.map(normalize)),
    vibes: unique(answers.desiredVibes.map(normalize)),
    styleDirection: unique(answers.styleDirections.map(slug)),
  };

  const styles = answers.preferredStyles.map(normalize);
  const fits = answers.preferredFits.map(normalize);
  const colors = answers.preferredColors.map(normalize);

  const summaryParts = [
    styles.length ? `Prefers ${styles.join(", ")} styles` : "",
    fits.length ? `favors ${fits.join(", ")} fits` : "",
    colors.length ? `likes ${colors.join(", ")} colors` : "",
    answers.comfortPriority
      ? `comfort preference: ${normalize(answers.comfortPriority)}`
      : "",
    experimentingWith.styles.length
      ? `interested in experimenting with ${experimentingWith.styles.join(", ")}`
      : "",
  ].filter(Boolean);

  return {
    preferences,
    experimentingWith,
    lifestyle,
    occasions,
    desiredAppearance,
    summary: summaryParts.join("; "),
  };
}



export function fromStyleProfile(
  profile: SavedStyleProfile,
  initial: StyleQuestionnaireAnswers,
): StyleQuestionnaireAnswers {
  const p = profile.preferences ?? {};
  const e = profile.experimentingWith ?? {};
  const l = profile.lifestyle ?? {};
  const d = profile.desiredAppearance ?? {};
  const o = profile.occasions ?? {};

  const strings = (value: unknown): string[] =>
    Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string")
      : [];

  const text = (value: unknown): string =>
    typeof value === "string" ? value : "";

  const title = (value: string) =>
    value.replace(/\b\w/g, (character) => character.toUpperCase());

  const reverseComfort: Record<string, string> = {
    high: "Comfort first",
    balanced: "Balanced",
    low: "Style first",
  };

  const reverseOccasions: Record<string, string> = {
    night_out: "Night out",
    family_events: "Family events",
    religious_events: "Religious events",
  };

  const occasionLabels = Object.keys(o).filter((key) => o[key] === true);

  const avoidedItems = strings(p.avoidedItems).map(title);

  // Older profiles may not contain avoidedItems.
  if (!avoidedItems.length) {
    avoidedItems.push(
      ...strings(p.avoidedFits).map((value) =>
        value === "very tight" ? "Very fitted" :
        value === "skinny" ? "Skinny fits" : title(value),
      ),
      ...strings(p.avoidedColors)
        .filter((value) => value === "bright colors" || value === "bright colours")
        .map(() => "Bright colours"),
      ...strings(p.fabricAvoidances).map(title),
      ...strings(p.patternAvoidances).map(title),
    );
  }

  return {
    ...initial,
    preferredStyles: strings(p.preferredStyles).map(title),
    dressingPriorities: strings(p.dressingPriorities).map(title),
    avoidedItems,
    preferredFits: strings(p.preferredFits).map(title),
    avoidedFits: strings(p.avoidedFits).map((value) =>
      value === "very tight" ? "Very fitted" :
      value === "skinny" ? "Skinny fits" : title(value),
    ),
    preferredColors: strings(p.preferredColors).map(title),
    avoidedColors: strings(p.avoidedColors).map(title),
    shoePreferences: strings(p.shoePreferences).map(title),
    fabricPreferences: strings(p.fabricPreferences).map(title),
    fabricAvoidances: strings(p.fabricAvoidances).map(title),
    patternPreferences: strings(p.patternPreferences).map(title),
    patternAvoidances: strings(p.patternAvoidances).map(title),
    experimentingStyles: strings(e.styles).map(title),
    experimentingFits: strings(e.fits).map((value) =>
      value === "oversized" ? "Oversized fits" :
      value === "wide-leg" ? "Wide-leg trousers" : title(value),
    ),
    experimentingColors: strings(e.colors).map(title),
    experimentingPieces: strings(e.pieces).map(title),
    experimentingPatterns: strings(e.patterns).map(title),
    occasions: occasionLabels.map(
      (key) => reverseOccasions[key] ?? title(key),
    ),
    desiredGoals: strings(d.goals).map(title),
    desiredVibes: strings(d.vibes).map(title),
    styleDirections: strings(d.styleDirection).map(title),
    comfortPriority:
      reverseComfort[text(p.comfortPriority)] ??
      text(p.comfortPriority),
    workEnvironment:
      text(l.work) === "home" ? "Mostly at home" : title(text(l.work)),
    climate: l.climate ? `${title(text(l.climate))} climate` : "",
    activityLevel: title(text(l.activityLevel)),
    dailyEnvironment:
      l.dailyEnvironment === "mixed indoor and outdoor"
        ? "Indoor and outdoor"
        : title(text(l.dailyEnvironment)),
    fashionPriority: text(l.fashionPriority),
  };
}
