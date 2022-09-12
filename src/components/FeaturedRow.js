import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ArrowRightIcon from "react-native-vector-icons/MaterialIcons";
import { COLORS, FONTS, images, WIDTH } from "../constants";
import ItemCard from "./ItemCard";

// const { width, heigth } = Dimensions.get("window");
const FeaturedRow = ({ id, title, description }) => {

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={styles.viewall}>
        <Text style={styles.viewalltext}>View All</Text>
        <ArrowRightIcon
          size={25}
          name="arrow-forward"
          // color={COLORS.orange}
        ></ArrowRightIcon>
        </View>
      </View>
      {/* <Text style={styles.descriptionStyle}>{description}</Text> */}
      
      <ScrollView
      horizontal
        contentContainerStyle={{
          alignItems:"center",
          // paddingHorizontal: 15,
          // marginLeft:10
          
        }}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {/**ItemCard */}
        <ItemCard
          id={1}
          imgUrl={images.other}
          title="Test"
          rating={5}
          genre="Test"
          address="123, Address Test"
          short_description="this is short_description"
          dishes={{}}
          long={0}
          lat={1}
        ></ItemCard>
        <ItemCard
          id={2}
          imgUrl={images.other}
          title="Test"
          rating={5}
          genre="Test"
          address="123, Address Test"
          short_description="this is short_description"
          dishes={{}}
          long={0}
          lat={1}
        ></ItemCard>
        <ItemCard
          id={3}
          imgUrl={images.other}
          title="Test"
          rating={5}
          genre="Test"
          address="123, Address Test"
          short_description="this is short_description"
          dishes={{}}
          long={0}
          lat={1}
        ></ItemCard>
        <ItemCard
          id={3}
          imgUrl={images.other}
          title="Test"
          rating={5}
          genre="Test"
          address="123, Address Test"
          short_description="this is short_description"
          dishes={{}}
          long={0}
          lat={1}
        ></ItemCard>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    width:WIDTH-20,
  },
  container2: {
    flexDirection: "row",
    // marginTop: 10,
    // alignItems: 'center',
    justifyContent: "space-between",
    // paddingLeft: 16,
    // paddingRight: 16,

  },
  viewall:{
    flexDirection: "row",
    // marginTop: 10,
    alignItems: 'center',
    justifyContent: "space-between",
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  viewalltext:{
    ...FONTS.h4,
    paddingRight: 10,
    // fontWeight:16
    // color:COLORS.blue
  },
  titleStyle: {
    ...FONTS.h3,
  },
  descriptionStyle: {
    ...FONTS.h5,
    color: COLORS.gray,
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  scroll: {
    paddingTop: 10,
    // marginLeft:16,
    // marginRight:16
  },
});
