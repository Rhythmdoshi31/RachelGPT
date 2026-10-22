import { Pressable, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type ActionItem = {
  title: string;
  subtitle: string;
  icon: string;
  type: "ion" | "material";
  onPress: () => void;
};

type HomeQuickActionsProps = {
  onActionPress: (action: string) => void;
};

export default function HomeQuickActions({
  onActionPress,
}: HomeQuickActionsProps) {
  const actions: ActionItem[] = [
    {
      title: "Ask your stylist",
      subtitle: "Get personal style advice",
      icon: "shirt-outline",
      type: "ion",
      onPress: () => onActionPress("stylist"),
    },
    {
      title: "Browse my closet",
      subtitle: "See and style your items",
      icon: "wardrobe-outline",
      type: "material",
      onPress: () => onActionPress("closet"),
    },
    {
      title: "Add an item",
      subtitle: "Keep your closet up to date",
      icon: "add-circle-outline",
      type: "ion",
      onPress: () => onActionPress("upload"),
    },
    {
      title: "Try on a look",
      subtitle: "See it on your avatar",
      icon: "hanger",
      type: "material",
      onPress: () => onActionPress("tryOn"),
    },
    {
      title: "Shuffle my closet",
      subtitle: "A fresh look from what you own",
      icon: "shuffle-outline",
      type: "ion",
      onPress: () => onActionPress("shuffle"),
    },
  ];

  const renderAction = (item: ActionItem, fullWidth = false) => (
    <Pressable
      key={item.title}
      onPress={item.onPress}
      className={`flex-row items-center rounded-[12px] bg-[#F2F1EF] px-[8px] ${
        fullWidth ? "h-[48px] w-full" : "h-[54px] flex-1"
      }`}
      style={{ gap: 4 }}
    >
      <View className="w-[28px] items-center justify-center">
        {item.type === "ion" ? (
          <Ionicons
            name={item.icon as React.ComponentProps<typeof Ionicons>["name"]}
            size={27}
            color="#65463A"
          />
        ) : (
          <MaterialCommunityIcons
            name={
              item.icon as React.ComponentProps<
                typeof MaterialCommunityIcons
              >["name"]
            }
            size={29}
            color="#65463A"
          />
        )}
      </View>

      <View className="min-w-0 flex-1 px-[5px]">
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.82}
          className="text-[13px] leading-[17px] text-[#2B1B16]"
          style={{ fontFamily: "DMSerifDisplay" }}
        >
          {item.title}
        </Text>

        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.78}
          className="text-[9px] leading-[12px] text-[#64748B]"
          style={{ fontFamily: "Manrope" }}
        >
          {item.subtitle}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={15} color="#B49482" />
    </Pressable>
  );

  return (
    <View className="px-[14px] pt-[8px]">
      <View className="flex-row gap-[7px]">
        {renderAction(actions[0])}
        {renderAction(actions[1])}
      </View>

      <View className="mt-[7px] flex-row gap-[7px]">
        {renderAction(actions[2])}
        {renderAction(actions[3])}
      </View>

      <View className="mt-[7px]">{renderAction(actions[4], true)}</View>
    </View>
  );
}
