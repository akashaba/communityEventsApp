// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import React from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "project2025-2d4b5.firebaseapp.com",
  projectId: "project2025-2d4b5",
  storageBucket: "project2025-2d4b5.firebasestorage.app",
  messagingSenderId: "84570456883",
  appId: "1:84570456883:web:27d3641c4132894d303446",
  measurementId: "G-CFYQWT1SKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// const analytics = getAnalytics(app);