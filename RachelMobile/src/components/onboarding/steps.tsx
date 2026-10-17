import { useState } from "react";

import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  Alert,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StepHeading from "./stepHeading";

export type Stylist = "Rachel" | "KJay" | "Mira";

type StepProps = {
  selectedStylist: Stylist;
  setSelectedStylist: (stylist: Stylist) => void;
};

const RACHEL_IMAGE = null;
const KJAY_IMAGE = null;
const MIRA_IMAGE = null;

const stylists: {
  id: Stylist;
  traits: string[];
  description: string;
  image: number | null;
}[] = [
  {
    id: "Rachel",
    traits: ["Warm", "Practical"],
    description:
      "Polished, reassuring advice that makes your own pieces work harder.",
    image: RACHEL_IMAGE,
  },
  {
    id: "KJay",
    traits: ["Expressive", "Fashion-forward"],
    description:
      "Playful, confident ideas when you want to try something bolder.",
    image: KJAY_IMAGE,
  },
  {
    id: "Mira",
    traits: ["Calm", "Refined"],
    description: "Thoughtful, understated styling with less chatter.",
    image: MIRA_IMAGE,
  },
];

export function Step1ChooseStylist({
  selectedStylist,
  setSelectedStylist,
}: StepProps) {
  const { height, width } = useWindowDimensions();

  const compact = height < 780;
  const cardHeight = Math.max(140, Math.min(176, (height - 370) / 3));
  const imageWidth = Math.round(Math.min(145, width * 0.35));

  return (
    <>
      <StepHeading
        title="Choose your stylist"
        subtitle="Same style intelligence. A voice that feels right to you."
      />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: 19,
          paddingTop: 4,
          paddingBottom: 12,
          gap: 12,
          flexGrow: 1,
          justifyContent: "space-evenly",
        }}
      >
        {stylists.map((stylist) => {
          const selected = selectedStylist === stylist.id;

          return (
            <Pressable
              key={stylist.id}
              onPress={() => setSelectedStylist(stylist.id)}
              accessibilityRole="radio"
              accessibilityState={{ checked: selected }}
              accessibilityLabel={`${stylist.id}, ${stylist.traits.join(", ")}`}
              className={`flex-row items-center rounded-[17px] border ${
                selected
                  ? "border-[#3F5792] bg-[#F4F7FB]"
                  : "border-[#E9DDCF] bg-[#FAF7F2]"
              }`}
              style={{
                height: cardHeight,
                padding: 12,
                borderWidth: selected ? 1.4 : 1,
              }}
            >
              <View
                className="overflow-hidden rounded-[12px] bg-[#E9DDCF]"
                style={{
                  width: imageWidth,
                  height: cardHeight - 26,
                }}
              >
                {stylist.image ? (
                  <Image
                    source={stylist.image}
                    className="h-full w-full"
                    resizeMode="cover"
                  />
                ) : (
                  <View className="flex-1 items-center justify-center">
                    <Ionicons name="person-outline" size={27} color="#B49482" />
                  </View>
                )}
              </View>

              <View className="ml-[14px] flex-1 justify-center pr-[2px]">
                <Text
                  numberOfLines={1}
                  className="text-[26px] leading-[32px] text-[#2B1B16]"
                  style={{ fontFamily: "DMSerifDisplay" }}
                >
                  {stylist.id}
                </Text>

                <View className="mt-[7px] flex-row flex-nowrap items-center">
                  {stylist.traits.map((trait, index) => (
                    <View key={trait} className="flex-row items-center">
                      {index > 0 && (
                        <Text className="mx-[5px] text-[11px] text-[#65463A]">
                          ·
                        </Text>
                      )}

                      <View className="rounded-full bg-[#E9DDCF]/70 px-[8px] py-[5px]">
                        <Text
                          className="text-[10px] text-[#2B1B16]"
                          style={{ fontFamily: "Manrope" }}
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          minimumFontScale={0.75}
                        >
                          {trait}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>

                <Text
                  className="mt-[9px] text-[12px] leading-[18px] text-[#64748B]"
                  style={{ fontFamily: "Manrope" }}
                  numberOfLines={compact ? 3 : 4}
                  adjustsFontSizeToFit
                  minimumFontScale={0.85}
                >
                  {stylist.description}
                </Text>
              </View>

              {selected && (
                <View className="absolute right-[10px] top-[10px] h-[25px] w-[25px] items-center justify-center rounded-full bg-[#0D3767]">
                  <Ionicons name="checkmark" size={19} color="#FAF7F2" />
                </View>
              )}
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );
}

// -------------STEP 2----------------

export type StyleQuestionnaireAnswers = {
  preferredStyles: string[];
  dressingPriorities: string[];
  avoidedItems: string[];
  preferredFits: string[];
  avoidedFits: string[];
  preferredColors: string[];
  avoidedColors: string[];
  shoePreferences: string[];
  fabricPreferences: string[];
  fabricAvoidances: string[];
  patternPreferences: string[];
  patternAvoidances: string[];
  experimentingStyles: string[];
  experimentingFits: string[];
  experimentingColors: string[];
  experimentingPieces: string[];
  experimentingPatterns: string[];
  occasions: string[];
  desiredGoals: string[];
  desiredVibes: string[];
  styleDirections: string[];
  comfortPriority: string;
  workEnvironment: string;
  socialFrequency: string;
  travelFrequency: string;
  climate: string;
  activityLevel: string;
  fashionPriority: string;
  dailyEnvironment: string;
  pinterestUrl: string;
  inspirationDescription: string;
  inspirationImageUri: string | null;
};

export const initialStyleAnswers: StyleQuestionnaireAnswers = {
  preferredStyles: [],
  dressingPriorities: [],
  avoidedItems: [],
  preferredFits: [],
  avoidedFits: [],
  preferredColors: [],
  avoidedColors: [],
  shoePreferences: [],
  fabricPreferences: [],
  fabricAvoidances: [],
  patternPreferences: [],
  patternAvoidances: [],
  experimentingStyles: [],
  experimentingFits: [],
  experimentingColors: [],
  experimentingPieces: [],
  experimentingPatterns: [],
  occasions: [],
  desiredGoals: [],
  desiredVibes: [],
  styleDirections: [],
  comfortPriority: "",
  workEnvironment: "",
  socialFrequency: "",
  travelFrequency: "",
  climate: "",
  activityLevel: "",
  fashionPriority: "",
  dailyEnvironment: "",
  pinterestUrl: "",
  inspirationDescription: "",
  inspirationImageUri: null,
};

type ChoiceSectionProps = {
  title: string;
  subtitle?: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  columns?: 2 | 3;
};

function ChoiceSection({
  title,
  subtitle = "Choose as many as you like.",
  options,
  selected,
  onToggle,
  columns = 3,
}: ChoiceSectionProps) {
  return (
    <View className="mb-[10px] rounded-[17px] border border-[#EFE3D8] bg-[#F9F4EE] px-[12px] py-[10px]">
      <Text
        className="text-[18px] leading-[24px] text-[#2B1B16]"
        style={{ fontFamily: "DMSerifDisplay" }}
      >
        {title}
      </Text>

      {!!subtitle && (
        <Text
          className="mt-[2px] mb-[8px] text-[12px] leading-[17px] text-[#71829B]"
          style={{ fontFamily: "Manrope" }}
        >
          {subtitle}
        </Text>
      )}

      <View className="flex-row flex-wrap" style={{ marginHorizontal: -3 }}>
        {options.map((option) => {
          const active = selected.includes(option);

          return (
            <View
              key={option}
              style={{
                width: `${100 / columns}%`,
                paddingHorizontal: 3,
                paddingBottom: 6,
              }}
            >
              <Pressable
                onPress={() => onToggle(option)}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: active }}
                className={`min-h-[33px] flex-row items-center justify-center rounded-full border px-[6px] py-[4px] ${
                  active
                    ? "border-[#0D3767] bg-[#0D3767]"
                    : "border-[#D6C9BD] bg-[#FAF7F2]"
                }`}
              >
                {active && (
                  <View className="mr-[4px] h-[17px] w-[17px] items-center justify-center rounded-full bg-[#FAF7F2]">
                    <Ionicons name="checkmark" size={12} color="#0D3767" />
                  </View>
                )}

                <Text
                  numberOfLines={2}
                  adjustsFontSizeToFit
                  minimumFontScale={0.75}
                  className={`shrink text-center text-[11px] leading-[13px] ${
                    active ? "text-[#FAF7F2]" : "text-[#173B69]"
                  }`}
                  style={{ fontFamily: "Manrope" }}
                >
                  {option}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

type TextQuestionSectionProps = {
  title: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  multiline?: boolean;
  keyboardType?: "default" | "url";
};

function TextQuestionSection({
  title,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  keyboardType = "default",
}: TextQuestionSectionProps) {
  return (
    <View className="mb-[8px] rounded-[17px] border border-[#EFE3D8] bg-[#F9F4EE] px-[12px] py-[10px]">
      <Text
        className="mb-[7px] text-[18px] leading-[24px] text-[#2B1B16]"
        style={{ fontFamily: "DMSerifDisplay" }}
      >
        {title}
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8994A5"
        keyboardType={keyboardType}
        autoCapitalize={keyboardType === "url" ? "none" : "sentences"}
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        className="rounded-[12px] border border-[#E5D9CE] bg-[#FAF7F2] px-[12px] py-[9px] text-[12px] text-[#2B1B16]"
        style={{
          fontFamily: "Manrope",
          minHeight: multiline ? 82 : 40,
        }}
      />
    </View>
  );
}

type Step2Props = {
  answers: StyleQuestionnaireAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<StyleQuestionnaireAnswers>>;
};

type InspirationRowProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  children?: React.ReactNode;
  accent?: string;
};

function InspirationRow({
  title,
  icon,
  onPress,
  children,
  accent = "#0D3767",
}: InspirationRowProps) {
  return (
    <View className="mb-[8px] overflow-hidden rounded-[13px] border border-[#E5D9CE] bg-[#FAF7F2]">
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        className="min-h-[56px] flex-row items-center px-[10px] py-[7px]"
      >
        <View className="mr-[12px] h-[42px] w-[42px] items-center justify-center rounded-full bg-[#F1E8DE]">
          <Ionicons name={icon} size={23} color={accent} />
        </View>

        <Text
          className="flex-1 text-[13px] text-[#173B69]"
          style={{ fontFamily: "Manrope" }}
        >
          {title}
        </Text>

        <Ionicons name="chevron-forward" size={21} color="#0D3767" />
      </Pressable>

      {children}
    </View>
  );
}

export function Step2StylePreferences({ answers, setAnswers }: Step2Props) {
  const [expanded, setExpanded] = useState<
    "pinterest" | "image" | "description" | null
  >(null);

  const updateMulti = (key: keyof StyleQuestionnaireAnswers, value: string) => {
    setAnswers((current) => {
      const existing = current[key];

      if (!Array.isArray(existing)) return current;

      const values = existing as string[];

      return {
        ...current,
        [key]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      };
    });
  };

  const updateSingle = (
    key: keyof StyleQuestionnaireAnswers,
    value: string,
  ) => {
    setAnswers((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const toggle = (key: keyof StyleQuestionnaireAnswers) => (value: string) =>
    updateMulti(key, value);

  const experimentOptions = [
    { label: "Layering", key: "experimentingStyles" },
    { label: "Old-money", key: "experimentingStyles" },
    { label: "Streetwear", key: "experimentingStyles" },
    { label: "Oversized fits", key: "experimentingFits" },
    { label: "Wide-leg trousers", key: "experimentingFits" },
    { label: "Blazers", key: "experimentingPieces" },
    { label: "Cardigans", key: "experimentingPieces" },
    { label: "Checks", key: "experimentingPatterns" },
    { label: "Plaid", key: "experimentingPatterns" },
    { label: "Olive", key: "experimentingColors" },
    { label: "Burgundy", key: "experimentingColors" },
  ] as const;

  const lifestyleOptions = [
    { label: "Office", key: "workEnvironment" },
    { label: "Mostly at home", key: "workEnvironment" },
    { label: "Frequent social plans", key: "socialFrequency" },
    { label: "Occasional travel", key: "travelFrequency" },
    { label: "Hot climate", key: "climate" },
    { label: "Cold climate", key: "climate" },
    { label: "Moderately active", key: "activityLevel" },
    { label: "Indoor and outdoor", key: "dailyEnvironment" },
  ] as const;

  return (
    <>
      <StepHeading
        title="Your style, your way"
        subtitle="Pick anything that feels like you. You can change this later."
      />

      {/* SCROLLABLE QUESTIONNAIRE */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingHorizontal: 19,
          paddingTop: 2,
          paddingBottom: 12,
        }}
      >
        <ChoiceSection
          title="What feels most like you?"
          options={[
            "Classic",
            "Polished",
            "Relaxed",
            "Minimal",
            "Tailored",
            "Creative",
            "Soft",
            "Bold",
            "Edgy",
            "Sporty",
            "Vintage-loving",
            "Trend-led",
            "Feminine",
            "Smart-casual",
            "Streetwear",
            "Old-money",
            "Bohemian",
            "Romantic",
          ]}
          selected={answers.preferredStyles}
          onToggle={toggle("preferredStyles")}
        />

        <ChoiceSection
          title="What matters most when getting dressed?"
          columns={2}
          options={[
            "Comfort first",
            "Feel confident",
            "Look put together",
            "Try something new",
            "Save time",
            "Wear what I own",
          ]}
          selected={answers.dressingPriorities}
          onToggle={toggle("dressingPriorities")}
        />

        <ChoiceSection
          title="What fits do you enjoy?"
          options={[
            "Relaxed",
            "Straight",
            "Tailored",
            "Oversized",
            "Wide-leg",
            "Slim",
            "Regular",
            "Loose",
            "Structured",
          ]}
          selected={answers.preferredFits}
          onToggle={toggle("preferredFits")}
        />

        <ChoiceSection
          title="Anything you usually avoid?"
          options={[
            "Very fitted",
            "Skinny fits",
            "Heels",
            "Bright colours",
            "High maintenance",
            "Uncomfortable shoes",
            "Rough fabrics",
            "Stiff fabrics",
            "Large prints",
            "Animal prints",
          ]}
          selected={answers.avoidedItems}
          onToggle={toggle("avoidedItems")}
        />

        <ChoiceSection
          title="Which colours do you gravitate towards?"
          options={[
            "Black",
            "White",
            "Navy",
            "Beige",
            "Brown",
            "Grey",
            "Olive",
            "Burgundy",
            "Pastels",
            "Earth tones",
            "Bright colours",
            "Monochrome",
          ]}
          selected={answers.preferredColors}
          onToggle={toggle("preferredColors")}
        />

        <ChoiceSection
          title="Which colours would you rather avoid?"
          options={[
            "Neon green",
            "Bright orange",
            "Neon colours",
            "Pastels",
            "Warm tones",
            "Cool tones",
          ]}
          selected={answers.avoidedColors}
          onToggle={toggle("avoidedColors")}
        />

        <ChoiceSection
          title="What do you like wearing on your feet?"
          options={[
            "Sneakers",
            "Loafers",
            "Chelsea boots",
            "Flats",
            "Sandals",
            "Heels",
            "Formal shoes",
            "Sports shoes",
          ]}
          selected={answers.shoePreferences}
          onToggle={toggle("shoePreferences")}
        />

        <ChoiceSection
          title="Which fabrics do you prefer?"
          options={[
            "Cotton",
            "Linen",
            "Denim",
            "Knit",
            "Wool",
            "Silk",
            "Soft fabrics",
            "Stretch fabrics",
          ]}
          selected={answers.fabricPreferences}
          onToggle={toggle("fabricPreferences")}
        />

        <ChoiceSection
          title="Which fabrics do you avoid?"
          options={[
            "Rough fabrics",
            "Stiff fabrics",
            "Scratchy wool",
            "Synthetic fabrics",
            "Heavy fabrics",
          ]}
          selected={answers.fabricAvoidances}
          onToggle={toggle("fabricAvoidances")}
        />

        <ChoiceSection
          title="What patterns do you like?"
          options={[
            "Solid",
            "Subtle patterns",
            "Stripes",
            "Checks",
            "Plaid",
            "Florals",
            "Geometric",
            "Polka dots",
          ]}
          selected={answers.patternPreferences}
          onToggle={toggle("patternPreferences")}
        />

        <ChoiceSection
          title="What patterns do you avoid?"
          options={[
            "Large prints",
            "Animal prints",
            "Bold graphics",
            "Florals",
            "Busy patterns",
          ]}
          selected={answers.patternAvoidances}
          onToggle={toggle("patternAvoidances")}
        />

        <ChoiceSection
          title="What would you like to experiment with?"
          options={experimentOptions.map((item) => item.label)}
          selected={[
            ...answers.experimentingStyles,
            ...answers.experimentingFits,
            ...answers.experimentingPieces,
            ...answers.experimentingPatterns,
            ...answers.experimentingColors,
          ]}
          onToggle={(value) => {
            const item = experimentOptions.find(
              (option) => option.label === value,
            );

            if (item) updateMulti(item.key, value);
          }}
        />

        <ChoiceSection
          title="Where would you like to wear your outfits?"
          options={[
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
          ]}
          selected={answers.occasions}
          onToggle={toggle("occasions")}
        />

        <ChoiceSection
          title="How important is comfort?"
          subtitle="Choose the option that best describes you."
          columns={3}
          options={["Comfort first", "Balanced", "Style first"]}
          selected={answers.comfortPriority ? [answers.comfortPriority] : []}
          onToggle={(value) =>
            updateSingle(
              "comfortPriority",
              answers.comfortPriority === value ? "" : value,
            )
          }
        />

        <ChoiceSection
          title="What are you hoping to achieve?"
          options={[
            "Look more put together",
            "Look more confident",
            "Develop a personal style",
            "Build a versatile wardrobe",
          ]}
          columns={2}
          selected={answers.desiredGoals}
          onToggle={toggle("desiredGoals")}
        />

        <ChoiceSection
          title="How would you like your outfits to feel?"
          options={[
            "Clean",
            "Confident",
            "Effortless",
            "Polished",
            "Sophisticated",
          ]}
          selected={answers.desiredVibes}
          onToggle={toggle("desiredVibes")}
        />

        <ChoiceSection
          title="Which best describes your lifestyle?"
          options={lifestyleOptions.map((item) => item.label)}
          selected={[
            answers.workEnvironment,
            answers.socialFrequency,
            answers.travelFrequency,
            answers.climate,
            answers.activityLevel,
            answers.dailyEnvironment,
          ].filter(Boolean)}
          onToggle={(value) => {
            const item = lifestyleOptions.find(
              (option) => option.label === value,
            );

            if (item) {
              const current = answers[item.key];
              updateSingle(item.key, current === value ? "" : value);
            }
          }}
        />

        {/* ONE INSPIRATION SECTION */}
        <View className="mb-[10px] rounded-[19px] border border-[#EFE3D8] bg-[#F9F4EE] px-[12px] py-[10px]">
          <Text
            className="text-[18px] leading-[24px] text-[#2B1B16]"
            style={{ fontFamily: "DMSerifDisplay" }}
          >
            Share your inspiration
          </Text>

          <Text
            className="mt-[2px] mb-[10px] text-[12px] leading-[17px] text-[#71829B]"
            style={{ fontFamily: "Manrope" }}
          >
            Optional — it helps us get to know your style.
          </Text>

          <InspirationRow
            title="Add a Pinterest link"
            icon="link-outline"
            accent="#BD1E2D"
            onPress={() =>
              setExpanded(expanded === "pinterest" ? null : "pinterest")
            }
          >
            {expanded === "pinterest" && (
              <View className="px-[10px] pb-[10px]">
                <TextInput
                  value={answers.pinterestUrl}
                  onChangeText={(value) => updateSingle("pinterestUrl", value)}
                  placeholder="Paste your Pinterest link"
                  placeholderTextColor="#8994A5"
                  keyboardType="url"
                  autoCapitalize="none"
                  className="rounded-[11px] border border-[#E5D9CE] bg-white px-[12px] py-[10px] text-[12px] text-[#2B1B16]"
                  style={{ fontFamily: "Manrope" }}
                />
              </View>
            )}
          </InspirationRow>

          <InspirationRow
            title="Upload a look you love"
            icon="image-outline"
            onPress={() => setExpanded(expanded === "image" ? null : "image")}
          >
            {expanded === "image" && (
              <View className="px-[10px] pb-[10px]">
                <Text
                  className="mb-[8px] text-[12px] text-[#71829B]"
                  style={{ fontFamily: "Manrope" }}
                >
                  Add a photo that inspires your personal style.
                </Text>

                <Pressable
                  onPress={() =>
                    Alert.alert(
                      "Image upload",
                      "Image selection will be connected to your existing upload flow.",
                    )
                  }
                  className="flex-row items-center justify-center rounded-[11px] border border-[#D6C9BD] px-[12px] py-[11px]"
                >
                  <Ionicons name="add" size={18} color="#0D3767" />
                  <Text
                    className="ml-[5px] text-[12px] text-[#173B69]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Choose an image
                  </Text>
                </Pressable>
              </View>
            )}
          </InspirationRow>

          <InspirationRow
            title="Describe it in your own words"
            icon="chatbubble-ellipses-outline"
            onPress={() =>
              setExpanded(expanded === "description" ? null : "description")
            }
          >
            {expanded === "description" && (
              <View className="px-[10px] pb-[10px]">
                <TextInput
                  value={answers.inspirationDescription}
                  onChangeText={(value) =>
                    updateSingle("inspirationDescription", value)
                  }
                  placeholder="Describe the looks, colours, fits, or styles you love..."
                  placeholderTextColor="#8994A5"
                  multiline
                  textAlignVertical="top"
                  className="rounded-[11px] border border-[#E5D9CE] bg-white px-[12px] py-[10px] text-[12px] text-[#2B1B16]"
                  style={{
                    fontFamily: "Manrope",
                    minHeight: 82,
                  }}
                />
              </View>
            )}
          </InspirationRow>
        </View>

        <Text
          className="mb-[6px] mt-[1px] text-center text-[11px] leading-[16px] text-[#71829B]"
          style={{ fontFamily: "Manrope" }}
        >
          We'll learn more through your choices and chats.
        </Text>
      </ScrollView>
    </>
  );
}

export function Step3WardrobeSetup() {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <Text
        className="text-center text-[30px] text-[#2B1B16]"
        style={{ fontFamily: "DMSerifDisplay" }}
      >
        Your wardrobe
      </Text>
      <Text
        className="mt-3 text-center text-[15px] leading-[23px] text-[#64748B]"
        style={{ fontFamily: "Manrope" }}
      >
        Wardrobe setup will go here.
      </Text>
    </View>
  );
}

export function Step4Review() {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <Text
        className="text-center text-[30px] text-[#2B1B16]"
        style={{ fontFamily: "DMSerifDisplay" }}
      >
        Almost ready
      </Text>
      <Text
        className="mt-3 text-center text-[15px] leading-[23px] text-[#64748B]"
        style={{ fontFamily: "Manrope" }}
      >
        Review your choices before finishing setup.
      </Text>
    </View>
  );
}
