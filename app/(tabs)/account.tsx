import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import HeaderWithBack from "@/components/Header/headerWithBack";

export default function Account() {
  // State to track the selected tab
  const [activeTab, setActiveTab] = useState("profile");

  // Function to render content based on the active tab
  const renderTabContent = () => {
    if (activeTab === "profile") {
      return (
        <View className="w-full h-screen bg-red-500">
          <PoppinsText
            weight="500Medium"
            style={{ fontSize: 18, color: "slategray" }}
          >
            Profile Content
          </PoppinsText>
        </View>
      );
    } else if (activeTab === "idCard") {
      return (
        <View>
          <PoppinsText
            weight="500Medium"
            style={{ fontSize: 18, color: "slategray" }}
          >
            Id Card Content
          </PoppinsText>
          {/* Add id card content here */}
        </View>
      );
    }
  };

  return (
    <LinearGradient
      colors={["#a0c4ff", "#f1f5f9", "#f1f5f9"]}
      locations={[0, 0.1, 1]}
      style={{
        flex: 1,
        backgroundColor: "#f5f8ff00",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeaderWithBack title="Account" />
      <ScrollView contentInset={{ bottom: 20 }} style={{ width: "100%" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // marginBottom: 12,
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                width: "50%",
                backgroundColor: activeTab === "profile" ? "white" : "white",
                paddingVertical: 12,
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: activeTab === "profile" ? 3 : 0,
                borderBottomColor: "#3B82F6",
              }}
              onPress={() => setActiveTab("profile")}
            >
              <PoppinsText
                weight={activeTab === "profile" ? "600SemiBold" : "500Medium"}
                style={{
                  fontSize: 16,
                  color: activeTab === "profile" ? "#3B82F6" : "slategray",
                }}
              >
                Profile
              </PoppinsText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "50%",
                backgroundColor: activeTab === "idCard" ? "white" : "white",
                paddingVertical: 12,
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: activeTab === "idCard" ? 3 : 0,
                borderBottomColor: "#3B82F6",
              }}
              onPress={() => setActiveTab("idCard")}
            >
              <PoppinsText
                weight={activeTab === "idCard" ? "600SemiBold" : "500Medium"}
                style={{
                  fontSize: 16,
                  color: activeTab === "idCard" ? "#3B82F6" : "slategray",
                }}
              >
                ID Card
              </PoppinsText>
            </TouchableOpacity>
          </View>
          {renderTabContent()}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
