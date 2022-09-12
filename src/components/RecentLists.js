import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ItemListCard from './ItemListCard'
import { COLORS, FONTS, WIDTH } from '../constants'
import Icon from "react-native-vector-icons/MaterialIcons";

const RecentLists = (data) => {
    // console.log("data la : ",data)
    //   let data2=data.map(({ data }) => data);
    
    // data=data.data
    // console.log("data2 la : ",data[0])

  return (

    <View style={styles.container}>
    
      <FlatList
        contentContainerStyle={{ padding: 16,}}
        horizontal
        showsHorizontalScrollIndicator={false}
        
        data={data.data}
        renderItem={(data) => (
            // console.log("data3 la : ",{data}),
          <ItemListCard
            {...{data}}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>

  )
}

export default RecentLists

const styles = StyleSheet.create({
  container:{
    width:WIDTH-20,
    backgroundColor:COLORS.lightYellow,
    marginBottom:10
  },
  container2: {
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
})