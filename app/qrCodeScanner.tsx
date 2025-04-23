import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
  Button,
  Touchable,
} from "react-native";
import moment from "moment";
import "moment/locale/id";
import HeaderWithBack from "@/components/Header/headerWithBack";
import TouchableDefaultType from "@/components/InputComponent/InputDefault";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import ToucableDropdown from "@/components/InputComponent/InputDropdown";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
// Define the form data types

const form = [
  {
    form: [
      {
        title: "Name",
        placeholder: "John Doe",
        required: true,
        type: "text",
        name: "name",
        value: null,
      },
      {
        title: "Email",
        placeholder: "example@example.com",
        required: true,
        type: "email",
        name: "email",
        value: null,
      },
      {
        title: "Jenis Cuti",
        placeholder: "Select Cuti Type",
        required: true,
        name: "jenisCuti",
        value: null,
        type: "select",
        options: [
          { label: "Cuti Melahirkan", value: "1" },
          { label: "Sakit", value: "2" },
          { label: "Liburan", value: "3" },
          { label: "Kecelakaan", value: "4" },
          { label: "Meninggal Dunia", value: "5" },
        ],
      },
      {
        title: "Assign Tugas",
        placeholder: "Select Cuti Tugas",
        required: true,
        name: "assignTugas",
        value: null,
        type: "select",
        options: [
          { label: "Ilham", value: "1" },
          { label: "Robi", value: "2" },
          { label: "Firly", value: "3" },
        ],
      },
      {
        title: "Lama Cuti",
        placeholder: "4",
        required: true,
        type: "number",
        name: "lamaCuti",
        value: null,
      },
      {
        title: "Date",
        placeholder: "MM/DD/YYYY",
        required: true,
        type: "datetime",
        name: "date",
        value: null,
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

export default function QrCodeScanner() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <HeaderWithBack title="QR Scanner" />
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

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalButton: {
    marginTop: 20,
    backgroundColor: "#3B82F6",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
