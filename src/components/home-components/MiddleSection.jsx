import React from "react";
import { Typography } from "@material-tailwind/react";


export default function MiddleSection() {
    return (
        <>
            <section className="flex w-full justify-evenly">
                <div className="flex justify-center w-1/3 mb-4">
                    <img
                        src="./src/assets/uploadfree.jpg"
                        alt="Photo"
                    />
                </div>
                <div className="flex flex-col justify-center text-center">
                    <Typography variant="h2" color="black" className="font-mono">
                        Donde quieras, cuando quieras <br />
                        <span className="text-blue-500">Libre Opinión</span>.
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="black"
                        className="mt-8 font-mono text-center"
                    >
                        Donde quieras, cuando quieras, con quien quieras. <br />
                        Disfruta de la libertad de expresión y de la libertad de opinión.
                        <br />
                        Se libre y opina.
                    </Typography>
                </div>
            </section>
        </>
    )
}