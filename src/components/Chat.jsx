import React from "react";
import { Link } from "react-router-dom";

function Chat() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl text-white">Chat</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Chat;