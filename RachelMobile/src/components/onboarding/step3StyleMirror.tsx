
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const studioBackground = require("../../../assets/images/backgrounds/Sunlit_ivory_studio_with_olive_tree.png");
const femaleAvatar = require("../../../assets/images/backgrounds/avatars/avatar1.png");
const maleAvatar = require("../../../assets/images/backgrounds/avatars/avatar2.png");

type Section = "Face" | "Hair" | "Body";

const SKIN_TONES = [
  "#F4D8C1",
  "#DDBA9E",
  "#BD9271",
  "#AD7956",
  "#88583D",
];

const FACE_OPTIONS = ["Soft", "Defined", "Balanced", "Angular", "Oval"];
const HAIR_OPTIONS = ["Waves", "Straight", "Curly", "Bob", "Long"];
const BODY_OPTIONS = ["Petite", "Lean", "Athletic", "Curvy", "Full"];

const NAVY = "#0D3767";
const MUTED = "#64748B";

function SectionLabel({ children }: { children: string }) {
  return (
    <Text
      className="mb-[5px] text-[13px] text-[#2B1B16]"
      style={{ fontFamily: "Manrope", fontWeight: "500" }}
    >
      {children}
    </Text>
  );
}

function OptionTile({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center"
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
    >
      <View
        className="w-full items-center justify-center overflow-hidden rounded-[11px] bg-[#E9DDCF]"
        style={{
          height: 48,
          borderWidth: selected ? 2 : 1,
          borderColor: selected ? NAVY : "#E5D9CE",
        }}
      >
        <View className="h-full w-full items-center justify-center bg-[#E7DCD0]">
          <Ionicons name="person-outline" size={22} color="#9C8878" />
        </View>
      </View>

      <Text
        numberOfLines={1}
        className="mt-[3px] text-center text-[10px] text-[#40536C]"
        style={{
          fontFamily: "Manrope",
          fontWeight: selected ? "600" : "400",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function Step3StyleMirror() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();
  const compact = screenHeight < 850;
  const horizontalPadding = screenWidth < 390 ? 20 : 24;

  const [section, setSection] = useState<Section>("Face");
  const [avatarGender, setAvatarGender] = useState<"female" | "male">("female");
  const [face, setFace] = useState("Soft");
  const [skinTone, setSkinTone] = useState(2);
  const [hair, setHair] = useState("Waves");
  const [body, setBody] = useState("Lean");

  const avatar = avatarGender === "female" ? femaleAvatar : maleAvatar;

  return (
    <View className="flex-1 bg-[#FAF7F2]">
      <ImageBackground
        source={studioBackground}
        resizeMode="cover"
        className="absolute left-0 right-0 top-0"
        style={{
          height: compact ? 290 : 330,
        }}
        imageStyle={{
          // Crop more from the bottom while keeping the top composition visible.
          transform: [{ scaleY: 1.08 }],
        }}
      />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 8 }}
      >
        {/* Avatar studio: compressed vertically and cropped at the bottom */}
        <View
          className="w-full overflow-hidden"
          style={{ height: compact ? 225 : 260 }}
        >
          <Image
            source={avatar}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          <View className="absolute right-[18px] top-[12px] flex-row gap-[6px]">
            {(["female", "male"] as const).map((gender) => {
              const selected = avatarGender === gender;

              return (
                <Pressable
                  key={gender}
                  onPress={() => setAvatarGender(gender)}
                  className="rounded-full border px-[10px] py-[5px]"
                  style={{
                    backgroundColor: selected ? NAVY : "#FAF7F2E8",
                    borderColor: selected ? NAVY : "#D6C9BD",
                  }}
                >
                  <Text
                    className="text-[10px]"
                    style={{
                      color: selected ? "#FFFFFF" : NAVY,
                      fontFamily: "Manrope",
                      fontWeight: "500",
                    }}
                  >
                    {gender === "female" ? "Female" : "Male"}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={{ paddingHorizontal: horizontalPadding }}>
          <Text
            className="mb-[6px] mt-[2px] text-center text-[24px] leading-[30px] text-[#2B1B16]"
            style={{ fontFamily: "DMSerifDisplay" }}
          >
            Make it feel like you
          </Text>

          {/* Face / Hair / Body selector — reduced vertical spacing */}
          <View className="h-[40px] flex-row rounded-full border border-[#E5D9CE] bg-[#F7F1EA] p-[3px]">
            {(["Face", "Hair", "Body"] as const).map((item) => {
              const selected = section === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => setSection(item)}
                  className="flex-1 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: selected ? NAVY : "transparent",
                  }}
                >
                  <Text
                    className="text-[12px]"
                    style={{
                      color: selected ? "#FFFFFF" : MUTED,
                      fontFamily: "Manrope",
                      fontWeight: selected ? "600" : "400",
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {section === "Face" && (
            <>
              {/* Skin tone — tighter spacing */}
              <View className="mt-[9px]">
                <SectionLabel>Skin tone</SectionLabel>

                <View className="flex-row items-center justify-around px-[8px]">
                  {SKIN_TONES.map((tone, index) => {
                    const selected = skinTone === index;

                    return (
                      <Pressable
                        key={tone}
                        onPress={() => setSkinTone(index)}
                        className="items-center justify-center rounded-full"
                        style={{
                          width: 36,
                          height: 36,
                          borderWidth: selected ? 2 : 0,
                          borderColor: NAVY,
                        }}
                        accessibilityRole="button"
                        accessibilityLabel={`Skin tone ${index + 1}`}
                        accessibilityState={{ selected }}
                      >
                        <View
                          className="h-[30px] w-[30px] rounded-full"
                          style={{ backgroundColor: tone }}
                        />
                      </Pressable>
                    );
                  })}
                </View>
              </View>

              <View className="mt-[8px]">
                <SectionLabel>Face shape</SectionLabel>

                <View className="flex-row gap-[6px]">
                  {FACE_OPTIONS.map((item) => (
                    <OptionTile
                      key={item}
                      label={item}
                      selected={face === item}
                      onPress={() => setFace(item)}
                    />
                  ))}
                </View>
              </View>

              {/* Optional details */}
              <Pressable
                onPress={() => {}}
                className="mt-[11px] min-h-[54px] flex-row items-center rounded-[15px] border border-[#E9DDCF] px-[12px]"
                accessibilityRole="button"
                accessibilityLabel="More face details, coming soon"
              >
                <View className="mr-[10px] h-[36px] w-[36px] items-center justify-center rounded-full bg-[#F7F1EA]">
                  <Ionicons name="options-outline" size={22} color={NAVY} />
                </View>

                <View className="flex-1">
                  <Text
                    className="text-[12px] text-[#173B69]"
                    style={{ fontFamily: "Manrope", fontWeight: "500" }}
                  >
                    More face details
                  </Text>
                  <Text
                    className="mt-[1px] text-[10px] text-[#64748B]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Coming soon
                  </Text>
                </View>

                <Ionicons name="chevron-forward" size={20} color={NAVY} />
              </Pressable>
            </>
          )}

          {section === "Hair" && (
            <View className="mt-[9px]">
              <SectionLabel>Hairstyle</SectionLabel>
              <View className="flex-row flex-wrap gap-x-[6px] gap-y-[9px]">
                {HAIR_OPTIONS.map((item) => (
                  <View key={item} style={{ width: "18.8%" }}>
                    <OptionTile
                      label={item}
                      selected={hair === item}
                      onPress={() => setHair(item)}
                    />
                  </View>
                ))}
              </View>
            </View>
          )}

          {section === "Body" && (
            <View className="mt-[9px]">
              <SectionLabel>Body type</SectionLabel>
              <View className="flex-row flex-wrap gap-x-[6px] gap-y-[9px]">
                {BODY_OPTIONS.map((item) => (
                  <View key={item} style={{ width: "18.8%" }}>
                    <OptionTile
                      label={item}
                      selected={body === item}
                      onPress={() => setBody(item)}
                    />
                  </View>
                ))}
              </View>
            </View>
          )}

          <Text
            className="mb-[3px] mt-[12px] text-center text-[11px] leading-[15px] text-[#64748B]"
            style={{ fontFamily: "Manrope" }}
          >
            You can update your Style Mirror anytime.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
