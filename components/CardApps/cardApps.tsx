import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Linking,
  Platform,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { PoppinsText } from "../PoppinsText/poppinsText";

// Tipe untuk props komponen
type CardAppsProps = {
  altText: string; // Tipe untuk alt text
  Title: string; // Judul aplikasi
  subTitle: string; // Subjudul aplikasi
};

const CardApps = ({ altText, Title, subTitle }: CardAppsProps) => {
  // Fungsi untuk membuka aplikasi Microsoft Teams atau aplikasi lainnya
  const openApp = (appUrl: string) => {
    Linking.canOpenURL(appUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(appUrl); // Membuka aplikasi jika terpasang
        } else {
          // Jika aplikasi tidak terpasang, arahkan pengguna ke halaman aplikasi di Play Store

          const storeUrl =
            Platform.OS === "android" && Title == "MS Teams"
              ? "https://play.google.com/store/apps/details?id=com.microsoft.teams"
              : Platform.OS === "ios" && Title == "MS Teams"
                ? "https://apps.apple.com/us/app/microsoft-teams/id1113153706"
                : Platform.OS === "android" && Title == "HRIS"
                  ? "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id"
                  : "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id"; // Gantilah dengan App Store URL jika iOS
          Linking.openURL(storeUrl); // Arahkan ke halaman aplikasi di Play Store/App Store
        }
      })
      .catch((err) => console.error("An error occurred", err)); // Tangani error jika terjadi
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (Title === "MS Teams") {
          openApp("msteams://"); // Membuka Microsoft Teams menggunakan skema URL
        } else if (Title === "HRIS") {
          openApp(
            "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id"
          ); // Misalnya, ganti dengan URL aplikasi HRIS Anda
        }
      }}
    >
      <View className="flex w-full flex-col items-center justify-center rounded-xl">
        <View className="flex items-center justify-center mb-4 border-white border rounded-full w-20 h-20">
          {/* Menampilkan ikon berdasarkan judul */}
          {Title === "HRIS" ? (
            <FontAwesome name="users" size={30} color="#4e97ff" />
          ) : Title === "ID Card" ? (
            <FontAwesome name="user" size={30} color="#4e97ff" />
          ) : Title === "QR Profile" ? (
            <MaterialIcons name="qr-code-scanner" size={30} color="#4e97ff" />
          ) : Title === "MS Teams" ? (
            <MaterialCommunityIcons
              name="microsoft-teams"
              size={30}
              color="#4e97ff"
            />
          ) : (
            <FontAwesome name="th-large" size={30} color="#4e97ff" />
          )}
        </View>

        {/* Judul Aplikasi */}
        <PoppinsText className="text-sm text-center text-zinc-600 mt-2">
          {Title}
        </PoppinsText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardApps;
