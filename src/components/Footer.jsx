import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bottom-0 flex flex-col w-full pt-5 bg-[#fbf9fa] mt-12 justify-center text-gray-900"> {/* Footer section */}
            <h1 className="font-mono text-2xl font-bold text-center"> {/* Footer title */}
                Topics<span className="text-blue-500">Hub</span>
            </h1>
            <div className="flex flex-col items-center pt-5">
                <div className="flex flex-col items-center h-full md:flex-row justify-evenly md:w-[350px]"> {/* Footer links */}
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0 ">
                        <Link className="hover:text-blue-500">
                            Contact
                        </Link>
                    </div>
                    <div className="items-center justify-center hidden h-full mb-4 md:mb-0 md:flex">
                        <p>
                            |
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                        <Link to="/about" className="hover:text-blue-500">
                            About
                        </Link>
                    </div>
                    <div className="items-center justify-center hidden h-full mb-4 md:mb-0 md:flex">
                        <p>
                            |
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                        <Link className="hover:text-blue-500">
                            Privacy
                        </Link>
                    </div>
                </div>

                <div className="flex items-center h-full pb-2 justify-evenly w-[200px] md:pt-5">
                    <FaTwitter size={25} color="#37474f" />
                    <FaGithub size={25} color="#37474f" />
                    <FaLinkedinIn size={25} color="#37474f" />
                </div>
                <div className="flex items-center justify-center h-full md:pt-2 mb-7">
                    <p className="font-mono">
                        All rights reserved. 2023 Topics<span className="text-blue-500">Hub</span> Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}






