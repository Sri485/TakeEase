// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpKgbkTb7SnwBYAc5eOa1GAi0n7mbXsLs",
  authDomain: "take-ease.firebaseapp.com",
  projectId: "take-ease",
  storageBucket: "take-ease.appspot.com",
  messagingSenderId: "145131599725",
  appId: "1:145131599725:web:14fb6136da671bd8300c64",
  measurementId: "G-VZ50TRZ39P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, createUserWithEmailAndPassword };
