import React, {useState, useEffect, useRef} from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// Firebase Auth
import { auth } from '../firebase'
import {db} from "../firebase";
import {query, collection, orderBy, onSnapshot} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'
// Components
import Message from "./chat/Message";
import SendMessage from "./chat/sendMessage";
import SignIn from "./chat/SignIn";
import LogOut from "./chat/LogOut";
import Sidebar from "./chat/Sidebar";


const Chat = () => {
    const [user] = useAuthState(auth)
    const theme = useParams();
    const chatHeight = {
        minHeight: '60vh',
        maxHeight: '60vh'
    };
    // Declaracion de Mensajes
    const [messages, setMessages] = useState([]);
    // Declaracion el scroll
    const scroll = useRef();
    useEffect(() => {
        // Hacemos una Query a la base de datos que nos devuelva los mensajes ordenados por timestamp
        const q = query(collection(db, theme.theme), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                // Agregamos los mensajes a la variable messages
                messages.push({...doc.data(), id: doc.id});
            });
            // Actualizamos el estado de los mensajes
            setMessages(messages);
            // Scroll cada vez que llega un mensaje
            const chat = document.querySelector('#chat');
            chat.scrollTo(0, chat.scrollHeight);
        });

        // Simulamos un tiempo de carga de 1,5 segundos para que el chat cargue correctamente
        const main = document.querySelector('main');
        if (!main.previousSibling || main.previousSibling.className !== 'spin') {
            main.style.display = 'none';
            const loading = document.createElement('div');
            loading.className = 'spin';
            loading.innerHTML = '<div class="m-10 flex justify-center items-center"><svg class="animate-spin spin" fill="none" height="150" viewBox="0 0 20 20" width="150" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="#ffffff"/></svg></div>';
            main.parentNode.insertBefore(loading, main);
            setTimeout(() => {
            loading.style.display = 'none';
            main.style.display = 'block';
            const chat = document.querySelector('#chat');
            chat.scrollTo(0, chat.scrollHeight)
            }, 1500);
        }

        // Devolvemos la funcion
        return () => unsubscribe();
    }, []);

    return (
      
        <>
            <div className="w-full text-center p-6">
                <h1>Chat</h1>
                <h2 className="font-bold italic">Eliminar este botón cuando esté el Login creado</h2>
                {user ? <LogOut /> : <SignIn />}
                <Link to="/themes">
                    <button className='bg-black w-[10%] p-1 rounded-lg text-white'>Themes</button>
                </Link>
            </div>
            <main>
                <div className="w-[100%] flex justify-center">
                    <Sidebar />
                    <div className="w-[60%] flex flex-col items-center">
                        <div id="chat" className="bg-white w-[100%] flex flex-col border overflow-y-scroll" style={chatHeight}>
                            {/*  */}
                            { messages && messages.map((message) => (
                                <Message key={message.id} message={message} theme={theme.theme}/>
                            ))}
                        </div>
                        {/*  Send Message Component */}
                        <div className="flex w-[100%] justify-center border bg-white">
                            <SendMessage scroll={scroll} theme={theme.theme}/>
                            <span ref={scroll}></span>
                        </div>
                    </div>
                    {/* Reemplazar más adelante por el perfil, es solo orientativo */}
                </div>
            </main>
        </>
    );
}

export default Chat;
