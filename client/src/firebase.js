// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "malgein-blog.firebaseapp.com",
  projectId: "malgein-blog",
  storageBucket: "malgein-blog.appspot.com",
  messagingSenderId: "273795575173",
  appId: "1:273795575173:web:f65b9b197bb319c98e28ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);