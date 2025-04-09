import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Inbox() {
  return (
    <View className="bg-red-400 flex-1  h-screen flex justify-center items-center">
      <Text>Welcome!</Text>
    </View>
  );
}
