import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAqHhW9stAA70mXYHFmX4f4HuWbXXS2iCU",
  authDomain: "lastexam-af5e2.firebaseapp.com",
  databaseURL:
    "https://lastexam-af5e2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lastexam-af5e2",
  storageBucket: "lastexam-af5e2.appspot.com",
  messagingSenderId: "1013431686356",
  appId: "1:1013431686356:web:709cc83ab97d6bc4869741",
  measurementId: "G-PPQSN9DMZY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const realDB = getDatabase(app);

export const GoogleProvider = new GoogleAuthProvider();
