import React, { useState, useRef } from "react";
import {
  Image,
  StyleSheet,
  FlatList,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import { LinearGradient } from "expo-linear-gradient";
import CardApps from "@/components/CardApps/cardApps";
import CardSm from "@/components/CardSosialMedia/cardSm";
import Header from "@/components/Header/header";
import HeaderStatusBar from "@/components/Header/headerTaskBar";

const { width } = Dimensions.get("window");
const backgroundImage = require("../../assets/images/background.jpg"); // Path to background image
const images = [
  require("../../assets/images/konten_1.jpg"),
  require("../../assets/images/konten_2.png"),
  require("../../assets/images/konten_3.jpg"),
];

const applications = [
  { title: "HRIS", subTitle: "HRIS Application", altText: "Logo" },
  {
    title: "MS Teams",
    subTitle: "Collaboration app for hybrid work",
    altText: "Logo",
  },
  { title: "HRIS", subTitle: "HRIS Application", altText: "Logo" },
  { title: "HRIS", subTitle: "HRIS Application", altText: "Logo" },

  { title: "ID Card", subTitle: "ID Card Application", altText: "Logo" },
  {
    title: "MS Teams",
    subTitle: "Collaboration app for hybrid work",
    altText: "Logo",
  },
  { title: "QR Profile", subTitle: "QR Profile Application", altText: "Logo" },

  { title: "ID Card", subTitle: "ID Card Application", altText: "Logo" },

  { title: "QR Profile", subTitle: "QR Profile Application", altText: "Logo" },
  // Add more applications if needed
];

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current; // To track scroll position
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // To manage header visibility

  // Handle scroll event
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY <= 0) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      },
    }
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <View style={styles.container}>
      {isHeaderVisible && <HeaderStatusBar style={styles.headerStatusBar} />}

      <Animated.ScrollView
        contentInset={{ bottom: 60 }}
        className="w-full"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <LinearGradient
          colors={["#a0c4ff", "#f1f5f9", "#f1f5f9"]}
          locations={[0, 0.1, 1]}
        >
          <View className="top-0 w-full flex justify-center items-center">
            <ImageBackground
              resizeMode="cover"
              source={backgroundImage}
              style={styles.imageBackground}
            >
              <Header title="Welcome to the App" style={styles.header} />
              <FlatList
                data={images}
                horizontal
                pagingEnabled
                renderItem={({ item, index }) => (
                  <View style={{ width: width }}>
                    <View
                      className="items-center flex justify-center"
                      style={{ width: width }}
                    >
                      <Image source={item} style={styles.image} />
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => String(index)}
                showsHorizontalScrollIndicator={false}
              />
            </ImageBackground>

            <View
              className="absolute flex w-full pt-28"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 5,
              }}
            >
              <TouchableOpacity
                onPress={prevSlide}
                className="bg-white shadow-md"
                style={{ borderRadius: 100 }}
              >
                <Feather name="chevron-left" size={25} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={nextSlide}
                className="bg-white shadow-md"
                style={{ borderRadius: 100 }}
              >
                <Feather name="chevron-right" size={25} color="#333" />
              </TouchableOpacity>
            </View>
          </View>

          <View
            className="flex justify-center"
            style={{ paddingHorizontal: 10 }}
          >
            <PoppinsText weight="600SemiBold" className="text-xl mt-10">
              Application
            </PoppinsText>
            <View className="flex flex-wrap mt-5 flex-row justify-between">
              {applications.slice(0, 8).map((app, index) => (
                <View
                  key={index}
                  className="w-1/4 mb-4 justify-center flex items-center"
                >
                  <CardApps
                    altText={app.altText}
                    Title={index === 7 ? "Other" : app.title}
                    subTitle={app.subTitle}
                  />
                </View>
              ))}
            </View>
          </View>

          <View className="mt-10" style={{ paddingHorizontal: 10 }}>
            <PoppinsText weight="600SemiBold" className="text-xl ">
              Sosial Media
            </PoppinsText>
            <View className="flex flex-wrap mt-5 mb-20 flex-row justify-between">
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
        </LinearGradient>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F8FF",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
    height: 270,
    justifyContent: "center",
    display: "flex",
    overflow: "hidden",
  },
  headerStatusBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "red",
    height: 40,
    zIndex: 10,
  },
});
