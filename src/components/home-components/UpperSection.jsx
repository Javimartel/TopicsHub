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
    return (
        <>
            <section className="mt-16 flex w-full flex-col">
                <div className="flex justify-center">
                    <div className="flex w-4/5 flex-col text-center">
                        <Typography
                            color="black"
                            className="font-mono text-3xl font-bold md:text-4xl"
                        >
                            See libre de opinar y hablar de lo que{" "}
                            <span className="text-blue-500">quieras</span>.
                        </Typography>

                        <Typography
                            color="black"
                            className="font-mono text-md mt-8 md:text-lg"
                        >
                            Disfruta de la libertad de expresión y de la libertad de opinión. <br />
                            Siempre respetando nuestras normas de convivencia.<br />
                            Se libre y opina.
                        </Typography>
                        <div className="mt-8 flex w-full justify-center">
                            <Button
                                variant="outlined"
                                size="lg"
                                className="flex items-center gap-2"
                            >
                                Read More
                                <BsFillBookmarkFill />
                            </Button>
                        </div>
                    </div>

                    <div className="hidden h-2/3 w-1/2">
                        <img
                            src="./src/assets/conference.jpg"
                            alt="home-img"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            <section className="mt-8 flex flex-col">
                <div className="flex flex-col p-5">
                    <Typography
                        color="black"
                        className="font-mono text-center text-3xl font-bold md:text-4xl"
                    >
                        ¿Qué es <span className="text-blue-500">Libre Opinión</span>?
                    </Typography>

                    <div className="mt-12 flex flex-col items-center text-center md:flex-row ">

                        <div className="mb-8 w-1/2">
                            <BsChatFill
                                size={30}
                                color="rgb(46 149 237)"
                                className="mb-4 flex w-full justify-center "
                            />
                            <div className="md:w-full md:flex md:justify-center">
                                <p className="text-md text-gray-800 md:text-lg">
                                    Chatea libremente
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 w-1/2">
                            <div>
                                <BsPersonCheckFill
                                    size={30}
                                    color="green"
                                    className="mb-4 flex w-full justify-center"
                                />
                            </div>
                            <div className="md:w-full md:flex md:justify-center">
                                <p className="text-md text-gray-800 md:text-lg">
                                    Seguridad
                                </p>
                            </div>
                        </div>

                        <div className="mb-8 w-1/2">
                            <div>
                                <BsFlagFill
                                    size={30}
                                    color="#ff2a26"
                                    className="mb-4 flex w-full justify-center"
                                />
                            </div>
                            <div className="md:w-full md:flex md:justify-center">
                                <p className="text-md text-gray-800 md:text-lg">
                                    Cumple las normas
                                </p>
                            </div>
                        </div>
                        <div className="mb-8 w-1/2">
                            <div>
                                <BsAwardFill
                                    size={30}
                                    color="lightgreen"
                                    className="mb-4 flex w-full justify-center"
                                />
                            </div>
                            <div className="md:w-full md:flex md:justify-center">
                                <p className="text-md text-gray-800 md:text-lg">
                                    Gana puntos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
