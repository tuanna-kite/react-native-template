import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";

type Props = {} & NativeStackScreenProps<AuthStackParams, "SignUp">;

const SignUp = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
