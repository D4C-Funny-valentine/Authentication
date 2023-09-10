import { View, Text, TextInput } from "react-native";
import React from "react";

const InputFile = ({ icon, placeholderText, password , onChangeHandler, inputValue}) => {
  return (
    <View className="relative w-[80%] mb-5">
      <View className="absolute top-3 left-1">{icon}</View>
      <TextInput
        placeholder={placeholderText}
        secureTextEntry={password}
        value={inputValue}
        className="border-b border-[#ffffff] p-2 pl-8"
        onChangeText={onChangeHandler}
      />
    </View>
  );
};

export default InputFile;
