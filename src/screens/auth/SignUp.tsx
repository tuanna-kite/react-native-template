import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParams } from "../../navigations/config";
import { Button } from "native-base";

type Props = {} & NativeStackScreenProps<AuthStackParams, "SignUp">;

const SignUp = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Button
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Login
      </Button>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
