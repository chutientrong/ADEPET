// import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import AuthStackNavigator from "./src/navigations/AuthNavigation";
import MainStackNavigator from "./src/navigations/RootNavigation";
import CategoriesList from "./src/components/CategoryList";

const RootStack = createNativeStackNavigator();
export const Routes = () => {
  const { user, isLogin } = useSelector((state) => state.auth);
  // const isLogin = false;
  function renderScreens() {
    return isLogin ? (
      <RootStack.Screen name={"MainStack"} component={MainStackNavigator} />
    ) : (
      <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
    );
  }
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {renderScreens()}
        <RootStack.Screen
          name="CategoriesList"
          component={CategoriesList}
        ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
