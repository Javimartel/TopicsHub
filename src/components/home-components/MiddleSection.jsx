import React from "react";
import { Typography } from "@material-tailwind/react";

export default function MiddleSection() {
  return (
    <>
      <section className="flex flex-col items-center w-full lg:mt-12 lg:flex-row">
      
        <div className="flex flex-col items-center w-1/2">
          <Typography color="black" className="font-mono text-3xl font-bold lg:text-4xl">
            ¿Como <span className="text-blue-500">funciona</span>?
          </Typography>
          <Typography color="black" className="mt-2 font-mono text-center text-md lg:text-lg lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
        
        <div className="flex justify-center mt-4 text-center lg:w-1/2">
          <img src="/images/uploadfree.jpg" alt="Photo" className="w-2/3 lg:w-2/3 md:w-2/4" />
        </div>
        
      </section>

      {/* <section className="flex flex-col w-full justify-evenly lg:mt-6">
        <div className="flex justify-center w-full mt-2">
          <img src="/images/uploadfree.jpg" alt="Photo" className="w-3/6 border-b md:w-2/5 border-light-blue-300 lg:w-1/3" />
        </div>
      </section>
       */}
    </>
  );
}
