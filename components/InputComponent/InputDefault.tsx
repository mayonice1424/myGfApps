import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { PoppinsText } from "@/components/PoppinsText/poppinsText"; // Assuming this is a custom component

type DataParams = {
  Title: string;
  placeholder: string;
  setFocusedInput: React.Dispatch<React.SetStateAction<boolean>>;
  required: boolean;
  focusedInput: boolean;
  inputType: string;
};

const TouchableDefaultType: React.FC<DataParams> = ({
  Title,
  placeholder,
  required,
  inputType,
  focusedInput,
  setFocusedInput,
}) => {
  // Define the keyboardType based on inputType
  let keyboardType:
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "decimal-pad"
    | "number-pad" = "default";

  switch (inputType) {
    case "number":
      keyboardType = "numeric"; // Only allow numeric input
      break;
    case "email":
      keyboardType = "email-address"; // Only allow email input
      break;
    case "datetime":
      keyboardType = "default"; // You could use a date picker if needed, here it's just default
      break;
    default:
      keyboardType = "default";
      break;
  }

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

          <TextInput
            // value={value} // Bind the value
            placeholder={placeholder}
            style={{
              height: 45,
              borderColor: focusedInput ? "#5E91E9" : "gray",
              borderBottomWidth: focusedInput ? 3 : 1.5,
              paddingHorizontal: 5,
              marginBottom: 10,
            }}
            onFocus={() => setFocusedInput(true)}
            onBlur={() => setFocusedInput(false)}
            keyboardType={keyboardType} // Apply keyboardType based on inputType
            onChangeText={(text) => {
              // Handle value change here if necessary
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
});

export default TouchableDefaultType;
