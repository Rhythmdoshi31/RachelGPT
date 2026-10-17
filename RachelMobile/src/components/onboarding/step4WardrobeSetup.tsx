import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import StepHeading from "./stepHeading";

const wardrobeBackground = require("../../../assets/images/backgrounds/Sunlit_ivory_studio_with_olive_tree.png");

type WardrobePhoto = ImagePicker.ImagePickerAsset;

const MAX_PHOTOS = 10;

const STARTER_ITEMS = [
  { label: "A top", icon: "shirt-outline" as const },
  { label: "A bottom", icon: "body-outline" as const },
  { label: "A layer", icon: "shirt-outline" as const },
  { label: "Shoes", icon: "footsteps-outline" as const },
  { label: "Something\nyou love", icon: "heart-outline" as const },
];

export default function Step4WardrobeSetup() {
  const { height } = useWindowDimensions();
  const compact = height < 850;

  const [photos, setPhotos] = useState<WardrobePhoto[]>([]);
  const [isPicking, setIsPicking] = useState(false);

  const addPhotos = (newPhotos: WardrobePhoto[]) => {
    setPhotos((current) => {
      const unique = [...current];

      for (const photo of newPhotos) {
        if (
          !unique.some((existing) => existing.uri === photo.uri) &&
          unique.length < MAX_PHOTOS
        ) {
          unique.push(photo);
        }
      }

      if (newPhotos.length > MAX_PHOTOS - current.length) {
        Alert.alert(
          "Photo limit reached",
          "You can add up to 10 photos.",
        );
      }

      return unique;
    });
  };

  const chooseFromGallery = async () => {
    if (photos.length >= MAX_PHOTOS || isPicking) return;

    try {
      setIsPicking(true);

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: true,
        selectionLimit: MAX_PHOTOS - photos.length,
        allowsEditing: false,
        quality: 0.85,
      });

      if (!result.canceled) {
        addPhotos(result.assets);
      }
    } catch (error) {
      console.error("Gallery picker error:", error);
      Alert.alert("Unable to open gallery", "Please try again.");
    } finally {
      setIsPicking(false);
    }
  };

  const takePhoto = async () => {
    if (photos.length >= MAX_PHOTOS || isPicking) return;

    try {
      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Camera permission needed",
          "Allow camera access in Settings to photograph your wardrobe.",
        );
        return;
      }

      setIsPicking(true);

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images"],
        allowsEditing: false,
        quality: 0.85,
      });

      if (!result.canceled) {
        addPhotos(result.assets);
      }
    } catch (error) {
      console.error("Camera error:", error);
      Alert.alert("Unable to open camera", "Please try again.");
    } finally {
      setIsPicking(false);
    }
  };

  const removePhoto = (uri: string) => {
    setPhotos((current) =>
      current.filter((photo) => photo.uri !== uri),
    );
  };

  return (
    <View className="flex-1 bg-[#FAF7F2]">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 18,
          paddingTop: compact ? 2 : 6,
          paddingBottom: 8,
        }}
      >
        <StepHeading
          title="Start with the pieces you reach for"
          subtitle="Add 5–10 favourites, frequently worn pieces, or things you want help styling."
        />

        {/* Compact photo preview with the blurred studio background. */}
        <View
          className="overflow-hidden rounded-[18px] border border-[#E9DDCF]"
          style={{ height: compact ? 190 : 220 }}
        >
          <ImageBackground
            source={wardrobeBackground}
            resizeMode="cover"
            blurRadius={12}
            className="flex-1"
            imageStyle={{ opacity: 0.7 }}
          >
            <View className="flex-1 bg-[#FAF7F2]/35 p-2">
              {photos.length === 0 ? (
                <Pressable
                  onPress={chooseFromGallery}
                  className="flex-1 items-center justify-center"
                >
                  <View className="h-12 w-12 items-center justify-center rounded-full bg-[#FAF7F2]/90">
                    <Ionicons
                      name="images-outline"
                      size={25}
                      color="#65463A"
                    />
                  </View>

                  <Text
                    className="mt-2 text-center text-[17px] text-[#2B1B16]"
                    style={{ fontFamily: "DMSerifDisplay" }}
                  >
                    Your wardrobe starts here
                  </Text>

                  <Text
                    className="mt-1 px-5 text-center text-[11px] text-[#65463A]"
                    style={{ fontFamily: "Manrope" }}
                  >
                    Choose photos of your favourite pieces
                  </Text>
                </Pressable>
              ) : (
                <>
                  <View className="mb-2 flex-row items-center justify-between">
                    <Text
                      className="text-[14px] text-[#2B1B16]"
                      style={{ fontFamily: "DMSerifDisplay" }}
                    >
                      Your selected pieces
                    </Text>

                    <View className="rounded-full bg-[#FAF7F2]/95 px-2.5 py-1">
                      <Text
                        className="text-[10px] text-[#0D3767]"
                        style={{ fontFamily: "Manrope" }}
                      >
                        {photos.length} selected
                      </Text>
                    </View>
                  </View>

                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 8, paddingBottom: 4 }}
                  >
                    {photos.map((photo) => (
                      <View
                        key={photo.uri}
                        className="relative overflow-hidden rounded-xl border border-white"
                        style={{
                          width: compact ? 100 : 118,
                          height: compact ? 140 : 166,
                        }}
                      >
                        <Image
                          source={{ uri: photo.uri }}
                          className="h-full w-full"
                          resizeMode="cover"
                        />

                        <Pressable
                          onPress={() => removePhoto(photo.uri)}
                          accessibilityRole="button"
                          accessibilityLabel="Remove photo"
                          className="absolute right-1 top-1 h-6 w-6 items-center justify-center rounded-full bg-[#2B1B16]/90"
                        >
                          <Ionicons
                            name="close"
                            size={15}
                            color="#FFFFFF"
                          />
                        </Pressable>
                      </View>
                    ))}

                    {photos.length < MAX_PHOTOS && (
                      <Pressable
                        onPress={chooseFromGallery}
                        className="items-center justify-center rounded-xl border border-dashed border-[#B49482] bg-[#FAF7F2]/80"
                        style={{
                          width: compact ? 76 : 90,
                          height: compact ? 140 : 166,
                        }}
                      >
                        <Ionicons
                          name="add"
                          size={24}
                          color="#65463A"
                        />
                        <Text
                          className="mt-1 text-[10px] text-[#65463A]"
                          style={{ fontFamily: "Manrope" }}
                        >
                          Add more
                        </Text>
                      </Pressable>
                    )}
                  </ScrollView>
                </>
              )}
            </View>
          </ImageBackground>
        </View>

        {/* Starter mix */}
        <Text
          className="mb-2 mt-4 text-[22px] leading-[27px] text-[#2B1B16]"
          style={{ fontFamily: "DMSerifDisplay" }}
        >
          A good starter mix
        </Text>

        <View className="flex-row justify-between gap-[6px]">
          {STARTER_ITEMS.map((item) => (
            <View
              key={item.label}
              className="flex-1 items-center justify-center rounded-[14px] border border-[#E3DAD2] bg-[#FAF7F2]"
              style={{
                minHeight: compact ? 62 : 68,
                paddingHorizontal: 2,
                paddingVertical: 7,
              }}
              
            >
              <Ionicons
                name={item.icon}
                size={compact ? 23 : 26}
                color="#2B1B16"
              />
              <Text
                className="mt-1 text-center text-[10px] leading-[12px] text-[#2B1B16]"
                style={{ fontFamily: "Manrope", fontWeight: "400" }}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>

        {/* Primary action */}
        <Pressable
          onPress={chooseFromGallery}
          disabled={isPicking}
          className="mt-4 h-[48px] flex-row items-center justify-center rounded-full bg-[#0D3767]"
          style={({ pressed }) => ({
            opacity: isPicking ? 0.65 : pressed ? 0.88 : 1,
          })}
        >
          {isPicking ? (
            <ActivityIndicator color="#FAF7F2" />
          ) : (
            <>
              <Text
                className="text-[15px] text-[#FAF7F2]"
                style={{ fontFamily: "DMSerifDisplay" }}
              >
                {photos.length === 0
                  ? "Add my first item"
                  : "Add more photos"}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color="#FAF7F2"
                style={{ marginLeft: 8 }}
              />
            </>
          )}
        </Pressable>

        {/* Camera and gallery */}
        <View className="mt-2.5 flex-row gap-2">
          <Pressable
            onPress={takePhoto}
            disabled={isPicking}
            className="h-[49px] flex-1 flex-row items-center justify-center rounded-[14px] border border-[#E3DAD2] px-1"
          >
            <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-[#0D3767]">
              <Ionicons
                name="camera-outline"
                size={19}
                color="#FFFFFF"
              />
            </View>
            <Text
              className="text-[12px] text-[#2B1B16]"
              style={{ fontFamily: "DMSerifDisplay" }}
            >
              Take a photo
            </Text>
          </Pressable>

          <Pressable
            onPress={chooseFromGallery}
            disabled={isPicking}
            className="h-[49px] flex-1 flex-row items-center justify-center rounded-[14px] border border-[#E3DAD2] px-1"
          >
            <View className="mr-2 h-8 w-8 items-center justify-center rounded-full bg-[#65463A]">
              <Ionicons
                name="images-outline"
                size={18}
                color="#FFFFFF"
              />
            </View>
            <Text
              className="text-[12px] text-[#2B1B16]"
              style={{ fontFamily: "DMSerifDisplay" }}
            >
              Choose from gallery
            </Text>
          </Pressable>
        </View>

        {/* What happens next */}
        <View className="mt-3 flex-row rounded-[18px] bg-[#F5EDE4] p-3">
          <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#EDE0D0]">
            <Ionicons
              name="bulb-outline"
              size={23}
              color="#2B1B16"
            />
          </View>

          <View className="flex-1 justify-center">
            <Text
              className="mb-1 text-[9px] tracking-[1.5px] text-[#8A6955]"
              style={{ fontFamily: "Manrope" }}
            >
              WHAT HAPPENS NEXT
            </Text>

            <Text
              className="text-[14px] leading-[19px] text-[#2B1B16]"
              style={{ fontFamily: "Manrope" }}
            >
              Rachel will create your first 3 outfit boards from your pieces.
            </Text>
          </View>
        </View>

        {/* Privacy note */}
        <View className="mt-3 flex-row items-center justify-center gap-1.5 px-1">
          <Ionicons
            name="lock-closed-outline"
            size={14}
            color="#756B68"
          />
          <Text
            className="flex-shrink text-center text-[10px] leading-[15px] text-[#756B68]"
            style={{ fontFamily: "Manrope" }}
          >
            Camera or gallery access is requested only after you choose.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
