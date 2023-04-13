import React from "react";
import { Link } from "react-router-dom";
import CardAbout from "./CardAbout"
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from "./chat/SignIn";
import LogOut from "./chat/LogOut";

function Themes() {
    const [user] = useAuthState(auth)
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl text-white">Temáticas</h1>
            <h2 className="font-bold italic">Eliminar este botón cuando esté el Login creado</h2>
            {user ? <LogOut /> : <SignIn />}
            <Link to="/">Home</Link>
            <div className="flex justify-center w-[50%]">
                <Link to="/chat/Anime">
                    <CardAbout 
                        theme="Anime" 
                        description="Chat para hablar de anime y manga"
                        category="Entretenimiento" 
                        img="https://t.ctcdn.com.br/-jRX-9m58XZ2bTM0qcuI-Pp0fI4=/340x265:1654x1005/720x405/smart/filters:format(webp)/i521747.jpeg" 
                    />
                </Link>
                <Link to="/chat/Ropa">
                    <CardAbout 
                        theme="Ropa" 
                        description="Chat para hablar de moda y tendencias"
                        category="Moda" 
                        img="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg" 
                    />
                </Link>
                {/* <CardAbout theme="Manga" />
      <CardAbout theme="Coches" /> */}
            </div>
            {/* <Link to="chat">Chat</Link> */}
        </div>
    );
}

export default Themes;