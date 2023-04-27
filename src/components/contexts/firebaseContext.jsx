import { createContext } from "react";
import { 
    auth, 
    getUser, 
    googleLogIn, 
    getThemes, 
    addTheme, 
    uploadFileAndGetURL, 
    sendMessageWith, 
    getMessages, 
    deleteMessage 
} from "../../firebase";

const FirebaseContext = createContext({
    auth,
    getUser,
    googleLogIn,
    getThemes,
    addTheme,
    uploadFileAndGetURL,
    sendMessageWith,
    getMessages,
    deleteMessage
});

export default FirebaseContext;