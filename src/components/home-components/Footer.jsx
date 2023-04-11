import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn  } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
        <footer className="bottom-0 flex flex-col items-center justify-between w-full h-full pt-2 bg-[#e8f5f6] mt-5"> {/* Footer section */}
        
            <div className="flex items-center justify-center h-full mb-5">
                <Typography variant="paragraph" color="black" className="font-mono">
                    © 2023 TopicsHub
                </Typography>
            </div>

            <div className="flex items-center justify-center h-full mb-5">
                <FaTwitter size={30} color="black" className="mr-8" />
                <FaGithub size={30} color="black" className="mr-8" />
                <FaLinkedinIn size={30} color="black" className="" />
            </div>
        </footer>
    );
}






