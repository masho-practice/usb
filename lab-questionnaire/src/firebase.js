// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD58uvD0L9NY7vtx4k9mpVJZfpNnHPkCAc",
  authDomain: "questionnaire-5dd3f.firebaseapp.com",
  projectId: "questionnaire-5dd3f",
  storageBucket: "questionnaire-5dd3f.firebasestorage.app",
  messagingSenderId: "537823611171",
  appId: "1:537823611171:web:c9a87e4a4aafa397e12496",
  measurementId: "G-779EZ9S20J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);