import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { PoppinsText } from "../PoppinsText/poppinsText";

type CardSmProps = {
  imageSrc: object;
  altText: string;
  link: string;
  Username: string;
  from: string;
  subTitle: string;
  ProfilePicture: object;
};

const CardSm = ({
  imageSrc,
  altText,
  link,
  Username,
  from,
  subTitle,
  ProfilePicture,
}: CardSmProps) => {
  const handlePress = () => {
    Linking.openURL(link).catch((err) =>
      console.error("An error occurred while opening the link", err)
    );
  };
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imageSrc}
        style={styles.imageContainer}
      ></ImageBackground>

      <View style={styles.separator} />

      {/* Profile Information */}
      <View style={styles.profileInfoContainer}>
        <Image source={ProfilePicture} style={styles.profileImage} />
        <Text style={styles.username}>{Username}</Text>
      </View>

      <Text style={styles.subTitle} numberOfLines={2}>
        {subTitle}
      </Text>

      <TouchableOpacity onPress={handlePress} style={styles.linkButton}>
        <LinearGradient
          colors={["#07A9CE", "#11599B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderRadius: 100,
          }}
        >
          <PoppinsText weight="500Medium" style={styles.linkText}>
            Read More on {from}
          </PoppinsText>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  imageContainer: {
    width: "100%",
    height: "auto",

    aspectRatio: "5/2.3",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#5E91E9",
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  subTitle: {
    fontSize: 12,
    color: "#666",
    marginVertical: 5,
  },
  linkButton: {
    marginTop: 10,
    // backgroundColor: "#4e97ff",
    // paddingVertical: 8,
    // paddingHorizontal: 12,
    borderRadius: 5,
  },
  linkText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
});

export default CardSm;
