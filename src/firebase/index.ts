import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBx9M6oNdeSFAaBZflihhzGbXb1O5m-QFk",
  authDomain: "react-native-practice-f525b.firebaseapp.com",
  databaseURL:
    "https://react-native-practice-f525b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-native-practice-f525b",
  storageBucket: "react-native-practice-f525b.appspot.com",
  messagingSenderId: "1034330057839",
  appId: "1:1034330057839:web:84e47887fa2869f8a8719a",
  measurementId: "G-VKR2LN8QNC",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export default firebaseApp;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
