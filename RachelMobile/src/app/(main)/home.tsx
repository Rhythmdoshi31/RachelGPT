import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";

export default function Home() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      router.replace("/welcome");
    } catch (error) {
      console.error("Logout failed:", error);

      Alert.alert(
        "Logout failed",
        error instanceof Error ? error.message : "Please try again.",
      );
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#FAF7F2]">
      <View className="items-center">
        <Text
          className="text-[32px] text-[#2B1B16]"
          style={{ fontFamily: "DMSerifDisplay" }}
        >
          Home
        </Text>

        <Pressable
          onPress={handleLogout}
          disabled={isLoggingOut}
          accessibilityRole="button"
          className="mt-8 h-[48px] w-[180px] flex-row items-center justify-center rounded-full bg-[#0D3767]"
          style={{ opacity: isLoggingOut ? 0.7 : 1 }}
        >
          {isLoggingOut ? (
            <ActivityIndicator color="#FAF7F2" />
          ) : (
            <Text
              className="text-[15px] text-[#FAF7F2]"
              style={{ fontFamily: "Manrope" }}
            >
              Log out
            </Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
}