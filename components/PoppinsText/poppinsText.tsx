import React from "react";
import { Text, TextStyle } from "react-native";
import { useFonts } from "@expo-google-fonts/poppins";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

// Props for PoppinsText
type PoppinsTextProps = {
  style?: TextStyle; // For text styling passed directly
  className?: string; // NativeWind className support
  weight?:
    | "100Thin"
    | "200ExtraLight"
    | "300Light"
    | "400Regular"
    | "500Medium"
    | "600SemiBold"
    | "700Bold"
    | "800ExtraBold"
    | "900Black";
  italic?: boolean;
  children: React.ReactNode;
};

export const PoppinsText = ({
  style,
  className,
  weight = "400Regular", // Default to '400Regular' if no weight is specified
  italic = false,
  children,
}: PoppinsTextProps) => {
  // Load fonts
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  // If fonts aren't loaded, return loading state
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  // Determine the appropriate fontFamily based on weight and italic
  let fontFamily = "Poppins_400Regular"; // Default font

  switch (weight) {
    case "100Thin":
      fontFamily = italic ? "Poppins_100Thin_Italic" : "Poppins_100Thin";
      break;
    case "200ExtraLight":
      fontFamily = italic
        ? "Poppins_200ExtraLight_Italic"
        : "Poppins_200ExtraLight";
      break;
    case "300Light":
      fontFamily = italic ? "Poppins_300Light_Italic" : "Poppins_300Light";
      break;
    case "400Regular":
      fontFamily = italic ? "Poppins_400Regular_Italic" : "Poppins_400Regular";
      break;
    case "500Medium":
      fontFamily = italic ? "Poppins_500Medium_Italic" : "Poppins_500Medium";
      break;
    case "600SemiBold":
      fontFamily = italic
        ? "Poppins_600SemiBold_Italic"
        : "Poppins_600SemiBold";
      break;
    case "700Bold":
      fontFamily = italic ? "Poppins_700Bold_Italic" : "Poppins_700Bold";
      break;
    case "800ExtraBold":
      fontFamily = italic
        ? "Poppins_800ExtraBold_Italic"
        : "Poppins_800ExtraBold";
      break;
    case "900Black":
      fontFamily = italic ? "Poppins_900Black_Italic" : "Poppins_900Black";
      break;
    default:
      fontFamily = "Poppins_400Regular";
  }

  return (
    <Text
      style={[
        { fontFamily }, // Font family is selected dynamically
        style, // Apply any extra styles passed
      ]}
      className={className} // Apply NativeWind classes if passed
    >
      {children}
    </Text>
  );
};
