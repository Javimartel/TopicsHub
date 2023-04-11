import React from "react";
import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import { BsChatFill, BsPersonCheckFill, BsAwardFill } from "react-icons/bs";


export default function MiddleSection() {
    return (
        <>
            <section className="flex flex-col w-full">
                <div className="flex flex-col">
                    <Typography variant="h2" color="black" className="ml-16 font-mono">
                        ¿Qué es <span className="text-blue-500">Libre Opinión</span>?
                    </Typography>
                    <div className="flex items-center mt-10 justify-evenly">
                        <div className="w-1/6">
                            <h1>
                                <BsChatFill
                                    size={30}
                                    color="rgb(46 149 237)"
                                    className="mb-2 ml-1"
                                />
                            </h1>
                            <p className="text-gray-800">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam
                            </p>
                        </div>
                        <div className="w-1/6">
                            <h1>
                                <BsPersonCheckFill
                                    size={30}
                                    color="rgb(46 149 237)"
                                    className="mb-2 ml-1"
                                />
                            </h1>
                            <p className="text-gray-800">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam
                            </p>
                        </div>
                        <div className="w-1/6">
                            <h1>
                                <BsAwardFill
                                    size={30}
                                    color="rgb(46 149 237)"
                                    className="mb-2 ml-1"
                                />
                            </h1>
                            <p className="text-gray-800">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam
                            </p>
                        </div>
                        <div className="w-1/6">
                            <h1>
                                <BsAwardFill
                                    size={30}
                                    color="rgb(46 149 237)"
                                    className="mb-2 ml-1"
                                />
                            </h1>
                            <p className="text-gray-800">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center w-full mt-8">
                <div className="flex justify-center w-full mb-4">
                    <img
                        src="./src/assets/uploadfree.jpg"
                        alt="Photo"
                        className="w-1/4"
                    />
                </div>
                <div className="text-center">
                    <Typography variant="h2" color="black" className="font-mono">
                        Donde quieras, cuando quieras <br />
                        <span className="text-blue-500">Libre Opinión</span>.
                    </Typography>
                    <div className="flex justify-center w-full">
                        <Typography
                            variant="paragraph"
                            color="black"
                            className="w-1/2 mt-8 font-mono text-center"
                        >
                            Donde quieras, cuando quieras, con quien quieras. <br />
                            Disfruta de la libertad de expresión y de la libertad de opinión.{" "}
                            <br />
                            Se libre y opina.
                        </Typography>
                    </div>
                </div>
            </section>
        </>
    )
}