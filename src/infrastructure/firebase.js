// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Firestore functions
import {
    addDoc,
    collection,
    serverTimestamp,
    onSnapshot,
    doc,
    deleteDoc,
    query,
    orderBy,
} from "firebase/firestore";

// Firebase Storage functions
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";

// Firebase Auth
import { useAuthState } from 'react-firebase-hooks/auth'
import {
    GoogleAuthProvider,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID,
    measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// FIREBASE FUNCTIONS

// Obtener usuario
export const getUser = () => {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    return [user, loading];
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

// Crear usuario con email y contraseña
export const createUser = async (name, email, password, profilePicture) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // subimos la foto de perfil al storage de firebase
        const storage = getStorage();
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, profilePicture);
        const downloadURL = await getDownloadURL(storageRef);
        // actualizamos el perfil del usuario con el nombre y la foto
        await updateProfile(user, {
            displayName: name,
            photoURL: downloadURL
        });
        return Promise.resolve(user);
    } catch (error) {
        console.error("Error creating user: ", error);
        return Promise.reject(error);
    }
};

// Actualizar perfil
export const updateProfileWith = async (name, email, password, profilePicture) => {
    try {
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(profilePicture);
    } catch (error) {
        console.error("Error updating profile: ", error);
    }
};

// Iniciar sesión con email y contraseña
export const logIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return Promise.resolve(user);
    } catch (error) {
        console.error("Error signing in: ", error);
        return Promise.reject(error);
    }
};

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

// Función para subir el archivo y obtener su enlace
export const uploadFileAndGetURL = async (file) => {
    try {
        // Obtener referencia al Storage
        const storage = getStorage();
        // Crear una referencia al archivo en el Storage con su nombre original
        const storageRef = ref(storage, file.name);

        // Subir el archivo al Storage
        await uploadBytes(storageRef, file);

        // Obtener el enlace del archivo subido
        const downloadURL = await getDownloadURL(storageRef);

        // Devolver el enlace del archivo subido
        return downloadURL;

    } catch (error) {
        console.error("Error al subir archivo:", error);
    }
}

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

// Obtener mensajes
export const getMessages = (theme, callback) => {
    try {
        const unsubscribe = onSnapshot(
            query(collection(db, theme), orderBy("timestamp", "asc")),
            (snapshot) => {
                const messages = [];
                snapshot.forEach((doc) => {
                    messages.push({ id: doc.id, ...doc.data() });
                });
                callback(messages);
            }
        );
        return unsubscribe;
    } catch (error) {
        console.error("Error getting messages: ", error);
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
