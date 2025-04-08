// app/index.tsx
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "expo-router"; // Gunakan useRouter dari expo-router
import { Animated, View, Text } from "react-native";
import SplashScreen from "./splashScreenLoading"; // Komponen splash screen
import LottieView from "lottie-react-native";
export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Inisialisasi useRouter
  const animation = useRef<LottieView>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Referensi animasi untuk fade

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggedIn(false); // Ganti dengan kondisi login yang sesungguhnya
      setIsLoading(false); // Setelah loading selesai
    }, 3000); // Waktu splash screen, misal 3 detik

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        if (isLoggedIn) {
          router.replace("/(tabs)");
        } else {
          router.replace("/login");
        }
      }, 1000);
    }
  }, [isLoading, isLoggedIn, router, fadeAnim]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/Loading/Animation - 1744008341198.json")}
      />
    </Animated.View>
  );
}
