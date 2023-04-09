import React from "react";
import { auth } from "../../firebase";

const Message = ({ message }) => {

    const mssgClass = message.uid === auth.currentUser.uid ? "chat chat-end" : "chat chat-start";

    return (
        <div className="w-[100%]">
            <div className={mssgClass}>
                <div className="chat-header">
                    {message.name}
                </div>
                <div className="chat-bubble chat-bubble-primary">
                    {message.text}
                </div>
            </div>
        </div>
    );
}


export default Message;
