import { SafeAreaView, Text } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#FAF7F2]">
      <Text
        className="text-[32px] text-[#2B1B16]"
        style={{ fontFamily: "DMSerifDisplay" }}
      >
        Homepage
      </Text>
    </SafeAreaView>
  );
}