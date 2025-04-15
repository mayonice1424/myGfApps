import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Linking,
  Platform,
  Image,
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
import Approval from "./../../app/approval";

type CardAppsProps = {
  altText: string;
  Title: string;
  subTitle: string;
  link?: string;
  onPress: () => void;
};

const CardApps = ({
  altText,
  Title,
  subTitle,
  link,
  onPress,
}: CardAppsProps) => {
  const navigation = useRouter();
  const params = useLocalSearchParams();
  const { linkParams = link } = params;
  const handleLoginPress = () => {
    if (link && link.startsWith("/")) {
      navigation.push(link as any);
    } else {
      navigation.push({ pathname: "/webView", params: { linkParams } });
    }
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
        handleLoginPress();
      }}
    >
      <View className="flex w-full flex-col items-center justify-center rounded-xl">
        <View
          className="flex items-center justify-center mb-2 bg-white "
          style={{
            borderColor: "#D6E3EB",
            borderRadius: 10,
            width: 50,
            height: 50,
            shadowColor: "#333333",
            shadowOffset: {
              width: 6,
              height: 6,
            },
            shadowOpacity: 0.6,
            shadowRadius: 4,
            elevation: 10,
          }}
        >
          {/* Menampilkan ikon berdasarkan judul */}
          {Title === "Audit" ? (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/images/applications/Isolation_Mode.png")}
            />
          ) : Title === "HRIS" ? (
            <Image
              style={{ width: 25, height: 30 }}
              source={require("../../assets/images/applications/HRIS.png")}
            />
          ) : // <FontAwesome name="user" size={30} color="#4e97ff" />
          Title === "Event Organizer" ? (
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/applications/EventOrganizer.png")}
            />
          ) : Title === "BCS" ? (
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/images/applications/Bcs.png")}
            />
          ) : Title === "Teams" ? (
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/images/applications/Microsoft_Teams.png")}
            />
          ) : Title === "Rolling" ? (
            <Image
              style={{ width: 35, height: 25 }}
              source={require("../../assets/images/applications/Rolling.png")}
            />
          ) : Title === "Approval Cuti" ? (
            <MaterialCommunityIcons
              name="account-check"
              size={30}
              color="#4e97ff"
            />
          ) : (
            <Image
              style={{ width: 35, height: 25 }}
              source={require("../../assets/images/applications/Windows.png")}
            />
          )}
        </View>

        <PoppinsText
          weight="600SemiBold"
          className="text-sm text-center text-zinc-600 mt-2"
        >
          {Title}
        </PoppinsText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardApps;
