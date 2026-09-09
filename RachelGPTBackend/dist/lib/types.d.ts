export interface WardrobeAttributes {
    colors: string[];
    pattern?: string;
    material?: string;
    fit?: string;
    styles?: string[];
    formality?: string;
    seasons?: string[];
    occasions?: string[];
    sleeve?: string;
    neckline?: string;
    length?: string;
    visualFeatures?: string[];
    description?: string;
}
export interface StylePreferences {
    preferredColors?: string[];
    avoidedColors?: string[];
    preferredFits?: string[];
    avoidedFits?: string[];
    preferredStyles?: string[];
    dislikedStyles?: string[];
    shoePreferences?: string[];
    avoidedShoes?: string[];
    comfortPriority?: "low" | "medium" | "high";
    preferredSilhouettes?: string[];
    preferredPatterns?: string[];
}
export interface ExperimentingWith {
    styles?: string[];
    colors?: string[];
    silhouettes?: string[];
    categories?: string[];
}
export interface DesiredAppearance {
    impressions?: string[];
    avoid?: string[];
}
export interface LifestyleProfile {
    occupation?: string;
    environments?: string[];
    activities?: string[];
    typicalDressCodes?: string[];
}
export interface ConversationState {
    occasion?: string;
    location?: string;
    weather?: string;
    desiredImpression?: string[];
    constraints?: string[];
    excludedItems?: string[];
    requestedItems?: string[];
    currentOutfitId?: string;
}
export interface OutfitMetadata {
    overallStyle?: string[];
    colorPalette?: string[];
    occasion?: string;
    reasoning?: string;
    alternatives?: string[];
}
export interface InspirationAnalysis {
    overallStyle?: string[];
    colors?: string[];
    occasion?: string;
    dressCode?: string;
    aesthetic?: string[];
    description?: string;
}
export interface InspirationItemAttributes {
    category: string;
    subcategory?: string;
    colors?: string[];
    pattern?: string;
    material?: string;
    fit?: string;
    style?: string[];
    formality?: string;
}
export type PreferenceSource = "EXPLICIT" | "REJECTION" | "SELECTION" | "WEAR" | "CONVERSATION";
export interface PreferenceEventData {
    preference: string;
    value: unknown;
    sentiment?: "positive" | "negative" | "neutral";
    source?: PreferenceSource;
    confidence?: number;
}
export interface ShoppingFilters {
    category?: string;
    colors?: string[];
    sizes?: string[];
    brands?: string[];
    budget?: {
        min?: number;
        max?: number;
        currency?: string;
    };
    occasions?: string[];
    styles?: string[];
}
export interface PersonaConfiguration {
    personality: string[];
    stylingPhilosophy?: string[];
    trendiness?: string;
    riskLevel?: string;
    tone?: string[];
    rules?: string[];
}
export interface OutfitRequest {
    occasion?: string;
    desiredImpression?: string[];
    constraints?: string[];
    preferredItems?: string[];
    excludedItems?: string[];
    weather?: string;
    location?: string;
    numberOfOutfits?: number;
}
