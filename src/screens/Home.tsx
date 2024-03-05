import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch } from "../store";
import { removeUser } from "../store/user.reducer";
import { Button, Center } from "native-base";

const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <Center flex={1}>
      <Button onPress={() => dispatch(removeUser())}>
        Logout
      </Button>
    </Center>
  );
};

export default Home;

const styles = StyleSheet.create({});
