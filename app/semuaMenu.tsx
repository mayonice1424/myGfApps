import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import HeaderWithBack from "@/components/Header/headerWithBack";
import TouchableDefaultType from "@/components/InputComponent/InputDefault";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import CardApps from "@/components/CardApps/cardApps";

const form = [
  {
    form: [
      // { title: "Name", placeholder: "John Doe", required: true, type: "text" },
      {
        title: "Email",
        placeholder: "example@example.com",
        required: true,
        type: "email",
      },
      {
        title: "Lama Cuti",
        placeholder: "example@example.com",
        required: true,
        type: "number",
      },
      // { title: "Lama Cuti", placeholder: "4", required: true, type: "number" },
      // {
      //   title: "Date",
      //   placeholder: "MM/DD/YYYY",
      //   required: true,
      //   type: "datetime",
      // },
      // { title: "Name", placeholder: "John Doe", required: true, type: "text" },
      // {
      //   title: "Email",
      //   placeholder: "example@example.com",
      //   required: true,
      //   type: "email",
      // },
      // {
      //   title: "Date",
      //   placeholder: "MM/DD/YYYY",
      //   required: true,
      //   type: "datetime",
      // },
    ],
  },
  {
    button: [
      {
        title: "Submit",
        apiLink: "/yahahah",
        link: "/home",
        type: "submit",
        color: "#3B82F6",
      },
      { title: "Cancel", link: "/home", type: "cancel", color: "#EA1E1E" },
    ],
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
    title: "Audit",
    subTitle: "HRIS Application",
    altText: "Logo",
    link: "https://play.google.com/store/apps/details?id=com.proint.hc.mobile&hl=id",
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
    title: "Teams",
    subTitle: "Collaboration app for hybrid work",
    altText: "Logo",
    // category: "",
    link: "https://teams.microsoft.com/v2/?lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn&culture=id-id&country=id",
  },
  {
    title: "QR Profile",
    subTitle: "QR Profile Application",
    altText: "Logo",
    link: "/qr",
  },
  // Add more applications if needed
];
export default function AllMenu() {
  const currentDate = new Date();
  const [formData, setFormData] = useState({ name: "", prefix: "" });
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  const formattedLastDay = `${lastDayOfMonth.getDate()} ${lastDayOfMonth.toLocaleString("default", { month: "long" })} ${lastDayOfMonth.getFullYear()}`;
  const formattedFirstDay = `${firstDayOfMonth.getDate()} ${firstDayOfMonth.toLocaleString("default", { month: "long" })} ${firstDayOfMonth.getFullYear()}`;

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <HeaderWithBack title="Semua Fitur" />
      <ScrollView contentInset={{ bottom: 20 }} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 5,
            paddingBottom: 60,
          }}
        >
          <View className="flex justify-center">
            <View
              className="flex justify-center  items-center  "
              style={{ paddingHorizontal: 10, marginVertical: 20 }}
            >
              <View className="flex flex-wrap items-start  flex-row justify-start rounded-xl ">
                {applications.map((app, index) => (
                  <View
                    key={index}
                    className="w-1/4 mb-4 justify-center flex items-center "
                  >
                    <CardApps
                      altText={app.altText}
                      link={app.link}
                      onPress={index === 7 ? () => {} : () => {}}
                      Title={app.title}
                      subTitle={app.subTitle}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          backgroundColor: "#EDF3FF",
          justifyContent: "flex-end",
          alignItems: "center",
          height: 60,
          elevation: 10,
          borderTopColor: "#BED2FF",
          borderTopWidth: 0.8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -3 },
          shadowRadius: 5,
          display: focusedInput == true ? "none" : "flex",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingHorizontal: 10,
            gap: 10,
          }}
        >
          {form.map((field, index) => {
            if (field.button) {
              return field.button.map((button, idx) => (
                <TouchableWithoutFeedback key={idx}>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      borderRadius: 8,
                      paddingVertical: 5,
                      backgroundColor: button.color,
                    }}
                  >
                    <PoppinsText
                      weight="500Medium"
                      style={{ color: "white", paddingVertical: 2 }}
                    >
                      {button.title}
                    </PoppinsText>
                  </View>
                </TouchableWithoutFeedback>
              ));
            }
          })}
        </View> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  stickyFooter: {},
  footerText: {
    color: "white",
    fontSize: 18,
  },
});
