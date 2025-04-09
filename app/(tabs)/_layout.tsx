import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
// import { IconSymbol } from "@/components/ui/IconSymbol";
// import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import "../../global.css";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    
    <Tabs
      // className="bg-red-500"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          // boxShadow: 5,
          // flex: "flex",
          backgroundColor: "white",
          left: 16,
          right: 16,
          height: 60,
          elevation: 0,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarActiveTintColor: "#3155D6", // Customize active tab color here
        tabBarInactiveTintColor: "#9A9A9A",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center flex justify-center">
              <Entypo name="home" size={30} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          // tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, color }) => (
            <View className="items-center flex justify-center">
              <Ionicons size={28} name="newspaper" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="inbox" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="inbox"
        options={{
          title: "Explore",
          // tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
