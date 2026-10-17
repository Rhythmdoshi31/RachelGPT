import { Text, View } from "react-native";

type StepHeadingProps = {
  title: string;
  subtitle: string;
};

export default function StepHeading({
  title,
  subtitle,
}: StepHeadingProps) {
  return (
    <View className="px-[24px] pb-[12px] pt-[10px]">
      <Text
        numberOfLines={2}
        adjustsFontSizeToFit
        minimumFontScale={0.8}
        className="text-center text-[27px] leading-[29px] text-[#2B1B16]"
        style={{ fontFamily: "DMSerifDisplay" }}
      >
        {title}
      </Text>

      <Text
        numberOfLines={3}
        className="mt-[4px] text-center text-[12px] leading-[18px] text-[#71829B]"
        style={{ fontFamily: "Manrope" }}
      >
        {subtitle}
      </Text>
    </View>
  );
}
