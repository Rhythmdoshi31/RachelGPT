import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { router } from "expo-router";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView
      className="flex-1 bg-[#FAF7F2]"
      edges={["top", "bottom"]}
    >
      {/* Background image - position unchanged */}
      <Image
        source={require("../../assets/images/backgrounds/Quiet_Luxury_Wardrobe_Corner-3.png")}
        className="absolute left-0 right-0 bottom-0"
        style={{
          top: 56,
        }}
        resizeMode="cover"
      />

      {/* Navigation */}
      <View className="h-[56px] flex-row items-center justify-center px-6">
        <Pressable
          onPress={() => router.back()}
          className="absolute left-5 h-10 w-10 items-center justify-center"
          hitSlop={10}
        >
          <Ionicons
            name="chevron-back"
            size={29}
            color="#65463A"
          />
        </Pressable>

        <Text className="font-[DMSerifDisplay] text-[28px] leading-[32px] text-[#2B1B16]">
          Styl Me
        </Text>
      </View>

      {/* Main content */}
      <View className="flex-1 items-center justify-end px-[20px] pb-[18px]">
        {/* Intro */}
        <View className="items-center">
          <Text className="font-[Manrope] text-[14px] text-[#65463A]">
            Welcome back
          </Text>

          <Text className="mt-[13px] text-center font-[DMSerifDisplay] text-[30px] leading-[34px] text-[#2B1B16]">
            Welcome back.
          </Text>

          <Text className="mt-[7px] text-center font-[Manrope] text-[15px] leading-[20px] text-[#65463A]">
            Let’s get you back to your style.
          </Text>
        </View>

        {/* Form */}
        <View className="mt-[25px] w-full max-w-[340px]">
          {/* Email */}
          <View className="h-[50px] flex-row items-center rounded-[14px] border border-[#DCCFC4] bg-[#FAF7F2]/75 px-4">
            <Ionicons
              name="mail-outline"
              size={21}
              color="#8A7163"
            />

            <TextInput
              placeholder="Email address"
              placeholderTextColor="#806C61"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              className="ml-4 flex-1 font-[Manrope] text-[15px] text-[#2B1B16]"
            />
          </View>

          {/* Password */}
          <View className="mt-[6px] h-[50px] flex-row items-center rounded-[14px] border border-[#DCCFC4] bg-[#FAF7F2]/75 px-4">
            <Ionicons
              name="lock-closed-outline"
              size={21}
              color="#8A7163"
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#806C61"
              secureTextEntry={!showPassword}
              className="ml-4 flex-1 font-[Manrope] text-[15px] text-[#2B1B16]"
            />

            <Pressable
              onPress={() => setShowPassword((value) => !value)}
              hitSlop={10}
            >
              <Ionicons
                name={
                  showPassword
                    ? "eye-off-outline"
                    : "eye-outline"
                }
                size={21}
                color="#8A7163"
              />
            </Pressable>
          </View>

          {/* Forgot password */}
          <View className="mt-[6px] items-end">
            <Pressable hitSlop={8}>
              <Text className="font-[ManropeMedium] text-[12px] text-[#3F5792]">
                Forgot password?
              </Text>
            </Pressable>
          </View>

          {/* Login */}
          <Pressable
            className="mt-[8px] h-[50px] items-center justify-center rounded-[14px] bg-[#3F5792]"
            style={({ pressed }) => ({
              opacity: pressed ? 0.85 : 1,
            })}
          >
            <Text className="font-[DMSerifDisplay] text-[20px] text-white">
              Log in
            </Text>
          </Pressable>

          {/* OR */}
          <View className="mt-[10px] flex-row items-center">
            <View className="h-px flex-1 bg-[#D8CCC2]" />

            <Text className="mx-[14px] font-[Manrope] text-[13px] text-[#806C61]">
              OR
            </Text>

            <View className="h-px flex-1 bg-[#D8CCC2]" />
          </View>

          {/* Apple */}
          <Pressable
            className="mt-[8px] h-[50px] flex-row items-center justify-center rounded-[14px] border border-[#DCCFC4] bg-[#FAF7F2]/80"
            style={({ pressed }) => ({
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <Ionicons
              name="logo-apple"
              size={21}
              color="#000000"
            />

            <Text className="ml-[18px] font-[Manrope] text-[15px] text-[#2B1B16]">
              Continue with Apple
            </Text>
          </Pressable>

          {/* Google */}
          <Pressable
            className="mt-[6px] h-[50px] flex-row items-center justify-center rounded-[14px] border border-[#DCCFC4] bg-[#FAF7F2]/80"
            style={({ pressed }) => ({
              opacity: pressed ? 0.8 : 1,
            })}
          >
            <SvgUri
              uri="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              width={21}
              height={21}
            />

            <Text className="ml-[18px] font-[Manrope] text-[15px] text-[#2B1B16]">
              Continue with Google
            </Text>
          </Pressable>

          {/* Create account */}
          <View className="mt-[9px] flex-row items-center justify-center">
            <Text className="font-[Manrope] text-[12px] text-[#806C61]">
              Don&apos;t have an account?{" "}
            </Text>

            <Pressable
              onPress={() => router.push("/signup")}
              hitSlop={8}
            >
              <Text className="font-[ManropeMedium] text-[12px] text-[#3F5792]">
                Create account
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}