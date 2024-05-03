// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6cs0jZJo3p0uCFERA5mccTaDeEWQiuDk",
  authDomain: "notes-9e17f.firebaseapp.com",
  projectId: "notes-9e17f",
  storageBucket: "notes-9e17f.appspot.com",
  messagingSenderId: "718260887945",
  appId: "1:718260887945:web:e455b743bac2eaf87f0158",
  measurementId: "G-DLQ3K5FYE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);