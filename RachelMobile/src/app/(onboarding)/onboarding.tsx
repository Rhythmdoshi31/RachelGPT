import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

// ADD YOUR PORTRAIT IMAGE PATHS HERE LATER
const RACHEL_IMAGE = null;
const KJAY_IMAGE = null;

type Stylist = "Rachel" | "KJay";

const stylists = [
  {
    id: "Rachel" as const,
    traits: ["Warm", "Practical"],
    description:
      "Polished, reassuring advice that makes your own pieces work harder.",
  },
  {
    id: "KJay" as const,
    traits: ["Expressive", "Fashion-forward"],
    description:
      "Playful, confident ideas when you want to try something bolder.",
  },
];

export default function Onboarding() {
  const [selectedStylist, setSelectedStylist] =
    useState<Stylist>("Rachel");

  const handleContinue = () => {
    // TODO: Save selectedStylist to the user's profile.
    console.log("Selected stylist:", selectedStylist);

    // Connect to the next onboarding screen later.
    // router.push("/next-step");
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#FAF7F2]"
      edges={["top", "bottom"]}
    >
      {/* HEADER */}
      <View className="h-[64px] flex-row items-center justify-center">
        <Pressable
          onPress={() => router.back()}
          className="absolute left-[8px] h-[44px] w-[44px] items-center justify-center"
          accessibilityLabel="Go back"
        >
          <Ionicons
            name="chevron-back"
            size={29}
            color="#2B1B16"
          />
        </Pressable>

        <View className="items-center">
          <Text
            className="text-[16px] leading-[22px] text-[#64748B]"
            style={{ fontFamily: "Manrope" }}
          >
            Step 1 of 4
          </Text>

          <View className="mt-[7px] flex-row gap-[9px]">
            {[0, 1, 2, 3].map((step) => (
              <View
                key={step}
                className={`h-[9px] w-[9px] rounded-full ${
                  step === 0
                    ? "bg-[#3F5792]"
                    : "bg-[#E9DDCF]"
                }`}
              />
            ))}
          </View>
        </View>
      </View>

      {/* TITLE */}
      <View className="px-[20px] pb-[22px] pt-[22px]">
        <Text
          className="text-center text-[36px] leading-[44px] text-[#2B1B16]"
          style={{ fontFamily: "DMSerifDisplay" }}
        >
          Choose your stylist
        </Text>

        <Text
          className="mt-[12px] text-center text-[16px] leading-[25px] text-[#64748B]"
          style={{ fontFamily: "Manrope" }}
        >
          Same style intelligence. A voice that feels right to you.
        </Text>
      </View>

      {/* STYLIST CARDS */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 2,
          paddingBottom: 14,
          gap: 12,
        }}
      >
        {stylists.map((stylist) => {
          const selected =
            selectedStylist === stylist.id;

          const portrait =
            stylist.id === "Rachel"
              ? RACHEL_IMAGE
              : KJAY_IMAGE;

          return (
            <Pressable
              key={stylist.id}
              onPress={() =>
                setSelectedStylist(stylist.id)
              }
              accessibilityRole="radio"
              accessibilityState={{ checked: selected }}
              accessibilityLabel={`${stylist.id}, ${stylist.traits.join(", ")}`}
              className={`min-h-[220px] flex-row items-center rounded-[18px] border bg-[#FAF7F2] p-[14px] ${
                selected
                  ? "border-[#3F5792]"
                  : "border-[#E9DDCF]"
              }`}
              style={{
                borderWidth: selected ? 1.5 : 1,
              }}
            >
              {/* PORTRAIT PLACEHOLDER */}
              <View className="h-[190px] w-[44%] overflow-hidden rounded-[14px] bg-[#E9DDCF]">
                {portrait ? (
                  <Image
                    source={portrait}
                    className="h-full w-full"
                    resizeMode="cover"
                  />
                ) : (
                  <View className="flex-1 items-center justify-center">
                    <Ionicons
                      name="image-outline"
                      size={30}
                      color="#B49482"
                    />
                    <Text
                      className="mt-[7px] text-[11px] text-[#65463A]"
                      style={{ fontFamily: "Manrope" }}
                    >
                      Portrait
                    </Text>
                  </View>
                )}
              </View>

              {/* STYLIST DETAILS */}
              <View className="ml-[18px] flex-1 justify-center pr-[2px]">
                <Text
                  className="text-[28px] leading-[35px] text-[#2B1B16]"
                  style={{ fontFamily: "DMSerifDisplay" }}
                >
                  {stylist.id}
                </Text>

                <View className="mt-[10px] flex-row flex-wrap items-center gap-x-[6px] gap-y-[6px]">
                  {stylist.traits.map((trait, index) => (
                    <View
                      key={trait}
                      className="flex-row items-center"
                    >
                      {index > 0 && (
                        <Text className="mr-[6px] text-[12px] text-[#65463A]">
                          ·
                        </Text>
                      )}

                      <View className="rounded-full bg-[#E9DDCF]/70 px-[10px] py-[7px]">
                        <Text
                          className="text-[11px] text-[#2B1B16]"
                          style={{ fontFamily: "Manrope" }}
                        >
                          {trait}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>

                <Text
                  className="mt-[12px] text-[14px] leading-[21px] text-[#64748B]"
                  style={{ fontFamily: "Manrope" }}
                >
                  {stylist.description}
                </Text>
              </View>

              {/* SELECTED CHECKMARK */}
              {selected && (
                <View className="absolute right-[12px] top-[12px] h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3F5792]">
                  <Ionicons
                    name="checkmark"
                    size={22}
                    color="#FAF7F2"
                  />
                </View>
              )}
            </Pressable>
          );
        })}
      </ScrollView>

      {/* FOOTER */}
      <View className="px-[22px] pb-[12px] pt-[10px]">
        <Text
          className="mb-[18px] text-center text-[12px] leading-[19px] text-[#64748B]"
          style={{ fontFamily: "Manrope" }}
        >
          You can change your stylist anytime in Settings.
        </Text>

        <Pressable
          onPress={handleContinue}
          className="h-[56px] w-full flex-row items-center justify-center rounded-full bg-[#3F5792]"
          style={({ pressed }) => ({
            opacity: pressed ? 0.88 : 1,
          })}
        >
          <Text
            className="text-[17px] text-[#FAF7F2]"
            style={{ fontFamily: "DMSerifDisplay" }}
          >
            Continue with {selectedStylist}
          </Text>

          <Ionicons
            name="arrow-forward"
            size={24}
            color="#FAF7F2"
            style={{ marginLeft: 10 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}