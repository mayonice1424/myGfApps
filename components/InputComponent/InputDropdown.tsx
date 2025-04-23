import React, { useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
type DataParams = {
  Title: string;
  placeholder: string;
  setFocusedInput: React.Dispatch<React.SetStateAction<boolean>>;
  required: boolean;
  focusedInput: boolean;
  inputType: string;
  name: string;
  value: string | number | null | undefined;
  data: Array<object> | undefined;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
const ToucableDropdown: React.FC<DataParams> = ({
  Title,
  data,
  placeholder,
  name,
  required,
  inputType,
  focusedInput,
  setFocusedInput,
  setFormData,
  value,
  // onChange,
}) => {
  const allData = data;

  const handleChange = (selectedValue: string) => {
    console.log(name, value, "ini name");

    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: selectedValue,
      };
      console.log("Updated formData: ", updatedData);
      return updatedData;
    });
  };
  return (
    <View className="flex flex-row justify-between">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            paddingVertical: 5,
            justifyContent: "space-between",
          }}
          className=" px-5"
        >
          <View className="flex flex-row ">
            <PoppinsText
              weight="600SemiBold"
              style={{ color: focusedInput ? "#5E91E9" : "#A4A4A4" }}
              className="text-lg"
            >
              {Title}
            </PoppinsText>
            {required ? (
              <PoppinsText
                weight="600SemiBold"
                style={{ color: focusedInput ? "#FF0000" : "#A4A4A4" }}
                className="text-lg ml-2"
              >
                *
              </PoppinsText>
            ) : null}
          </View>

          <Dropdown
            style={{
              height: 45,
              borderColor: focusedInput ? "#5E91E9" : "gray",
              borderBottomWidth: focusedInput ? 3 : 1.5,
              paddingHorizontal: 5,
              marginBottom: 10,
            }}
            autoScroll={true}
            placeholderStyle={{
              fontSize: 13,
              color: "gray",
              fontFamily: "Poppins_500Medium",
            }}
            selectedTextStyle={{
              fontSize: 13,
              color: "gray",
              fontFamily: "Poppins_500Medium",
            }}
            inputSearchStyle={{
              fontSize: 13,
              color: "gray",
              fontFamily: "Poppins_500Medium",
            }}
            itemTextStyle={{
              fontSize: 13,
              color: "gray",
              fontFamily: "Poppins_500Medium",
            }}
            iconStyle={styles.iconStyle}
            data={allData as any}
            search
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={!focusedInput ? "Select item" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setFocusedInput(true)}
            onBlur={() => setFocusedInput(false)}
            onChange={(item) => {
              console.log("Selected value: ", item.value);
              handleChange(item.value);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  iconStyle: {
    width: 25,
    height: 25,
    // backgroundColor: "red",
    color: "black",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default ToucableDropdown;
