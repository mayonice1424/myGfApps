import React, { useState } from "react";
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
export type FormData = {
  name: string;
  email: string;
  lamaCuti: number | null;
  cutiType: string;
  date: string; // Store the date as a string
};

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
        name: "name",
        value: null,
      },
      {
        title: "Jenis Cuti",
        placeholder: "Select Cuti Type",
        required: true,
        name: "name",
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
        title: "Lama Cuti",
        placeholder: "4",
        required: true,
        type: "number",
        name: "name",
        value: null,
      },
      {
        title: "Date",
        placeholder: "MM/DD/YYYY",
        required: true,
        type: "datetime",
        name: "name",
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

export default function Approval() {
  const currentDate = new Date();
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

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    lamaCuti: null,
    cutiType: "",
    date: "",
  });
  const idLocale = {
    // Konfigurasi locale untuk bahasa Indonesia
    months:
      "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
        "_"
      ),
    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY [pukul] HH:mm",
      LLLL: "dddd, D MMMM YYYY [pukul] HH:mm",
    },
    calendar: {
      sameDay: "[Hari ini pukul] LT",
      nextDay: "[Besok pukul] LT",
      nextWeek: "dddd [pukul] LT",
      lastDay: "[Kemarin pukul] LT",
      lastWeek: "dddd, [tanggal] [bulan] [tahun] [pukul] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "dalam %s",
      past: "%s yang lalu",
      s: "beberapa detik",
      ss: "%d detik",
      m: "semenit",
      mm: "%d menit",
      h: "sejam",
      hh: "%d jam",
      d: "sehari",
      dd: "%d hari",
      M: "sebulan",
      MM: "%d bulan",
      y: "setahun",
      yy: "%d tahun",
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function (hour: any, meridiem: any) {
      if (hour === 12) {
        hour = 0;
      }
      if (meridiem === "pagi") {
        return hour;
      } else if (meridiem === "siang") {
        return hour >= 11 ? hour : hour + 12;
      } else if (meridiem === "sore" || meridiem === "malam") {
        return hour + 12;
      }
    },
    // eslint-disable-next-line no-unused-vars
    meridiem: function (hours: any, minutes: any, isLower: any) {
      if (hours < 11) {
        return "pagi";
      } else if (hours < 15) {
        return "siang";
      } else if (hours < 19) {
        return "sore";
      } else {
        return "malam";
      }
    },
    ordinalParse: /\d{1,2}/,
    ordinal: "%d",
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 7, // The week that contains Jan 1st is the first week of the year.
    },
  };

  moment.updateLocale("id", idLocale as any);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDateTime, setShowDateTime] = useState(false); // State to control DateTimePicker visibility
  const [mode, setMode] = useState("date"); // Track whether we're picking date or time
  const [showTimePicker, setShowTimePicker] = useState(false); // Controls the visibility of the time picker

  const onChangeDate = (e: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    if (mode === "date") {
      setDate(currentDate);
      setShowDateTime(false);
      setShowTimePicker(true);
      setMode("time");
    } else if (mode === "time") {
      setTime(currentDate);
      setShowTimePicker(false);
      const combinedDateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        currentDate.getHours(),
        currentDate.getMinutes(),
        currentDate.getSeconds()
      );

      const formattedDate = moment(combinedDateTime)
        .utcOffset(7)
        .format("llll");
      setFormData((prevState) => ({
        ...prevState,
        date: formattedDate,
      }));
    }
  };

  const onChangeSelect = (e: any, selectedData: any) => {
    const currentData = selectedData || "";
    setFormData((prevState) => ({
      ...prevState,
      cutiType: currentData, // Save the combined datetime in formData
    }));
  };

  const handleInputChange = (key: any, value: string) => {
    setFormData({
      ...formData,
      [key]: value, // For other fields, keep them as strings
    });
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <HeaderWithBack title="Approval Cuti" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "#3B82F6",
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
              return field.form.map((inputField, idx) => {
                const key = inputField.title
                  .toLowerCase()
                  .replace(" ", "") as keyof FormData;

                if (
                  inputField.type !== "datetime" &&
                  inputField.type !== "select"
                ) {
                  return (
                    <TouchableDefaultType
                      focusedInput={false}
                      setFocusedInput={() => {}}
                      key={idx}
                      Title={inputField.title}
                      placeholder={inputField.placeholder}
                      required={inputField.required}
                      inputType={inputField.type}
                      value={formData[key]}
                      onChange={(value) => {
                        inputField.title == "Lama Cuti"
                          ? setFormData({
                              ...formData,
                              lamaCuti: value as any,
                            })
                          : handleInputChange(key, value);
                      }}
                    />
                  );
                } else if (inputField.type === "datetime") {
                  return (
                    <View className=" flex justify-start items-start w-full px-5 flex-col  py-5">
                      <View className="  w-full flex justify-start items-start  flex-row ">
                        <PoppinsText
                          weight="600SemiBold"
                          style={{
                            color: focusedInput ? "#5E91E9" : "#A4A4A4",
                          }}
                          className="text-lg"
                        >
                          {inputField.title}
                        </PoppinsText>
                        {inputField.required ? (
                          <PoppinsText
                            weight="600SemiBold"
                            style={{
                              color: focusedInput ? "#FF0000" : "#A4A4A4",
                            }}
                            className="text-lg ml-2"
                          >
                            *
                          </PoppinsText>
                        ) : null}
                      </View>
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setMode("date");
                          setShowDateTime(true);
                        }}
                        key={idx}
                      >
                        <View
                          style={{
                            display: "flex",
                            borderBottomColor: "black",
                            borderBottomWidth: 1,
                            width: "100%",
                            flexDirection: "row",
                            paddingBottom: 10,
                            justifyContent: "space-between",
                            paddingHorizontal: 0,
                            alignItems: "center",
                          }}
                        >
                          <View>
                            <PoppinsText
                              weight="500Medium"
                              style={{ fontSize: 13, color: "gray" }}
                            >
                              {formData.date == null
                                ? "Select Date"
                                : formData.date == undefined
                                  ? "Select Date"
                                  : formData.date == ""
                                    ? "Select Date"
                                    : formData.date}
                            </PoppinsText>
                          </View>
                          <View>
                            <Button
                              title="Choose Date"
                              onPress={() => {
                                setMode("date");
                                setShowDateTime(true);
                              }}
                            />
                          </View>
                        </View>
                      </TouchableWithoutFeedback>
                      {showDateTime && (
                        <DateTimePicker
                          value={date}
                          mode="date"
                          is24Hour={true}
                          onChange={onChangeDate}
                        />
                      )}
                      {showTimePicker && (
                        <DateTimePicker
                          value={time}
                          mode="time"
                          is24Hour={true}
                          onChange={onChangeDate}
                        />
                      )}
                    </View>
                  );
                } else if (inputField.type === "select") {
                  return (
                    <ToucableDropdown
                      focusedInput={false}
                      setFocusedInput={() => {}}
                      key={idx}
                      Title={inputField.title}
                      placeholder={inputField.placeholder}
                      required={inputField.required}
                      inputType={inputField.type}
                      value={formData[key]}
                      data={inputField.options}
                      setFormData={setFormData}
                    />
                    // <View className="flex flex-row justify-between" key={idx}>
                    //    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    //    </TouchableWithoutFeedback>
                    //   <Text>{inputField.title}</Text>
                    // </View>
                  );
                }
              });
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
                <TouchableWithoutFeedback
                  key={idx}
                  onPress={() => {
                    button.type === "submit" ? handleSubmit() : null;
                  }}
                >
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

      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <PoppinsText weight="500Medium" style={{ fontSize: 18 }}>
              Submitted Data:
            </PoppinsText>
            <PoppinsText weight="500Medium" style={{ fontSize: 16 }}>
              Name: {formData.name}
            </PoppinsText>
            <PoppinsText weight="500Medium" style={{ fontSize: 16 }}>
              Email: {formData.email}
            </PoppinsText>
            <PoppinsText weight="500Medium" style={{ fontSize: 16 }}>
              Lama Cuti: {formData.lamaCuti}
            </PoppinsText>
            <PoppinsText weight="500Medium" style={{ fontSize: 16 }}>
              Date: {formData.date}
            </PoppinsText>
            <PoppinsText weight="500Medium" style={{ fontSize: 16 }}>
              Jenis Cuti: {formData.cutiType}
            </PoppinsText>

            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.modalButton}
            >
              <PoppinsText weight="500Medium" style={{ color: "white" }}>
                Close
              </PoppinsText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
