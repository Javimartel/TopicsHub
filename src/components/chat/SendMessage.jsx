import React, { useRef } from "react";
import { auth } from "../../firebase";
import { sendMessageWith } from "../../firebase";
import { Input, Button } from "@material-tailwind/react";
import { BsFillSendFill } from "react-icons/bs";

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

        <form onSubmit={handleSubmit} className="flex items-center w-2/5 gap-1">
            <Input type="text" inputRef={inputRef} label="Message" className=""/>
            <Button type="submit" className="flex justify-center">
                <div>
                    <BsFillSendFill size={15} />
                </div>
            </Button>
        </form>

    );
};

export default SendMessage;
