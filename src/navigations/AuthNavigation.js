// import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/native-stack";
import AuthLayout from "../screens/AuthScreens/AuthLayout";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";
import SignInScreen from "../screens/AuthScreens/SignInScreen";
import ForgotPWScreen from "../screens/AuthScreens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
// import RestaurentMapScreen from "../screens/RestaurentMapScreen";

const Auth = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="ForgotPasswordScreen"
        component={ForgotPWScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
}
