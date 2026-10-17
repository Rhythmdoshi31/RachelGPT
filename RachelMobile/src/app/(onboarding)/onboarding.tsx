import { useState } from "react";
import {
  Image,
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";

const RACHEL_IMAGE = null;
const KJAY_IMAGE = null;
const MIRA_IMAGE = null;

type Stylist = "Rachel" | "KJay" | "Mira";

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

async function handleLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    Alert.alert("Logout failed", error.message);
    return;
  }

  router.replace("/welcome");
}

export default function Onboarding() {
  const [selectedStylist, setSelectedStylist] = useState<Stylist>("Rachel");

  const { height, width } = useWindowDimensions();

  // Adapt card dimensions to the available phone screen.
  const compact = height < 780;
  const cardHeight = Math.max(140, Math.min(176, (height - 370) / 3));

  const imageWidth = Math.round(Math.min(145, width * 0.35));

  const handleContinue = () => {
    // Persistence and navigation to step 2 will be connected next.
    console.log("Selected stylist:", selectedStylist);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FAF7F2]" edges={["top", "bottom"]}>
      {/* COMPACT HEADER */}
      <View className="h-[49px] flex-row items-center justify-center">
        <Pressable
          onPress={() => router.back()}
          className="absolute left-[12px] h-[36px] w-[36px] items-center justify-center"
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Ionicons name="chevron-back" size={25} color="#2B1B16" />
        </Pressable>

        <View className="items-center">
          <Text
            className="text-[14px] leading-[19px] text-[#64748B]"
            style={{ fontFamily: "Manrope" }}
          >
            Step 1 of 4
          </Text>

          <View className="mt-[5px] flex-row gap-[8px]">
            {[0, 1, 2, 3].map((step) => (
              <View
                key={step}
                className={`h-[8px] w-[8px] rounded-full ${
                  step === 0 ? "bg-[#3F5792]" : "bg-[#E9DDCF]"
                }`}
              />
            ))}
          </View>
        </View>
      </View>

      {/* TITLE AND SUBTITLE */}
      <View className="px-[20px] pb-[16px] pt-[12px]">
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.8}
          className="text-center text-[34px] leading-[43px] text-[#2B1B16]"
          style={{ fontFamily: "DMSerifDisplay" }}
        >
          Choose your stylist
        </Text>

        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.78}
          className="mt-[8px] text-center text-[15px] leading-[22px] text-[#64748B]"
          style={{ fontFamily: "Manrope" }}
        >
          Same style intelligence. A voice that feels right to you.
        </Text>
      </View>

      {/* STYLIST CARDS */}
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
              className={`flex-row items-center rounded-[17px] border bg-[#FAF7F2] ${
                selected ? "border-[#3F5792] bg-[#F4F7FB]" : "border-[#E9DDCF]"
              }`}
              style={{
                height: cardHeight,
                padding: 12,
                borderWidth: selected ? 1.4 : 1,
              }}
            >
              {/* PORTRAIT */}
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

              {/* STYLIST DETAILS */}
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

              {/* SELECTED CHECKMARK */}
              {selected && (
                <View className="absolute right-[10px] top-[10px] h-[25px] w-[25px] items-center justify-center rounded-full bg-[#0D3767]">
                  <Ionicons name="checkmark" size={19} color="#FAF7F2" />
                </View>
              )}
            </Pressable>
          );
        })}
      </ScrollView>

      {/* FOOTER */}
      <View className="px-[22px] pb-[8px] pt-[7px]">
        <Text
          className="mb-[14px] text-center text-[11px] leading-[17px] text-[#64748B]"
          style={{ fontFamily: "Manrope" }}
        >
          You can change your stylist anytime in Settings.
        </Text>

        <Pressable
          onPress={handleContinue}
          accessibilityRole="button"
          className="h-[52px] w-full flex-row items-center justify-center rounded-full bg-[#0D3767]"
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
            size={22}
            color="#FAF7F2"
            style={{ marginLeft: 9 }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
