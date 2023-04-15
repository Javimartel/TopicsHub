import React from "react";

// Firebase Auth
import { auth } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithRedirect } from "firebase/auth";

// Google Auth
const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}


const SignIn = () => {
    return (
        <div>
            <button onClick={googleSignIn} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-1">
                Log In
            </button>
        </div>

    );
}

export default SignIn;