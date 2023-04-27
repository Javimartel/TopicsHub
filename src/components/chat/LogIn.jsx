import React, { useContext } from "react";
import FirebaseContext from "../contexts/FirebaseContext";

const LogIn = () => {
    const { googleLogIn } = useContext(FirebaseContext);

    function handleClick() {
        googleLogIn();
    }

    return (
        <div>
            <button onClick={handleClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-1">
                Log In
            </button>
        </div>
    );
}

export default LogIn;