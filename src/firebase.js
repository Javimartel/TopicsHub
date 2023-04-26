// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, serverTimestamp, getDocs } from "firebase/firestore";
// Firebase Auth
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";
import { useSpinner } from "./components/hooks/useSpinner";

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

// FIREBASE FUNCTIONS

// Obtener usuario
export const getUser = () => {
    const [user] = useAuthState(auth)
    return user;
}

// Google Auth
export const googleLogIn = () => {
    try {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    } catch (error) {
        console.error("Error signing in with Google: ", error);
    }
}

// Obtener temas
export const getThemes = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "Themes"));
        const themes = [];
        querySnapshot.forEach((doc) => {
            themes.push({ id: doc.id, ...doc.data() });
        });
        return themes;
    } catch (error) {
        console.error("Error getting themes: ", error);
    }
};

// Enviar mensaje
export const sendMessageWith = async (theme, textToAdd, uid, displayName) => {
    try {
        const docRef = await addDoc(collection(db, theme), {
            text: textToAdd,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
        });
        return docRef;
    } catch (error) {
        console.error("Error sending message: ", error);
    }
};
