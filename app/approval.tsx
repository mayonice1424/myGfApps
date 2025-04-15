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

const form = [
  {
    form: [
      { title: "Name", placeholder: "John Doe", required: true, type: "text" },
      {
        title: "Email",
        placeholder: "example@example.com",
        required: true,
        type: "email",
      },
      { title: "Lama Cuti", placeholder: "4", required: true, type: "number" },
      {
        title: "Date",
        placeholder: "MM/DD/YYYY",
        required: true,
        type: "datetime",
      },
      { title: "Name", placeholder: "John Doe", required: true, type: "text" },
      {
        title: "Email",
        placeholder: "example@example.com",
        required: true,
        type: "email",
      },
      {
        title: "Date",
        placeholder: "MM/DD/YYYY",
        required: true,
        type: "datetime",
      },
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

export default function Approval() {
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
      <HeaderWithBack title="Approval Cuti" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        className="bg-blue-500"
      >
        <PoppinsText
          weight="500Medium"
          style={{ fontSize: 18, color: "white" }}
        >
          Periode
        </PoppinsText>
        <PoppinsText
          weight="500Medium"
          style={{ fontSize: 16, color: "white" }}
        >
          {formattedFirstDay} - {formattedLastDay}
        </PoppinsText>
      </View>
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
          {form.map((field, index) => {
            if (field.form) {
              return field.form.map((inputField, idx) => (
                <TouchableDefaultType
                  key={idx}
                  Title={inputField.title}
                  setFocusedInput={setFocusedInput}
                  focusedInput={focusedInput}
                  placeholder={inputField.placeholder}
                  required={inputField.required}
                  inputType={inputField.type}
                />
              ));
            }
          })}
        </View>
      </ScrollView>

      <View
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
        </View>
      </View>
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
