import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAccessToken } from "../../lib/onboarding";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

type PresentationStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "not_found";

type WardrobeItem = {
  id: string;
  category: string;
  subcategory?: string | null;
  analysisStatus: string;
  primaryImageUrl?: string | null;
  presentationImageUrl?: string | null;
  presentationImageStatus: PresentationStatus;
  presentationImageError?: string | null;
  attributes?: Record<string, unknown>;
};

const COLORS = {
  background: "#FCFAF7",
  white: "#FFFFFF",
  navy: "#073779",
  navyDark: "#062F68",
  ink: "#251713",
  muted: "#827872",
  border: "#D9D0C7",
  beige: "#F2E8DD",
  placeholder: "#EDE4DA",
  brown: "#65463A",
};

const filters = [
  "All",
  "Tops",
  "Bottoms",
  "Dresses",
  "Outerwear",
  "Shoes",
  "Bags",
  "Accessories",
];

const MENU_OPTIONS = [
  { label: "Try on", icon: "shirt-outline" as const },
  { label: "Style with this", icon: "shirt-outline" as const },
  { label: "Edit item", icon: "pencil-outline" as const },
  { label: "Remove", icon: "trash-outline" as const },
];

function matchesFilter(item: WardrobeItem, filter: string) {
  if (filter === "All") return true;

  const category = item.category.toLowerCase().replace(/[_-]/g, " ");
  const subcategory = (item.subcategory ?? "").toLowerCase();

  const categoryMap: Record<string, string[]> = {
    Tops: ["top", "tops", "shirt", "t-shirt", "tee", "blouse"],
    Bottoms: [
      "bottom",
      "bottoms",
      "trouser",
      "pants",
      "jeans",
      "shorts",
      "skirt",
    ],
    Dresses: ["dress", "dresses", "jumpsuit", "gown"],
    Outerwear: ["outerwear", "jacket", "coat", "blazer"],
    Shoes: ["shoe", "shoes", "footwear", "sneaker", "boot", "sandal"],
    Bags: ["bag", "bags", "handbag", "backpack"],
    Accessories: [
      "accessory",
      "accessories",
      "jewelry",
      "jewellery",
      "belt",
      "hat",
      "watch",
    ],
  };

  return (categoryMap[filter] ?? [filter.toLowerCase()]).some(
    (term) => category.includes(term) || subcategory.includes(term),
  );
}

async function apiRequest(endpoint: string, body?: unknown) {
  if (!API_URL) {
    throw new Error("Missing EXPO_PUBLIC_API_URL.");
  }

  const token = await getAccessToken();

  if (!token) {
    throw new Error("Your session has expired. Please sign in again.");
  }

  const baseUrl = API_URL.replace(/\/+$/, "");

  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: body === undefined ? "GET" : "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });

  let result: any = null;

  try {
    result = await response.json();
  } catch {
    // The server may return an empty or non-JSON response.
  }

  if (!response.ok || !result?.success) {
    throw new Error(
      result?.message ?? `Request failed (HTTP ${response.status}).`,
    );
  }

  return result;
}

function GeneratingPlaceholder() {
  const opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  return (
    <View
      className="items-center justify-center overflow-hidden rounded-[18px]"
      style={{
        aspectRatio: 0.88,
        backgroundColor: COLORS.placeholder,
      }}
    >
      <Animated.View style={{ opacity }} className="items-center">
        <Ionicons name="sparkles-outline" size={26} color={COLORS.brown} />
        <Text
          className="mt-2 text-[11px]"
          style={{ color: COLORS.brown, fontFamily: "Manrope" }}
        >
          Preparing your image
        </Text>
      </Animated.View>
    </View>
  );
}

function MenuOption({
  label,
  icon,
  last,
  onPress,
}: {
  label: string;
  icon: (typeof MENU_OPTIONS)[number]["icon"];
  last: boolean;
  onPress: () => void;
}) {
  const isRemove = label === "Remove";

  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center px-3"
      style={{
        minHeight: 44,
        opacity: isRemove ? 0.7 : 1,
      }}
    >
      <Ionicons
        name={icon}
        size={20}
        color={isRemove ? "#69615B" : COLORS.ink}
      />

      <Text
        className="ml-3 flex-1 text-[14px]"
        style={{
          color: isRemove ? "#77716C" : COLORS.navyDark,
          fontFamily: "DMSerifDisplay",
        }}
      >
        {label}
      </Text>

      {!last && (
        <View
          className="absolute bottom-0 right-3 left-3"
          style={{
            height: 1,
            backgroundColor: "#ECE6E0",
          }}
        />
      )}
    </Pressable>
  );
}

