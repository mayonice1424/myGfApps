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
import { Drawer } from "expo-router/drawer";
import { Feather, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import { LinearGradient } from "expo-linear-gradient";
import CardApps from "@/components/CardApps/cardApps";
import CardSm from "@/components/CardSosialMedia/cardSm";
import Header from "@/components/Header/header";
import HeaderStatusBar from "@/components/Header/headerTaskBar";
import DrawerModal from "@/components/Modal/modal";

const { width } = Dimensions.get("window");
const backgroundImage = require("../../assets/images/background.jpg"); // Path to background image
const images = [
  require("../../assets/images/konten_1.jpg"),
  require("../../assets/images/konten_2.png"),
  require("../../assets/images/konten_3.jpg"),
];

const dataSosialMedia = [
  {
    id: "1",
    imageSrc: require("../../assets/images/danaPrestasiSiswa.jpeg"),
    altText: "Logo",
    link: "https://www.linkedin.com/feed/",
    from: "LinkedIn",
    Username: "PT. Garudafood Putra Putri Jaya, Tbk",
    subTitle:
      "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡",
    ProfilePicture: require("../../assets/images/linkedIn.jpeg"),
  },
  {
    id: "2",
    imageSrc: require("../../assets/images/danaPrestasiSiswa.jpeg"),
    altText: "Logo",
    link: "https://www.linkedin.com/feed/",
    from: "LinkedIn",
    Username: "PT. Garudafood Putra Putri Jaya, Tbk",
    subTitle:
      "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡",
    ProfilePicture: require("../../assets/images/linkedIn.jpeg"),
  },
  {
    id: "3",
    imageSrc: require("../../assets/images/danaPrestasiSiswa.jpeg"),
    altText: "Logo",
    link: "https://www.linkedin.com/feed/",
    from: "LinkedIn",
    Username: "PT. Garudafood Putra Putri Jaya, Tbk",
    subTitle:
      "Di Garudafood Group, kami percaya bahwa masa depan perusahaan yang sukses dimulai dari pendidikan anak-anak karyawan yang berbakat dan penuh potensi. 🎓💡",
    ProfilePicture: require("../../assets/images/linkedIn.jpeg"),
  },
];

const applications = [
  {
    title: "Audit",
    subTitle: "HRIS Application",
    altText: "Logo",
    link: "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id",
  },  
  {
    title: "BCS",
    subTitle: "Collaboration app for hybrid work",
    altText: "Logo",
    link: "https://teams.microsoft.com/v2/?lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn&culture=id-id&country=id",
  },
  {
    title: "Approval Cuti",
    subTitle: "ID Card Application",
    altText: "Logo",
    link: "/approval",
  },
  {
    title: "HRIS",
    subTitle: "HRIS Application",
    altText: "Logo",
    link: "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id",
  },

  {
    title: "Event Organizer",
    subTitle: "ID Card Application",
    altText: "Logo",
    link: "/profile",
  },
  {
    title: "Teams",
    subTitle: "Collaboration app for hybrid work",
    altText: "Logo",
    link: "https://teams.microsoft.com/v2/?lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn&culture=id-id&country=id",
  },
  {
    title: "Rolling",
    subTitle: "QR Profile Application",
    altText: "Logo",
    link: "/qr",
  },

  {
    title: "ID Card",
    subTitle: "ID Card Application",
    altText: "Logo",
    link: "/semuaMenu",
  },

  {
    title: "QR Profile",
    subTitle: "QR Profile Application",
    altText: "Logo",
    link: "/qr",
  },
  // Add more applications if needed
];

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOtherButtonClick = () => {
    setIsDrawerOpen(true);
  };
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

  const handleOpenDrawer = () => {
    setIsDrawerOpen((prev) => !prev); // Toggle the drawer open/close
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <View style={styles.container}>
      <DrawerModal isVisible={isDrawerOpen} onClose={handleOpenDrawer} />
      {isHeaderVisible && <View style={styles.headerStatusBar} />}
      <Animated.ScrollView
        contentInset={{ bottom: 60 }}
        className="w-full"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{ backgroundColor: "#EDEDED" }}>
          <View className="top-0  w-full flex justify-center items-center">
            <View style={styles.imageBackground}>
              <Header title="Welcome to the App" style={styles.header} />

              <View
                className="w-full justify-end items-end flex "
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                <View
                  className="justify-start items-start flex "
                  style={{
                    width: "100%",
                    position: "absolute",
                    zIndex: 5,
                    marginTop: -20,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/Ellipseright.png")}
                    />
                    <View
                      className=" h-full "
                      style={{
                        width: "55%",
                        position: "absolute",
                        bottom: -30,
                        flexDirection: "row",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#D9D9D9",
                          width: 55,
                          height: 55,
                          marginLeft: 10,
                          borderRadius: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FontAwesome5
                          name="user-alt"
                          size={22}
                          color={"#6166A2"}
                        />
                      </View>
                      <View className="ml-2">
                        <PoppinsText
                          weight="600SemiBold"
                          className="text-white"
                        >
                          ILHAM NOFRI YANDRA
                        </PoppinsText>
                        <PoppinsText weight="400Regular" className="text-white">
                          291381327483124
                        </PoppinsText>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  className="flex w-full"
                  style={{
                    width: "40%",
                    display: "flex",
                    alignItems: "flex-end",
                    marginTop: -50,
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 5,
                      height: "100%",
                      display: "flex",
                      marginTop: 20,

                      justifyContent: "flex-end",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/product.png")}
                      style={{ marginRight: -20 }}
                    />
                  </View>
                  <Image
                    style={{ marginTop: 7 }}
                    source={require("../../assets/images/Ellipse.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="flex justify-center">
            <View
              className="flex justify-center  items-center  "
              style={{ paddingHorizontal: 10, marginVertical: 20 }}
            >
              <View className="flex flex-wrap items-start  flex-row justify-between rounded-xl ">
                {applications.slice(0, 8).map((app, index) => (
                  <View
                    key={index}
                    className="w-1/4 mb-4 justify-center flex items-center "
                  >
                    <CardApps
                      altText={app.altText}
                      link={app.link}
                      onPress={index === 7 ? () => {} : () => {}}
                      Title={index === 7 ? "Other" : app.title}
                      subTitle={app.subTitle}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
          <FlatList
            data={images}
            horizontal
            pagingEnabled
            renderItem={({ item, index }) => (
              <View style={{ width: width }}>
                <View
                  className="items-center flex justify-center"
                  style={{
                    width: width - 20,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                >
                  <Image source={item} style={styles.image} />
                </View>
              </View>
            )}
            keyExtractor={(item, index) => String(index)}
            showsHorizontalScrollIndicator={false}
          />
          <View
            className="flex justify-center w-full "
            style={{ paddingHorizontal: 10 }}
          >
            <View
              className="mt-5"
              style={{
                borderRadius: 8,
                backgroundColor: "white",
                marginBottom: 90,
              }}
            >
              <View
                className="w-full px-5  "
                style={{
                  backgroundColor: "#062F4D",
                  paddingVertical: 10,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  marginBottom: 10,
                }}
              >
                <PoppinsText weight="500Medium" className="text-xl text-white">
                  Sosial Media
                </PoppinsText>
              </View>
              <View className="flex flex-wrap   flex-row justify-between">
                <FlatList
                  data={dataSosialMedia}
                  horizontal
                  pagingEnabled
                  renderItem={({ item, index }) => (
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View style={styles.cardWrapper}>
                        <CardSm
                          imageSrc={item.imageSrc}
                          altText={item.altText}
                          link={item.link}
                          from={item.from}
                          ProfilePicture={item.ProfilePicture}
                          Username={item.Username}
                          subTitle={item.subTitle}
                        />
                      </View>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                  showsHorizontalScrollIndicator={false}
                />

                {/* <CardSm
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
                /> */}
              </View>
            </View>
          </View>
        </View>
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
    borderColor: "white",
    borderWidth: 2,
  },
  cardWrapper: {
    width: width - 20,
    paddingHorizontal: 5,
  },
  header: {
    // backgroundColor: "red",
    alignItems: "flex-start",
    display: "flex",
    justifyContent: "flex-start",
  },
  imageBackground: {
    width: "100%",
    backgroundColor: "#062F4D",
    height: 220,
    justifyContent: "flex-start",
    borderBottomEndRadius: 27,
    borderBottomStartRadius: 27,
    display: "flex",
    overflow: "hidden",
  },
  headerStatusBar: {
    top: 0,
    width: "100%",
    height: 40,
    backgroundColor: "#062F4D",
  },
});
