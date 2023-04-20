import React from "react";
import { auth } from '../../firebase'
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

async function deleteMessage(messageId, messageUid, currentTheme) {
    const messageRef = doc(db, currentTheme, messageId);
    const { uid } = auth.currentUser;

    if (uid === messageUid) {
        await deleteDoc(messageRef);
    }
}

const Message = ({ message, theme }) => {
    const isCurrentUser = message.uid === auth.currentUser.uid;
    const mssgClass = isCurrentUser ? "chat chat-end" : "chat chat-start";
    const currentTheme = theme;

    return (
        <div className="w-[100%]">
            <div className={mssgClass}>
                <div className="chat-header text-black">
                    {message.name}
                </div>
                <div className="chat-bubble chat-bubble text-white break-words">
                    {message.text}
                </div>
                {isCurrentUser && (
                    <div className="chat-footer">
                        <button onClick={() => deleteMessage(message.id, message.uid, currentTheme)}>
                            <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Message;