export default function MyClosetScreen() {
  const [items, setItems] = useState<WardrobeItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryingIds, setRetryingIds] = useState<string[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const itemsRef = useRef<WardrobeItem[]>([]);
  const refreshVersion = useRef(0);

  const updateItems = useCallback(
    (updater: (current: WardrobeItem[]) => WardrobeItem[]) => {
      setItems((current) => {
        const next = updater(current);
        itemsRef.current = next;
        return next;
      });
    },
    [],
  );

  const loadWardrobe = useCallback(async () => {
    const result = await apiRequest("/api/wardrobe?page=1&limit=50");

    if (!Array.isArray(result.wardrobe)) {
      throw new Error("The server returned an invalid wardrobe response.");
    }

    const fetchedItems = result.wardrobe as WardrobeItem[];

    itemsRef.current = fetchedItems;
    setItems(fetchedItems);

    return fetchedItems;
  }, []);

  const requestGeneration = useCallback(
    async (ids: string[]) => {
      if (!ids.length) return;

      await apiRequest("/api/wardrobe/presentation/generate-batch", {
        wardrobeItemIds: ids,
      });

      updateItems((current) =>
        current.map((item) =>
          ids.includes(item.id) &&
          (item.presentationImageStatus === "pending" ||
            item.presentationImageStatus === "failed")
            ? {
                ...item,
                presentationImageStatus: "processing",
                presentationImageError: null,
              }
            : item,
        ),
      );
    },
    [updateItems],
  );

  useFocusEffect(
    useCallback(() => {
      let active = true;
      const version = ++refreshVersion.current;

      async function run() {
        setLoading(true);
        setError(null);
        setOpenMenuId(null);

        try {
          const fetched = await loadWardrobe();

          if (!active || version !== refreshVersion.current) return;

          const generationIds = fetched
            .filter(
              (item) =>
                item.presentationImageStatus === "pending" ||
                item.presentationImageStatus === "failed",
            )
            .map((item) => item.id);

          if (generationIds.length) {
            try {
              await requestGeneration(generationIds);
            } catch (generationError) {
              console.error(
                "[MyCloset] Could not start presentation generation",
                generationError,
              );
            }
          }

          if (!active) return;

          setLoading(false);

          let pollCount = 0;

          while (active && pollCount < 120) {
            const unfinishedIds = itemsRef.current
              .filter(
                (item) =>
                  item.presentationImageStatus === "pending" ||
                  item.presentationImageStatus === "processing",
              )
              .map((item) => item.id);

            if (!unfinishedIds.length) break;

            await new Promise<void>((resolve) => setTimeout(resolve, 3000));

            if (!active) break;

            pollCount += 1;

            try {
              const statusResult = await apiRequest(
                `/api/wardrobe/analysis-status?ids=${unfinishedIds.join(",")}`,
              );

              if (!active || !Array.isArray(statusResult.items)) break;

              const statuses = statusResult.items as Array<{
                id: string;
                presentationImageStatus: PresentationStatus;
              }>;

              updateItems((current) =>
                current.map((item) => {
                  const status = statuses.find(
                    (entry) => entry.id === item.id,
                  );

                  return status
                    ? {
                        ...item,
                        presentationImageStatus:
                          status.presentationImageStatus,
                      }
                    : item;
                }),
              );

              if (
                statuses.some(
                  (item) => item.presentationImageStatus === "completed",
                )
              ) {
                await loadWardrobe();
              }
            } catch (pollError) {
              console.error("[MyCloset] Status poll failed", pollError);

              await new Promise<void>((resolve) => setTimeout(resolve, 5000));
            }
          }
        } catch (loadError) {
          console.error("[MyCloset] Could not load wardrobe", loadError);

          if (active) {
            setError(
              loadError instanceof Error
                ? loadError.message
                : "Couldn't load your closet.",
            );
          }
        } finally {
          if (active) setLoading(false);
        }
      }

      void run();

      return () => {
        active = false;
      };
    }, [loadWardrobe, requestGeneration, updateItems]),
  );

  const retryGeneration = async (id: string) => {
    setRetryingIds((current) => [...current, id]);

    try {
      await requestGeneration([id]);
    } catch (retryError) {
      Alert.alert(
        "Couldn't prepare image",
        retryError instanceof Error ? retryError.message : "Please try again.",
      );
    } finally {
      setRetryingIds((current) => current.filter((itemId) => itemId !== id));
    }
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory = matchesFilter(item, activeFilter);
    const query = searchQuery.trim().toLowerCase();

    if (!query) return matchesCategory;

    const searchableText =
      `${item.category} ${item.subcategory ?? ""} ${JSON.stringify(item.attributes ?? {})}`.toLowerCase();

    return matchesCategory && searchableText.includes(query);
  });

  const handleMenuOption = (label: string, item: WardrobeItem) => {
    setOpenMenuId(null);

    // These actions remain placeholders until their routes and backend
    // operations are implemented.
    if (
      label === "Try on" ||
      label === "Style with this" ||
      label === "Edit item" ||
      label === "Remove"
    ) {
      return;
    }
  };

  return (
    <SafeAreaView
      className="flex-1"
      edges={["top"]}
      style={{ backgroundColor: COLORS.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        onScrollBeginDrag={() => setOpenMenuId(null)}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pb-2 pt-1">
          <Pressable
            onPress={() => router.back()}
            hitSlop={10}
            className="h-9 w-7 items-start justify-center"
          >
            <Ionicons name="chevron-back" size={29} color={COLORS.ink} />
          </Pressable>

          <Text
            className="flex-1 text-[29px]"
            style={{
              color: COLORS.ink,
              fontFamily: "DMSerifDisplay",
              fontWeight: "400",
            }}
          >
            My closet
          </Text>

          <Pressable
            onPress={() => router.push("/closet/add")}
            className="flex-row items-center rounded-full px-3"
            style={{
              height: 37,
              backgroundColor: COLORS.navy,
              gap: 5,
            }}
          >
            <Text
              className="text-[13px]"
              style={{
                color: "#FFFFFF",
                fontFamily: "DMSerifDisplay",
              }}
            >
              Add item
            </Text>

            <Ionicons name="add" size={22} color="#FFFFFF" />
          </Pressable>
        </View>

        {/* Search */}
        <View
          className="mx-5 mt-1 flex-row items-center rounded-full border px-3"
          style={{
            height: 40,
            borderColor: "#CFC8C1",
            backgroundColor: "transparent",
          }}
        >
          <Ionicons name="search-outline" size={19} color={COLORS.ink} />

          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search your closet"
            placeholderTextColor="#827872"
            className="ml-2 flex-1 py-0 text-[13px]"
            style={{
              color: COLORS.ink,
              fontFamily: "DMSerifDisplay",
            }}
            returnKeyType="search"
          />

          <Pressable
            onPress={() => setSearchQuery("")}
            hitSlop={10}
            className="items-center justify-center"
          >
            <Ionicons name="options-outline" size={21} color={COLORS.ink} />
          </Pressable>
        </View>

        {/* Category filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 8,
            paddingBottom: 1,
            gap: 6,
          }}
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter;

            return (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                className="items-center justify-center rounded-full border px-2.5"
                style={{
                  height: 29,
                  backgroundColor: selected ? COLORS.navy : "transparent",
                  borderColor: selected ? COLORS.navy : COLORS.border,
                }}
              >
                <Text
                  className="text-[11px]"
                  style={{
                    color: selected ? "#FFFFFF" : COLORS.ink,
                    fontFamily: "DMSerifDisplay",
                  }}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Closet insight */}
        <View
          className="mx-5 mt-2 flex-row items-center rounded-[15px] px-3 py-2"
          style={{
            backgroundColor: COLORS.beige,
            minHeight: 62,
          }}
        >
          <View className="mr-2 h-8 w-8 items-center justify-center">
            <Ionicons name="shirt-outline" size={25} color={COLORS.ink} />
            <Ionicons
              name="sparkles"
              size={11}
              color={COLORS.ink}
              style={{
                position: "absolute",
                right: -1,
                top: -1,
              }}
            />
          </View>

          <View className="flex-1">
            <Text
              className="text-[11px]"
              style={{
                color: COLORS.muted,
                fontFamily: "DMSerifDisplay",
                letterSpacing: -0.2,
              }}
            >
              Closet insight
            </Text>

            <Text
              className="text-[15px] leading-[19px]"
              style={{
                color: COLORS.ink,
                fontFamily: "DMSerifDisplay",
                letterSpacing: -0.2,
              }}
            >
              {items.length > 0
                ? `You have ${items.length} pieces to style.`
                : "Your wardrobe, reimagined."}
            </Text>

            <Text
              className="text-[11px] leading-[15px]"
              style={{
                color: COLORS.muted,
                fontFamily: "Manrope",
                letterSpacing: -0.1,
              }}
            >
              {items.length > 0
                ? "Discover new looks with what you own."
                : "Add your first item to get started."}
            </Text>
          </View>

          <Pressable
            onPress={() => {}}
            className="ml-2 flex-row items-center"
            hitSlop={8}
          >
            <Text
              className="text-[12px]"
              style={{
                color: COLORS.navy,
                fontFamily: "DMSerifDisplay",
              }}
            >
              See the looks
            </Text>

            <Ionicons
              name="arrow-forward"
              size={15}
              color={COLORS.navy}
              style={{ marginLeft: 2 }}
            />
          </Pressable>
        </View>

        {/* Loading and errors */}
        {loading && items.length === 0 ? (
          <View className="items-center py-16">
            <ActivityIndicator size="large" color={COLORS.navy} />

            <Text
              className="mt-3 text-[13px]"
              style={{
                color: COLORS.muted,
                fontFamily: "Manrope",
              }}
            >
              Opening your closet...
            </Text>
          </View>
        ) : error && items.length === 0 ? (
          <View className="items-center px-8 py-14">
            <Ionicons
              name="cloud-offline-outline"
              size={36}
              color={COLORS.muted}
            />

            <Text
              className="mt-3 text-center text-[13px]"
              style={{
                color: COLORS.brown,
                fontFamily: "Manrope",
              }}
            >
              {error}
            </Text>

            <Pressable
              onPress={() => router.replace("/closet")}
              className="mt-4 rounded-full px-5 py-3"
              style={{ backgroundColor: COLORS.navy }}
            >
              <Text className="text-[13px] text-white">Try again</Text>
            </Pressable>
          </View>
        ) : filteredItems.length === 0 ? (
          <View className="items-center px-8 py-14">
            <Ionicons name="shirt-outline" size={38} color={COLORS.muted} />

            <Text
              className="mt-3 text-[18px]"
              style={{
                color: COLORS.ink,
                fontFamily: "DMSerifDisplay",
              }}
            >
              {items.length ? "No matching items" : "Your closet is empty"}
            </Text>

            <Text
              className="mt-1 text-center text-[12px]"
              style={{
                color: COLORS.muted,
                fontFamily: "Manrope",
              }}
            >
              {items.length
                ? "Try another search or category."
                : "Add some clothes to start building your digital wardrobe."}
            </Text>
          </View>
        ) : (
          <View className="mt-1 flex-row flex-wrap px-[14px]">
            {filteredItems.map((item) => {
              const isReady =
                item.presentationImageStatus === "completed" &&
                Boolean(item.presentationImageUrl);

              const isGenerating =
                item.presentationImageStatus === "pending" ||
                item.presentationImageStatus === "processing";

              const isMenuOpen = openMenuId === item.id;

              return (
                <View
                  key={item.id}
                  className="w-1/2 p-[5px]"
                  style={{
                    zIndex: isMenuOpen ? 10 : 1,
                  }}
                >
                  <View
                    className="overflow-visible rounded-[18px]"
                    style={{
                      borderWidth: isMenuOpen ? 1.5 : 0,
                      borderColor: COLORS.navy,
                    }}
                  >
                    <View
                      className="overflow-hidden rounded-[17px]"
                      style={{
                        backgroundColor: COLORS.placeholder,
                      }}
                    >
                      {isReady ? (
                        <Image
                          source={{ uri: item.presentationImageUrl! }}
                          resizeMode="cover"
                          style={{
                            width: "100%",
                            aspectRatio: 0.88,
                            backgroundColor: COLORS.placeholder,
                          }}
                        />
                      ) : isGenerating ? (
                        <GeneratingPlaceholder />
                      ) : (
                        <View
                          className="items-center justify-center px-2"
                          style={{
                            aspectRatio: 0.88,
                            backgroundColor: COLORS.placeholder,
                          }}
                        >
                          <Ionicons
                            name="image-outline"
                            size={30}
                            color={COLORS.muted}
                          />

                          <Text
                            className="mt-2 text-center text-[11px]"
                            style={{
                              color: COLORS.brown,
                              fontFamily: "Manrope",
                            }}
                          >
                            Image couldn't be prepared
                          </Text>

                          <Pressable
                            disabled={retryingIds.includes(item.id)}
                            onPress={() => void retryGeneration(item.id)}
                            className="mt-2 rounded-full px-3 py-2"
                            style={{ backgroundColor: COLORS.navy }}
                          >
                            {retryingIds.includes(item.id) ? (
                              <ActivityIndicator
                                size="small"
                                color="#FFFFFF"
                              />
                            ) : (
                              <Text className="text-[11px] text-white">
                                Try again
                              </Text>
                            )}
                          </Pressable>
                        </View>
                      )}

                      {/* Three-dot menu button */}
                      <Pressable
                        onPress={() =>
                          setOpenMenuId(isMenuOpen ? null : item.id)
                        }
                        hitSlop={8}
                        className="absolute right-2 top-2 h-[31px] w-[31px] items-center justify-center rounded-full"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.94)",
                        }}
                      >
                        <Ionicons
                          name="ellipsis-horizontal"
                          size={21}
                          color={COLORS.ink}
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>

      {/* Footer: both elements share one row; no border */}
      <View
        className="flex-row items-center justify-between px-5"
        style={{
          height: 76,
          backgroundColor: COLORS.background,
          borderTopWidth: 0,
        }}
      >
        <Text
          className="text-[14px]"
          style={{
            color: COLORS.muted,
            fontFamily: "DMSerifDisplay",
          }}
        >
          {items.length} {items.length === 1 ? "item" : "items"}, all yours.
        </Text>

        <Pressable
          onPress={() => router.push("/closet/add")}
          className="h-[50px] w-[50px] items-center justify-center rounded-full"
          style={{
            backgroundColor: COLORS.navy,
          }}
          accessibilityRole="button"
          accessibilityLabel="Add item"
        >
          <Ionicons name="add" size={28} color="#FFFFFF" />
        </Pressable>
      </View>

      {/* Full-screen menu overlay: not clipped by the item card */}
      <Modal
        transparent
        visible={openMenuId !== null}
        animationType="fade"
        onRequestClose={() => setOpenMenuId(null)}
        statusBarTranslucent
      >
        <Pressable
          onPress={() => setOpenMenuId(null)}
          className="flex-1 justify-center px-7"
          style={{
            backgroundColor: "rgba(25,18,14,0.20)",
          }}
        >
          <Pressable
            onPress={(event) => event.stopPropagation()}
            className="self-end rounded-[16px] px-2 py-1"
            style={{
              width: 205,
              backgroundColor: COLORS.background,
              shadowColor: "#000000",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 12,
              elevation: 14,
            }}
          >
            {MENU_OPTIONS.map((option, optionIndex) => (
              <MenuOption
                key={option.label}
                label={option.label}
                icon={option.icon}
                last={optionIndex === MENU_OPTIONS.length - 1}
                onPress={() => {
                  const selectedItem = items.find(
                    (item) => item.id === openMenuId,
                  );

                  if (selectedItem) {
                    handleMenuOption(option.label, selectedItem);
                  } else {
                    setOpenMenuId(null);
                  }
                }}
              />
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}