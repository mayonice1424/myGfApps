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
    position: "absolute", 
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 40, 
    justifyContent: "center",
    alignItems: "center", 
  },
});

export default HeaderStatusBar;
