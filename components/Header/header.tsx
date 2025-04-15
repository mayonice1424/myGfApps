import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";

type HeaderProps = {
  title: string;
  style?: object;
};

const Header = ({ title, style }: HeaderProps) => {
  const [focusedUsername, setFocusedUsername] = useState(false);
  const backgroundImage = require("../../assets/images/background.jpg"); // Pastikan path gambar benar

  return (
    <View style={[styles.headerContainer, style]}>
      <View style={styles.overlay}>
        <View style={styles.textInputContainer}>
          <FontAwesome5
            name="search"
            size={20}
            color={focusedUsername ? "#5E91E9" : "gray"}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            style={{
              ...styles.textInput,
              borderColor: focusedUsername ? "#5E91E9" : "gray",
              borderBottomWidth: focusedUsername ? 3 : 1.5,
              paddingLeft: 50,
              textAlign: "left",
            }}
            onFocus={() => setFocusedUsername(true)}
            onBlur={() => setFocusedUsername(false)}
          />
        </View>
        <View style={styles.userIconContainer}>
          <Ionicons name="notifications" size={20} color={"white"} />
        </View>
        <View style={styles.userIconContainer}>
          <MaterialIcons name="logout" size={20} color={"white"} />
        </View>
        {/* <View style={styles.userIconContainer}>
          <FontAwesome5 name="user-alt" size={20} color={"#3155D6"} />
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 100,
    zIndex: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  textInputContainer: {
    position: "relative",
    width: "80%",
    height: 40,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 10,
    left: 10,
    top: 8,
  },
  textInput: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 10,
    paddingVertical: 0,
  },
  userIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20,
    color: "white",
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  containerStatus: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
