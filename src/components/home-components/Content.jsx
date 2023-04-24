import React from "react";
import { Button } from "@material-tailwind/react";
import {
    BsChatFill,
    BsPersonCheckFill,
    BsAwardFill,
    BsFlagFill,
    BsFillBookmarkFill
} from "react-icons/bs";

export default function Content() {

    const features = (
        <>
            <div className="w-1/2 mb-8">
                <BsChatFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4 " />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">Chat</p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">Security</p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-gray-800 text-md">Report Content</p>
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
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Chat with Friends</p>
                    <p className="text-left text-gray-800 text-md lg:text-lg ">Chatea with your friends safely</p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Feel Safe</p>
                    <p className="text-left text-gray-800 text-md lg:text-lg ">Data protecction and security</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Report Content</p>
                    <p className="text-gray-800 text-md lg:text-lg ">Report content to the modders</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsAwardFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md lg:text-lg">Chat Owner</p>
                    <p className="text-gray-800 text-md lg:text-lg ">Create your own chat and mod it</p>
                </div>
            </div>
        </>
    )

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            <section className="flex flex-col mt-16"> {/* Portrait */}
                <div className="flex items-center justify-center xl:justify-evenly"> {/* Portrait Cont */}
                    <div className="flex items-center justify-center text-black 2xl:w-1/3"> {/* Portrait Text */}
                        <div className="flex flex-col text-center 2xl:text-left 2xl:min-w-[600px]" > {/* Title */}
                            <h1 className="font-mono text-5xl font-bold 2xl:text-left">
                                Topics<span className="text-blue-500">Hub</span>
                            </h1>
                            <div className="flex flex-col px-1 2xl:text-left"> {/* Description */}
                                <p className="p-5 mt-4 font-mono text-md lg:text-lg lg:p-0">
                                    Come with us and chat with your friends in a safe way.<br />
                                    Join us and create your own chat room and mod it.
                                </p>
                            </div>
                            <div className="flex justify-center mt-6"> {/* Button */}
                                <Button variant="filled" size="lg" className="flex items-center justify-center gap-2">
                                    Read More <BsFillBookmarkFill />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden select-none 2xl:block 2xl:w-1/3 min-w-[520px]"> {/* Portrait Chat */}
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-lg">Hey, have you heard about TopicsHub? &#128064;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-lg">No &#128517;, I haven't heard of it.</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-lg">Oh, really? &#128533;</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-lg">There's a wide range of topics, from politics and current events to sports and entertainment.</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3]">
                                <p className="text-lg">That sounds interesting. &#128527;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-12"> {/* Features */}
                <div className="flex flex-col items-center"> {/* Features Cont */}
                    <div className="w-full p-6 bg-[#fbf9fa] flex flex-col items-center text-black"> {/* Features Title */}
                        <h2 className="font-mono text-3xl font-bold text-center lg:text-4xl">
                            Why <span className="text-blue-500">TopicsHub</span>?
                        </h2>
                        <p className="mt-2 font-mono text-center text-md lg:text-lg">
                            Topics<span className="text-blue-500">Hub</span> is a place where you can chat with your friends in a safe way.<br />
                            You can also create your own chat room and mod it.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center w-2/3 mt-12 text-center md:justify-evenly lg:hidden md:w-full md:flex-nowrap md:pl-5 md:pr-5">{features}</div>
                    <div className="items-center hidden w-full mt-12 justify-evenly lg:flex ">{lg_features}</div>
                </div>
            </section>

            <section className="flex flex-col items-center lg:mt-12"> {/* What is TopicsHub */}
                <div className="flex flex-col items-center p-6 bg-[#fbf9fa] w-full text-black"> {/* What is TopicsHub Tittle */}
                    <h2 className="font-mono text-3xl font-bold lg:text-4xl">
                        What is <span className="text-blue-500">TopicsHub</span>?
                    </h2>
                    <p className="mt-2 font-mono text-center text-md lg:text-lg"> {/* What is TopicsHub Description */}
                        Topics<span className="text-blue-500">Hub</span> is a real-time chat platform. <br />
                        Choose a topic of interest and start chatting with people from all over the world.
                    </p>
                </div>
                <div className="w-full mt-12 md:w-4/5"> {/* What is TopicsHub Cont */}
                    <div className="chat chat-start ">
                        <div className="chat-bubble bg-[#2196f3] min-w-[300px]">
                            <h3 className="text-xl font-bold text-white">Who created TopicsHub? &#128517;</h3>
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="bg-transparent chat-bubble min-w-[360px]">
                            <p className="p-2 text-justify text-black text-md lg:text-lg">
                                Javier and Mario, two ambitious students of web development, were inspired by the idea of creating a
                                platform that could help users discover new topics and explore various categories of interest.
                                They knew that this concept had immense potential, and they were determined to make it a reality.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="chat chat-end">
                            <div className="chat-bubble bg-[#2196f3]">
                                <p className="text-xl font-bold text-right text-white">How was created? &#129300;</p>
                            </div>
                        </div>
                        <div className="chat chat-end"> {/* What is TopicsHub Text */}
                            <div className="bg-transparent chat-bubble min-w-[360px]">
                                <p className="p-2 text-justify text-black text-md lg:text-lg">
                                    Javier and Mario used a combination of Firebase, React, HTML, and CSS to develop TopicsHub,
                                    a platform for content discovery and exploration. They used Firebase for backend
                                    infrastructure, React for frontend development, and HTML and CSS for website design.
                                    The use of these technologies allowed them to create a secure, user-friendly pleasing platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center mt-12 "> {/* Where to Chat */}

                <div className="flex flex-col items-center p-6 bg-[#fbf9fa] text-black"> {/* Where to Chat Tittle */}
                    <h2 className="font-mono text-3xl font-bold lg:text-4xl">
                        Where to <span className="text-blue-500">Chat</span>?
                    </h2>
                    <p className="font-mono text-center text-md lg:text-lg">
                        Topics<span className="text-blue-500">Hub</span> has a wide range of topics.
                    </p>
                    <p className="font-mono text-center text-md lg:text-lg">
                        Join a chat room and start chatting.
                    </p>
                </div>

                <div className="flex justify-center mt-12"> {/* Where to Chat Tittle */}
                    <div className="flex items-center justify-center w-full text-center">
                        <div className="flex flex-col">
                            <div className="flex flex-col items-center w-full">
                                <h3 className="font-mono text-2xl font-bold text-black">
                                    Feel free to join! &#128513;
                                </h3>
                                <p className="text-black"> Join whenever you want!</p>
                                <p className="text-black"> Just click the button below.</p>
                            </div>
                            <div className="flex justify-center">
                                <Button size="lg" className="w-2/3 mt-2">
                                    Join Now!
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
