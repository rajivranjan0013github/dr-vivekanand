// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5S3xch0ipP9xHLWhf0KT40-t5bEFBEas",
  authDomain: "hospital-appointment-f5f62.firebaseapp.com",
  projectId: "hospital-appointment-f5f62",
  storageBucket: "hospital-appointment-f5f62.firebasestorage.app",
  messagingSenderId: "732291232063",
  appId: "1:732291232063:web:cc3618b37b8ea0ca8a638a",
  databaseURL: "https://hospital-appointment-f5f62-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);