import React, { useRef } from "react";
import { auth } from "../../firebase";
import { sendMessageWith } from "../../firebase";

const SendMessage = ({ theme }) => {
    // Referencia al input
    const inputRef = useRef("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const textToAdd = inputRef.current.value.trim();

        if (textToAdd === "") {
            alert("Por favor añade un mensaje");
            return;
        }

        const { uid, displayName } = auth.currentUser;
        await sendMessageWith(theme, textToAdd, uid, displayName);

        // Limpiar el input despues de enviar el mensaje
        inputRef.current.value = "";
    };

    return (
        <div className="w-[50%] m-4">
            <form onSubmit={handleSubmit} className="flex justify-evenly">
                <input type="text" ref={inputRef} className="input input-bordered border-black input-info w-full max-w-xs" />
                <button type="submit" className="btn btn-black">Enviar</button>
            </form>
        </div>
    );
};

export default SendMessage;
