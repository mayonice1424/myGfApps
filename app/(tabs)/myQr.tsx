import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import { LinearGradient } from "expo-linear-gradient";
import CardSm from "@/components/CardSosialMedia/cardSm";
import HeaderWithBack from "@/components/Header/headerWithBack";
import { useRouter } from "expo-router";
export default function Account() {
  const navigation = useRouter();
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FFFFFF", "#FFFFFF"]}
      locations={[0, 0.1, 1]}
      className="flex-1  bg-[#f5f8ff00] h-screen flex justify-center items-center"
    >
      <HeaderWithBack title="My Qr" />
      <ScrollView
        contentInset={{ bottom: 20 }}
        className="w-full h-full flex bg-white "
      >
        <View
          className="top-0 w-full flex   justify-center items-center"
          style={{ paddingVertical: 70, paddingHorizontal: 10 }}
        >
          <View
            className="flex  flex-wrap w-full h-full    flex-row justify-between"
            style={{
              paddingHorizontal: 40,
              paddingVertical: 50,
              borderRadius: 10,
            }}
          >
            <View
              className="w-full  bg-red-500  justify-center items-center  h-1/2"
              style={{ backgroundColor: "#062F4D" }}
            >
              <PoppinsText
                weight="700Bold"
                className="text-white text-center rounded-lg  w-full"
                style={{ backgroundColor: "#062F4D" }}
              >
                Scan Here
              </PoppinsText>
              <Image source={require("../../assets/images/qr_generator.png")} />
              <PoppinsText
                weight="700Bold"
                className="text-white text-center rounded-lg  w-full"
                style={{ backgroundColor: "#062F4D" }}
              >
                Scan Here
              </PoppinsText>
            </View>
            <PoppinsText
              weight="500Medium"
              className="  w-full flex justify-center items-center text-center"
              style={{ paddingVertical: 70 }}
            >
              Pindai Disini
            </PoppinsText>
            <PoppinsText
              weight="500Medium"
              className="  w-full flex justify-center items-center text-center"
              style={{ paddingBottom: 10 }}
            >
              atau
            </PoppinsText>

            <TouchableOpacity
              onPress={() => {
                navigation.push({ pathname: "/webView" });
              }}
            >
              <PoppinsText
                weight="500Medium"
                className="  w-full flex justify-center items-center text-center"
                style={{ paddingVertical: 20 }}
              >
                Pindai untuk mengetahui kontak pengguna
              </PoppinsText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
