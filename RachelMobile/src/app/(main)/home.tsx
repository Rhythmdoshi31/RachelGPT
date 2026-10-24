
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar, {
  type BottomNavTab,
} from "../../components/navigation/BottomNavBar";
import HomeHero from "../../components/home/homeHero";
import HomeQuickActions from "../../components/home/homeQuickActions";
import FreshFromCloset from "../../components/home/freshFromCloset";
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
        error instanceof Error ? error.message : "Please try again."
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
        break;
      case "upload":
        break;
      case "tryOn":
        break;
      case "stylist":
        break;
    }
  };

  const handleActionPress = (action: string) => {
    switch (action) {
      case "stylist":
        handleTabPress("stylist");
        break;
      case "closet":
        router.push("/closet");
        break;
      case "upload":
        handleTabPress("upload");
        break;
      case "tryOn":
        handleTabPress("tryOn");
        break;
      case "shuffle":
        // Connect to outfit generation later.
        break;
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#FAF7F2]"
      edges={["bottom", "left", "right"]}
    >
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 115 }}
      >
        <HomeHero />

        <HomeQuickActions onActionPress={handleActionPress} />

        <FreshFromCloset
          onSeeAll={() => router.push("/closet")}
        />

        {/* Temporary logout control */}
        <View className="items-center px-4 pt-5">
          <Pressable
            onPress={handleLogout}
            disabled={isLoggingOut}
            accessibilityRole="button"
            className="h-[44px] w-[160px] flex-row items-center justify-center rounded-full bg-[#0D3767]"
            style={{ opacity: isLoggingOut ? 0.7 : 1 }}
          >
            {isLoggingOut ? (
              <ActivityIndicator color="#FAF7F2" />
            ) : (
              <Text
                className="text-[14px] text-[#FAF7F2]"
                style={{ fontFamily: "Manrope" }}
              >
                Log out
              </Text>
            )}
          </Pressable>
        </View>
      </ScrollView>

      <BottomNavBar
        activeTab="home"
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}
