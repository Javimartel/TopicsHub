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
            <div className="flex flex-col w-1/5">
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
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsChatFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">
                        Chatea con tus amigos
                    </p>
                    <p className="text-gray-800 text-md ">
                        Chatea con tus amigos y familiares de forma segura y privada.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end w-1/5 text-right">
                <BsChatFill size={30} color="rgb(46 149 237)" className="mb-4" />
                <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-800 text-md">
                        Chatea con tus amigos
                    </p>
                    <p className="text-gray-800 text-md ">
                        Chatea con tus amigos y familiares de forma segura y privada.
                    </p>
                </div>
            </div>
        </>
    )
    return (
        <>
            <section className="flex flex-col w-full mt-16 lg:mt-24">
                <div className="flex justify-center lg:space-evenly">

                    <div className="flex flex-col w-4/5 text-center lg:text-left lg:w-2/3 lg:justify-center">
                        <Typography color="black" className="font-mono text-4xl font-bold lg:pl-12 lg:text-5xl">
                            Topics<span className="text-blue-500">Hub</span>
                        </Typography>

                        <div id="rounded-border" className="lg:bg-[#e8f5f6] lg:p-5 mt-8 w-11/12">
                            <Typography color="black" className="order-1 font-mono text-md lg:pl-12 lg:w-4/5 lg:text-lg">
                                Disfruta de la libertad de expresión y de la libertad de opinión.
                                Siempre respetando nuestras normas de convivencia.
                            </Typography>

                            <Typography color="black" className="order-3 font-mono text-md lg:pl-12 lg:w-4/5 lg:text-lg">
                                <br />
                                <strong className="font-bold">Topics</strong><span className="font-bold text-blue-500">Hub</span> es una plataforma de debate y discusión de temas de actualidad.
                                Ademas de poder debatir, puedes ganar puntos y premios.
                            </Typography>
                        </div>

                        <div className="flex justify-center order-2 w-full mt-12 lg:order-4">
                            <Button variant="outlined" size="lg" className="flex items-center gap-2">
                                Read More <BsFillBookmarkFill />
                            </Button>
                        </div>
                    </div>

                    <div className="hidden w-3/6 mr-12 lg:block">
                        <img src="/images/conference.jpg" alt="home-img" className="object-contain" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col mt-12 lg:mt-16">
                <div className="flex flex-col items-center">

                    <div className="lg:bg-[#e8f5f6] lg:p-5 w-full">
                        <Typography color="black" className="font-mono text-3xl font-bold text-center lg:w-full lg:pl-12 lg:text-4xl">
                            ¿Qué es <span className="text-blue-500">Libre Opinión</span>?
                        </Typography>

                        <Typography color="black" className="mt-2 font-mono text-center text-md lg:w-full lg:pl-12 lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </Typography>
                    </div>

                    <div className="flex flex-wrap items-center max-w-md mt-12 text-center lg:hidden">
                        {features}
                    </div>
                    <div className="items-center hidden w-full mt-12 justify-evenly lg:flex ">
                        {lg_features}
                    </div>
                </div>
            </section>
        </>
    );
}
