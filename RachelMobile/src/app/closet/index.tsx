import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const filters = ["All", "Tops", "Bottoms", "Shoes", "Accessories"];

const items = [
  {
    id: "1",
    name: "White T-shirt",
    category: "Tops",
    icon: "shirt-outline",
    color: "#E9E5DD",
  },
  {
    id: "2",
    name: "Blue Denim",
    category: "Bottoms",
    icon: "body-outline",
    color: "#DCE4EC",
  },
  {
    id: "3",
    name: "Classic Shirt",
    category: "Tops",
    icon: "shirt-outline",
    color: "#E9DFD1",
  },
  {
    id: "4",
    name: "Everyday Sneakers",
    category: "Shoes",
    icon: "footsteps-outline",
    color: "#E8E4E0",
  },
  {
    id: "5",
    name: "Casual Jacket",
    category: "Tops",
    icon: "shirt-outline",
    color: "#DCDCD5",
  },
  {
    id: "6",
    name: "Everyday Bag",
    category: "Accessories",
    icon: "bag-outline",
    color: "#E9DFD1",
  },
];

export default function MyClosetScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <View className="flex-1 bg-[#FAF8F5]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        {/* Header */}
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

        {/* Intro */}
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

        {/* Search placeholder */}
        <Pressable className="mx-5 mt-5 flex-row items-center rounded-xl border border-[#EAE3DA] bg-white px-4 py-3">
          <Ionicons name="search-outline" size={19} color="#927D70" />
          <Text
            className="ml-3 text-[13px] text-[#A3958B]"
            style={{ fontFamily: "Manrope" }}
          >
            Search your wardrobe
          </Text>
        </Pressable>

        {/* Count */}
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
              {filteredItems.length} items
            </Text>
          </View>

          <Pressable className="flex-row items-center rounded-lg border border-[#E8DFD6] px-3 py-2">
            <Ionicons name="options-outline" size={16} color="#65463A" />
            <Text className="ml-2 text-[12px] text-[#65463A]">Sort</Text>
          </Pressable>
        </View>

        {/* Category filters */}
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

        {/* Item grid */}
        <View className="mt-3 flex-row flex-wrap px-[14px]">
          {filteredItems.map((item) => (
            <View key={item.id} className="w-1/2 p-[6px]">
              <Pressable className="overflow-hidden rounded-[14px]">
                <View
                  className="h-[190px] items-center justify-center rounded-[14px]"
                  style={{ backgroundColor: item.color }}
                >
                  <Ionicons
                    name={
                      item.icon as React.ComponentProps<typeof Ionicons>["name"]
                    }
                    size={66}
                    color="#8B7566"
                  />

                  <View className="absolute right-2 top-2">
                    <View className="h-8 w-8 items-center justify-center rounded-full bg-white/80">
                      <Ionicons
                        name="heart-outline"
                        size={17}
                        color="#65463A"
                      />
                    </View>
                  </View>
                </View>

                <Text
                  numberOfLines={1}
                  className="mt-3 text-[14px] text-[#2B1B16]"
                  style={{ fontFamily: "DMSerifDisplay" }}
                >
                  {item.name}
                </Text>

                <Text
                  className="mb-3 mt-1 text-[11px] text-[#8D7D73]"
                  style={{ fontFamily: "Manrope" }}
                >
                  {item.category}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        <Text
          className="mt-4 px-5 text-center text-[10px] text-[#A3958B]"
          style={{ fontFamily: "Manrope" }}
        >
          Sample items for preview · Your real wardrobe will appear here later.
        </Text>
      </ScrollView>
    </View>
  );
}
