import { ImageBackground, View, useWindowDimensions } from "react-native";

const heroBackground = require("../../../assets/images/backgrounds/Sunlit_Ivory_Arches_with_Olive_Tree.png");

export default function HomeHero() {
  const { height } = useWindowDimensions();
  const heroHeight = height * 0.45;

  return (
    <View
      className="w-full overflow-hidden"
      style={{ height: heroHeight, marginTop: 0 }}
    >
      <ImageBackground
        source={heroBackground}
        resizeMode="stretch"
        className="flex-1"
        imageStyle={{
          width: "100%",
          height: "110%",
          top: "0%",
        }}
      />
    </View>
  );
}
