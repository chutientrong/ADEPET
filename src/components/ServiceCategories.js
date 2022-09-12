import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import ServiceCard from "./ServiceCard";
import { FONTS, icons, images, WIDTH } from "../constants";


const ServiceCategories = ({navigation}) => {
  return (
    <View style={styles.container}>

    <ScrollView
      contentContainerStyle={{
        alignItems:"center",
        // paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* <Text >{images.adoption}</Text> */}
      <ServiceCard image={images.vet} title="aaaa" navigation={navigation}></ServiceCard>
      <ServiceCard image={images.adoption} title="bbbb" navigation={navigation}></ServiceCard>
      <ServiceCard image={images.adoption} title="cccc" navigation={navigation}></ServiceCard>
      <ServiceCard image={images.vet} title="aaaa" navigation={navigation}></ServiceCard>
      <ServiceCard image={images.adoption} title="bbbb" navigation={navigation}></ServiceCard>
      <ServiceCard image={images.adoption} title="cccc" navigation={navigation}></ServiceCard>
    </ScrollView>

    </View>
  );
};

export default ServiceCategories;

const styles=StyleSheet.create({
  container: {
    flex: 1,
    width:WIDTH-20,
  },
  container2: {
    flexDirection: "row",
    // marginBottom: 10,
    marginTop: 10,
    // alignItems: 'center',
    justifyContent: "space-between",
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  viewall: {
    flexDirection: "row",
    // marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  viewalltext: {
    ...FONTS.h4,
    paddingRight: 10,
    // fontWeight:16
    // color:COLORS.blue
  },
  titleStyle: {
    ...FONTS.h3,
  },
}
)