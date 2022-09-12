import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const ServiceCard = ({ image, title,navigation }) => {
  
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('CategoriesList')}>
      <Image source={image} style={styles.image}></Image>
      <Text style={styles.text}>{title}</Text>
      
    </TouchableOpacity>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginRight: 10,
    backgroundColor: COLORS.white,
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {

    position: "absolute",
    top:10,
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  text: {
    position: "absolute",
    bottom: 6,
    left: 35,
  },
});
