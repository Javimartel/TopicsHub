import React from "react";
import { Link  } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl text-white">Home</h1>
      <Link to="chat">Chat</Link>
    </div>
  );
}

export default Home;