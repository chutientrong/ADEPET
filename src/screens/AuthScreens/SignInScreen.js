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

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  // let token = AsyncStorage.getItem('auth');

  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
  }

  const handleLogin = () => {
    setIsLoad(true);
    let values = {
      email,
      password,
    };
    dispatch(login(values));
  };

  useEffect(() => {
    let timeoutVariable;

    if (isLoad) {
      timeoutVariable = setTimeout(() => setIsLoad(false), 3000);
    }

    return () => clearTimeout(timeoutVariable);
  }, [isLoad]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoad(true);
  //   }, 5000);
  // }, []);

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
            <FormInput
              label="Password"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              containerStyle={{
                marginTop: SIZES.md,
              }}
              onChange={(value) => {
                utils.validatePassword(value, setPasswordError);
                setPassword(value);
              }}
              errorMsg={passwordError}
              appendComponent={
                <TouchableOpacity
                  style={{
                    width: 40,
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                  onPress={() => setShowPass(!showPass)}
                >
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

            <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.lg,
                justifyContent: "space-between",
              }}
            >
              {/* <CustomSwitch
                value={saveMe}
                onChange={value => setSaveMe(value)}
              /> */}
              <TextButton
                label="Forgot Password?"
                buttonContainerStyle={{
                  backgroundColor: null,
                }}
                labelStyle={{
                  color: COLORS.gray,
                  ...FONTS.body4,
                }}
                onPress={() => navigation.navigate("ForgotPasswordScreen")}
              />
            </View>
            {isLoad ? (
              <Spinner size="small" />
            ) : (
              <TextButton
                label="Sign In"
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
                onPress={handleLogin}
                // onPress={()=>navigation.navigate("HomeScreen")}
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
              Don't have an account?
            </Text>
            <TextButton
              label="Sign Up"
              buttonContainerStyle={{
                backgroundColor: null,
                marginLeft: 3,
              }}
              labelStyle={{
                color: COLORS.red,
                ...FONTS.h3,
              }}
              onPress={() => navigation.navigate("SignUpScreen")}
            />
          </View>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
