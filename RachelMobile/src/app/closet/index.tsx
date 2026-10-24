
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { getAccessToken } from "../../lib/onboarding";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const LOG_PREFIX = "[MyCloset]";

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

function log(message: string, details?: unknown) {
  console.log(
    `${LOG_PREFIX} ${new Date().toISOString()} ${message}`,
    details ?? "",
  );
}

function logError(message: string, error: unknown) {
  console.error(
    `${LOG_PREFIX} ${new Date().toISOString()} ${message}`,
    error instanceof Error
      ? { message: error.message, stack: error.stack }
      : error,
  );
}

function getCategoryLabel(category: string) {
  const normalized = category.toLowerCase().replace(/[_-]/g, " ");
  return normalized.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

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

  const terms = categoryMap[filter] ?? [filter.toLowerCase()];

  return terms.some(
    (term) => category.includes(term) || subcategory.includes(term),
  );
}

async function apiRequest(endpoint: string, body?: unknown) {
  const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const start = Date.now();
  const method = body === undefined ? "GET" : "POST";
  const baseUrl = API_URL?.replace(/\/+$/, "");
  const url = baseUrl ? `${baseUrl}${endpoint}` : undefined;

  log("API request starting", {
    requestId,
    method,
    endpoint,
    url,
    hasBody: body !== undefined,
  });

  if (!API_URL) {
    log("API configuration error: EXPO_PUBLIC_API_URL is missing");
    throw new Error("Missing EXPO_PUBLIC_API_URL.");
  }

  let token: string | null | undefined;

  try {
    log("Getting access token", { requestId });
    token = await getAccessToken();
    log("Access token lookup finished", {
      requestId,
      hasToken: Boolean(token),
      durationMs: Date.now() - start,
    });
  } catch (error) {
    logError(`Access token lookup failed (${requestId})`, error);
    throw error;
  }

  if (!token) {
    log("No access token available", { requestId });
    throw new Error("Your session has expired. Please sign in again.");
  }

  let response: Response;

  try {
    log("Sending fetch request", { requestId, method, endpoint });

    response = await fetch(url!, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        ...(body === undefined
          ? {}
          : { "Content-Type": "application/json" }),
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });

    log("Fetch response received", {
      requestId,
      method,
      endpoint,
      status: response.status,
      ok: response.ok,
      durationMs: Date.now() - start,
    });
  } catch (error) {
    logError(`Fetch/network request failed (${requestId})`, error);
    log("Request failed before receiving an HTTP response", {
      requestId,
      endpoint,
      durationMs: Date.now() - start,
    });
    throw error;
  }

  let result: any;

  try {
    result = await response.json();
    log("Response JSON parsed", {
      requestId,
      endpoint,
      success: result?.success,
      message: result?.message,
    });
  } catch (error) {
    logError(`Could not parse response JSON (${requestId})`, error);
    result = null;
  }

  if (!response.ok || !result?.success) {
    const message =
      result?.message ?? `Request failed (HTTP ${response.status}).`;

    log("API request returned an error", {
      requestId,
      endpoint,
      status: response.status,
      message,
      durationMs: Date.now() - start,
    });

    throw new Error(message);
  }

  log("API request completed successfully", {
    requestId,
    endpoint,
    durationMs: Date.now() - start,
  });

  return result;
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function GeneratingPlaceholder() {
  const opacity = useRef(new Animated.Value(0.45)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 850,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.45,
          duration: 850,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  return (
    <View className="h-[190px] overflow-hidden rounded-[14px] bg-[#EEE8E0]">
      <Animated.View
        style={{ opacity }}
        className="flex-1 items-center justify-center"
      >
        <View className="h-[58px] w-[58px] items-center justify-center rounded-full bg-[#FAF7F2]">
          <Ionicons name="sparkles-outline" size={27} color="#8A6B58" />
        </View>

        <Text
          className="mt-4 text-[13px] text-[#65463A]"
          style={{ fontFamily: "Manrope" }}
        >
          Preparing your image
        </Text>

        <Text
          className="mt-1 text-[10px] text-[#927D70]"
          style={{ fontFamily: "Manrope" }}
        >
          Making it closet-ready...
        </Text>
      </Animated.View>
    </View>
  );
}

export default function MyClosetScreen() {
  const [items, setItems] = useState<WardrobeItem[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryingIds, setRetryingIds] = useState<string[]>([]);

  const itemsRef = useRef<WardrobeItem[]>([]);
  const refreshVersion = useRef(0);

  const updateItems = useCallback(
    (updater: (current: WardrobeItem[]) => WardrobeItem[]) => {
      setItems((current) => {
        const next = updater(current);
        itemsRef.current = next;

        log("Wardrobe state updated", {
          itemCount: next.length,
          statuses: next.map((item) => ({
            id: item.id,
            status: item.presentationImageStatus,
            hasPresentationUrl: Boolean(item.presentationImageUrl),
          })),
        });

        return next;
      });
    },
    [],
  );

  const loadWardrobe = useCallback(async () => {
    const start = Date.now();

    log("loadWardrobe CALLED");

    const result = await apiRequest("/api/wardrobe?page=1&limit=50");

    log("Wardrobe API response received", {
      durationMs: Date.now() - start,
      wardrobeIsArray: Array.isArray(result.wardrobe),
      itemCount: Array.isArray(result.wardrobe)
        ? result.wardrobe.length
        : null,
    });

    if (!Array.isArray(result.wardrobe)) {
      throw new Error("The server returned an invalid wardrobe response.");
    }

    const fetchedItems = result.wardrobe as WardrobeItem[];

    log(
      "Wardrobe items loaded",
      fetchedItems.map((item) => ({
        id: item.id,
        category: item.category,
        analysisStatus: item.analysisStatus,
        presentationImageStatus: item.presentationImageStatus,
        hasPresentationImageUrl: Boolean(item.presentationImageUrl),
        presentationImageError: item.presentationImageError ?? null,
      })),
    );

    itemsRef.current = fetchedItems;
    setItems(fetchedItems);

    return fetchedItems;
  }, []);

  const requestGeneration = useCallback(
    async (ids: string[]) => {
      log("requestGeneration CALLED", {
        itemIds: ids,
        count: ids.length,
      });

      if (ids.length === 0) {
        log("Generation skipped: no item IDs");
        return;
      }

      const start = Date.now();

      try {
        const result = await apiRequest(
          "/api/wardrobe/presentation/generate-batch",
          {
            wardrobeItemIds: ids,
          },
        );

        log("Generation batch accepted by API", {
          itemIds: ids,
          durationMs: Date.now() - start,
          response: result,
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
      } catch (error) {
        logError("Generation request failed", error);
        throw error;
      }
    },
    [updateItems],
  );

  useFocusEffect(
    useCallback(() => {
      let active = true;
      const currentVersion = ++refreshVersion.current;

      log("Closet screen focused", {
        currentVersion,
        apiUrlConfigured: Boolean(API_URL),
        apiBaseUrl: API_URL ?? "(missing)",
      });

      async function run() {
        log("Closet loading flow started", { currentVersion });

        setLoading(true);
        setError(null);

        try {
          const fetchedItems = await loadWardrobe();

          if (!active || currentVersion !== refreshVersion.current) {
            log("Ignoring wardrobe result: screen is no longer active");
            return;
          }

          const generationIds = fetchedItems
            .filter(
              (item) =>
                item.presentationImageStatus === "pending" ||
                item.presentationImageStatus === "failed",
            )
            .map((item) => item.id);

          const alreadyProcessingIds = fetchedItems
            .filter((item) => item.presentationImageStatus === "processing")
            .map((item) => item.id);

          log("Generation eligibility checked", {
            totalItems: fetchedItems.length,
            generationIds,
            generationCount: generationIds.length,
            alreadyProcessingIds,
            completedCount: fetchedItems.filter(
              (item) => item.presentationImageStatus === "completed",
            ).length,
            failedCount: fetchedItems.filter(
              (item) => item.presentationImageStatus === "failed",
            ).length,
          });

          if (generationIds.length > 0) {
            try {
              await requestGeneration(generationIds);
            } catch (generationError) {
              logError(
                "Could not start presentation generation",
                generationError,
              );
            }
          } else {
            log("No new generation request needed");
          }

          if (!active) {
            log("Stopping flow: screen is no longer active");
            return;
          }

          setLoading(false);
          log("Initial wardrobe loading finished");

          let pollCount = 0;

          while (active) {
            const unfinishedIds = itemsRef.current
              .filter(
                (item) =>
                  item.presentationImageStatus === "pending" ||
                  item.presentationImageStatus === "processing",
              )
              .map((item) => item.id);

            if (unfinishedIds.length === 0) {
              log("Polling stopped: no unfinished presentations", {
                pollCount,
              });
              break;
            }

            pollCount += 1;

            log("Waiting before next status poll", {
              pollCount,
              unfinishedIds,
              delayMs: 3000,
            });

            await sleep(3000);

            if (!active) {
              log("Polling cancelled: screen is no longer active");
              break;
            }

            try {
              log("Polling presentation status", {
                pollCount,
                unfinishedIds,
              });

              const statusResult = await apiRequest(
                `/api/wardrobe/analysis-status?ids=${unfinishedIds.join(",")}`,
              );

              if (!active || !Array.isArray(statusResult.items)) {
                log("Status response invalid or screen inactive", {
                  pollCount,
                  screenActive: active,
                  itemsIsArray: Array.isArray(statusResult.items),
                });
                break;
              }

              const statuses = statusResult.items as Array<{
                id: string;
                presentationImageStatus: PresentationStatus;
              }>;

              log("Presentation statuses received", {
                pollCount,
                statuses,
              });

              updateItems((current) =>
                current.map((item) => {
                  const status = statuses.find(
                    (entry) => entry.id === item.id,
                  );

                  if (!status) {
                    log("No status returned for wardrobe item", {
                      id: item.id,
                    });
                    return item;
                  }

                  return {
                    ...item,
                    presentationImageStatus: status.presentationImageStatus,
                  };
                }),
              );

              const hasNewlyCompleted = statuses.some(
                (item) => item.presentationImageStatus === "completed",
              );

              if (hasNewlyCompleted && active) {
                log("Presentation completed; refreshing signed image URLs", {
                  pollCount,
                });

                await loadWardrobe();

                log("Wardrobe refreshed after presentation completion", {
                  pollCount,
                });
              }
            } catch (pollError) {
              logError(`Presentation status poll ${pollCount} failed`, pollError);

              if (active) {
                await sleep(5000);
              }
            }
          }

          log("Closet loading flow exited", {
            currentVersion,
            screenActive: active,
          });
        } catch (loadError) {
          logError("Closet loading flow failed", loadError);

          if (active) {
            setError(
              loadError instanceof Error
                ? loadError.message
                : "Couldn't load your closet.",
            );
            setLoading(false);
          }
        }
      }

      void run();

      return () => {
        log("Closet screen blurred/unmounted", { currentVersion });
        active = false;
      };
    }, [loadWardrobe, requestGeneration, updateItems]),
  );

  const retryGeneration = async (id: string) => {
    log("Manual retry pressed", { itemId: id });

    setRetryingIds((current) => [...current, id]);

    try {
      await requestGeneration([id]);
      log("Manual retry request finished", { itemId: id });
    } catch (retryError) {
      logError(`Manual retry failed for ${id}`, retryError);
    } finally {
      setRetryingIds((current) => current.filter((itemId) => itemId !== id));
    }
  };

  const filteredItems = items.filter((item) =>
    matchesFilter(item, activeFilter),
  );

  return (
    <View className="flex-1 bg-[#FAF8F5]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        <View className="flex-row items-center justify-between px-5 pb-5 pt-4">
          <Pressable
            onPress={() => router.back()}
            className="h-10 w-10 items-center justify-center rounded-full bg-[#F0ECE6]"
          >
            <Ionicons name="arrow-back" size={21} color="#65463A" />
          </Pressable>

          <Text
            className="text-[21px] text-[#2B1B16]"
            style={{ fontFamily: "DMSerifDisplay" }}
          >
            My Closet
          </Text>

          <Pressable
            onPress={() => router.push("/")}
            className="h-10 w-10 items-center justify-center rounded-full bg-[#F0ECE6]"
          >
            <Ionicons name="add" size={25} color="#65463A" />
          </Pressable>
        </View>

        <View className="px-5">
          <Text
            className="text-[28px] leading-[35px] text-[#2B1B16]"
            style={{ fontFamily: "DMSerifDisplay" }}
          >
            Your wardrobe,{"\n"}your possibilities.
          </Text>

          <Text
            className="mt-2 text-[13px] text-[#85756D]"
            style={{ fontFamily: "Manrope" }}
          >
            Everything you own, all in one place.
          </Text>
        </View>

        <View className="mx-5 mt-5 flex-row items-center rounded-xl border border-[#EAE3DA] bg-white px-4 py-3">
          <Ionicons name="search-outline" size={19} color="#927D70" />
          <Text
            className="ml-3 text-[13px] text-[#A3958B]"
            style={{ fontFamily: "Manrope" }}
          >
            Your wardrobe
          </Text>
        </View>

        <View className="mt-6 flex-row items-center justify-between px-5">
          <View>
            <Text
              className="text-[20px] text-[#2B1B16]"
              style={{ fontFamily: "DMSerifDisplay" }}
            >
              Your collection
            </Text>
            <Text
              className="mt-1 text-[11px] text-[#8D7D73]"
              style={{ fontFamily: "Manrope" }}
            >
              {items.length} {items.length === 1 ? "item" : "items"}
            </Text>
          </View>

          {items.some(
            (item) =>
              item.presentationImageStatus === "pending" ||
              item.presentationImageStatus === "processing",
          ) && (
            <View className="flex-row items-center">
              <ActivityIndicator size="small" color="#8A6B58" />
              <Text className="ml-2 text-[11px] text-[#8D7D73]">
                Preparing images
              </Text>
            </View>
          )}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 16,
            paddingBottom: 8,
            gap: 8,
          }}
        >
          {filters.map((filter) => {
            const selected = activeFilter === filter;

            return (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 ${
                  selected
                    ? "bg-[#65463A]"
                    : "border border-[#E8DFD6] bg-transparent"
                }`}
              >
                <Text
                  className={`text-[12px] ${
                    selected ? "text-white" : "text-[#705D52]"
                  }`}
                  style={{ fontFamily: "Manrope" }}
                >
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {loading && items.length === 0 ? (
          <View className="items-center py-20">
            <ActivityIndicator size="large" color="#65463A" />
            <Text className="mt-3 text-[13px] text-[#85756D]">
              Opening your closet...
            </Text>
          </View>
        ) : error && items.length === 0 ? (
          <View className="items-center px-8 py-16">
            <Ionicons
              name="cloud-offline-outline"
              size={38}
              color="#927D70"
            />
            <Text className="mt-3 text-center text-[14px] text-[#65463A]">
              {error}
            </Text>
            <Pressable
              onPress={() => router.replace("/closet")}
              className="mt-4 rounded-full bg-[#65463A] px-5 py-3"
            >
              <Text className="text-[13px] text-white">Try again</Text>
            </Pressable>
          </View>
        ) : filteredItems.length === 0 ? (
          <View className="items-center px-8 py-16">
            <Ionicons name="shirt-outline" size={42} color="#927D70" />
            <Text
              className="mt-3 text-[19px] text-[#2B1B16]"
              style={{ fontFamily: "DMSerifDisplay" }}
            >
              Your closet is empty
            </Text>
            <Text className="mt-2 text-center text-[12px] text-[#85756D]">
              Add some clothes to start building your digital wardrobe.
            </Text>
          </View>
        ) : (
          <View className="mt-3 flex-row flex-wrap px-[14px]">
            {filteredItems.map((item) => {
              const isReady =
                item.presentationImageStatus === "completed" &&
                Boolean(item.presentationImageUrl);

              const isGenerating =
                item.presentationImageStatus === "pending" ||
                item.presentationImageStatus === "processing";

              return (
                <View key={item.id} className="w-1/2 p-[6px]">
                  <View className="overflow-hidden rounded-[14px]">
                    {isReady ? (
                      <Image
                        source={{ uri: item.presentationImageUrl! }}
                        resizeMode="cover"
                        className="h-[190px] w-full rounded-[14px] bg-[#EEE8E0]"
                        onLoad={() =>
                          log("Presentation image rendered", {
                            itemId: item.id,
                          })
                        }
                        onError={(event) =>
                          log("Presentation image failed to render", {
                            itemId: item.id,
                            error: event.nativeEvent.error,
                          })
                        }
                      />
                    ) : isGenerating ? (
                      <GeneratingPlaceholder />
                    ) : (
                      <View className="h-[190px] items-center justify-center rounded-[14px] bg-[#EEE8E0] px-3">
                        <Ionicons
                          name="image-outline"
                          size={34}
                          color="#927D70"
                        />
                        <Text className="mt-2 text-center text-[11px] text-[#65463A]">
                          Image couldn't be prepared
                        </Text>
                        <Pressable
                          disabled={retryingIds.includes(item.id)}
                          onPress={() => void retryGeneration(item.id)}
                          className="mt-3 rounded-full bg-[#65463A] px-3 py-2"
                        >
                          {retryingIds.includes(item.id) ? (
                            <ActivityIndicator size="small" color="#FFFFFF" />
                          ) : (
                            <Text className="text-[11px] text-white">
                              Try again
                            </Text>
                          )}
                        </Pressable>
                      </View>
                    )}

                    <Text
                      numberOfLines={1}
                      className="mt-3 text-[14px] text-[#2B1B16]"
                      style={{ fontFamily: "DMSerifDisplay" }}
                    >
                      {getCategoryLabel(item.subcategory || item.category)}
                    </Text>

                    <Text
                      className="mb-3 mt-1 text-[11px] text-[#8D7D73]"
                      style={{ fontFamily: "Manrope" }}
                    >
                      {getCategoryLabel(item.category)}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
