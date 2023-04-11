import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { BsFillBookmarkFill } from "react-icons/bs";





export default function UpperSection() {
    return (
        <section className="flex flex-col w-full p-12 ">
            <div className="flex items-center justify-evenly">
                <div className="flex flex-col w-1/2 ml-12 h-2/3">
                    <Typography variant="h2" color="black" className="font-mono">
                        See libre de opinar y hablar de lo que <br />
                        <span className="text-blue-500">quieras</span>.
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="black"
                        className="mt-8 font-mon"
                    >
                        Disfruta de la libertad de expresión y de la libertad de opinión.{" "}
                        <br />
                        Siempre respetando nuestras normas de convivencia. <br />
                        Se libre y opina.
                    </Typography>
                    <div className="flex justify-center w-4/5 mt-12 ">
                        <Button variant="outlined" size="lg" className="flex items-center gap-2">
                            Read More
                            <BsFillBookmarkFill className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <div className="w-1/2 h-2/3">
                    <img
                        src="./src/assets/conference.jpg"
                        alt="home-img"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    )
}