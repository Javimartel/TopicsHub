import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Typography, Button } from "@material-tailwind/react";
import {
    BsChatFill,
    BsPersonCheckFill,
    BsAwardFill,
    BsFlagFill,
} from "react-icons/bs";

export default function UpperSection() {

    const features = (
        <>
            <div className="w-1/2 mb-8">
                <BsChatFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4 " />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">
                        Chatea
                    </p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <div>
                    <BsPersonCheckFill size={30} color="green" className="flex justify-center w-full mb-4" />
                </div>
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">
                        Seguridad
                    </p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <div>
                    <BsFlagFill size={30} color="#ff2a26" className="flex justify-center w-full mb-4" />
                </div>
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">
                        Cumple
                    </p>
                </div>
            </div>
            <div className="w-1/2 mb-8">
                <div>
                    <BsAwardFill size={30} color="lightgreen" className="flex justify-center w-full mb-4" />
                </div>
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">
                        Gana puntos
                    </p>
                </div>
            </div>
        </>
    )

    const lg_features = (
        <>
            <div className="flex flex-col justify-center w-1/5">
                <BsChatFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">
                        Chatea con tus amigos
                    </p>
                    <p className="text-left text-gray-800 text-md ">
                        Chatea con tus amigos y familiares de forma segura y privada.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">
                        Sientete seguro
                    </p>
                    <p className="text-left text-gray-800 text-md ">
                        Chatea con tus amigos y familiares de forma segura y privada.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">
                        Reporta contenido
                    </p>
                    <p className="text-gray-800 text-md ">
                        Informa a los moderadores de contenido que no cumpla con las normas.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsAwardFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">
                        Obten tu propio Chat
                    </p>
                    <p className="text-gray-800 text-md ">
                        Crea tu propio chat y comparte el link con tus amigos.
                    </p>
                </div>
            </div>
        </>
    )
    return (
        <>
            <section className="flex flex-col w-full mt-16 lg:mt-24 "> {/* Portrait */}
                <div className="flex justify-center w-full">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col w-full md:pr-10 md:pl-10">

                            <Typography color="black" className="font-mono text-4xl font-bold text-center lg:pl-12 lg:text-5xl 2xl:text-left"> {/* Title */}
                                Topics<span className="text-blue-500">Hub</span>
                            </Typography>

                            <div className="flex flex-col pl-5 pr-5 lg:p-0 lg:text-center 2xl:text-left"> {/* Description */}
                                <Typography color="black" className="font-mono text-md lg:text-lg">
                                    <br />
                                    <strong className="font-bold">Topics</strong><span className="font-bold text-blue-500">Hub</span> es una plataforma de debate y discusión de temas de actualidad.
                                    <br />
                                    Ademas de poder debatir, puedes ganar puntos y premios.
                                </Typography>
                                
                                <div className="justify-center hidden w-full mt-8 md:flex lg:hidden">
                                    <Button variant="outlined" size="lg" className="flex items-center gap-2 lg:text-lg">
                                        Read More <BsFillBookmarkFill />
                                    </Button>
                                </div>
                                
                                <Typography color="black" className="font-mono text-md lg:text-lg 2xl:text-left">
                                    <br />
                                    Ven con nostros y participa en la comunidad de <strong className="font-bold">Topics</strong><span className="font-bold text-blue-500">Hub</span>.
                                    <br />
                                    Discute y debate con tus amigos sobre temas de actualidad.
                                </Typography>
                            </div>

                            <div className="flex justify-center w-full mt-8 md:hidden lg:flex">
                                <Button variant="outlined" size="md" className="flex items-center justify-center gap-2 2xl:w-1/3 text-md" >
                                    Read More <BsFillBookmarkFill />
                                </Button>
                            </div>

                        </div>
                    </div>

                    <div className="hidden w-3/6 mr-12 2xl:flex 2xl:w-1/2 2xl:justify-center">
                        <img src="/images/conference.jpg" alt="home-img" className="object-cover" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-12 lg:mt-16"> {/* Features */}
                <div className="flex flex-col items-center">

                    <div className="w-full lg:bg-[#fbf9fa] pr-5 pl-5 lg:p-5">
                        <Typography color="black" className="font-mono text-3xl font-bold text-center lg:w-full lg:pl-12 lg:text-4xl">
                            ¿Qué es Topcis<span className="text-blue-500">Hub</span>?
                        </Typography>

                        <Typography color="black" className="mt-2 font-mono text-center text-md lg:w-full lg:pl-12 lg:text-lg">
                            Un lugar donde puedes debatir y discutir temas de actualidad.
                            <br />
                            Siente la libertad de expresarte y compartir tus opiniones.
                        </Typography>
                    </div>

                    <div className="flex flex-wrap items-center w-full mt-12 text-center md:justify-evenly lg:hidden md:flex-nowrap md:pl-5 md:pr-5">
                        {features}
                    </div>
                    <div className="items-center hidden w-full mt-20 justify-evenly lg:flex ">
                        {lg_features}
                    </div>
                </div>
            </section>
        </>
    );
}
