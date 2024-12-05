// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyOmE3GfOyweYiey4ZBs-VCD0FkTn7Vvo",
  authDomain: "netflixgpt-258a9.firebaseapp.com",
  projectId: "netflixgpt-258a9",
  storageBucket: "netflixgpt-258a9.firebasestorage.app",
  messagingSenderId: "141583139669",
  appId: "1:141583139669:web:5fa91ce5daa8fd0673e5dc",
  measurementId: "G-CBTE3LEN0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);//making it global


