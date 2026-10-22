
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FreshFromClosetProps = {
  onSeeAll?: () => void;
};

export default function FreshFromCloset({
  onSeeAll,
}: FreshFromClosetProps) {
  return (
    <View className="mt-[12px] px-[14px]">
      <View className="mb-[6px] flex-row items-center justify-between">
        <Text
          className="text-[23px] leading-[29px] text-[#2B1B16]"
          style={{ fontFamily: "DMSerifDisplay" }}
        >
          Fresh from your closet
        </Text>

        <Pressable
          onPress={onSeeAll}
          className="flex-row items-center"
          hitSlop={8}
        >
          <Text
            className="text-[13px] text-[#3F5792]"
            style={{ fontFamily: "ManropeMedium" }}
          >
            See all
          </Text>
          <Ionicons
            name="chevron-forward"
            size={16}
            color="#3F5792"
          />
        </Pressable>
      </View>

      <View className="h-[150px] w-full items-center justify-center overflow-hidden rounded-[18px] bg-[#F0EAE3]">
        <Ionicons
          name="image-outline"
          size={32}
          color="#B49482"
        />
        <Text
          className="mt-1 text-[11px] text-[#65463A]"
          style={{ fontFamily: "Manrope" }}
        >
          Outfit inspiration will appear here
        </Text>
      </View>
    </View>
  );
}
