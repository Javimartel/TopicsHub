import React, { useState, useEffect, useRef } from "react";

import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// Firebase Auth
import { auth } from '../firebase'
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'
// Components
import Message from "./chat/Message";
import SendMessage from "./chat/SendMessage";
import SignIn from "./chat/LogIn";
import LogOut from "./chat/LogOut";
import Spinner from "./Spinner";
import Sidebar from "./chat/Sidebar";
// Custom hook
import { useSpinner } from "./hooks/useSpinner";


const Chat = () => {
    // Obtenemos el usuario de Firebase Auth
    const [user] = useAuthState(auth)

    // Si no existe el usuario, redirigimos a 404
    // if (!user) {
    //     return <Navigate to="/404" />
    // }

    // Obtenemos el tema del chat pasado por ruta
    const theme = useParams();

    // Si no existe el tema, redirigimos a 404
    if (!theme) {
        return <Navigate to="/404" />
    }

    // Creamos una referencia para el chat
    const chatRef = useRef(null);
    // Estado para los mensajes
    const [messages, setMessages] = useState([]);
    // Creamos un estado para comprobar si el chat está vacío
    const [isEmpty, setIsEmpty] = useState(false);
    // Añadimos el custom Hook para el spinner
    const showSpinner = useSpinner();

    // Estilos para el chat
    const chatHeight = {
        minHeight: '60vh',
        maxHeight: '60vh'
    };

    useEffect(() => {
        // Obtenemos los mensajes de la colección del tema proporcionado
        const q = query(collection(db, theme.theme), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            // Actualizamos el estado con los mensajes
            setMessages(messages);

            // Hacemos el scroll
            scrollChat();

            // Si no hay mensajes, modificamos el estado de isEmpty
            if (messages.length === 0) {
                setIsEmpty(true);
            }

        });

        // Añadimos el scroll automático al final del chat
        const scrollChat = () => {
            if (chatRef.current) {
                chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
            }
        };


        return () => {
            // Devolvemos la función unsubscribe para que no se quede escuchando
            unsubscribe();
        };
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
            {/* Comprobamos si está vacío el chat para redirigir a 404 */}
            {isEmpty ? (
                <Navigate to="/404" />
                ) : (
                    <main>
                    {/* Añadimos el spinner para que se muestre antes que el main */}
                    {showSpinner ? (
                        <Spinner />
                    ) : (
                        <div className="w-[100%] flex justify-center">
                            {/* <Sidebar /> */}
                            <div className="w-[50%] flex flex-col items-center">
                                {/* AÑADIR AQUÍ UN NAVBAR QUE CONTENGA EL TÍTULO DEL CHAT Y UN BOTÓN HACIA ATRAS (THEMES) */}
                                <div id="chat" ref={chatRef} className="bg-blue-500 border-solid border-2 border-black min-w-full max-w-full flex flex-col border overflow-y-auto" style={chatHeight}>
                                    {/* Añadimos todos los mensajes */}
                                    {messages && messages.map((message) => (
                                        <Message key={message.id} message={message} theme={theme.theme} />
                                    ))}
                                </div>
                                <div className="flex w-[100%] justify-center border bg-blue-500 border-solid border-2 border-black">
                                    {/* Añadimos el componente para enviar mensajes */}
                                    <SendMessage theme={theme.theme} />
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            )}
        </>
    );
};

export default Chat;