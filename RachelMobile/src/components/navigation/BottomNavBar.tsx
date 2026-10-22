import { Pressable, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type BottomNavTab =
  | "home"
  | "forYou"
  | "upload"
  | "tryOn"
  | "stylist";

type BottomNavBarProps = {
  activeTab: BottomNavTab;
  onTabPress: (tab: BottomNavTab) => void;
};

const NAV_ITEMS: {
  key: BottomNavTab;
  label: string;
}[] = [
  { key: "home", label: "Home" },
  { key: "forYou", label: "For You" },
  { key: "upload", label: "Upload" },
  { key: "tryOn", label: "Try On" },
  { key: "stylist", label: "Stylist" },
];

export default function BottomNavBar({
  activeTab,
  onTabPress,
}: BottomNavBarProps) {
  const insets = useSafeAreaInsets();

  const renderIcon = (tab: BottomNavTab, active: boolean) => {
    const color = active ? "#0D3767" : "#65463A";

    switch (tab) {
      case "home":
        return (
          <Ionicons
            name={active ? "home" : "home-outline"}
            size={25}
            color={color}
          />
        );

      case "forYou":
        return (
          <Ionicons
            name={active ? "heart" : "heart-outline"}
            size={25}
            color={color}
          />
        );

      case "upload":
        return (
          <View className="h-[66px] w-[66px] items-center justify-center rounded-full border-[3px] border-[#FAF7F2] bg-[#0D3767]">
            <Ionicons name="add" size={47} color="#FFFFFF" />

            <View className="absolute bottom-[10px] right-[9px]">
              <Ionicons
                name="image-outline"
                size={14}
                color="#FFFFFF"
              />
            </View>
          </View>
        );

      case "tryOn":
        return (
          <MaterialCommunityIcons
            name="hanger"
            size={27}
            color={color}
          />
        );

      case "stylist":
        return (
          <MaterialCommunityIcons
            name="tshirt-crew-outline"
            size={26}
            color={color}
          />
        );
    }
  };

  return (
    <View
      className="absolute bottom-0 left-0 right-0 rounded-t-[26px] border-t border-[#E9DDCF] bg-[#FAF7F2]"
      style={{
        paddingBottom: Math.max(insets.bottom, 2),
        shadowColor: "#2B1B16",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 12,
      }}
    >
      <View className="h-[56px] flex-row items-end justify-around px-1">
        {NAV_ITEMS.map((item) => {
          const active = activeTab === item.key;
          const isUpload = item.key === "upload";

          return (
            <Pressable
              key={item.key}
              onPress={() => onTabPress(item.key)}
              accessibilityRole="button"
              accessibilityLabel={item.label}
              accessibilityState={{ selected: active }}
              className="h-[53px] flex-1 items-center justify-end"
              style={({ pressed }) => ({
                opacity: pressed ? 0.75 : 1,
              })}
            >
              {isUpload ? (
                <View className="h-[57px] w-full items-center justify-end">
                  <View className="absolute -top-[24px]">
                    {renderIcon(item.key, active)}
                  </View>

                  <Text
                    className="text-center text-[10px] text-[#65463A]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    {item.label}
                  </Text>
                </View>
              ) : (
                <>
                  <View className="h-[29px] items-center justify-center">
                    {renderIcon(item.key, active)}
                  </View>

                  <Text
                    className="mt-0 text-center text-[10px]"
                    style={{
                      fontFamily: "Manrope",
                      color: active ? "#0D3767" : "#65463A",
                      fontWeight: active ? "600" : "400",
                    }}
                  >
                    {item.label}
                  </Text>
                </>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}