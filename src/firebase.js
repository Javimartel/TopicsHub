// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAF35Ak_Jb3JvDz8hmmLtD03WSSdy60KTo",
    authDomain: "chat-test-b90f4.firebaseapp.com",
    projectId: "chat-test-b90f4",
    storageBucket: "chat-test-b90f4.appspot.com",
    messagingSenderId: "1016719690846",
    appId: "1:1016719690846:web:67227867eae6f5e011b8cf",
    measurementId: "G-2NEVH1Z2S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);