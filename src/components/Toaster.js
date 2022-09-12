import {StyleSheet, View, ActivityIndicator} from 'react-native';
// import React from 'react';
import { Toast } from "react-native-customizable-toast";
import React, { useState } from 'react'
const Toaster = ({size}) => {


  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});