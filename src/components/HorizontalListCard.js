import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SIZES } from "../constants";

const HorizontalListCard = ({ containerStyle, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
        {/* Image */}
        <Image source={item} style={imageStyle}></Image>
        {/* Info */}

        {/* Calories */}
    </TouchableOpacity>
  );
};

export default HorizontalListCard;
