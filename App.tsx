import { StyleSheet } from "react-native";
import Root from "./src/navigations/Root";
import { NativeBaseProvider } from "native-base";
import appTheme from "./src/theme";
import { Provider } from "react-redux";
import store from "./src/store";

import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
const db = SQLite.openDatabase("wildguard.db");

export const createTable = async (db, tableName, columns) => {
  let colInfos = "";
  columns.forEach((col, index) => {
    colInfos += `${col.name} ${col.dataType}`;
    // default value
    if (typeof col.defaultValue !== "undefined") {
      colInfos += ` DEFAULT ${col.defaultValue}`;
    }
    // not null
    if (col.notNull) {
      colInfos += ` NOT NULL`;
    }
    // Primary key
    if (col.primaryKey) {
      colInfos += " PRIMARY KEY AUTOINCREMENT";
    }
    // Unique
    if (col.unique) {
      colInfos += " UNIQUE";
    }
    // add , if not last col
    if (index < columns.length - 1) {
      colInfos += ",";
    }
  });
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(${colInfos});`;
  console.log(query);
  await db.executeSql(query);
};

export default function App() {
  useEffect(() => {
    async function preload() {
      const createTableQuery = `CREATE TABLE tests (
        id INTEGER PRIMARY KEY,
        name TEXT,
        status TEXT
    );`;
      
      db.exec([{ sql: createTableQuery, args: [] }], false, (error, resultSet) => {
        console.log("===== resultSet: ", resultSet);
        console.log(error);
      });
    }

    preload();
  }, []);

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
