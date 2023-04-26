import { createContext } from "react";
import { auth, db, getUser, googleLogIn, getThemes, sendMessageWith } from "../../firebase";

const FirebaseContext = createContext({
    auth,
    db,
    getUser,
    googleLogIn,
    getThemes,
    sendMessageWith,
});

export default FirebaseContext;