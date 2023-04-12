import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="bottom-0 flex flex-row w-full pt-5 bg-[#e8f5f6]"> {/* Footer section */}

            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex items-center justify-center h-full mb-5">
                    <Typography variant="paragraph" color="black" className="font-mono text-lg font-bold">
                    Topics<span className="text-blue-500">Hub</span>
                    </Typography>
                </div>
                <div className="flex items-center justify-center h-full mb-5">
                    <Typography variant="paragraph" color="black" className="font-mono">
                        Contacto
                    </Typography>
                </div>
                <div className="flex items-center justify-center h-full mb-5">
                    <Typography variant="paragraph" color="black" className="font-mono">
                        Acerca de
                    </Typography>
                </div>
                <div className="flex items-center justify-center h-full mb-5">
                    <Typography variant="paragraph" color="black" className="font-mono">
                        Ayuda
                    </Typography>
                </div>
                <div className="flex items-center justify-center h-full mb-5">
                    <Typography variant="paragraph" color="black" className="font-mono">
                        Privacidad
                    </Typography>
                </div>
                <div className="flex items-center justify-center h-full mb-5">
                    <Typography variant="paragraph" color="black" className="font-mono">
                        © 2023 TopicsHub
                    </Typography>
                </div>
                <div className="flex items-center justify-center h-full mb-5">
                    <FaTwitter size={30} color="black" className="mr-8" />
                    <FaGithub size={30} color="black" className="mr-8" />   
                    <FaLinkedinIn size={30} color="black" />    
                </div>
            </div>
        </footer>
    );
}






