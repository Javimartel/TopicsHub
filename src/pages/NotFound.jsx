import React from "react";
import { Link } from "react-router-dom";

export default function Notfound() {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-2xl'>
            <img src="../assets/404.svg" alt="404" className="w-2/3 max-w-[500px] select-none" />
            <Link to="/" className="mt-4 text-xl hover:text-blue-500">
                Go Home
            </Link>
        </div>
    )
}



