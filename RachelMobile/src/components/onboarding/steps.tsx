import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  const cardHeight = Math.max(
    140,
    Math.min(176, (height - 370) / 3)
  );
  const imageWidth = Math.round(Math.min(145, width * 0.35));

  return (
    <>
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
                    <Ionicons
                      name="person-outline"
                      size={27}
                      color="#B49482"
                    />
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
                  <Ionicons
                    name="checkmark"
                    size={19}
                    color="#FAF7F2"
                  />
                </View>
              )}
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );
}

export function Step2StylePreferences() {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <Text
        className="text-center text-[30px] text-[#2B1B16]"
        style={{ fontFamily: "DMSerifDisplay" }}
      >
        Your personal style
      </Text>
      <Text
        className="mt-3 text-center text-[15px] leading-[23px] text-[#64748B]"
        style={{ fontFamily: "Manrope" }}
      >
        Your style preferences will go here.
      </Text>
    </View>
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
