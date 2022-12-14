import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MapScreen from '../screens/MapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR} from '../constants/Color';

const TabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, styles.shadow]} onPress={onPress}>
      <View style={styles.buttonView}>{children}</View>
    </TouchableOpacity>
  );
};

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        showLabel: false,
        style: {
          borderTopColor: 'transparent',
          backgroundColor: COLOR.white,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              size={25}
              color={focused ? COLOR.red : COLOR.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        // options={{}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'ios-heart' : 'ios-heart-outline'}
              size={25}
              color={focused ? COLOR.red : COLOR.gray}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => (
            <Feather name="search" size={25} color={COLOR.lightGray[2]} />
          ),
          tabBarButton: props => <TabBarButton {...props} />,
        }}
      /> */}
      {/* <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
              size={25}
              color={focused ? COLOR.red : COLOR.gray}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={25}
              color={focused ? COLOR.red : COLOR.gray}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  button: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLOR.red,
  },
  shadow: {
    shadowColor: COLOR.gray,
    shadowOffset: {
      width: 0,
      height: 7.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
});