import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import ErrorOverlay from "../components/ErrorOverlay";
import { useAppSelector } from "../store";

const Stack = createNativeStackNavigator();

const Root = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!user && <Stack.Screen name="Auth" component={AuthStack} />}
          {user && <Stack.Screen name="TabNav" component={TabNav} />}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
