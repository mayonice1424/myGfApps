import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";
export default function Login() {
  return (
    <KeyboardAvoidingView className="flex-1 h-screen ">
      <LinearGradient
        colors={["#a0c4ff", "#a0c0ff", "#f1f5f9"]}
        locations={[0, 0.1, 1]}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
            <TextInput
              placeholder="Email"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 10,
                marginBottom: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 8,
                paddingHorizontal: 10,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}
