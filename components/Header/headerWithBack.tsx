import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { PoppinsText } from "../PoppinsText/poppinsText";

type HeaderProps = {
  title: string;
  style?: object;
};

const HeaderWithBack = ({ title, style }: HeaderProps) => {
  const [focusedUsername, setFocusedUsername] = useState(false);
  const backgroundImage = require("../../assets/images/background.jpg");
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    // <ImageBackground
    //   style={[styles.headerContainer, style]}
    //   resizeMode="cover"
    //   source={backgroundImage}
    // >
    <View style={[styles.headerContainer, style]}>
      <View style={[styles.overlay]} className="overlay">
        <TouchableOpacity
          onPress={handleGoBack}
          style={{
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons
            style={{ color: "white" }}
            name="keyboard-backspace"
            size={26}
          />
        </TouchableOpacity>
        <PoppinsText
          weight="600SemiBold"
          style={{
            fontSize: 18,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
            color: "white",
          }}
          className="text-xl"
        >
          {title}
        </PoppinsText>
      </View>
    </View>

    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 85,
    // borderBottomLeftRadius: 20,
    paddingHorizontal: 10,
    // borderBottomRightRadius: 20,
    display: "flex",
    backgroundColor: "#062F4D",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default HeaderWithBack;
