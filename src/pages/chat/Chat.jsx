import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../contexts/FirebaseContext";

// Components
import Message from "../../components/chat/Message";
import SendMessage from "../../components/chat/SendMessage";
import Spinner from "../../components/loaders/Spinner";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import SkeletonChat from "../../components/loaders/SkeletonChat";
// Custom hook
import { useSpinner } from "../../hooks/useSpinner";


const Chat = () => {
    // Obtenemos el usuario de Firebase Auth
    const { user, loading, getMessages } = useContext(FirebaseContext);

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

    useEffect(() => {
        // Obtenemos los mensajes del tema
        const unsubscribe = getMessages(theme.theme, (messages) => {
            setMessages(messages);

            // Si no hay mensajes, modificamos el estado
            if (messages.length === 0) {
                setIsEmpty(true);
            }
        });

        return () => {
            setMessages([]);
            unsubscribe();
        };
    }, []);

    // Función para hacer scroll al final del chat
    const scrollChat = () => {
        if (chatRef.current) {
            chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
        }
    };

    // Hacemos scroll al final del chat cuando se añada un mensaje
    useEffect(() => {
        scrollChat();
    }, [messages]);

    return (
        <>
            {/* Si no existe el usuario redirigimos a 404 */}
            {!user && !loading ? (
                <Navigate to="/404" />
            ) : (
                <>
                    {/* Si el chat está vacío redirigimos a 404 */}
                    {isEmpty && !user?.isAdmin ? (
                        <Navigate to="/404" />
                    ) : (
                        <main>
                            <Navbar />
                            {/* Mostramos el spinner para la carga del Chat */}
                            {showSpinner ? (
                                    <SkeletonChat />
                            ) : (
                                <>
                                    <div className="flex flex-col items-center w-full p-5">
                                        <div className="flex justify-center py-5 text-3xl font-bold">
                                            <h1>{theme.theme}</h1>
                                        </div>
                                        <div id="chat" ref={chatRef} className="min-h-[40vh] max-h-[60vh] max-w-[70rem] w-full overflow-y-scroll border border-gray-300">
                                            {/* Añadimos los mensajes */}
                                            {messages && messages.map((message) => (
                                                <Message key={message.id} message={message} theme={theme.theme} />
                                            ))}
                                        </div>
                                        <div className="flex justify-center w-4/5 py-5 lg:w-3/5">
                                            <SendMessage theme={theme.theme} />
                                        </div>
                                    </div>
                                </>
                            )}
                            <Footer />
                        </main>
                    )}
                </>
            )}
        </>
    );
};

export default Chat;