import React from "react";
import { Typography } from "@material-tailwind/react";

export default function MiddleSection() {
  return (
    <>
      <section className="flex flex-col items-center w-full lg:mt-10 lg:flex-row"> {/* Como Funciona */}
        <div id="rounded-border" className="flex flex-col items-center pl-5 pr-5 mt-4 lg:p-5 lg:bg-[#fbf9fa] w-full">
          <Typography color="black" className="font-mono text-3xl font-bold lg:text-4xl">
            ¿Como <span className="text-blue-500">funciona</span>?
          </Typography>
          <Typography color="black" className="mt-2 font-mono text-center text-md lg:text-lg lg:w-2/3">
            Topics<span className="text-blue-500">Hub</span> es una plataforma de chat en tiempo real.
            <br />
            Elije un tema de interés y comienza a chatear con personas de todo el mundo.
          </Typography>
        </div>
        <div className="flex justify-center mt-4 text-center lg:w-1/2">
          <img src="/images/contact.jpg" alt="Photo" className="w-1/2 h-auto max-w-full lg:w-2/3 md:w-2/4" />
          </div>
      </section>

      <section className="flex flex-col items-center w-full lg:flex-row"> {/* Donde Chatear */}
        <div id="rounded-border2" className="flex flex-col items-center w-full pl-5 pr-5 lg:bg-[#fbf9fa] lg:p-5 lg:order-2">
          <Typography color="black" className="font-mono text-3xl font-bold lg:text-4xl">
            ¿Donde <span className="text-blue-500">chatear</span>?
          </Typography>
          <Typography color="black" className="mt-2 font-mono text-center text-md lg:text-lg lg:w-2/3">
            Chatea en cualquier lugar, en cualquier dispositivo.
            <br />
            Tan solo necesitas una cuenta de Topics<span className="text-blue-500">Hub</span>
          </Typography>
        </div>

        <div className="flex justify-center mt-2 text-center lg:w-2/3 ">
          <img src="/images/uploadfree.jpg" alt="Photo" className="w-2/3 lg:w-2/3 md:w-2/4" />
        </div>


      </section>
    </>
  );
}
