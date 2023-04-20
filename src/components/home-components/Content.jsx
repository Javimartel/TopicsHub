import React from "react";
import { Button, Input, IconButton } from "@material-tailwind/react";
import {
    BsChatFill,
    BsPersonCheckFill,
    BsAwardFill,
    BsFlagFill,
    BsFillHeartFill,
    BsFillSendFill
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
                    <p className="text-gray-800 text-md">Chat Owner</p>
                </div>
            </div>
        </>
    )

    const lg_features = (
        <>
            <div className="flex flex-col justify-center w-1/5">
                <BsChatFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Chatea con tus amigos</p>
                    <p className="text-left text-gray-800 text-md lg:text-lg ">Chatea con tus amigos y familiares de forma segura y privada.</p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Sientete seguro</p>
                    <p className="text-left text-gray-800 text-md lg:text-lg ">Chatea con tus amigos y familiares de forma segura y privada.</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Reporta contenido</p>
                    <p className="text-gray-800 text-md lg:text-lg ">Informa a los moderadores de contenido que no cumpla con las normas.</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsAwardFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Obten tu propio Chat</p>
                    <p className="text-gray-800 text-md lg:text-lg ">Crea tu propio chat y comparte el link con tus amigos.</p>
                </div>
            </div>
        </>
    )

    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    };


    return (
        <>
            <section className="flex flex-col mt-16"> {/* Portrait */}
                <div className="flex items-center justify-center xl:justify-evenly"> {/* Portrait Cont */}

                    <div className="flex items-center justify-center 2xl:w-1/3"> {/* Portrait Text */}
                        <div className="flex flex-col text-center 2xl:text-left"> {/* Title */}
                            <h1 className="font-mono text-5xl font-bold 2xl:text-left">
                                Topcis<span className="text-blue-500">Hub</span>
                            </h1>
                            <div className="flex flex-col px-1 2xl:text-left"> {/* Description */}
                                <p className="px-1 mt-4 font-mono text-md lg:text-lg">
                                    Ven con nostros y participa en la comunidad de <strong className="font-bold">Topics</strong><span className="font-bold text-blue-500">Hub</span>.
                                    <br />
                                    Discute y debate con tus amigos sobre temas de actualidad.
                                </p>
                            </div>
                            <div className="flex justify-center mt-6"> {/* Button */}
                                <Button variant="filled" size="lg" className="flex items-center justify-center gap-2">
                                    Join Us <BsFillHeartFill />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden select-none 2xl:block 2xl:w-1/3"> {/* Portrait Chat */}
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-xl">Hey, have you heard about TopicsHub? &#128064;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-xl">No &#128517;, I haven't heard of it.</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-xl">Oh, really? &#128533;</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-xl">There's a wide range of topics, from politics and current <br />events to sports and entertainment.</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-xl">That sounds interesting. &#128527;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-12"> {/* Features */}
                <div className="flex flex-col items-center"> {/* Features Cont */}
                    <div className="w-full p-5 bg-[#fbf9fa] flex flex-col items-center"> {/* Features Title */}
                        <h2 className="font-mono text-3xl font-bold text-center lg:text-4xl">
                            ¿Por qué Topcis<span className="text-blue-500">Hub</span>?
                        </h2>
                        <p className="mt-2 font-mono text-center text-md lg:text-lg">
                            Un lugar donde puedes debatir y discutir temas de actualidad.
                            <br />
                            Siente la libertad de expresarte y compartir tus opiniones.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center w-2/3 mt-12 text-center md:justify-evenly lg:hidden md:w-full md:flex-nowrap md:pl-5 md:pr-5">{features}</div>
                    <div className="items-center hidden w-full mt-12 justify-evenly lg:flex ">{lg_features}</div>
                </div>
            </section>

            <section className="flex flex-col items-center mt-12"> {/* What is TopicsHub */}

                <div className="flex flex-col items-center p-5 bg-[#fbf9fa] w-full"> {/* What is TopicsHub Tittle */}
                    <h2 className="font-mono text-3xl font-bold lg:text-4xl">
                        ¿Qué es  Topics<span className="text-blue-500">Hub</span>?
                    </h2>
                    <p className="mt-2 font-mono text-center text-md lg:text-lg"> {/* What is TopicsHub Description */}
                        Topics<span className="text-blue-500">Hub</span> es una plataforma de chat en tiempo real.
                        <br />
                        Elije un tema de interés y comienza a chatear con personas de todo el mundo.
                    </p>
                </div>

                <div className="mt-12 max-w-7xl"> {/* What is TopicsHub Cont */}

                    <div> {/* What is TopicsHub Text */}

                        <h3 className="font-mono text-2xl font-bold text-center">
                            <div className="chat chat-start">
                                <div className="chat-bubble chat-bubble-info">
                                    <p>Who created TopicsHub? &#128517;</p>
                                </div>
                            </div>
                        </h3>

                        <div className="chat chat-start"> {/* What is TopicsHub Text */}
                            <div className="chat-bubble bg-[#2196f3]">
                                <p className="text-md lg:text-xl">TopicsHubs was created by a couple of students from the IES Ana Luisa Benitez.
                                    This idea came from the need to be able to chat with people from all over the world, in order to socialize and meet new people.
                                </p>
                            </div>
                        </div>

                        <div className="chat chat-start"> {/* What is TopicsHub Text */}
                            <div className="chat-bubble bg-[#2196f3]">
                                <p className="text-md lg:text-xl">Thanks to this, you can meet people from all over the world, and talk about topics of your interest and liking.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="font-mono text-2xl font-bold text-center">
                            <div className="chat chat-end">
                                <div className="chat-bubble chat-bubble-info">
                                    <p>How was TopicsHub created? &#129300;</p>
                                </div>
                            </div>
                        </h3>

                        <div className="chat chat-end"> {/* What is TopicsHub Text */}
                            <div className="chat-bubble bg-[#2196f3]">
                                <p className="text-md lg:text-xl">TopicsHub was created using the MERN stack, which is a combination of React and Firebase.
                                    <br />
                                    The MERN stack is a popular stack for creating web applications.
                                </p>
                            </div>
                        </div>

                        <div className="chat chat-end"> {/* What is TopicsHub Text */}
                            <div className="chat-bubble bg-[#2196f3]">
                                <p className="text-md lg:text-xl">The MERN stack is a popular stack for creating web applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center mt-12 "> {/* Where to Chat */}

                <div className="flex flex-col items-center p-5 bg-[#fbf9fa]"> {/* Where to Chat Tittle */}
                    <h2 className="font-mono text-3xl font-bold lg:text-4xl">
                        ¿Where to <span className="text-blue-500">Chat</span>?
                    </h2>
                    <p className="font-mono text-center text-md lg:text-lg">
                        Topics<span className="text-blue-500">Hub</span> es una plataforma de chat en tiempo real.
                        <br />
                        Elije un tema de interés y comienza a chatear con personas de todo el mundo.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center mt-10"> {/* Chat Cont */}
                    <div className="w-3/4 select-none xl:w-5/12">
                        <div className="chat chat-start">
                            <div className=" bg-[#2196f3] chat-bubble">
                                <p className="lg:text-xl">Hi, I'm TopicsHub! &#128075;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className=" chat-bubble bg-[#2196f3]">
                                <p className="lg:text-xl">Hi, what is TopicsHub? &#128528;</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className=" chat-bubble bg-[#2196f3]">
                                <p className="lg:text-xl">It's a chat platform where you can <br />  talk about any topic you want! &#128513;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className=" chat-bubble bg-[#2196f3]">
                                <p className="lg:text-xl">Oh, that's cool! &#128516;</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className=" chat-bubble bg-[#2196f3]">
                                <p className="lg:text-xl">Yeah, it is! &#128512;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className=" chat-bubble bg-[#2196f3]">
                                <p className="lg:text-xl">What I have to do to join? &#128521;</p>
                            </div>
                        </div>
                        <div className="chat chat-start lg:text-xl">
                            <div className="cursor-pointer chat-bubble bg-[#2196f3]">
                                <a className="font-mono underline " onClick={scrollTop}>
                                    Click here to join!
                                </a>
                            </div>
                        </div>

                        <div className="chat chat-end">
                            <div className="chat-bubble bg-[#2196f3]">
                                <p className="lg:text-xl">Thanks! &#128522;</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <div className="flex flex-col items-center w-2/3 gap-2 mt-8 text-center">
                            <h3 className="font-mono text-3xl font-bold text-center">
                                Be free to join! &#128513;
                            </h3>
                            <p> TopicsHub is a free platform, so you can join whenever you want!</p>
                            <p> You can join TopicsHub by clicking the button below.</p>
                            <button className="px-4 py-2 font-mono text-white bg-[#2196f3] rounded-md hover:bg-[#2196f3] hover:shadow-lg w-2/3" onClick={scrollTop}>
                                Join Now!
                            </button>
                        </div>
                    </div>



                </div>
            </section>
            <br />
            <br />
        </>
    );
}
