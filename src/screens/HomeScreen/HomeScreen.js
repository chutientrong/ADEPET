import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import {
  COLORS,
  dummyData,
  FONTS,
  icons,
  images,
  SIZES,
  WIDTH,
} from "../../constants";
import { useDispatch } from "react-redux";
import ServiceCategories from "../../components/ServiceCategories";
import { FormInput, HomeHeader } from "../../components";

import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import FeaturedRow from "../../components/FeaturedRow";
import { discount } from "../../models/discount";
import DiscountCategories from "../../components/DiscountCategories";
import { fakedata, fakedata2 } from "../../models/fakedata";
import RecentLists from "../../components/RecentLists";
import FeatureColLists from "../../components/FeatureColLists";
import { logout } from "../../redux/actions/authAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const handleLogout = () => {
    dispatch(logout);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <DiscountCategories></DiscountCategories> */}
      {/* head */}
      <HomeHeader></HomeHeader>
      {/* SEARCH */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFF",
          justifyContent: "space-between",
          padding: 10,
          borderRadius: 12,
          marginHorizontal: 10,
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <TextInput
          placeholder="Search for new knowledge!"
          placeholderTextColor="#345c74"
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 12,
            width: 280,
            paddingHorizontal: 12,
          }}
        />
        <Icon name="search" size={30}></Icon>
        {/* <Image source={icons.user} style={{ height: 14, width: 14 }} /> */}
      </View>

      {/* Categories */}
      <ScrollView
        style={styles.category}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <DiscountCategories data={discount}></DiscountCategories>

        {/**Featured */}
        <View style={styles.feature}>
          {/**Discount */}
          <ServiceCategories navigation={navigation}/>
          {/* <FeaturedRow
            id="1"
            title="Toasted Discount"
            description="aaaaaaaaaaa"
          ></FeaturedRow> */}
          {/**Offer near you */}
          {/* <FeaturedRow
            id="1"
            title="Offer near you"
            description="aaaaaaaaaaa"
          ></FeaturedRow> */}
          <RecentLists data={fakedata}></RecentLists>
          <FeaturedRow
            id="1"
            title="Offer near you"
            description="aaaaaaaaaaa"
          ></FeaturedRow>
          <ScrollView horizontal={true} style={{ width: "100%" }}>
            <FeatureColLists data={fakedata2}></FeatureColLists>
          </ScrollView>
        </View>
      </ScrollView>
      <View></View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // backgroundColor:COLORS.white
  },
  header: {
    flexDirection: "row",
    // paddingBottom: 10,
    marginLeft: 16,
    marginRight: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textheader: {
    flex: 1,
    marginLeft: 10,
  },
  category: {
    // marginTop:10,
    backgroundColor: COLORS.lightGray4,
  },
  feature: {
    alignItems: "center",
  },
});
