import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const WebViewScreen = () => {
  const { linkParams } = useLocalSearchParams();
  console.log("Yahaa", linkParams);

  if (!linkParams || typeof linkParams !== "string") {
    return (
      <View style={styles.container}>
        <Text>No valid link provided!</Text>
      </View>
    );
  }

  return <WebView source={{ uri: linkParams }} originWhitelist={["*"]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WebViewScreen;
