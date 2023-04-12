import React, { useState, useRef } from "react";
import { auth, db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ theme }) => {
    const inputRef = useRef('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const textToAdd = inputRef.current.value.trim();
        if (textToAdd === '') {
            alert('Por favor añade un mensaje');
            return;
        }

        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, theme), {
            text: textToAdd,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
        });

        // Limpiar el campo de entrada y restablecer el estado de error
        inputRef.current.value = '';
    };

    return (
        <div className="w-[50%] m-4">
            <form onSubmit={sendMessage} className="flex justify-evenly">
                <input type="text" ref={inputRef} className="input input-bordered input-info w-full max-w-xs" />
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default SendMessage;
