import { StyleSheet } from "react-native";
import React from "react";
import { Center, HStack, Heading, Spinner } from "native-base";

const LoadingOverlay = () => {
  return (
    <Center flex={1} style={styles.container}>
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="primary.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
    </Center>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.15)",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%"
  },
});
