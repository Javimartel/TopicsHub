import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bottom-0 flex flex-col w-full pt-5 bg-[#fbf9fa] dark:bg-[#1f2937] mt-12 justify-center text-gray-900 dark:text-gray-100 dark:border-t-2"> {/* Footer section */}
            <h1 className="font-mono text-2xl font-bold text-center"> {/* Footer title */}
                Topics<span className="text-blue-500">Hub</span>
            </h1>
            <div className="flex flex-col items-center pt-5">
                <div className="flex flex-col items-center h-full md:flex-row justify-evenly md:w-[350px]"> {/* Footer links */}
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                        <Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-300">
                            About
                        </Link>
                    </div>
                    <div className="items-center justify-center hidden h-full mb-4 md:mb-0 md:flex">
                        <p>|</p>
                    </div>
                        <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                            <Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-300">
                                Contact
                            </Link>
                        </div>
                    <div className="items-center justify-center hidden h-full mb-4 md:mb-0 md:flex">
                        <p>|</p>
                    </div>
                    <div className="flex items-center justify-center h-full mb-4 md:mb-0">
                        <Link className="hover:text-blue-500 dark:hover:text-blue-300">Privacy</Link>
                    </div>
                </div>

                <div className="flex items-center h-full pb-5 justify-evenly w-[200px] md:pt-8">
                    <FaTwitter size={25} />
                    <FaGithub size={25} />
                    <FaLinkedinIn size={25} />
                </div>
                <div className="flex items-center justify-center h-full pt-4 mb-7">
                    <p className="font-mono">
                        All rights reserved. 2023 Topics<span className="text-blue-500">Hub</span> Inc.
                    </p>
                </div>
            </div>
        </footer>

    );
}






