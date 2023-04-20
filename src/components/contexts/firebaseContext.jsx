import { createContext } from "react";
import { auth, db, sendMessageWith } from "../../firebase";

const FirebaseContext = createContext({
    auth,
    db,
    sendMessageWith,
});

export default FirebaseContext;