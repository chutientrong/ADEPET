import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import StarRating from "./StarRating";

const RoomCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={styles.container} opacity={0.5}>
      
      <Image source={imgUrl} style={styles.image}></Image>
      <View style={styles.viewBottom}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.rating}>
        <StarRating ratings={rating}  />
          {/* <MaterialIcon
            name="star-rate"
            size={22}
            color={COLORS.yellow}
          ></MaterialIcon>
          
          <Text style={styles.ratingtext1}>
            <Text style={styles.ratingtext2}>{rating}</Text> - {genre}
          </Text> */}
        </View>
        
        <View style={styles.addressview}>
          <MaterialIcon
            name="location-on"
            color="gray"
            size={22}
          ></MaterialIcon>
          <Text style={styles.addresstext}>Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RoomCard;
const styles = StyleSheet.create({
  container: {
    // position:"relative",
    backgroundColor: COLORS.white,
    marginRight: 12,
    shadowColor: COLORS.white,
    shadowOffset: { width: 0, height: 1 },
    borderRadius: 10,
    shadowRadius: 3,
    elevation: 1.5,
    height: 256,
    width: 144,
  },
  image: {
    height: 144,
    width: 144,
    borderRadius: 2,
  },
  viewBottom: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 16,
  },
  title: {
    ...FONTS.h3,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    // marginLeft: 4,
  },
  ratingtext1: {
    color: COLORS.orange,
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  ratingtext2: {
    color: COLORS.gray,
  },
 addressview:{
  // alignItems: "center",
  // justifyContent:"space-between"
 }, 
  address: {
    flexDirection: "row",
    alignItems: "center",
    // marginLeft: 4,
  },
  addresstext: {
    color: COLORS.gray,
    fontSize: SIZES.h4,
    lineHeight: 22,
    marginLeft:4
  },
});
