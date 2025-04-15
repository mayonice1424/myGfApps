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
import {
  useNavigation,
  useRouter,
  useLocalSearchParams,
  Link,
} from "expo-router";
import { PoppinsText } from "../PoppinsText/poppinsText";

type CardAppsProps = {
  altText: string;
  Title: string;
  subTitle: string;
  link?: string;
  onPress: () => void;
};

const CardAppsModal = ({
  altText,
  Title,
  subTitle,
  link,
  onPress,
}: CardAppsProps) => {
  const navigation = useRouter();
  const params = useLocalSearchParams();
  console.log("ini card", link);
  const { linkParams = link } = params;
  const handleLoginPress = () => {
    navigation.push({ pathname: "/webView", params: { linkParams } });
  };
  // const openApp = (appUrl: string) => {
  //   Linking.canOpenURL(appUrl)
  //     .then((supported) => {
  //       if (supported) {
  //         Linking.openURL(appUrl);
  //       } else {
  //         const storeUrl =
  //           Platform.OS === "android" && Title == "MS Teams"
  //             ? "https://play.google.com/store/apps/details?id=com.microsoft.teams"
  //             : Platform.OS === "ios" && Title == "MS Teams"
  //               ? "https://apps.apple.com/us/app/microsoft-teams/id1113153706"
  //               : Platform.OS === "android" && Title == "HRIS"
  //                 ? "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id"
  //                 : "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id";
  //         Linking.openURL(storeUrl);
  //       }
  //     })
  //     .catch((err) => console.error("An error occurred", err));
  // };
  // const handlePress = () => {
  // };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Title != "Other" ? handleLoginPress() : onPress();
      }}
    >
      <View className="flex w-full flex-col items-center justify-center rounded-xl">
        <View
          className="flex items-center justify-center mb-4  border rounded-full w-20 h-20"
          style={{ borderColor: "#C7EAFF" }}
        >
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

export default CardAppsModal;
