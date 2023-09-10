import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default AppStack