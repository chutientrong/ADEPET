import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";

import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { CustomSwitch, FormInput, Spinner, TextButton } from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { utils } from "../../utils";
import { useSelector, useDispatch } from "react-redux";
import AuthLayout from "./AuthLayout";
// import {utils} from '../../utils';
// import {useSelector, useDispatch} from 'react-redux';
import { registerUser } from "../../redux/actions/authAction";
// import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setName] = useState('');
  const [cfPassword, setCfPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cfPasswordError, setCfPasswordError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showCfPass, setShowCfPass] = useState(false);
  const [nameError, setNameError] = useState('');
  const [isLoad, setIsLoad] = useState(false);

  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  function isEnableSignUp() {
    return (
      email != '' &&
      username != '' &&
      password != '' &&
      emailError == ''
    );
  }

  const handleRegister = () => {
    setIsLoad(true)
    let values = {
      username,
      email,
      password,
      // phoneNumber: '',
      // termsCondition: true,
    };
    dispatch(registerUser(values, navigation));
    setIsLoad(false)
  };

  useEffect(() => {
    let timeoutVariable
  
    if(isLoad){
      timeoutVariable = setTimeout(() => setIsLoad(false), 3000)
    }
  
    return () => clearTimeout(timeoutVariable)
  
  }, [isLoad]) 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <ScrollView>
        <AuthLayout
          title="Let's Sign You Up"
          subTitle="Create an account to continue!">
          <View
            style={{
              flex: 1,
              marginTop: SIZES.md,
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
                label="User Name"
                containerStyle={{
                  // flex: 1,
                  // width: 150,
                  marginTop: SIZES.md,
                }}
                onChange={value => {
                  utils.validateUsername(value, setNameError);
                  setName(value);
                }}
                errorMsg={nameError}
                appendComponent={
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={
                        username == '' ||
                        (username != '' && nameError == '')
                          ? icons.correct
                          : icons.cancel
                      }
                      style={{
                        height: 20,
                        width: 20,
                        tintColor:
                          username == ''
                            ? COLORS.gray
                            : username != '' && nameError == ''
                            ? COLORS.green
                            : COLORS.red,
                      }}
                    />
                  </View>
                }
              />
            <FormInput
              label="Email"
              keyboardType="email-address"
              
              onChange={value => {
                utils.validateEmail(value, setEmailError);
                setEmail(value);
              }}
              autoCompleteType="email"
              errorMsg={emailError}
              appendComponent={
                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={
                      email == '' || (email != '' && emailError == '')
                        ? icons.correct
                        : icons.cancel
                    }
                    style={{
                      height: 20,
                      width: 20,
                      tintColor:
                        email == ''
                          ? COLORS.gray
                          : email != '' && emailError == ''
                          ? COLORS.green
                          : COLORS.red,
                    }}
                  />
                </View>
              }
            />
            
            <FormInput
              label="Password"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{
                marginTop: SIZES.md,
              }}
              onChange={value => {
                utils.validatePassword(value, setPasswordError);
                setPassword(value);
              }}
              errorMsg={passwordError}
              appendComponent={
                <TouchableOpacity
                  style={{
                    width: 40,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                  onPress={() => setShowPass(!showPass)}>
                  <Image
                    source={showPass ? icons.eye_close : icons.eye}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: COLORS.gray,
                    }}
                  />
                </TouchableOpacity>
              }
            />
             <FormInput
              label="Confirm Password"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{
                marginTop: SIZES.md,
              }}
              onChange={value => {
                utils.validateCfPassword(value, password,setCfPasswordError);
                setCfPassword(value);
              }}
              errorMsg={cfPasswordError}
              appendComponent={
                <TouchableOpacity
                  style={{
                    width: 40,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}
                  onPress={() => setShowCfPass(!showCfPass)}>
                  <Image
                    source={showCfPass ? icons.eye_close : icons.eye}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: COLORS.gray,
                    }}
                  />
                </TouchableOpacity>
              }
            />
           
           {isLoad ? (
              <Spinner size="small" />
            ) : (
              <TextButton
                label="Sign Up"
                disabled={isEnableSignUp() ? false : true}
                buttonContainerStyle={{
                  height: 50,
                  alignItems: "center",
                  marginTop: SIZES.xxl,
                  borderRadius: SIZES.md,
                  backgroundColor: isEnableSignUp()
                    ? COLORS.red
                    : COLORS.transparentPrimary,
                }}
                onPress={handleRegister}
                // onPress={()=>navigation.navigate("HomeScreen")}
              />
            )}
            <View
              style={{
                flexDirection: 'row',
                marginVertical: SIZES.lg,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.darkGray,
                  ...FONTS.body3,
                }}>
                Already have an account?
              </Text>
              <TextButton
                label=" Sign In"
                buttonContainerStyle={{
                  backgroundColor: null,
                }}
                labelStyle={{
                  color: COLORS.red,
                }}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});