import { ScrollView, View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import React from "react";
import ServiceCard from "./ServiceCard";
import { FONTS, icons, images, WIDTH } from "../constants";
import CategoryCard from "./CategoryCard";
import Header from "./Header";
import Icon from "react-native-vector-icons/MaterialIcons";

const CategoryList = () => {
  const data = Array.from({ length: 20 }).map((_, i) => i + 1);
  return (
    <View style={styles.container}>
      <Header></Header>
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
          placeholder="Search a Service!"
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
      <ScrollView
        // style={{flexDirection:"column", justifyContent:"space-between"}}
        contentContainerStyle={{
          // flex: 1,
          alignItems:"center",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        vertical
        showsVerticalScrollIndicator={false}
        // centerContent={true}
      >
        {/* {data.map(d => (
                <View style={styles.view}>
                    <Text style={styles.text}>{d}</Text>
                    <CategoryCard data={d}></CategoryCard>
                </View>
                
            ))}
        <Text >{images.adoption}</Text> */}

        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
        <CategoryCard></CategoryCard>
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
