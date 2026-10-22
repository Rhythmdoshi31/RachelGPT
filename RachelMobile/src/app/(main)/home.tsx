import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar, {
  type BottomNavTab,
} from "../../components/navigation/BottomNavBar";
import HomeHero from "../../components/home/homeHero";
import { supabase } from "../../lib/supabase";

export default function Home() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

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

  const handleTabPress = (tab: BottomNavTab) => {
    switch (tab) {
      case "home":
        break;

      case "forYou":
        // Connect when the For You screen is created.
        break;

      case "upload":
        // Connect when the Upload screen is created.
        break;

      case "tryOn":
        // Connect when the Try On screen is created.
        break;

      case "stylist":
        // Connect when the Stylist screen is created.
        break;
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#FAF7F2]"
      edges={["bottom", "left", "right"]}
    >
      <View className="flex-1 items-center pb-[110px]">
        
        <HomeHero />

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

      <BottomNavBar
        activeTab="home"
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}