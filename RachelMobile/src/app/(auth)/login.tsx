import {
  Animated,
  Easing,
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";

import { getAuthErrorMessage } from "../../lib/authErrors";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const translateY = useRef(new Animated.Value(0)).current;

  // --------------------------------------------------
  // Keyboard animation
  // --------------------------------------------------

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        setKeyboardVisible(true);

        Animated.timing(translateY, {
          toValue: -event.endCoordinates.height + 18,
          duration: event.duration || 250,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      }
    );

    const hideSubscription = Keyboard.addListener(
      "keyboardWillHide",
      (event) => {
        setKeyboardVisible(false);

        Animated.timing(translateY, {
          toValue: 0,
          duration: event.duration || 250,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      }
    );

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [translateY]);

  // --------------------------------------------------
  // Validation
  // --------------------------------------------------

  const validate = () => {
    setSubmitted(true);

    if (email.trim() && password.length > 0) {
      return true;
    }

    return false;
  };

  // --------------------------------------------------
  // Login
  // --------------------------------------------------

  const handleLogin = async () => {
    if (!validate()) {
      return;
    }

    Keyboard.dismiss();

    setLoading(true);
    setAuthError("");

    try {
      const { error } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (error) {
        setAuthError(getAuthErrorMessage(error));
        return;
      }

      router.replace("/home");
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      setAuthError(getAuthErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // Validation messages
  // --------------------------------------------------

  const emailError =
    submitted && !email.trim()
      ? "Please enter your email."
      : "";

  const passwordError =
    submitted && !password
      ? "Please enter your password."
      : "";

  // --------------------------------------------------
  // UI
  // --------------------------------------------------

  return (
    <SafeAreaView
      className="flex-1 bg-[#FAF7F2]"
      edges={["top", "bottom"]}
    >
      <Pressable
        className="flex-1"
        onPress={Keyboard.dismiss}
      >
        {/* Background */}
        <Image
          source={require("../../../assets/images/backgrounds/Quiet_Luxury_Wardrobe_Corner-3.png")}
          className="absolute left-0 right-0 bottom-0"
          style={{ top: 56 }}
          resizeMode="cover"
        />

        {/* Navigation */}
        <View className="h-[56px] flex-row items-center justify-center">
          <Pressable
            onPress={() => router.back()}
            className="absolute left-[5px] h-[50px] w-[50px] items-center justify-center"
          >
            <Ionicons
              name="chevron-back"
              size={29}
              color="#65463A"
            />
          </Pressable>

          <Text
            className="text-[28px] leading-[32px] text-[#2B1B16]"
            style={{
              fontFamily: "DMSerifDisplay",
            }}
          >
            Styl Me
          </Text>
        </View>

        {/* Form */}
        <Animated.View
          className="flex-1"
          style={{
            transform: [{ translateY }],
          }}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-end",
              paddingHorizontal: 20,
              paddingBottom: 18,
            }}
          >
            <View className="w-full">
              {/* Title */}
              <Text
                className="mb-[12px] text-center text-[28px] leading-[32px] text-[#2B1B16]"
                style={{
                  fontFamily: "DMSerifDisplay",
                }}
              >
                Welcome back
              </Text>

              {/* Email */}
              <View className="mb-[7px]">
                <View className="h-[50px] flex-row items-center rounded-[14px] border border-[#B49482] bg-[#FAF7F2]/95 px-[15px]">
                  <Ionicons
                    name="mail-outline"
                    size={21}
                    color="#65463A"
                  />

                  <TextInput
                    value={email}
                    onChangeText={(value) => {
                      setEmail(value);
                      setAuthError("");
                    }}
                    placeholder="Email address"
                    placeholderTextColor="#8C766B"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    className="ml-[11px] flex-1 text-[14px] text-[#2B1B16]"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  />
                </View>

                {!!emailError && (
                  <Text
                    className="ml-[4px] mt-[3px] text-[10px] text-red-600"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  >
                    {emailError}
                  </Text>
                )}
              </View>

              {/* Password */}
              <View className="mb-[2px]">
                <View className="h-[50px] flex-row items-center rounded-[14px] border border-[#B49482] bg-[#FAF7F2]/95 px-[15px]">
                  <Ionicons
                    name="lock-closed-outline"
                    size={21}
                    color="#65463A"
                  />

                  <TextInput
                    value={password}
                    onChangeText={(value) => {
                      setPassword(value);
                      setAuthError("");
                    }}
                    placeholder="Password"
                    placeholderTextColor="#8C766B"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    className="ml-[11px] flex-1 text-[14px] text-[#2B1B16]"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  />

                  <Pressable
                    onPress={() =>
                      setShowPassword(
                        (previous) => !previous
                      )
                    }
                    hitSlop={10}
                  >
                    <Ionicons
                      name={
                        showPassword
                          ? "eye-off-outline"
                          : "eye-outline"
                      }
                      size={21}
                      color="#65463A"
                    />
                  </Pressable>
                </View>

                {!!passwordError && (
                  <Text
                    className="ml-[4px] mt-[3px] text-[10px] text-red-600"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  >
                    {passwordError}
                  </Text>
                )}
              </View>

              {/* Forgot password */}
              {!keyboardVisible && (
                <Pressable
                  className="mt-[6px] self-end"
                  onPress={() => {
                    // Forgot password flow will be added later.
                  }}
                >
                  <Text
                    className="text-[10.5px] text-[#3F5792]"
                    style={{
                      fontFamily: "ManropeSemiBold",
                    }}
                  >
                    Forgot password?
                  </Text>
                </Pressable>
              )}

              {/* Auth error */}
              {!!authError && (
                <Text
                  className="mt-[7px] text-center text-[10.5px] leading-[15px] text-red-600"
                  style={{
                    fontFamily: "Manrope",
                  }}
                >
                  {authError}
                </Text>
              )}

              {/* Login */}
              <Pressable
                onPress={handleLogin}
                disabled={loading}
                className="mt-[12px] h-[50px] w-full items-center justify-center rounded-[14px] bg-[#3F5792]"
                style={({ pressed }) => ({
                  opacity:
                    pressed || loading ? 0.85 : 1,
                })}
              >
                <Text
                  className="text-[13px] text-white"
                  style={{
                    fontFamily: "ManropeMedium",
                  }}
                >
                  {loading ? "Logging in..." : "Log in"}
                </Text>
              </Pressable>

              {/* Social login + signup */}
              {!keyboardVisible && (
                <>
                  {/* OR */}
                  <View className="my-[10px] flex-row items-center">
                    <View className="h-[1px] flex-1 bg-[#B49482]/50" />

                    <Text
                      className="mx-[10px] text-[10px] text-[#65463A]"
                      style={{
                        fontFamily: "Manrope",
                      }}
                    >
                      OR
                    </Text>

                    <View className="h-[1px] flex-1 bg-[#B49482]/50" />
                  </View>

                  {/* Apple */}
                  <Pressable
                    className="h-[50px] w-full flex-row items-center justify-center rounded-[14px] border border-[#2B1B16] bg-[#FAF7F2]/90"
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.85 : 1,
                    })}
                  >
                    <Ionicons
                      name="logo-apple"
                      size={18}
                      color="#2B1B16"
                    />

                    <Text
                      className="ml-[9px] text-[12.5px] text-[#2B1B16]"
                      style={{
                        fontFamily: "Manrope",
                      }}
                    >
                      Continue with Apple
                    </Text>
                  </Pressable>

                  {/* Google */}
                  <Pressable
                    className="mt-[8px] h-[50px] w-full flex-row items-center justify-center rounded-[14px] border border-[#2B1B16] bg-[#FAF7F2]/90"
                    style={({ pressed }) => ({
                      opacity: pressed ? 0.85 : 1,
                    })}
                  >
                    <SvgUri
                      uri="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      width={18}
                      height={18}
                    />

                    <Text
                      className="ml-[9px] text-[12.5px] text-[#2B1B16]"
                      style={{
                        fontFamily: "Manrope",
                      }}
                    >
                      Continue with Google
                    </Text>
                  </Pressable>

                  {/* Signup */}
                  <View className="mt-[11px] flex-row justify-center">
                    <Text
                      className="text-[11px] text-[#65463A]"
                      style={{
                        fontFamily: "Manrope",
                      }}
                    >
                      Don&apos;t have an account?{" "}
                    </Text>

                    <Pressable
                      onPress={() =>
                        router.push("/signup")
                      }
                    >
                      <Text
                        className="text-[11px] text-[#3F5792]"
                        style={{
                          fontFamily: "ManropeSemiBold",
                        }}
                      >
                        Create account
                      </Text>
                    </Pressable>
                  </View>
                </>
              )}
            </View>
          </ScrollView>
        </Animated.View>
      </Pressable>
    </SafeAreaView>
  );
}