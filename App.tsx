import { StyleSheet } from "react-native";
import Root from "./src/navigations/Root";
import { NativeBaseProvider } from "native-base";
import appTheme from "./src/theme";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <NativeBaseProvider theme={appTheme}>
      <Provider store={store}>
        <Root />
      </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
