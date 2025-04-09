import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Button,
  View,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
export default function Login() {
  const [focusedUsername, setFocusedUsername] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const navigation = useRouter();
  const handleLoginPress = () => {
    navigation.push("/(tabs)");
  };
  return (
    <KeyboardAvoidingView className="flex-1 h-screen ">
      <LinearGradient
        colors={["#f1f5f9", "#f1f5f9", "#f1f5f9"]}
        locations={[0, 0.1, 1]}
        style={{ flex: 1 }}
      >
        <View className="w-fit -mt-20  h-72 flex items-start ">
          <Image
            className="w-full"
            resizeMode="cover"
            source={require("../assets/images/top_login.png")}
          />
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{ flex: 1, justifyContent: "space-between" }}
            className="py-12 px-5 "
          >
            <View>
              <View className="w-full  items-center h-16">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode="contain"
                  source={require("../assets/images/logo_garuda_png_blue.png")}
                />
              </View>
              <View className="w-full  items-center h-12">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode="contain"
                  source={require("../assets/images/Frame 307 (2).png")}
                />
              </View>
              <PoppinsText
                weight="600SemiBold"
                className=" text-lg text-blue-500 mt-10 "
              >
                Username
              </PoppinsText>
              <TextInput
                placeholder="Username"
                style={{
                  height: 45,
                  borderColor: focusedUsername ? "#5E91E9" : "gray",
                  borderBottomWidth: focusedUsername ? 3 : 1.5,
                  // borderRadius: 8,
                  paddingHorizontal: 5,
                  marginBottom: 10,
                }}
                onFocus={() => setFocusedUsername(true)}
                onBlur={() => setFocusedUsername(false)}
              />
              <PoppinsText
                weight="600SemiBold"
                className=" text-lg text-blue-500  "
              >
                Password
              </PoppinsText>
              <TextInput
                placeholder="********"
                secureTextEntry
                style={{
                  height: 45,
                  borderColor: focusedPassword ? "#5E91E9" : "gray",
                  borderBottomWidth: focusedPassword ? 3 : 1.5,
                  paddingHorizontal: 5,
                }}
                onFocus={() => setFocusedPassword(true)}
                onBlur={() => setFocusedPassword(false)}
              />
              <TouchableOpacity
                onPress={handleLoginPress}
                className="bg-[##5E91E9] h-[45px] flex justify-center items-center rounded-md mt-8"
              >
                <PoppinsText className="font-medium text-xl text-white">
                  Sign Up
                </PoppinsText>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
