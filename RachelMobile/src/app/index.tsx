import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { SvgUri } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function WelcomeScreen() {
  return (
    <SafeAreaView
  className="flex-1 bg-[#FAF7F2]"
  edges={["top"]}
>
      {/* Bottom page background */}
      <View
        className="absolute left-0 right-0 bottom-0 overflow-hidden"
        style={{
          height: SCREEN_HEIGHT * 0.42,
        }}
      >
        <Image
          source={require("../../assets/images/backgrounds/Ivory_linen_with_blue_arcs-2.png")}
          className="absolute left-0 bottom-0"
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT * 0.75,
          }}
          resizeMode="stretch"
        />
      </View>

      {/* Header */}
      <View className="h-16 flex-row items-center justify-between px-7">
        <Text
          className="font-[DMSerifDisplay] text-[29px] leading-[33px] text-[#2B1B16]"
        >
          Styl Me
        </Text>

        <Pressable
        onPress={() => router.push("/login")}
          >
          <Text className="font-[Manrope] text-[15px] text-[#2B1B16]">
            Log in
          </Text>
        </Pressable>
      </View>

      {/* Hero */}
      <View className="w-full items-center -mt-2">
        <View
          className="overflow-hidden bg-[#E9DDCF]"
          style={{
            width: SCREEN_WIDTH * 0.54,
            height: SCREEN_HEIGHT * 0.48,
            borderTopLeftRadius: SCREEN_WIDTH * 0.27,
            borderTopRightRadius: SCREEN_WIDTH * 0.27,
          }}
        >
          {/* Studio */}
          <Image
            source={require("../../assets/images/backgrounds/Sunlit_Ivory_Arches_with_Olive_Tree.png")}
            className="absolute inset-0 h-full w-full"
            resizeMode="stretch"
          />

          {/* Woman */}
          <Image
            source={require("../../assets/images/backgrounds/Confident_woman_in_cream_and_denim-5.png")}
            className="absolute"
            style={{
              top: -5,
              right: -20,
              bottom: -30,
              left: -25,
              width: "auto",
              height: "auto",
              transform: [{ scale: 1.02 }],
            }}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 items-center px-6 pt-4">
        <Text
          className="mt-[14px] text-center font-[DMSerifDisplay] text-[32px] leading-[32px] text-[#2B1B16]"
          style={{
            transform: [{ scaleY: 1.12 }],
          }}
        >
          Your style,{"\n"}beautifully yours.
        </Text>

        <Text className="mt-[11px] text-center font-[Manrope] text-[12.5px] leading-[17px] text-[#65463A]">
          Discover what to wear from the wardrobe{"\n"}
          you already own.
        </Text>

        {/* Primary button */}
        <Pressable
          onPress={() => router.push("/signup")}
          className="mt-5 h-11 w-[82%] items-center justify-center rounded-full bg-[#3F5792]"
          style={({ pressed }) => ({
            opacity: pressed ? 0.85 : 1,
          })}
        >
          <Text className="font-[ManropeMedium] text-[13px] text-white">
            Get started
          </Text>
        </Pressable>

        {/* Google button */}
        <Pressable
          className="mt-2 h-11 w-[82%] flex-row items-center justify-center rounded-full border border-[#2B1B16]"
          style={({ pressed }) => ({
            opacity: pressed ? 0.85 : 1,
          })}
        >
          <SvgUri
            uri="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            width={18}
            height={18}
          />

          <Text className="ml-2 font-[Manrope] text-[12.5px] text-[#2B1B16]">
            Continue with Google
          </Text>
        </Pressable>

        {/* Legal */}
        <Text className="mb-1 mt-2 text-center font-[Manrope] text-[10px] leading-[15px] text-[#65463A]">
          By continuing, you agree to our{" "}
          <Text className="text-[#3F5792]">Terms</Text> and{" "}
          <Text className="text-[#3F5792]">Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}