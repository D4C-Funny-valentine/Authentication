import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeStyle } from "../style/Style";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import InputFile from "../components/InputFile";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { UseAuthContext } from "../context/authContext";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { register } = UseAuthContext();
  const navigation = useNavigation();
  const images = [
    {
      id: 1,
      Img: (
        <Image
          source={require("../assets/icon/google.png")}
          style={{ width: 35, height: 35 }}
        />
      ),
    },
    {
      id: 2,
      Img: (
        <Image
          source={require("../assets/icon/facebook.png")}
          style={{ width: 35, height: 35 }}
        />
      ),
    },
    {
      id: 3,
      Img: (
        <Image
          source={require("../assets/icon/apple.png")}
          style={{ width: 35, height: 35 }}
        />
      ),
    },
  ];
  return (
    <SafeAreaView className="flex-1" style={themeStyle.bg}>
      <View className="flex-1 items-center">
        <View style={{ height: 120 }} className="mt-4">
          <Image
            source={require("../assets/images/register.png")}
            style={{ height: 200, objectFit: "contain" }}
          />
        </View>
        <View className="flex-1 w-full mt-10">
          <Text className="text-white text-xl font-semibold mb-3 w-[80%] mx-auto">
            Register
          </Text>
          <KeyboardAvoidingView behavior="height">
            <View className="w-full justify-center items-center">
              <InputFile
                icon={<UserIcon size={20} color={"#f6f6f6"} />}
                placeholderText={"Name"}
                password={false}
                inputValue={name}
                onChangeHandler={(text) => setName(text)}
              />
              <InputFile
                icon={<EnvelopeIcon size={20} color={"#f6f6f6"} />}
                placeholderText={"Email"}
                password={false}
                inputValue={email}
                onChangeHandler={(text) => setEmail(text)}
              />
              <InputFile
                icon={<LockClosedIcon size={20} color={"#f6f6f6"} />}
                placeholderText={"Password"}
                password={true}
                inputValue={password}
                onChangeHandler={(text) => setPassword(text)}
              />
              <InputFile
                icon={<LockClosedIcon size={20} color={"#f6f6f6"} />}
                placeholderText={"Password Confirmation"}
                password={true}
                inputValue={password_confirmation}
                onChangeHandler={(text) => setPasswordConfirmation(text)}
              />
              <View className="flex-row space-x-3 w-[80%]">
                <Text className="text-white">Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text className="text-[#364473] font-semibold">Login</Text>
                </TouchableOpacity>
              </View>
              <CustomButton
                label={"Register"}
                handler={() =>
                  register(name, email, password, password_confirmation)
                }
              />
            </View>
          </KeyboardAvoidingView>
          <Text className="text-[#ebebeb] text-center text-xs my-7">
            Or register with
          </Text>
          <View className=" mb-8">
            <View className="items-center flex-row justify-evenly">
              {images.map((item) => (
                <View
                  key={item.id}
                  className="px-5 py-1.5 bg-[#eeeeee] shadow-md shadow-slate-500 rounded-xl"
                >
                  {item.Img}
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
