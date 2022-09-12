import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { CustomSwitch, FormInput, Spinner, TextButton } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { utils } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import AuthLayout from "./AuthLayout";
// import {utils} from '../../utils';
// import {useSelector, useDispatch} from 'react-redux';
import { login } from "../../redux/actions/authAction";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgotPWScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isLoad, setIsLoad] = useState(false);

  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  // let token = AsyncStorage.getItem('auth');

  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
  }

  const handleReset = () => {
    setIsLoad(true)
    let values = {
      email,
      password,
    };
    // dispatch(login(values));
  };
  useEffect(() => {
    let timeoutVariable
    if(isLoad){
      timeoutVariable = setTimeout(() => setIsLoad(false), 3000)
    }
    return () => clearTimeout(timeoutVariable)
  }, [isLoad]) 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView>
        <AuthLayout title="Getting Started" subTitle="Welcome to Sign In!">
          <View
            style={{
              flex: 1,
              marginTop: SIZES.sm,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: COLORS.red }}>{error}</Text>
            </View>
            <FormInput
              label="Email"
              keyboardType="email-address"
              onChange={(value) => {
                utils.validateEmail(value, setEmailError);
                setEmail(value);
              }}
              autoCompleteType="email"
              errorMsg={emailError}
              appendComponent={
                <View style={{ justifyContent: "center" }}>
                  <Image
                    source={
                      email == "" || (email != "" && emailError == "")
                        ? icons.correct
                        : icons.cancel
                    }
                    style={{
                      height: 20,
                      width: 20,
                      tintColor:
                        email == ""
                          ? COLORS.gray
                          : email != "" && emailError == ""
                          ? COLORS.green
                          : COLORS.red,
                    }}
                  />
                </View>
              }
            />
           
            
            {isLoad ? (
              <Spinner size="small" />
            ) : (
              <TextButton
                label="Reset Password"
                disabled={isEnableSignIn() ? false : true}
                buttonContainerStyle={{
                  height: 50,
                  alignItems: "center",
                  marginTop: SIZES.xxl,
                  borderRadius: SIZES.md,
                  backgroundColor: isEnableSignIn()
                    ? COLORS.red
                    : COLORS.transparentPrimary,
                }}
                onPress={handleReset}
              />
            )}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginVertical: SIZES.lg,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.darkGray,
                ...FONTS.body3,
              }}
            >
              Back to sign in?
            </Text>
            <TextButton
              label="Sign In"
              buttonContainerStyle={{
                backgroundColor: null,
                marginLeft: 3,
              }}
              labelStyle={{
                color: COLORS.red,
                ...FONTS.h3,
              }}
              onPress={() => navigation.goBack()}
            />
          </View>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};


export default ForgotPWScreen;


const styles = StyleSheet.create({});
