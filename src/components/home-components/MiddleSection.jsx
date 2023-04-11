import React from "react";
import { Typography } from "@material-tailwind/react";

export default function MiddleSection() {
  return (
    <>
      <section className="flex flex-col w-full mt-6 justify-evenly">
        <div className="flex flex-col justify-center text-center">
          <Typography
            color="black"
            className="font-mono text-3xl font-bold text-center"
          >
            Donde quieras, <br /> cuando quieras <br />
            <span className="text-blue-500">Libre Opinión</span>.
          </Typography>
          <Typography
            color="black"
            className="m-5 font-mono text-center text-md"
          >
            Donde quieras, cuando quieras, con quien quieras. {` `}
            Disfruta de la libertad de expresión y de la libertad de opinión. Se
            libre y opina.
          </Typography>
        </div>
        <div>
          <img src="/images/conference.jpg" alt="Photo" className="p-5" />
        </div>
      </section>
    </>
  );
}
