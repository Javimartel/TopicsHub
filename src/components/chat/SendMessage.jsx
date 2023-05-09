import React, { useRef, useContext } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";

import { Input, Button } from "@material-tailwind/react";
import { BsFillSendFill } from "react-icons/bs";

const SendMessage = ({ theme }) => {
    // Referencia al input
    const inputRef = useRef("");
    const { auth, sendMessageWith } = useContext(FirebaseContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const textToAdd = inputRef.current.value.trim();

        if (textToAdd === "") {
            alert("Please, write a message");
            return;
        }

        const { uid, displayName } = auth.currentUser;
        await sendMessageWith(theme, textToAdd, uid, displayName);

        inputRef.current.value = "";
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center w-2/5 gap-2">
            <Input type="text" inputRef={inputRef} label="Message" maxLength={255} />
            <Button type="submit" className="flex justify-center">
                <div className="flex">
                    <BsFillSendFill size={15} />
                </div>
            </Button>
        </form>
    );
};

export default SendMessage;