import { createContext } from "react";
import { auth, db, getUser, googleLogIn, getThemes, addTheme, sendMessageWith } from "../../firebase";

const FirebaseContext = createContext({
    auth,
    db,
    getUser,
    googleLogIn,
    getThemes,
    addTheme,
    sendMessageWith,
});

export default FirebaseContext;