// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fd7c0.firebaseapp.com",
  projectId: "mern-estate-fd7c0",
  storageBucket: "mern-estate-fd7c0.appspot.com",
  messagingSenderId: "334926949918",
  appId: "1:334926949918:web:b047a15d65ebab2874480f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
