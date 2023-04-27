import React, { useContext } from "react";
import FirebaseContext from "../contexts/FirebaseContext";


const LogOut = () => {
    const { auth } = useContext(FirebaseContext);

    return (
        <div>
            <button onClick={() => auth.signOut()} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-1">
                Log Out
            </button>
        </div>

    );
}

export default LogOut;