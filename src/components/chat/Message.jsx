import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { BsFillTrash3Fill } from "react-icons/bs";

const Message = ({ message, theme }) => {
    const { auth, deleteMessage } = useContext(FirebaseContext);

    const isCurrentUser = message.uid === auth.currentUser.uid;
    const mssgClass = isCurrentUser ? "chat chat-end" : "chat chat-start";
    const mssgStyle = isCurrentUser ? "break-words chat-bubble bg-gray-900 text-white dark:bg-gray-900" : "break-words chat-bubble bg-blue-600 text-white dark:bg-[#1f2937] ";
    const currentTheme = theme;

    async function handleClick(messageId, messageUid, currentTheme) {
        await deleteMessage(messageId, messageUid, currentTheme);
    }

    return (
        <div className={mssgClass}>
            <div className="text-black chat-header dark:text-white">
                {message.name}
            </div>
            <div className={mssgStyle} >
                {message.text}
            </div>
            {isCurrentUser && (
                <div className="pt-1 chat-footer">
                    <button onClick={() => handleClick(message.id, message.uid, currentTheme)}>
                        <BsFillTrash3Fill size={15} color="red"/>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Message;
