import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import { LinearGradient } from "expo-linear-gradient";
import CardSm from "@/components/CardSosialMedia/cardSm";
import HeaderWithBack from "@/components/Header/headerWithBack";

export default function News() {
  return (
    <LinearGradient
      colors={["#a0c4ff", "#f1f5f9", "#f1f5f9"]}
      locations={[0, 0.1, 1]}
      className="flex-1  bg-[#f5f8ff00] h-screen flex justify-center items-center"
    >
      <HeaderWithBack title="News" />
      <ScrollView contentInset={{ bottom: 20 }} className="w-full">
        <View className="top-0 w-full flex justify-center items-center">
          <View className="flex flex-wrap mt-5 mb-12 flex-row justify-between">
            <CardSm
              imageSrc={require("../../assets/images/danaPrestasiSiswa.jpeg")}
              altText={"Logo"}
              link={"https://www.linkedin.com/feed/"}
              from={"LinkedIn"}
              ProfilePicture={require("../../assets/images/linkedIn.jpeg")}
              Username={"PT. Garudafood Putra Putri Jaya, Tbk "}
              subTitle={
                "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡"
              }
            />
            <CardSm
              imageSrc={require("../../assets/images/danaPrestasiSiswa.jpeg")}
              altText={"Logo"}
              link={"https://www.linkedin.com/feed/"}
              from={"LinkedIn"}
              ProfilePicture={require("../../assets/images/linkedIn.jpeg")}
              Username={"PT. Garudafood Putra Putri Jaya, Tbk "}
              subTitle={
                "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡"
              }
            />
            <CardSm
              imageSrc={require("../../assets/images/danaPrestasiSiswa.jpeg")}
              altText={"Logo"}
              link={"https://www.linkedin.com/feed/"}
              from={"LinkedIn"}
              ProfilePicture={require("../../assets/images/linkedIn.jpeg")}
              Username={"PT. Garudafood Putra Putri Jaya, Tbk "}
              subTitle={
                "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡"
              }
            />
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
