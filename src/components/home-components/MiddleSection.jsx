import React from "react";
import { Typography, Progress, Tooltip, Button } from "@material-tailwind/react";

export default function MiddleSection() {

  const chart = (
    <>
      <Progress value={40} color="blue" size="lg" className="w-1/3 p-1 bg-transparent lg:p-3 h-2/3" />
      <Progress value={80} color="blue" size="lg" className="w-1/3 p-1 bg-transparent lg:p-3 h-2/3" />
      <Progress value={90} color="blue" size="lg" className="w-1/3 p-1 bg-transparent lg:p-3 h-2/3" />
      <Progress value={30} color="blue" size="lg" className="w-1/3 p-1 bg-transparent lg:p-3 h-2/3" />
      <Progress value={10} color="blue" size="lg" className="w-1/3 p-1 bg-transparent lg:p-3 h-2/3" />
      <Progress value={50} color="blue" size="lg" className="w-1/3 p-1 bg-transparent lg:p-3 h-2/3" />
    </>
  )
  return (
    <>
      <section className="flex flex-col items-center w-full lg:mt-10"> {/* Como Funciona */}
        <div className="flex flex-col items-center p-5 mt-2 lg:p-5 bg-[#fbf9fa] w-full">
          <Typography color="black" className="font-mono text-3xl font-bold lg:text-4xl">
            ¿Qué es  Topics<span className="text-blue-500">Hub</span>?
          </Typography>
          <Typography color="black" className="mt-2 font-mono text-center text-md lg:text-lg lg:w-2/3">
            Topics<span className="text-blue-500">Hub</span> es una plataforma de chat en tiempo real.
            <br />
            Elije un tema de interés y comienza a chatear con personas de todo el mundo.
          </Typography>
        </div>

        <div className="flex flex-col items-center w-full mt-12 md:justify-evenly md:flex-row">
          <div className="flex flex-col w-2/3 md:w-1/3">
            <Typography color="black" variant="h4" className="mt-2 font-mono text-center">
              ¿Cómo <span className="text-blue-500">surgió</span>?
            </Typography>

            <Typography color="black" className="mt-2 font-mono text-justify ">
              Topics<span className="text-blue-500">Hub</span> fue creado por una pareja de estudiantes de el IES Ana Luisa Benitez.
              Esta idea surgió de la necesidad de poder chatear con personas de todo el mundo, con el fin de poder socializar y conocer gente nueva.
              Gracias a esto, puedes conocer gente de todo el mundo, y hablar de temas de tu interés.
            </Typography>
          </div>

          <div className="flex flex-col w-2/3 mt-4 md:w-1/3 md:mt-0">
            <Typography color="black" variant="h4" className="mt-2 font-mono text-center">
              ¿Cómo lo <span className="text-blue-500">creamos</span>?
            </Typography>

            <Typography color="black" className="mt-2 font-mono text-justify ">
              Topics<span className="text-blue-500">Hub</span> fue creado por una pareja de estudiantes de el IES Ana Luisa Benitez.
              Esta idea surgió de la necesidad de poder chatear con personas de todo el mundo, con el fin de poder socializar y conocer gente nueva.
              Gracias a esto, puedes conocer gente de todo el mundo, y hablar de temas de tu interés.
            </Typography>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full mt-12 mb-12 lg:mb-0"> {/* Where to Chat */}
        <div className="flex flex-col items-center p-5 mt-2 lg:p-5 bg-[#fbf9fa] w-full">
          <Typography color="black" className="font-mono text-3xl font-bold lg:text-4xl">
            ¿Where to <span className="text-blue-500">Chat</span>?
          </Typography>
          <Typography color="black" className="mt-2 font-mono text-center text-md lg:text-lg lg:w-2/3">
            Topics<span className="text-blue-500">Hub</span> es una plataforma de chat en tiempo real.
            <br />
            Elije un tema de interés y comienza a chatear con personas de todo el mundo.
          </Typography>
        </div>

        <div className="flex lg:flex-col lg:items-center xl:flex-row justify-center mt-4 lg:justify-evenly lg:h-[700px] xl:h-[400px]"> {/* Chart Cont */}
          <div className="flex-col items-center hidden w-4/5 h-full -rotate-90 lg:flex"> {/* Chart */}
            {chart}
          </div>

          <div className="flex flex-col items-center justify-center w-4/5 h-full lg:justify-start lg:w-3/5 xl:w-3/5 xl:justify-center"> {/* Chart */}
            <Typography color="black" className="p-4 mt-2 font-mono text-center text-md lg:text-lg lg:w-2/3">
              Their are a lot of <span className="text-blue-500">Topics</span> to choose from, and you can create your own topic.
              Just click on the button below and start chatting.
            </Typography>
            <Button color="light-blue" size="lg" className="w-1/3 mt-4">
              Join Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}