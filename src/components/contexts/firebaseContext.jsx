import { createContext } from "react";
import { auth, db, getUser, googleLogIn, getThemes, addTheme, uploadFileAndGetURL, sendMessageWith, deleteMessage } from "../../firebase";

const FirebaseContext = createContext({
    auth,
    db,
    getUser,
    googleLogIn,
    getThemes,
    addTheme,
    uploadFileAndGetURL,
    sendMessageWith,
    deleteMessage
});

export default FirebaseContext;