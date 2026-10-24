
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { uploadAndAnalyzeWardrobe } from "../../lib/wardrobe";

type WardrobePhoto = ImagePicker.ImagePickerAsset;

const MAX_PHOTOS = 50;

const COLORS = {
  background: "#FCFAF7",
  navy: "#073779",
  ink: "#251713",
  muted: "#827872",
  border: "#D9D0C7",
  beige: "#F2E8DD",
};

export default function AddClosetItemsScreen() {
  const [photos, setPhotos] = useState<WardrobePhoto[]>([]);
  const [isPicking, setIsPicking] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState("");
  const [progressCount, setProgressCount] = useState(0);
  const [progressTotal, setProgressTotal] = useState(0);

  const isBusy = isPicking || isUploading;

  const choosePhotos = async () => {
    if (isBusy || photos.length >= MAX_PHOTOS) return;

    try {
      setIsPicking(true);

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsMultipleSelection: true,
        selectionLimit: MAX_PHOTOS - photos.length,
        allowsEditing: false,
        quality: 0.85,
      });

      if (result.canceled) return;

      setPhotos((current) => {
        const next = [...current];

        for (const photo of result.assets) {
          if (
            !next.some((existing) => existing.uri === photo.uri) &&
            next.length < MAX_PHOTOS
          ) {
            next.push(photo);
          }
        }

        return next;
      });
    } catch (error) {
      console.error("[AddClosetItems] Gallery error:", error);
      Alert.alert("Unable to open gallery", "Please try again.");
    } finally {
      setIsPicking(false);
    }
  };

  const takePhoto = async () => {
    if (isBusy || photos.length >= MAX_PHOTOS) return;

    try {
      const permission =
        await ImagePicker.requestCameraPermissionsAsync();

      if (!permission.granted) {
        Alert.alert(
          "Camera permission needed",
          "Allow camera access in Settings to photograph your clothes.",
        );
        return;
      }

      setIsPicking(true);

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images"],
        allowsEditing: false,
        quality: 0.85,
      });

      if (!result.canceled && result.assets.length > 0) {
        const photo = result.assets[0];

        setPhotos((current) =>
          current.some((existing) => existing.uri === photo.uri)
            ? current
            : [...current, photo].slice(0, MAX_PHOTOS),
        );
      }
    } catch (error) {
      console.error("[AddClosetItems] Camera error:", error);
      Alert.alert("Unable to open camera", "Please try again.");
    } finally {
      setIsPicking(false);
    }
  };

  const removePhoto = (uri: string) => {
    if (isBusy) return;

    setPhotos((current) =>
      current.filter((photo) => photo.uri !== uri),
    );
  };

  const uploadItems = async () => {
    if (isBusy) return;

    if (photos.length === 0) {
      Alert.alert(
        "Add your wardrobe",
        "Choose at least one clothing photo first.",
      );
      return;
    }

    setIsUploading(true);
    setProgress("Preparing your wardrobe...");
    setProgressCount(0);
    setProgressTotal(photos.length);

    try {
      const result = await uploadAndAnalyzeWardrobe(
        photos.map((photo) => ({
          uri: photo.uri,
          fileName: photo.fileName ?? null,
          mimeType: photo.mimeType ?? null,
        })),
        (message, completed, total) => {
          setProgress(message);
          setProgressCount(completed);
          setProgressTotal(total);
        },
      );

      const messages = [
        `${result.uploaded} new item(s) saved.`,
        `${result.completed} item(s) analysed successfully.`,
      ];

      if (result.duplicates > 0) {
        messages.push(
          `${result.duplicates} duplicate image(s) skipped.`,
        );
      }

      if (result.failed > 0) {
        messages.push(
          `${result.failed} photo(s) could not be uploaded.`,
        );
      }

      if (result.analysisFailed > 0) {
        messages.push(
          `${result.analysisFailed} item(s) could not be analysed.`,
        );
      }

      Alert.alert("Wardrobe updated", messages.join("\n"), [
        {
          text: "View my closet",
          onPress: () => router.replace("/closet"),
        },
      ]);
    } catch (error) {
      console.error("[AddClosetItems] Upload failed:", error);

      Alert.alert(
        "Upload incomplete",
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
        [{ text: "OK" }],
      );
    } finally {
      setIsUploading(false);
    }
  };

  const progressPercent =
    progressTotal > 0
      ? Math.min(100, (progressCount / progressTotal) * 100)
      : 0;

  return (
    <SafeAreaView
      className="flex-1"
      edges={["top"]}
      style={{ backgroundColor: COLORS.background }}
    >
      <View className="flex-row items-center px-5 pb-3 pt-2">
        <Pressable
          onPress={() => router.back()}
          disabled={isBusy}
          hitSlop={10}
          className="mr-3 h-10 w-9 items-start justify-center"
        >
          <Ionicons
            name="chevron-back"
            size={28}
            color={COLORS.ink}
          />
        </Pressable>

        <View className="flex-1">
          <Text
            className="text-[28px]"
            style={{
              color: COLORS.ink,
              fontFamily: "DMSerifDisplay",
            }}
          >
            Add to your closet
          </Text>

          <Text
            className="mt-0.5 text-[12px]"
            style={{
              color: COLORS.muted,
              fontFamily: "Manrope",
            }}
          >
            Bring your wardrobe into Rachel.
          </Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 24 }}
      >
        <View
          className="mt-3 rounded-[20px] p-5"
          style={{ backgroundColor: COLORS.beige }}
        >
          <View className="mb-3 h-11 w-11 items-center justify-center rounded-full bg-white">
            <Ionicons
              name="sparkles-outline"
              size={24}
              color={COLORS.navy}
            />
          </View>

          <Text
            className="text-[20px]"
            style={{
              color: COLORS.ink,
              fontFamily: "DMSerifDisplay",
            }}
          >
            Let's get your clothes in
          </Text>

          <Text
            className="mt-2 text-[13px] leading-[20px]"
            style={{
              color: COLORS.muted,
              fontFamily: "Manrope",
            }}
          >
            Select photos of your clothes, shoes, bags, or accessories.
            Rachel will save them, analyse each item, and prepare
            presentation images.
          </Text>
        </View>

        <View className="mt-5 flex-row gap-3">
          <Pressable
            onPress={() => void choosePhotos()}
            disabled={isBusy || photos.length >= MAX_PHOTOS}
            className="flex-1 flex-row items-center justify-center rounded-full py-3"
            style={{
              backgroundColor: COLORS.navy,
              opacity: isBusy || photos.length >= MAX_PHOTOS ? 0.55 : 1,
            }}
          >
            {isPicking ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Ionicons
                  name="images-outline"
                  size={19}
                  color="#FFFFFF"
                />
                <Text
                  className="ml-2 text-[13px]"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Manrope",
                    fontWeight: "600",
                  }}
                >
                  Choose photos
                </Text>
              </>
            )}
          </Pressable>

          <Pressable
            onPress={() => void takePhoto()}
            disabled={isBusy || photos.length >= MAX_PHOTOS}
            className="h-[46px] w-[50px] items-center justify-center rounded-full border"
            style={{
              borderColor: COLORS.border,
              opacity: isBusy || photos.length >= MAX_PHOTOS ? 0.55 : 1,
            }}
          >
            <Ionicons
              name="camera-outline"
              size={22}
              color={COLORS.ink}
            />
          </Pressable>
        </View>

        <View className="mb-3 mt-6 flex-row items-center justify-between">
          <Text
            className="text-[19px]"
            style={{
              color: COLORS.ink,
              fontFamily: "DMSerifDisplay",
            }}
          >
            Selected photos
          </Text>

          <Text
            className="text-[12px]"
            style={{
              color: COLORS.muted,
              fontFamily: "Manrope",
            }}
          >
            {photos.length}/{MAX_PHOTOS}
          </Text>
        </View>

        {photos.length === 0 ? (
          <Pressable
            onPress={() => void choosePhotos()}
            disabled={isBusy}
            className="items-center justify-center rounded-[18px] border border-dashed px-6 py-12"
            style={{ borderColor: COLORS.border }}
          >
            <Ionicons
              name="cloud-upload-outline"
              size={38}
              color={COLORS.muted}
            />

            <Text
              className="mt-3 text-[15px]"
              style={{
                color: COLORS.ink,
                fontFamily: "DMSerifDisplay",
              }}
            >
              Your selection will appear here
            </Text>

            <Text
              className="mt-1 text-center text-[12px]"
              style={{
                color: COLORS.muted,
                fontFamily: "Manrope",
              }}
            >
              Choose one or more photos to get started.
            </Text>
          </Pressable>
        ) : (
          <View className="flex-row flex-wrap">
            {photos.map((photo) => (
              <View
                key={photo.uri}
                className="w-1/3 p-1.5"
              >
                <View
                  className="overflow-hidden rounded-[15px]"
                  style={{ backgroundColor: "#EDE4DA" }}
                >
                  <Image
                    source={{ uri: photo.uri }}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      aspectRatio: 0.82,
                    }}
                  />

                  <Pressable
                    onPress={() => removePhoto(photo.uri)}
                    disabled={isBusy}
                    hitSlop={8}
                    className="absolute right-2 top-2 h-7 w-7 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
                  >
                    <Ionicons
                      name="close"
                      size={18}
                      color={COLORS.ink}
                    />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        )}

        {isUploading && (
          <View
            className="mt-5 rounded-[16px] p-4"
            style={{ backgroundColor: COLORS.beige }}
          >
            <View className="flex-row items-center">
              <ActivityIndicator
                size="small"
                color={COLORS.navy}
              />

              <Text
                className="ml-3 flex-1 text-[12px]"
                style={{
                  color: COLORS.ink,
                  fontFamily: "Manrope",
                }}
              >
                {progress || "Processing your wardrobe..."}
              </Text>
            </View>

            <View
              className="mt-3 overflow-hidden rounded-full"
              style={{
                height: 5,
                backgroundColor: "#FFFFFF",
              }}
            >
              <View
                style={{
                  width: `${progressPercent}%`,
                  height: 5,
                  backgroundColor: COLORS.navy,
                  borderRadius: 999,
                }}
              />
            </View>

            <Text
              className="mt-2 text-[11px]"
              style={{
                color: COLORS.muted,
                fontFamily: "Manrope",
              }}
            >
              Keep the app open while your items are being processed.
            </Text>
          </View>
        )}
      </ScrollView>

      <View className="px-5 pb-3 pt-3">
        <Pressable
          onPress={() => void uploadItems()}
          disabled={isBusy || photos.length === 0}
          className="flex-row items-center justify-center rounded-full py-4"
          style={{
            backgroundColor: COLORS.navy,
            opacity: isBusy || photos.length === 0 ? 0.5 : 1,
          }}
        >
          {isUploading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Ionicons
                name="sparkles-outline"
                size={19}
                color="#FFFFFF"
              />
              <Text
                className="ml-2 text-[14px]"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Manrope",
                  fontWeight: "600",
                }}
              >
                Upload and analyse items
              </Text>
            </>
          )}
        </Pressable>

        <Text
          className="mt-2 text-center text-[10px]"
          style={{
            color: COLORS.muted,
            fontFamily: "Manrope",
          }}
        >
          Secure upload · Duplicate detection · AI analysis
        </Text>
      </View>
    </SafeAreaView>
  );
}
