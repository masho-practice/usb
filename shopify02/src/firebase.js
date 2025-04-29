import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";  // Import Firestore functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"; // Import auth functions

const firebaseConfig = {
    apiKey: "AIzaSyDjlqJYCNHQz9ribolyOtK1pWXIS4DlgVY",
    authDomain: "shopify01-c1e26.firebaseapp.com",
    projectId: "shopify01-c1e26",
    storageBucket: "shopify01-c1e26.firebasestorage.app",
    messagingSenderId: "870202849918",
    appId: "1:870202849918:web:b0a05705cd0e39a822362f",
    measurementId: "G-DFWJQG3MH6"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Initialize Firestore
const auth = getAuth(firebaseApp); // Initialize Auth

export { db, collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };