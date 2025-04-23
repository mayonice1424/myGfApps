import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import HeaderWithBack from "@/components/Header/headerWithBack";
import { useRouter } from "expo-router";
// import QRCode from "react-native-qrcode-svg"; // QRCode from the right package
import { FontAwesome5 } from "@expo/vector-icons";

export default function Account() {
  const navigation = useRouter();

  return (
    <View>
      <HeaderWithBack title="My Qr" />
      <ScrollView
        contentInset={{ bottom: 20 }}
        className="w-full h-full flex bg-white"
      >
        <View
          className="top-0 w-full flex mt-10 justify-center items-center"
          style={{ paddingHorizontal: 50 }}
        >
          <View
            className="flex flex-wrap w-full h-full flex-row justify-between"
            style={{ marginTop: 40, borderRadius: 10 }}
          >
            <View
              className="w-full flex justify-evenly flex-col items-center"
              style={{ backgroundColor: "#062F4D" }}
            >
              <PoppinsText
                weight="700Bold"
                className="text-white text-center rounded-lg w-full"
              >
                Scan Here
              </PoppinsText>
              <View>
                {/* <QRCode value="http://awesome.link.qr" /> */}
              </View>
              <PoppinsText
                weight="700Bold"
                className="text-white text-center rounded-lg w-full"
              >
                Scan Here
              </PoppinsText>
            </View>
            <View className="mt-10 w-full gap-y-3">
              <TouchableOpacity
                onPress={() => navigation.push({ pathname: "/qrCodeScanner" })}
              >
                <View
                  style={{ borderRadius: 20 }}
                  className="flex flex-row w-full bg-blue-500 justify-center items-center text-center"
                >
                  <FontAwesome5 name="camera" size={20} color="white" />
                  <PoppinsText
                    weight="600SemiBold"
                    style={{
                      color: "white",
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      backgroundColor: "#3b82f6",
                    }}
                  >
                    Open Camera
                  </PoppinsText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
