import { useState } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const [text, setText] = useState("");
  const handleTextChange = (inputText: string) => {
    setText(inputText);
  };
  return (
    <SafeAreaView>
      <View className="">
        <Text className="">Yahaha</Text>
      </View>
    </SafeAreaView>
  );
}
