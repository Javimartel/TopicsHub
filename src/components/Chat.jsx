import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FirebaseContext from "./contexts/FirebaseContext";

// Components
import Message from "./chat/Message";
import SendMessage from "./chat/SendMessage";
import SignIn from "./chat/LogIn";
import LogOut from "./chat/LogOut";
import Spinner from "./Spinner";
import Navbar from "./reusable-components/Navbar"
import Footer from "./reusable-components/Footer"
// Custom hook
import { useSpinner } from "./hooks/useSpinner";


const Chat = () => {
    // Obtenemos el usuario de Firebase Auth
    const { getUser, getMessages } = useContext(FirebaseContext);
    const user = getUser();

    // Si no existe el usuario, redirigimos a 404
    // if (!user) {
    //     return <Navigate to="/404" />
    // }

    // Obtenemos el tema del chat pasado por ruta
    const theme = useParams();
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
        minHeight: '50vh',
        maxHeight: '50vh'
    };

    useEffect(() => {
        // Obtenemos los mensajes de la colección del tema proporcionado
        getMessages(theme.theme, (messages) => {
            // Añadimos los mensajes al estado
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
            // Limpiamos el estado de los mensajes
            setMessages([]);
        }
    }, []);

    return (
        <>
            {/* Comprobamos si está vacío el chat para redirigir a 404 */}
            {isEmpty ? (
                <Navigate to="/404" />
            ) : (
                <main>
                    <Navbar />
                    {/* Añadimos el spinner para que se muestre antes que el main */}
                    {showSpinner ? (
                        <div className="flex justify-center items-center w-full h-screen">
                            <Spinner />
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col items-center w-full mt-12">

                                <div className="flex justify-center w-3/5 py-5 text-3xl font-bold border border-gray-300">
                                    <h1 >{theme.theme}</h1>
                                </div>

                                <div id="chat" ref={chatRef} className="w-3/5 p-5 overflow-y-auto border border-gray-300" style={chatHeight}>
                                    {/* Añadimos todos los mensajes */}
                                    {messages && messages.map((message) => (
                                        <Message key={message.id} message={message} theme={theme.theme} />
                                    ))}
                                </div>
                                <div className="flex justify-center w-3/5 py-5 border border-gray-300">
                                    {/* Añadimos el componente para enviar mensajes */}
                                    <SendMessage theme={theme.theme} />
                                </div>
                            </div>
                        </>
                    )}
                    <Footer />
                </main>
            )}
        </>
    );
};

export default Chat;