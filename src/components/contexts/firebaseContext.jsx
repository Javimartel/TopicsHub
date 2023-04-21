import { createContext } from "react";
import { auth, db, getUser, googleLogIn, sendMessageWith } from "../../firebase";

const FirebaseContext = createContext({
    auth,
    db,
    getUser,
    googleLogIn,
    sendMessageWith,
});

export default FirebaseContext;