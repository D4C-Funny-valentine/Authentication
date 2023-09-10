import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { themeStyle } from "../style/Style";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={themeStyle.bg}>
      <View className="flex-1 justify-between">
        <Text className="text-2xl font-bold text-center mt-20 text-[#364473]">
          Game On
        </Text>
        <View className="flex-1 justify-center items-center">
          <Image
            source={require("../assets/images/welcome.png")}
            style={{ width: 260, objectFit: "contain" }}
          />
        </View>
        <View className="mb-10">
          <TouchableOpacity
            className="p-3 bg-[#364473] rounded-lg mx-5 flex-row justify-between"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-white font-semibold italic">
              Let's Started
            </Text>
            <ChevronRightIcon size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
