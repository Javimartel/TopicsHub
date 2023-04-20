import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Typography, Button, Progress } from "@material-tailwind/react";
import {
    BsChatFill,
    BsPersonCheckFill,
    BsAwardFill,
    BsFlagFill,
} from "react-icons/bs";

export default function Content() {

    const features = (
        <>
            <div className="w-1/2 mb-8">
                <BsChatFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4 " />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">Chatea</p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">Seguridad</p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">Cumple</p>
                </div>
            </div>
            <div className="w-1/2 mb-8">
                <BsAwardFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">Gana puntos</p>
                </div>
            </div>
        </>
    )

    const lg_features = (
        <>
            <div className="flex flex-col justify-center w-1/5">
                <BsChatFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">Chatea con tus amigos</p>
                    <p className="text-left text-gray-800 text-md ">Chatea con tus amigos y familiares de forma segura y privada.</p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">Sientete seguro</p>
                    <p className="text-left text-gray-800 text-md ">Chatea con tus amigos y familiares de forma segura y privada.</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">Reporta contenido</p>
                    <p className="text-gray-800 text-md ">Informa a los moderadores de contenido que no cumpla con las normas.</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsAwardFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">Obten tu propio Chat</p>
                    <p className="text-gray-800 text-md ">Crea tu propio chat y comparte el link con tus amigos.</p>
                </div>
            </div>
        </>
    )



    return (
        <>
            <section className="flex flex-col mt-16"> {/* Portrait */}
                <div className="flex items-center justify-center 2xl:justify-evenly"> {/* Portrait Cont */}
                    <div className="flex items-center justify-center 2xl:w-1/3">
                        <div className="flex flex-col text-center"> {/* Title */}
                            <h1 className="font-mono text-4xl font-bold 2xl:text-left">
                                Topcis<span className="text-blue-500">Hub</span>
                            </h1>
                            <div className="flex flex-col px-1 2xl:text-left"> {/* Description */}
                                <p className="mt-4 font-mono text-md 2xl:text-left">
                                    Ven con nostros y participa en la comunidad de <strong className="font-bold">Topics</strong><span className="font-bold text-blue-500">Hub</span>.
                                    <br />
                                    Discute y debate con tus amigos sobre temas de actualidad.
                                </p>
                            </div>
                            <div className="flex justify-center mt-6">
                                <Button variant="filled" size="lg" className="flex items-center justify-center gap-2" >
                                    Read More <BsFillBookmarkFill />
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hidden select-none 2xl:block 2xl:w-1/3"> {/* Chat */}
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>Hey, have you heard about TopicsHub? &#128064;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>No &#128517;, I haven't heard of it.</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>Oh, really? &#128533;</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>There's a wide range of topics, from politics and current <br />events to sports and entertainment.</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>That sounds interesting. &#128527;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-12"> {/* Features */}
                <div className="flex flex-col items-center"> {/* Features Cont */}
                    <div className="w-full p-5 bg-[#fbf9fa] flex flex-col items-center"> {/* Features Title */}
                        <h2 className="font-mono text-3xl font-bold text-center">
                            ¿Por qué Topcis<span className="text-blue-500">Hub</span>?
                        </h2>
                        <p className="mt-2 font-mono text-center text-md">
                            Un lugar donde puedes debatir y discutir temas de actualidad.
                            <br />
                            Siente la libertad de expresarte y compartir tus opiniones.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center w-2/3 mt-12 text-center md:justify-evenly lg:hidden md:w-full md:flex-nowrap md:pl-5 md:pr-5">{features}</div>
                    <div className="items-center hidden w-full mt-12 justify-evenly lg:flex ">{lg_features}</div>
                </div>
            </section>

            <section className="flex flex-col mt-12"> {/* What is TopicsHub */}

                <div className="flex flex-col items-center p-5 bg-[#fbf9fa] w-full"> {/* What is TopicsHub Tittle */}
                    <h2 className="font-mono text-3xl font-bold">
                        ¿Qué es  Topics<span className="text-blue-500">Hub</span>?
                    </h2>
                    <p className="mt-2 font-mono text-center text-md">
                        Topics<span className="text-blue-500">Hub</span> es una plataforma de chat en tiempo real.
                        <br />
                        Elije un tema de interés y comienza a chatear con personas de todo el mundo.
                    </p>
                </div>

                <div className="flex flex-col items-center mt-12 lg:justify-evenly lg:flex-row">
                    <div className="flex flex-col w-2/3 lg:w-1/3">
                        <h3 className="font-mono text-2xl font-bold text-center">
                            ¿Qué es  Topics<span className="text-blue-500">Hub</span>?
                        </h3>
                        <p className="mt-2 font-mono text-justify text-black">
                            Topics<span className="text-blue-500">Hub</span> fue creado por una pareja de estudiantes de el IES Ana Luisa Benitez.
                            Esta idea surgió de la necesidad de poder chatear con personas de todo el mundo, con el fin de poder socializar y conocer gente nueva.
                            Gracias a esto, puedes conocer gente de todo el mundo, y hablar de temas de tu interés.
                        </p>
                    </div>

                    <div className="flex flex-col w-2/3 mt-8 lg:w-1/3 lg:mt-0">
                        <h3 className="font-mono text-2xl font-bold text-center">
                            ¿Cómo lo <span className="text-blue-500">creamos</span>?
                        </h3>
                        <p className="mt-2 font-mono text-justify text-black">
                            Topics<span className="text-blue-500">Hub</span> fue creado por una pareja de estudiantes de el IES Ana Luisa Benitez.
                            Esta idea surgió de la necesidad de poder chatear con personas de todo el mundo, con el fin de poder socializar y conocer gente nueva.
                            Gracias a esto, puedes conocer gente de todo el mundo, y hablar de temas de tu interés.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-12"> {/* Where to Chat */}

                <div className="flex flex-col items-center p-5 bg-[#fbf9fa] w-full"> {/* Where to Chat Tittle */}
                    <h2 className="font-mono text-3xl font-bold">
                        ¿Where to <span className="text-blue-500">Chat</span>?
                    </h2>
                    <p className="font-mono text-center text-md">
                        Topics<span className="text-blue-500">Hub</span> es una plataforma de chat en tiempo real.
                        <br />
                        Elije un tema de interés y comienza a chatear con personas de todo el mundo.
                    </p>
                </div>

                <div className="flex items-center mt-10 justify-evenly"> {/* Chat Cont */}

                    <div className="hidden select-none 2xl:block 2xl:w-1/3">
                        <div className="chat chat-start">
                            <div className="text-white bg-[#2196f3] chat-bubble">
                                <p>Hi, I'm TopicsHub! &#128075;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>Hi, what is TopicsHub? &#128528;</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>TopicsHub is a chat platform where you can talk about any topic you want.</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p>Oh, that's cool! &#128513;</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-4/5 h-full lg:justify-start lg:w-3/5 xl:w-3/5 xl:justify-center 2xl:w-1/3"> {/* Chart */}
                        <p className="p-4 mt-2 font-mono text-justify text-black text-md lg:text-lg lg:w-2/3">
                            Their are a lot of <span className="text-blue-500">Topics</span> to choose from, and you can create your own topic.
                            Just click on the button below and start chatting.
                        </p>
                        <Button color="light-blue" size="lg" className="w-1/3">
                            Join Us
                        </Button>
                    </div>
                </div>
            </section>
            <br />
            <br />
        </>
    );
}
