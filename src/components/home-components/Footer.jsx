import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bottom-0 flex flex-col w-full pt-5 bg-[#fbf9fa] mt-12 justify-center"> {/* Footer section */}
            <h1 className="font-mono text-2xl font-bold text-center"> {/* Footer title */}
                Topics<span className="text-blue-500">Hub</span>
            </h1>
            <div className="flex flex-col items-center pt-5">
                <div className="flex flex-col items-center h-full md:flex-row justify-evenly md:w-[500px]"> {/* Footer links */}
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0 ">
                        <p className="font-mono">
                            Contact
                        </p>
                    </div>
                    <div className="items-center justify-center hidden h-full mb-4 md:mb-0 md:flex">
                        <p className="font-mono">
                            |
                        </p>
                    </div> 
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                        <p className="font-mono">
                            About
                        </p>
                    </div>
                    <div className="items-center justify-center hidden h-full mb-4 md:mb-0 md:flex">
                        <p className="font-mono">
                            |
                        </p>
                    </div> 
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                        <p className="font-mono">
                            Help
                        </p>
                    </div>
                    <div className="items-center justify-center hidden h-full mb-4 md:mb-0 md:flex">
                        <p className="font-mono">
                            |
                        </p>
                    </div> 
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                        <p className="font-mono">
                            Privacy
                        </p>
                    </div> 
                </div>
                <div className="flex items-center justify-center h-full pb-5 md:pt-5">
                    <p className="font-mono">
                        © 2023 Topics<span className="text-blue-500">Hub</span>
                    </p>
                </div>
                <div className="flex items-center h-full pb-5 justify-evenly w-[200px]">
                    <FaTwitter size={30} color="black" />
                    <FaGithub size={30} color="black" />
                    <FaLinkedinIn size={30} color="black" />
                </div>
            </div>

        </footer>
    );
}






