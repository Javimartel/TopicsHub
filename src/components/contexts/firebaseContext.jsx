import { createContext } from "react";
import { auth, db, getUser, googleLogIn, getThemes, addTheme, sendMessageWith, deleteMessage } from "../../firebase";

const FirebaseContext = createContext({
    auth,
    db,
    getUser,
    googleLogIn,
    getThemes,
    addTheme,
    sendMessageWith,
    deleteMessage
});

export default FirebaseContext;