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
type Gender = "female" | "male";

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
      className="mb-[7px] text-[12px] text-[#2B1B16]"
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
      className="items-center"
      style={{ width: 94 }}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
    >
      <View
        className="w-full items-center justify-center overflow-hidden rounded-[13px] bg-[#E9DDCF]"
        style={{
          aspectRatio: 1,
          borderWidth: selected ? 2 : 1,
          borderColor: selected ? NAVY : "#E5D9CE",
        }}
      >
        <View className="h-full w-full items-center justify-center bg-[#E7DCD0]">
          <Ionicons name="person-outline" size={42} color="#9C8878" />
        </View>

        {selected && (
          <View className="absolute right-[6px] top-[6px] h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0D3767]">
            <Ionicons name="checkmark" size={14} color="#FFFFFF" />
          </View>
        )}
      </View>

      <Text
        numberOfLines={1}
        className="mt-[4px] w-full text-center text-[11px] text-[#40536C]"
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

  const compact = screenHeight < 750;
  const horizontalPadding = screenWidth < 390 ? 20 : 24;

  // Studio height stays the same as the previous version.
  const studioHeight = compact ? 245 : 280;

  const [section, setSection] = useState<Section>("Face");
  const [avatarGender, setAvatarGender] = useState<Gender>("female");
  const [face, setFace] = useState("Soft");
  const [skinTone, setSkinTone] = useState(1);
  const [hair, setHair] = useState("Waves");
  const [body, setBody] = useState("Lean");

  const avatar = avatarGender === "female" ? femaleAvatar : maleAvatar;

  return (
    <View className="flex-1 bg-[#FAF7F2]">
      {/* Fixed studio with more wall visible and less floor. */}
      <View
        className="w-full overflow-hidden"
        style={{ height: studioHeight }}
      >
        <ImageBackground
          source={studioBackground}
          resizeMode="cover"
          className="absolute inset-0"
          imageStyle={{
            width: "100%",
            height: "100%",
            transform: [{ scale: 1.15 }],
          }}
        />

        {/* Slightly smaller model with space around the head and feet. */}
        <View className="absolute inset-0 overflow-hidden">
          <Image
            source={avatar}
            resizeMode="contain"
            style={{
              position: "absolute",
              top: "4%",
              left: "9%",
              width: "82%",
              height: "92%",
            }}
          />
        </View>

        <View className="absolute right-[16px] top-[10px] flex-row gap-[6px]">
          {(["female", "male"] as const).map((gender) => {
            const selected = avatarGender === gender;

            return (
              <Pressable
                key={gender}
                onPress={() => setAvatarGender(gender)}
                className="rounded-full border px-[12px] py-[6px]"
                style={{
                  backgroundColor: selected ? NAVY : "#FAF7F2E8",
                  borderColor: selected ? NAVY : "#D6C9BD",
                }}
                accessibilityRole="button"
                accessibilityState={{ selected }}
              >
                <Text
                  className="text-[10px]"
                  style={{
                    color: selected ? "#FFFFFF" : NAVY,
                    fontFamily: "Manrope",
                    fontWeight: "600",
                  }}
                >
                  {gender === "female" ? "Female" : "Male"}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Independently scrollable customization panel. */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingHorizontal: horizontalPadding,
          paddingTop: 17,
          paddingBottom: 10,
        }}
      >
        <Text
          className="mb-[5px] text-center text-[24px] leading-[29px] text-[#2B1B16]"
          style={{ fontFamily: "DMSerifDisplay" }}
        >
          Make it feel like you
        </Text>

        {/* Face / Hair / Body tabs */}
        <View className="h-[35px] flex-row rounded-full border border-[#E5D9CE] bg-[#F7F1EA] p-[3px]">
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
                accessibilityRole="button"
                accessibilityState={{ selected }}
              >
                <Text
                  className="text-[11px]"
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
            <View className="mt-[9px]">
              <SectionLabel>Skin tone</SectionLabel>

              <View className="flex-row items-center justify-between px-[2px]">
                {SKIN_TONES.map((tone, index) => {
                  const selected = skinTone === index;

                  return (
                    <Pressable
                      key={tone}
                      onPress={() => setSkinTone(index)}
                      className="items-center justify-center rounded-full"
                      style={{
                        width: 35,
                        height: 35,
                        borderWidth: selected ? 2 : 1,
                        borderColor: selected ? NAVY : "transparent",
                      }}
                      accessibilityRole="button"
                      accessibilityLabel={`Skin tone ${index + 1}`}
                      accessibilityState={{ selected }}
                    >
                      <View
                        className="h-[29px] w-[29px] rounded-full"
                        style={{ backgroundColor: tone }}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </View>

            <View className="mt-[10px]">
              <SectionLabel>Face shape</SectionLabel>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 8,
                  paddingRight: 4,
                  paddingBottom: 2,
                }}
              >
                {FACE_OPTIONS.map((item) => (
                  <OptionTile
                    key={item}
                    label={item}
                    selected={face === item}
                    onPress={() => setFace(item)}
                  />
                ))}
              </ScrollView>
            </View>

            <Pressable
              onPress={() => {}}
              className="mt-[9px] min-h-[53px] flex-row items-center rounded-[13px] border border-[#E9DDCF] px-[10px]"
              accessibilityRole="button"
              accessibilityLabel="More face details, coming soon"
            >
              <View className="mr-[9px] h-[35px] w-[35px] items-center justify-center rounded-full bg-[#F7F1EA]">
                <Ionicons name="options-outline" size={21} color={NAVY} />
              </View>

              <View className="flex-1">
                <Text
                  className="text-[12px] text-[#173B69]"
                  style={{ fontFamily: "Manrope", fontWeight: "600" }}
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

              <Ionicons name="chevron-forward" size={19} color={NAVY} />
            </Pressable>
          </>
        )}

        {section === "Hair" && (
          <View className="mt-[9px]">
            <SectionLabel>Hairstyle</SectionLabel>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 8,
                paddingRight: 4,
                paddingBottom: 2,
              }}
            >
              {HAIR_OPTIONS.map((item) => (
                <OptionTile
                  key={item}
                  label={item}
                  selected={hair === item}
                  onPress={() => setHair(item)}
                />
              ))}
            </ScrollView>
          </View>
        )}

        {section === "Body" && (
          <View className="mt-[9px]">
            <SectionLabel>Body type</SectionLabel>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 8,
                paddingRight: 4,
                paddingBottom: 2,
              }}
            >
              {BODY_OPTIONS.map((item) => (
                <OptionTile
                  key={item}
                  label={item}
                  selected={body === item}
                  onPress={() => setBody(item)}
                />
              ))}
            </ScrollView>
          </View>
        )}

        <Text
          className="mt-[8px] text-center text-[10px] leading-[14px] text-[#64748B]"
          style={{ fontFamily: "Manrope" }}
        >
          You can update your Style Mirror anytime.
        </Text>
      </ScrollView>
    </View>
  );
}