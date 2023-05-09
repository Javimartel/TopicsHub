import React, { useContext } from "react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { BsFillTrash3Fill } from "react-icons/bs";
const Message = ({ message, theme }) => {
    // Mover todo esto para fuera a Chat con un ENUM
    const { auth, deleteMessage } = useContext(FirebaseContext);

    const isCurrentUser = message.uid === auth.currentUser.uid;

    const mssgClass = isCurrentUser ? "chat chat-end" : "chat chat-start w-2/3";
    const currentTheme = theme;

    async function handleClick(messageId, messageUid, currentTheme) {
        await deleteMessage(messageId, messageUid, currentTheme);
    }

    return (
        <div className={mssgClass}>
            <div className="text-black chat-header">
                {message.name}
            </div>
            <div className="break-words chat-bubble chat-bubble-primary" >
                {message.text}
            </div>
            {isCurrentUser && (
                <div className="pt-1 chat-footer">
                    <button onClick={() => handleClick(message.id, message.uid, currentTheme)}>
                        <BsFillTrash3Fill color="red" size={15}/>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Message;
