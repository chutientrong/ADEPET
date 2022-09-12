import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import FeatureCard from "./FeatureCard";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, FONTS, WIDTH } from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

const FeatureColLists = ({data,navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      
      {/* <View style={styles.container2}>
        <Text style={styles.titleStyle}>Featured</Text>
        <View style={styles.viewall}>
        <Text style={styles.viewalltext}>View All</Text>
        <Icon
          size={25}
          name="arrow-forward"
          // color={COLORS.orange}
        ></Icon>
        </View>
      </View> */}
      {/* <ScrollView horizontal={true} style={{ width: "100%" }}> */}
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: insets.bottom,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        ListHeaderComponent={() => (
          <View style={styles.container2}>
            <Text style={styles.titleStyle}>Featured</Text>
            <View style={styles.viewall}>
              <Text style={styles.viewalltext}>View All</Text>
              <Icon
                size={25}
                name="arrow-forward"
                // color={COLORS.orange}
              ></Icon>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        columnWrapperStyle={{ paddingHorizontal: 8 }}
        renderItem={(data) => <FeatureCard {...{ data }}  />}
        keyExtractor={(item) => item.id.toString()}
      />
      {/* </ScrollView> */}
    </View>
  );
};

export default FeatureColLists;

const styles = StyleSheet.create({
  container: {
    width: WIDTH ,
    //   backgroundColor:COLORS.lightYellow,
    marginBottom: 10,
  },
  container2: {
    paddingHorizontal: 10,
    flexDirection: "row",
    marginBottom: 10,
    // marginTop: 10,
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
});
