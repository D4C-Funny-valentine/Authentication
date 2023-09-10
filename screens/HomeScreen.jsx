import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { UseAuthContext } from "../context/authContext";

const HomeScreen = () => {
  const { logout } = UseAuthContext();
  return (
    <View className="flex-1 justify-center items-center">
      <Text>HomeScreen</Text>
      <CustomButton label={"Logout"} handler={() => logout()} />
    </View>
  );
};

export default HomeScreen;
