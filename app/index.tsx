// app/index.tsx
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "expo-router"; // Gunakan useRouter dari expo-router
import { Animated, View, Text } from "react-native";
import SplashScreen from "./splashScreenLoading"; // Komponen splash screen

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Inisialisasi useRouter

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
      // Mulai animasi fade-in saat login
      Animated.timing(fadeAnim, {
        toValue: 1, // Opacity menjadi 1
        duration: 1000, // Durasi transisi 1 detik
        useNativeDriver: true,
      }).start();

      // Setelah animasi selesai, arahkan ke halaman login atau tabs
      setTimeout(() => {
        if (isLoggedIn) {
          router.replace("/(tabs)"); // Arahkan ke tabs jika logged in
        } else {
          router.replace("/login"); // Arahkan ke login jika belum logged in
        }
      }, 1000); // Menunggu animasi selesai sebelum navigasi
    }
  }, [isLoading, isLoggedIn, router, fadeAnim]);

  // Render splash screen jika sedang loading
  if (isLoading) {
    return <SplashScreen />; // Menampilkan komponen splash screen
  }

  // Animasi transisi untuk login page
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
      {/* Halaman login atau konten lainnya */}
      <Text>Redirecting...</Text>
    </Animated.View>
  );
}
