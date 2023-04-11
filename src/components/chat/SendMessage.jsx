import React, { useState } from "react";
import {auth, db} from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({scroll, theme}) => {
    const [input, setInput] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === '') {
            alert('Please enter a message')
            return;
        };
        const {uid, displayName} = auth.currentUser;
        const textToAdd = input.trim();
        setInput('');
        await addDoc(collection(db, theme), {
            text: textToAdd,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
        })
        scroll.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="w-[50%] m-4">
            <form onSubmit={sendMessage} className="flex justify-evenly">
                <input  type="text" value={input} onChange={(e) => setInput(e.target.value)} className="input input-bordered input-info w-full max-w-xs" />
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default SendMessage;