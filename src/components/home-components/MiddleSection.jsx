import React from "react";
import { Typography } from "@material-tailwind/react";

export default function MiddleSection() {
  return (
    <>
      <section className="flex flex-col w-full mt-6 justify-evenly">
        <div className="flex flex-col items-center text-center md:text-justify">
          <Typography
            color="black"
            className="font-mono text-3xl font-bold text-center md:text-4xl w-2/3"
          >
            Donde quieras, cuando quieras {` `}
            <span className="text-blue-500">Libre Opinión</span>.
          </Typography>
          <Typography
            color="black"
            className="mt-5 font-mono text-center text-md md:text-lg w-2/3"
          >
            Donde quieras, cuando quieras, con quien quieras. {` `}
            Disfruta de la libertad de expresión y de la libertad de opinión. Se
            libre y opina.
          </Typography>
        </div>
        <div className="w-full flex justify-center">
          <img src="/images/uploadfree.jpg" alt="Photo" className="w-2/5 md:w-3/5" />
        </div>
      </section>
    </>
  );
}
