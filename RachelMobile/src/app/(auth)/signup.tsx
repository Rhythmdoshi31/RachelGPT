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

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

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

    if (
      firstName.trim() &&
      email.trim() &&
      password.length >= 6 &&
      agreed
    ) {
      return true;
    }

    return false;
  };

  // --------------------------------------------------
  // Signup
  // --------------------------------------------------

  const handleSignup = async () => {
    Keyboard.dismiss();

    if (!validate()) {
      return;
    }

    setLoading(true);
    setAuthError("");

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            first_name: firstName.trim(),
          },
        },
      });

      if (error) {
        setAuthError(getAuthErrorMessage(error));
        return;
      }

      if (data.user) {
        router.replace("/onboarding");
      }
    } catch (error) {
      console.error("SIGNUP ERROR:", error);

      setAuthError(getAuthErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // Validation messages
  // --------------------------------------------------

  const firstNameError =
    submitted && !firstName.trim()
      ? "Please enter your first name."
      : "";

  const emailError =
    submitted && !email.trim()
      ? "Please enter your email."
      : "";

  const passwordError =
    submitted && password.length < 6
      ? "Password must be at least 6 characters."
      : "";

  const termsError =
    submitted && !agreed
      ? "Please agree to the terms."
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
                Create your account
              </Text>

              {/* First Name */}
              <View className="mb-[7px]">
                <View className="h-[50px] flex-row items-center rounded-[14px] border border-[#B49482] bg-[#FAF7F2]/95 px-[15px]">
                  <Ionicons
                    name="person-outline"
                    size={21}
                    color="#65463A"
                  />

                  <TextInput
                    value={firstName}
                    onChangeText={(value) => {
                      setFirstName(value);
                      setAuthError("");
                    }}
                    placeholder="First name"
                    placeholderTextColor="#8C766B"
                    autoCapitalize="words"
                    autoCorrect={false}
                    className="ml-[11px] flex-1 text-[14px] text-[#2B1B16]"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  />
                </View>

                {!!firstNameError && (
                  <Text
                    className="ml-[4px] mt-[3px] text-[10px] text-red-600"
                    style={{
                      fontFamily: "Manrope",
                    }}
                  >
                    {firstNameError}
                  </Text>
                )}
              </View>

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
              <View className="mb-[7px]">
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

              {/* Terms */}
              <Pressable
                onPress={() =>
                  setAgreed((previous) => !previous)
                }
                className="mt-[2px] flex-row items-center"
              >
                <View
                  className={`h-[19px] w-[19px] items-center justify-center rounded-[5px] border ${
                    agreed
                      ? "border-[#3F5792] bg-[#3F5792]"
                      : "border-[#65463A] bg-[#FAF7F2]"
                  }`}
                >
                  {agreed && (
                    <Ionicons
                      name="checkmark"
                      size={14}
                      color="#FFFFFF"
                    />
                  )}
                </View>

                <Text
                  className="ml-[8px] flex-1 text-[10.5px] leading-[15px] text-[#65463A]"
                  style={{
                    fontFamily: "Manrope",
                  }}
                >
                  I agree to the Terms of Service and Privacy Policy.
                </Text>
              </Pressable>

              {!!termsError && (
                <Text
                  className="ml-[4px] mt-[3px] text-[10px] text-red-600"
                  style={{
                    fontFamily: "Manrope",
                  }}
                >
                  {termsError}
                </Text>
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

              {/* Create Account */}
              <Pressable
                onPress={handleSignup}
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
                  {loading
                    ? "Creating account..."
                    : "Create account"}
                </Text>
              </Pressable>

              {/* Social auth + login link */}
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

                  {/* Login */}
                  <View className="mt-[11px] flex-row justify-center">
                    <Text
                      className="text-[11px] text-[#65463A]"
                      style={{
                        fontFamily: "Manrope",
                      }}
                    >
                      Already have an account?{" "}
                    </Text>

                    <Pressable
                      onPress={() =>
                        router.push("/login")
                      }
                    >
                      <Text
                        className="text-[11px] text-[#3F5792]"
                        style={{
                          fontFamily: "ManropeSemiBold",
                        }}
                      >
                        Log in
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