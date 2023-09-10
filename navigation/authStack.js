import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginAgain from "../screens/LoginAgain";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Welcome" options={{headerShown:false}} component={WelcomeScreen} /> */}
      <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="Register" options={{headerShown:false}} component={RegisterScreen} />
      <Stack.Screen name="LoginAgain" options={{headerShown:false}} component={LoginAgain} />
    </Stack.Navigator>
  );
};

export default AuthStack;