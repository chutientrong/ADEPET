// import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Authstack from "./AuthNavigation";
// import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";
import MapScreen from "../screens/MapScreen";
import CategoriesList from "../components/CategoryList";
import CategoryCard from "../components/CategoryCard";
import { HorizontalListCard } from "../components";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {
  // createServicesStack = () => (
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       name="CategoriesList"
  //       component={CategoriesList}
  //       options={{
  //         // headerStyle: { backgroundColor: colors.red },
  //         // headerTintColor: 'white',
  //         headerShown: false,
  //       }}
  //     />
  //     <Stack.Screen
  //       name="CategoryCard"
  //       component={CategoryCardtem}
  //       options={{
  //         headerStyle: { backgroundColor: colors.red },
  //         headerTintColor: 'white',
  //       }}
  //     />
  //   </Stack.Navigator>
  // );
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"HomeScreen"}
    >
      <MainStack.Screen name="BottomNavigation" component={BottomNavigation} />
      {/* <MainStack.Screen name="Home" component={Tabs} /> */}
      <MainStack.Screen name="MapScreen" component={MapScreen} />
      <MainStack.Screen
        name="HorizontalListCard"
        component={HorizontalListCard}
      ></MainStack.Screen>
      <MainStack.Screen
        name="CategoryCard"
        component={CategoryCard}
      ></MainStack.Screen>
      <MainStack.Screen
        name="CategoriesList"
        component={CategoriesList}
      ></MainStack.Screen>
    </MainStack.Navigator>
  );
}
