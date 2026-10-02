import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SvgUri } from "react-native-svg";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Overall linen background */}
      <View style={styles.pageBackgroundContainer}>
        <Image
          source={require("../../assets/images/backgrounds/Ivory_linen_with_blue_arcs-2.png")}
          style={styles.pageBackground}
          resizeMode="cover"
        />
      </View>

      <SafeAreaView style={styles.safeArea}>
        {/* Top navigation */}
        <View style={styles.header}>
          <Text style={styles.logo}>Styl Me</Text>

          <Pressable onPress={() => router.push("/login")} hitSlop={12}>
            <Text style={styles.login}>Log in</Text>
          </Pressable>
        </View>

        {/* Hero */}
        <View style={styles.heroContainer}>
          <View style={styles.heroImageContainer}>
            {/* Studio background */}
            <Image
              source={require("../../assets/images/backgrounds/Sunlit_Ivory_Arches_with_Olive_Tree.png")}
              style={styles.studioImage}
              resizeMode="stretch"
            />

            {/* Woman layered on top */}
            <Image
              source={require("../../assets/images/backgrounds/Confident_woman_in_cream_and_denim-5.png")}
              style={styles.womanImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Main copy */}
        <View style={styles.content}>
          <Text style={styles.heading}>
            Your wardrobe,{"\n"}styled around you.
          </Text>

          <Text style={styles.subtitle}>
            AI-powered outfit ideas, a smarter wardrobe{"\n"}
            and a more confident you.
          </Text>

          {/* Create account */}
          <Pressable
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.primaryButtonText}>Create an account</Text>
          </Pressable>

          {/* Google */}
          <Pressable style={styles.googleButton}>
            <SvgUri
              uri="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              width={18}
              height={18}
            />

            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </Pressable>

          {/* Legal */}
          <Text style={styles.legalText}>
            By continuing, you agree to our{" "}
            <Text style={styles.legalLink}>Terms</Text>
            {" & "}
            <Text style={styles.legalLink}>Privacy Policy</Text>.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F2",
  },

  safeArea: {
    flex: 1,
  },

  /*
   * Linen background
   *
   * Only occupies the lower ~42% of the screen.
   */
  pageBackgroundContainer: {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    height: SCREEN_HEIGHT * 0.42,

    overflow: "hidden",
  },

  pageBackground: {
    position: "absolute",

    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.75,

    left: 0,
    bottom: 0,

    /*
     * Rotate the linen artwork 180 degrees.
     */
    // transform: [
    //   {
    //     rotate: "180deg",
    //   },
    // ],
  },

  /*
   * Header
   */
  header: {
    height: 64,

    paddingHorizontal: 28,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontFamily: "DMSerifDisplay",
    fontSize: 29,
    lineHeight: 33,
    color: "#2B1B16",
  },

  login: {
    fontFamily: "Manrope",
    fontSize: 15,
    color: "#2B1B16",
  },

  /*
   * Hero
   */
  heroContainer: {
    width: "100%",
    alignItems: "center",

    marginTop: -8,
  },

  heroImageContainer: {
    width: SCREEN_WIDTH * 0.54,
    height: SCREEN_HEIGHT * 0.48,

    overflow: "hidden",

    borderTopLeftRadius: SCREEN_WIDTH * 0.27,
    borderTopRightRadius: SCREEN_WIDTH * 0.27,

    backgroundColor: "#E9DDCF",
  },

  /*
   * Studio background
   *
   * Fills the ENTIRE arch.
   *
   * Horizontal = compact
   * Vertical = stretched
   */
  studioImage: {
    position: "absolute",

    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    width: "100%",
    height: "100%",

    transform: [
      {
        scaleX: 1,
      },
      {
        scaleY: 1,
      },
    ],
  },

  /*
   * Woman
   *
   * KEEPING YOUR CURRENT SETTINGS
   */
  womanImage: {
    position: "absolute",

    top: -5,
    right: -20,
    bottom: -30,
    left: -25,

    width: "auto",
    height: "auto",

    transform: [
      {
        scale: 1.02,
      },
    ],
  },

  /*
   * Main content
   */
  content: {
    flex: 1,

    alignItems: "center",

    paddingHorizontal: 24,
    paddingTop: 16,
  },

  heading: {
    fontFamily: "DMSerifDisplay",
    fontSize: 32,
    lineHeight: 32,
    textAlign: "center",
    color: "#2B1B16",
    marginTop: 14,

    transform: [{ scaleY: 1.12 }],
  },

  subtitle: {
    marginTop: 11,
    fontFamily: "Manrope",
    fontSize: 12.5,
    lineHeight: 17,
    textAlign: "center",
    color: "#65463A",
  },

  /*
   * Create account
   */
  primaryButton: {
    width: "82%",
    height: 44,
    marginTop: 20,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F5792",
  },

  primaryButtonText: {
    fontFamily: "ManropeMedium",

    fontSize: 13,

    color: "#FFFFFF",
  },

  /*
   * Google
   */
  googleButton: {
    width: "82%",
    height: 44,
    marginTop: 8,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#2B1B16",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  googleLogo: {
    fontFamily: "ManropeSemiBold",

    fontSize: 20,

    color: "#4285F4",

    marginRight: 13,
  },

  googleButtonText: {
    fontFamily: "Manrope",
    fontSize: 12.5,
    color: "#2B1B16",
    marginLeft: 10,
  },

  /*
   * Legal
   */
  legalText: {
    marginTop: 10,
    marginBottom: 4,

    fontFamily: "Manrope",

    fontSize: 10,
    lineHeight: 15,

    textAlign: "center",

    color: "#65463A",
  },

  legalLink: {
    color: "#3F5792",
  },

  buttonPressed: {
    opacity: 0.85,
  },
});
