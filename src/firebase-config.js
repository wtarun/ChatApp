// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXvNg11Xp0RGeAE-E-eGgFHrfohPjaX4k",
  authDomain: "chatapp-d8138.firebaseapp.com",
  projectId: "chatapp-d8138",
  storageBucket: "chatapp-d8138.appspot.com",
  messagingSenderId: "970925920454",
  appId: "1:970925920454:web:425c6290a382882e3d87c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
