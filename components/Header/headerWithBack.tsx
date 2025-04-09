import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { PoppinsText } from "../PoppinsText/poppinsText";

type HeaderProps = {
  title: string;
  style?: object;
};

const HeaderWithBack = ({ title, style }: HeaderProps) => {
  const [focusedUsername, setFocusedUsername] = useState(false);
  const backgroundImage = require("../../assets/images/background.jpg"); // Pastikan path gambar benar

  return (
    <ImageBackground
      style={[styles.headerContainer, style]}
      resizeMode="cover"
      source={backgroundImage}
    >
      <View style={[styles.overlay]} className="overlay">
        <PoppinsText
          weight="600SemiBold"
          style={{ fontSize: 22, color: "white" }}
          className="text-xl"
        >
          {title}
        </PoppinsText>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 70,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: "flex",
    backgroundColor: "white",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    height: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default HeaderWithBack;
