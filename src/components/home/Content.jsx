import React from "react";
import StaticCards from "./StaticCards";
import Prices from "./Prices";
import {
    BsChatFill,
    BsPersonCheckFill,
    BsAwardFill,
    BsFlagFill,
    BsFillBookmarkFill,
} from "react-icons/bs";

import { Button } from "@material-tailwind/react";


export default function Content() {

    const features = (
        <>
            <div className="w-1/2 mb-8">
                <BsChatFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4 " />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-base text-gray-800">Chat</p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-base text-gray-800">Security</p>
                </div>
            </div>

            <div className="w-1/2 mb-8">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-base text-gray-800">Report Content</p>
                </div>
            </div>
            <div className="w-1/2 mb-8">
                <BsAwardFill size={30} color="rgb(46 149 237)" className="flex justify-center w-full mb-4" />
                <div className="md:w-full md:flex md:justify-center">
                    <p className="text-base text-gray-800">Chat Owner</p>
                </div>
            </div>
        </>
    );

    const lg_features = (
        <>
            <div className="flex flex-col justify-center w-1/5">
                <BsChatFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md dark:text-white">Chat with Friends</p>
                    <p className="text-sm text-left text-gray-800 dark:text-white">Chatea with your friends safely</p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <BsPersonCheckFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md dark:text-white">Feel Safe</p>
                    <p className="text-sm text-left text-gray-800 dark:text-white">Data protection and security</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsFlagFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md dark:text-white">Report Content</p>
                    <p className="text-sm text-gray-800 dark:text-white">Report content to the moderators</p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsAwardFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md dark:text-white">Chat Owner</p>
                    <p className="text-sm text-gray-800 dark:text-white">Create your own chat and moderate it</p>
                </div>
            </div>
        </>
    );

    return (
        <>
            <section className="flex flex-col mt-20 dark:bg-[#1f2937]"> {/* Portrait */}
                <div className="flex items-center justify-center xl:justify-evenly"> {/* Portrait Cont */}
                    <div className="flex items-center justify-cente 2xl:w-1/3"> {/* Portrait Text */}
                        <div className="flex flex-col text-center 2xl:text-left 2xl:min-w-[600px] text-blue-gray-900 dark:text-gray-100"> {/* Title */}
                            <h1 className="text-4xl font-bold 2xl:text-left">
                                Topics<span className="text-blue-500">Hub</span>
                            </h1>
                            <div className="flex flex-col px-1 2xl:text-left"> {/* Description */}
                                <p className="mt-3 text-md lg:p-0">
                                    Come with us and chat with your friends in a safe way.<br />
                                    Join us and create your own chat room and mod it.
                                </p>
                            </div>
                            <div className="flex justify-center mt-4"> {/* Button */}
                                <a href="https://github.com/Javimartel/TopicsHub" target="_blank" rel="noopener noreferrer">
                                    <Button size="md" className="flex items-center shadow-none gap-2 dark:bg-[#1f2937] dark:hover:bg-white dark:hover:text-[#1f2937] dark:shadow-sm border">
                                        Read More <BsFillBookmarkFill />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden select-none 2xl:block 2xl:w-1/3 min-w-[520px]"> {/* Portrait Chat */}
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3] dark:bg-blue-gray-800">
                                <p className="text-md">Hey, have you heard about TopicsHub? &#128064;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3] dark:bg-blue-gray-800">
                                <p className="text-md">No &#128517;, I haven't heard of it.</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3] dark:bg-blue-gray-800">
                                <p className="text-md">Oh, really? &#128533;</p>
                            </div>
                        </div>
                        <div className="chat chat-start">
                            <div className="text-white chat-bubble bg-[#2196f3] dark:bg-blue-gray-800">
                                <p className="text-md">There's a wide range of topics, from politics and current events to sports and entertainment.</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="text-white chat-bubble bg-[#2196f3] dark:bg-blue-gray-800">
                                <p className="text-md">That sounds interesting. &#128527;</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="flex flex-col mt-12 dark:bg-[#1f2937]"> {/* Features */}
                <div className="flex flex-col items-center"> {/* Features Cont */}
                    <div className="w-full p-6 bg-[#fbf9fa] flex flex-col items-center text-blue-gray-900 dark:text-gray-100 dark:bg-[#1f2937]"> {/* Features Title */}
                        <h2 className="text-3xl font-bold text-center">
                            Why Topics<span className="text-blue-500">Hub</span>?
                        </h2>
                        <p className="mt-2 text-center text-md">
                            You can chat with your friends in a safe way.<br />
                            You can also create your own chat room and mod it.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center w-2/3 mt-12 text-center md:justify-evenly lg:hidden md:w-full md:flex-nowrap md:pl-5 md:pr-5 dark:text-gray-100">{features}</div>
                    <div className="items-center hidden w-full mt-12 justify-evenly lg:flex dark:text-gray-100">{lg_features}</div>
                </div>
            </section>

            <section className="flex flex-col items-center lg:mt-12 dark:bg-[#1f2937] "> {/* What is TopicsHub */}
                <div className="flex flex-col items-center p-6 bg-[#fbf9fa] dark:bg-[#1f2937] w-full text-blue-gray-900 dark:text-gray-100"> {/* What is TopicsHub Tittle */}
                    <h2 className="text-3xl font-bold ">
                        What is Topics<span className="text-blue-500">Hub</span>?
                    </h2>
                    <p className="mt-2 text-center text-md"> {/* What is TopicsHub Description */}
                        Topics<span className="text-blue-500">Hub</span> is a real-time chat platform. <br />
                        Choose a topic of interest and start chatting with people from all over the world.
                    </p>
                </div>
                <div className="w-full mt-12 md:w-4/5"> {/* What is TopicsHub Cont */}
                    <div className="chat chat-start">
                        <div className="chat-bubble bg-[#2196f3] dark:bg-blue-gray-800">
                            <h3 className="font-bold text-white text-md">Who created it? &#128517;</h3>
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="bg-gray-50 chat-bubble min-w-[360px] dark:bg-blue-gray-800">
                            <p className="p-2 text-justify text-black text-md dark:text-white">
                                Javier and Mario, two ambitious students of web development, were inspired by the idea of creating a
                                platform that could help users discover new topics and explore various categories of interest.
                                They knew that this concept had immense potential, and they were determined to make it a reality.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="chat chat-end">
                            <div className="chat-bubble bg-[#2196f3] dark:bg-blue-gray-800">
                                <p className="font-bold text-right text-white text-md">How was it created? &#129300;</p>
                            </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="bg-gray-50 chat-bubble min-w-[360px] dark:bg-blue-gray-800">
                                <p className="p-2 text-justify text-black text-md dark:text-white">
                                    Javier and Mario used a combination of Firebase, React, HTML, and CSS to develop TopicsHub,
                                    a platform for content discovery and exploration. They used Firebase for backend infrastructure,
                                    React for frontend development, and HTML and CSS for website design.
                                    The use of these technologies allowed them to create a secure, user-friendly platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center mt-12 dark:bg-[#1f2937]"> {/* Where to Chat */}
                <div className="flex flex-col items-center p-6 bg-[#fbf9fa] text-blue-gray-900 dark:bg-[#1f2937] dark:text-white"> {/* Where to Chat Tittle */}
                    <h2 className="text-3xl font-bold">
                        Where to <span className="text-blue-500">Chat</span>?
                    </h2>
                    <p className="mt-2 text-center text-md">
                        Topics<span className="text-blue-500">Hub</span> has a wide range of topics.
                    </p>
                    <p className="text-center text-md">
                        Join a chat room and start chatting.
                    </p>
                </div>

                <div className="flex flex-col items-center mt-12 ">
                    <div className="flex flex-wrap justify-center gap-8 w-6/6">
                        <StaticCards />
                    </div>

                    <h3 className="mt-12 text-xl font-bold text-center text-blue-gray-900 dark:text-white">
                        Join a chat room and start chatting.
                    </h3>

                    <p className="mt-4 text-center text-md lg:text-lg text-blue-gray-900 dark:text-white">
                        Topics<span className="text-blue-500">Hub</span> has a wide range of topics. <br />
                        Just choose one and start chatting.
                    </p>


                </div>
            </section>

            <section className="flex flex-col justify-center mt-8"> {/* Chat Owner */}
                <div className="flex flex-col items-center p-6 bg-[#fbf9fa] dark:bg-[#1f2937] text-blue-gray-900 dark:text-white">
                    <h2 className="text-3xl font-bold">
                        My own <span className="text-blue-500">Chat</span>?
                    </h2>
                    <p className="mt-2 text-center text-md">
                        You can be the owner of a chat room.
                    </p>
                    <p className="text-center text-md">
                        Just create a chat room and invite your friends.
                    </p>
                </div>

                <div className="flex justify-center mt-12">
                    <div className="flex flex-wrap justify-center w-full gap-5 lg:gap-12 xl:gap-20">
                        <Prices />
                    </div>
                </div>
            </section>
        </>
    );
}
