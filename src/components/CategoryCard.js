import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, WIDTH } from "../constants";
import Icon from "react-native-vector-icons/MaterialIcons";

const CategoryDetailItem = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.component}>

    
    <Pressable
      style={styles.CategoryDetailItem}
      onPress={() => navigation.navigate("false")}
    >
      <ScrollView contentContainerStyle={{}}>
        {/* <Text>asdbbs</Text> */}
      <View style={styles.backgroundView} />
      <View style={styles.locationView}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../../assets/images/categories/ellipse.png")}
        />
        <Image
          style={styles.mapPinIcon}
          resizeMode="cover"
          source={require("../../assets/images/categories/map-pin6.png")}
        />
        <Text style={styles.kmText}>1.5 km</Text>
      </View>
      <View style={styles.priceView}>
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../../assets/images/categories/ellipse.png")}
        />
        <Image
          style={styles.walletIcon}
          resizeMode="cover"
          source={require("../../assets/images/categories/wallet1.png")}
        />
        <Text style={styles.text}>$20</Text>
      </View>
      <View style={styles.expirienceView}>
        <Text style={styles.yearsOfExperience}>years old</Text>
        <Text style={styles.text1}>{`10 `}</Text>
      </View>
      <View style={styles.starsView}>
        <Text style={styles.reviewsText}>125 Reviews</Text>
        <Image
          style={styles.componentStars45}
          resizeMode="cover"
          source={require("../../assets/images/categories/vet.png")}
        />

      </View>
      <View style={styles.addBtn}>
        <Icon name="add-circle" size={35} color={COLORS.lightOrange}></Icon>
        {/* <Image
          style={styles.componentAddBtn}
          resizeMode="cover"
          source={require("../../assets/images/categories/vet.png")}
        /> */}
        
      </View>
      <Text style={styles.vasilenkoOksanaText}>Cat in Black</Text>
      <Text style={styles.veterinaryDentistText}>Cat</Text>
      <View style={styles.componentPhoto}>
        <View style={styles.rectangleView} />
        {/* <Image
          style={styles.xMLID7091Icon}
          resizeMode="cover"
          source={require("../../assets/images/categories/xmlid-70913.png")}
        /> */}
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../../assets/images/categories/vet.png")}
        />
      </View>
      </ScrollView>
    </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    // position: "absolute",
    // width: "90%",
    borderRadius: 16,
    backgroundColor: "#fff",
    height: 128,
  },
  ellipseIcon: {
    position: "absolute",
    width: "35.29%",
    right: "64.71%",
    bottom: 0,
    left: "0%",
    maxWidth: "100%",
    height: 24,
  },
  mapPinIcon: {
    position: "absolute",
    right: 48,
    bottom: 4,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  kmText: {
    position: "absolute",
    right: 2,
    bottom: 5,
    fontSize: 11,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontWeight: "500",
    
    color: "#070821",
    textAlign: "left",
    width: 34,
    height: 14,
  },
  locationView: {
    position: "absolute",
    top: 95,
    left: 156,
    width: 68,
    height: 24,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 24,
    height: 24,
  },
  walletIcon: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    position: "absolute",
    top: 5,
    left: 32,
    fontSize: 11,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontWeight: "500",
    
    color: "#070821",
    textAlign: "left",
    width: 20,
    height: 14,
  },
  priceView: {
    position: "absolute",
    top: 95,
    left: 234,
    width: 54,
    height: 22,
  },
  yearsOfExperience: {
    position: "absolute",
    top: 3,
    left: 19,
    fontSize: 11,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontWeight: "500",
    
    color: "#bbc3ce",
    textAlign: "left",
    width: 111,
    height: 14,
  },
  text1: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    
    color: "#bbc3ce",
    textAlign: "right",
    width: 16,
    height: 18,
  },
  expirienceView: {
    position: "absolute",
    top: 97,
    left: 16,
    width: 130,
    height: 18,
  },
  reviewsText: {
    position: "absolute",
    top: 0,
    left: 79,
    fontSize: 11,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontWeight: "500",
    
    color: "#bbc3ce",
    textAlign: "left",
    width: 115,
    height: 14,
  },
  componentStars45: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 12,
    height: 12,
  },
  starsView: {
    position: "absolute",
    top: 66,
    left: 108,
    width: 194,
    height: 14,
  },
  vasilenkoOksanaText: {
    position: "absolute",
    top: 16,
    left: 108,
    fontSize: 18,
    letterSpacing: 0.4,
    fontWeight: "700",
    
    color: "#070821",
    textAlign: "left",
    width: 213,
    height: 22,
  },
  veterinaryDentistText: {
    position: "absolute",
    top: 40,
    left: 108,
    fontSize: 14,
    fontWeight: "600",
    
    color: "#070821",
    textAlign: "left",
    width: 213,
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    borderRadius: 18,
    backgroundColor: "#bbc3ce",
  },
  xMLID7091Icon: {
    position: "absolute",
    height: "46.88%",
    width: "48.96%",
    top: "26.04%",
    right: "26.04%",
    bottom: "27.08%",
    left: "25%",
  },
  rectangleIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",

    borderRadius: 18,
    // maxWidth: "100%",
    // maxHeight: "100%",
  },
  componentPhoto: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 72,
    height: 72,
  },
  CategoryDetailItem: {
    flex:1,
    // position: "absolute",
    // alignContent:"center"
    // paddingBottom:10
  },
  component: {
    flex:1,
    // position: "absolute",
    width: WIDTH-20,
    // top: 168,
    // right: "2.13%",
    // left: "2.13%",
    // height: 64,
    paddingTop:10,
    // alignContent:"center"
    // paddingBottom:10
  },
  addBtn:{
    position:"absolute",
    marginTop:45,
    right:10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
    // backgroundColor:"red"
  },
  componentAddBtn:{
    width:40,
    height:40
  }
});

export default CategoryDetailItem;

