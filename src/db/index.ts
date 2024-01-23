import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite")).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "SQLite");
  }
  await FileSystem.downloadAsync(
    Asset.fromModule(require(pathToDatabaseFile)).uri,
    FileSystem.documentDirectory + "SQLite/wildguard.db"
  );
  return SQLite.openDatabase("wildguard.db");
}

