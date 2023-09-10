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
import { EnvelopeIcon, LockClosedIcon } from "react-native-heroicons/solid";
import InputFile from "../components/InputFile";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";
import { UseAuthContext } from "../context/authContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { login, registerSuccess } = UseAuthContext();
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
      <View className="flex-1 items-center justify-center">
        {registerSuccess ? (
          <></>
        ) : (
          <View style={{ height: 200 }} className="mt-4">
            <Image
              source={require("../assets/images/login.png")}
              style={{ height: 240, objectFit: "contain" }}
            />
          </View>
        )}
        <View
          className={`flex-1 w-full mt-10 ${
            registerSuccess && "items-center justify-center"
          }`}
        >
          <Text className="text-white text-xl font-semibold mb-3 w-[80%] mx-auto">
            {registerSuccess ? "Login Again" : "Login"}
          </Text>
          <KeyboardAvoidingView behavior="height" style={{ width: "100%" }}>
            <View className="w-full justify-center items-center">
              <InputFile
                icon={<EnvelopeIcon size={20} color={"#f6f6f6"} />}
                placeholderText={"Email"}
                password={false}
                inputValue={email}
                onChangeHandler={(text) => setEmail(text)}
              />
              <View className="w-full justify-center items-center relative">
                <InputFile
                  icon={<LockClosedIcon size={20} color={"#f6f6f6"} />}
                  placeholderText={"Password"}
                  password={true}
                  inputValue={password}
                  onChangeHandler={(text) => setPassword(text)}
                />
                <TouchableOpacity className="absolute right-10 -bottom-2">
                  <Text className="text-white font-medium">
                    Forget password?
                  </Text>
                </TouchableOpacity>
              </View>
              <CustomButton
                label={"Login"}
                handler={() => login(email, password)}
              />
            </View>
          </KeyboardAvoidingView>
          {registerSuccess ? (
            <></>
          ) : (
            <>
              <Text className="text-[#ebebeb] text-center text-xs my-7">
                Or Login with
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
                <View className="justify-center items-center mt-5 flex-row space-x-2">
                  <Text className="text-white">New to an app?</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text className="text-[#364473] font-bold text-[17px]">
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
