import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";

type HeaderProps = {
  style?: object;
};

const HeaderStatusBar = ({ style }: HeaderProps) => {
  const [focusedUsername, setFocusedUsername] = useState(false);
  const backgroundImage = require("../../assets/images/background.jpg"); // Pastikan path gambar benar

  return (
    <ImageBackground
      style={[styles.containerStatus, style]}
      resizeMode="cover"
      source={backgroundImage}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 100,
    // paddingTop: 40,
    // paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerStatus: {
    position: "absolute", // Fixed position at the top
    top: 0,
    left: 0,
    right: 0,
    zIndex: 40, // Ensure it stays on top of content
    height: 40, // Adjust height as needed
    justifyContent: "center", // Align content vertically
    alignItems: "center", // Center items horizontally
  },
});

export default HeaderStatusBar;
