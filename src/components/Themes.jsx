import React from "react";
import { Link } from "react-router-dom";
import CardAbout from "./CardAbout"
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from "./chat/SignIn";
import LogOut from "./chat/LogOut";

function Themes() {
    const [user] = useAuthState(auth)
    console.log(user);
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white">Temáticas</h1>
            <h2 className="font-bold italic">Eliminar este botón cuando esté el Login creado</h2>
            {user ? <LogOut /> : <SignIn />}
            <Link to="/">Home</Link>
            <div className="flex justify-center w-[50%]">
                <Link to="/chat/Anime">
                    <CardAbout theme="Anime" category="Entretenimiento" img="https://img.asmedia.epimg.net/resizer/4Xiieu6FlFODR6qVHG3Yb3YS2DY=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/G3IUZ2VTD5ITVCVVMBJTKGRXBI.jpg" />
                </Link>
                <Link to="/chat/Ropa">
                    <CardAbout theme="Ropa" category="Moda" img="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg" />
                </Link>
                {/* <CardAbout theme="Manga" />
      <CardAbout theme="Coches" /> */}
            </div>
            {/* <Link to="chat">Chat</Link> */}
        </div>
    );
}

export default Themes;