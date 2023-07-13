import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/user.reducer";
import { Button } from "native-base";

type Props = {} & NativeStackScreenProps<AuthStackParams, "Login">;

const Login = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  function onSignUp() {
    navigation.navigate("SignUp");
  }
  function onLoggedIn() {
    dispatch(setUser());
  }
  return (
    <View>
      <Text>Login</Text>
      <Button onPress={onSignUp}>Sign Up</Button>
      <Button onPress={onLoggedIn}>Login</Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
