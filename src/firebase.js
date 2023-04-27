// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, serverTimestamp, onSnapshot, doc, deleteDoc } from "firebase/firestore";
// Firebase Auth
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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
export const getThemes = (callback) => {
    try {
        const unsubscribe = onSnapshot(collection(db, "Themes"), (snapshot) => {
            const themes = [];
            snapshot.forEach((doc) => {
                themes.push({ id: doc.id, ...doc.data() });
            });
            callback(themes);
        });
        return unsubscribe;
    } catch (error) {
        console.error("Error getting themes: ", error);
    }
};

// Agregar tema
export const addTheme = async (themeData) => {
    try {
        const docRef = await addDoc(collection(db, "Themes"), {
            name: themeData.name,
            description: themeData.description,
            category: themeData.category,
            img: themeData.img,
        });
        return docRef;

    } catch (error) {
        console.error("Error adding theme: ", error);
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

// Eliminar mensaje
export const deleteMessage = async (messageId, messageUid, currentTheme) => {
    const messageRef = doc(db, currentTheme, messageId);
    const { uid } = auth.currentUser;

    if (uid === messageUid) {
        await deleteDoc(messageRef);
    }
}
