import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Pressable,
  Image,
  ListRenderItemInfo,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../constants";
import StarRating from "./StarRating";
// import Config from '../Config';
// import { discount } from './model/discount';

// interface Props {
//   data: ListRenderItemInfo<CategoryType>;
//   onScreenClicked: () => void;
// }

const ItemListCard = ({ data , onScreenClicked}) => {
  // let data2=data.map(({ data }) => data);
  const { index, item } = data;
  // console.log("data card la ", data);

  const translateX = useRef(new Animated.Value(50));
  const opacity = useRef(new Animated.Value(0));
  //   let result = data.data.map(({ url }) => url);
  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateX.current, {
        toValue: 0,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
      Animated.timing(opacity.current, {
        toValue: 1,
        duration: 1000,
        delay: index * (1000 / 3),
        useNativeDriver: true,
      }),
    ]).start();
  }, [index]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacity.current,
          transform: [{ translateX: translateX.current }],
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          {
            height: 134,
            width: 280,
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{ color: "lightgrey" }}
        onPress={onScreenClicked}
      >
        <View style={styles.bgColorView} />

        <View
          style={{ ...StyleSheet.absoluteFillObject, flexDirection: "row" }}
        >
          <View style={{ paddingVertical: 24, paddingLeft: 16 }}>
            <Image
              style={{ flex: 1, borderRadius: 16, aspectRatio: 1.0 }}
              source={item.image}
            />
          </View>
          <View style={{ flex: 1, paddingLeft: 16, paddingVertical: 16 }}>
            <Text style={styles.title}>{item.name}</Text>
            {/* <View style={styles.lessionCountRatingContainer}> */}
              {/* <Text style={[styles.textStyle, { flex: 1, fontSize: 12 }]}>
                {item.lessonCount} lesson
              </Text> */}
              <StarRating ratings={item.rating}  />
              {/* <Text style={styles.textStyle}>{item.rating}</Text>
              <Icon name="star" size={20} color={COLORS.orange} /> */}
            {/* </View> */}
            <View style={{ flexDirection: "row", paddingRight: 16 }}>
              <Text style={[styles.textStyle, styles.moneyText]}>
                ${item.price}
              </Text>
              <View style={styles.addIconView}>
                <Icon name="add" size={20} color="white" />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { borderRadius: 16, overflow: "hidden" },
  bgColorView: {
    flex: 1,
    marginLeft: 48,
    borderRadius: 16,
    backgroundColor: "#F8FAFB",
  },
  title: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 0.27,
    color: COLORS.black,
  },
  lessionCountRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16,
    paddingBottom: 8,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    letterSpacing: 0.27,
    color: COLORS.darkGray,
  },
  moneyText: {
    flex: 1,
    fontFamily: "Poppins-SemiBold",
    color: COLORS.orange,
  },
  addIconView: {
    padding: 4,
    backgroundColor: COLORS.orange,
    borderRadius: 8,
  },
});

export default ItemListCard;
