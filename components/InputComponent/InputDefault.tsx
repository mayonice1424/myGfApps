import React, { useEffect } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { PoppinsText } from "@/components/PoppinsText/poppinsText";
type DataParams = {
  Title: string;
  placeholder: string;
  setFocusedInput: React.Dispatch<React.SetStateAction<boolean>>;
  required: boolean;
  focusedInput: boolean;
  inputType: string;
  value: string | number | null | undefined;
  onChange: (value: string) => void;
};

const TouchableDefaultType: React.FC<DataParams> = ({
  Title,
  placeholder,
  required,
  inputType,
  focusedInput,
  setFocusedInput,
  value,
  onChange,
}) => {
  let keyboardType:
    | "default"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "decimal-pad"
    | "number-pad" = "default";

  switch (inputType) {
    case "number":
      keyboardType = "numeric";
      break;
    case "email":
      keyboardType = "email-address";
      break;
    case "datetime":
      keyboardType = "default";
      break;
    default:
      keyboardType = "default";
      break;
  }

  useEffect(() => {}, [value]);
  return (
    <View className="flex flex-row justify-between">
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
          setFocusedInput(true);
        }}
      >
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
            value={value == undefined ? null : (value as any)}
            placeholder={placeholder}
            style={{
              height: 45,
              borderColor: focusedInput ? "#5E91E9" : "gray",
              borderBottomWidth: focusedInput ? 3 : 1.5,
              paddingHorizontal: 5,
              marginBottom: 10,
              fontSize: 13,
              color: "gray",
              fontFamily: "Poppins_500Medium",
            }}
            onFocus={() => setFocusedInput(true)}
            onBlur={() => setFocusedInput(false)}
            keyboardType={keyboardType}
            onChangeText={(text) => onChange(text)} // Pass the text as string to the handler
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
