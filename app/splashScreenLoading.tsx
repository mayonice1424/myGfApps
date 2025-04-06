import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Image,
  Text,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";
export default function SplashScreen() {
  return (
    <KeyboardAvoidingView className="flex-1 h-screen ">
      <LinearGradient
        colors={["#f1f5f9", "#f1f5f9", "#f1f5f9"]}
        locations={[0, 0.9, 1]}
        style={{ flex: 1 }}
        className="flex justify-center items-center"
      >
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
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
