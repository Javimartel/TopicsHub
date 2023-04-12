import React from "react";
import SignIn from './SignIn'
import LogOut from './LogOut'
// Firebase Auth
import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const Nav = () => {
    const [user] = useAuthState(auth)

    return (
        <nav className="w-full h-10 flex justify-center items-stretch  m-4 p-">
            {user ? <LogOut /> : <SignIn />}
        </nav>

    );
}

export default Nav;