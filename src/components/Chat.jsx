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
import SendMessage from "./chat/sendMessage";
import SignIn from "./chat/SignIn";
import LogOut from "./chat/LogOut";
import Sidebar from "./chat/Sidebar";


const Chat = () => {
    const [user] = useAuthState(auth)

    // Si no existe el usuario, redirigimos a 404
    // if (!user) {
    //     return <Navigate to="/404" />
    // }

    const theme = useParams();

    // Si no existe el tema, redirigimos a 404
    if (!theme) {
        return <Navigate to="/404" />
    }

    const chatRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);
    const chatHeight = {
        minHeight: '60vh',
        maxHeight: '60vh'
    };
    const messageWrapper = {
        overflowWrap: 'break-word'
    }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(collection(db, theme.theme), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
            scrollChat();

            if (messages.length === 0) {
                setIsEmpty(true);
            }

        });

        const scrollChat = () => {
            if (chatRef.current) {
                chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
            }
        };
        
        const timeoutId = setTimeout(() => {
            setShowSpinner(false);
        }, 1500);

        return () => {
            unsubscribe();
            clearTimeout(timeoutId);
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
            {showSpinner ? (
                <div className="spin">
                    <div className="m-10 flex justify-center items-center">
                        <svg className="animate-spin spin" fill="none" height="150" viewBox="0 0 20 20" width="150" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="#ffffff" />
                        </svg>
                    </div>
                </div>
            ) : (
                <main>
                    {isEmpty ? (
                        <Navigate to="/404" />
                    ) : (
                        <div className="w-[100%] flex justify-center">
                            <Sidebar />
                            <div className="w-[50%] flex flex-col items-center">
                                <div id="chat" ref={chatRef} className="bg-white max-w-full flex flex-col border overflow-y-auto" style={chatHeight}>
                                    {/*  */}
                                    {messages && messages.map((message) => (
                                        <Message key={message.id} message={message} theme={theme.theme} style={messageWrapper} />
                                    ))}
                                </div>
                                {/*  Send Message Component */}
                                <div className="flex w-[100%] justify-center border bg-white">
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