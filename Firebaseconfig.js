// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcf64WRKZstaL30gnHeAexnZsnBPefPYc",
  authDomain: "android-85938.firebaseapp.com",
  projectId: "android-85938",
  storageBucket: "android-85938.appspot.com",
  messagingSenderId: "768667664084",
  appId: "1:768667664084:web:4dd61729477bd049b6c541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };
