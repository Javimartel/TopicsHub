import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Typography, Button } from "@material-tailwind/react";
import { BsChatFill, BsPersonCheckFill, BsAwardFill, BsFlagFill } from "react-icons/bs";




export default function UpperSection() {
    return (
        <>
            <section className="flex flex-col w-full mt-8">
                <div className="flex justify-center">
                    <div className="flex flex-col w-4/5 text-center">
                        <Typography color="black" className="font-mono text-3xl font-bold">
                            See libre de opinar y hablar de lo que{" "}
                            <span className="text-blue-500">quieras</span>.
                        </Typography>

                        <Typography
                            color="black"
                            className="mt-8 font-mono text-md"
                        >
                            Disfruta de la libertad de expresión y de la libertad de opinión.
                            Siempre respetando nuestras normas de convivencia.
                            Se libre y opina.
                        </Typography>
                        <div className="flex justify-center w-full mt-8">
                            <Button variant="outlined" size="md" className="flex items-center gap-2">
                                Read More
                                <BsFillBookmarkFill />
                            </Button>
                        </div>
                    </div>

                    <div className="hidden w-1/2 h-2/3">
                        <img
                            src="./src/assets/conference.jpg"
                            alt="home-img"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-8">
                <div className="flex flex-col p-5">
                    <Typography color="black" className="mb-6 font-mono text-3xl font-bold text-center">
                        ¿Qué es <span className="text-blue-500">Libre Opinión</span>?
                    </Typography>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-1/2 mb-4">
                            <BsChatFill
                                size={30}
                                color="rgb(46 149 237)"
                                className="flex justify-center w-full mb-2"
                            />
                            
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </div>

                        <div className="w-1/2 mb-4">
                            <h1>
                                <BsPersonCheckFill
                                    size={30}
                                    color="rgb(46 149 237)"
                                    className="flex justify-center w-full mb-2"
                                />
                            </h1>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </div>

                        <div className="w-1/2 mb-4">
                            <h1>
                                <BsFlagFill
                                    size={30}
                                    color="rgb(46 149 237)"
                                    className="flex justify-center w-full mb-2"
                                />
                            </h1>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </div>
                        <div className="w-1/2 mb-4">
                            <h1>
                                <BsAwardFill
                                    size={30}
                                    color="rgb(46 149 237)"
                                    className="flex justify-center w-full mb-2"
                                />
                            </h1>
                            <p className="text-gray-800 text-md">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}