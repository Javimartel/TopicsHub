import React from "react";
import { Typography } from "@material-tailwind/react";

export default function MiddleSection() {
  return (
    <>
      <section className="flex flex-col items-center w-full lg:mt-10 lg:flex-row">
      
        <div id="rounded-border" className="flex flex-col items-center w-full p-5 md:w-2/3 lg:bg-[#e8f5f6] lg:p-5">
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
      
      <section className="flex flex-col items-center w-full lg:flex-row">
      
        <div className="flex justify-center order-2 mt-2 text-center lg:w-1/2 lg:order-1">
          <img src="/images/contact.jpg" alt="Photo" className="w-2/3 lg:w-2/3 md:w-2/4" />
        </div>
        
        <div id="rounded-border2" className="flex flex-col items-center w-full p-3 mt-10 md:w-2/3 md:order-1 lg:bg-[#e8f5f6] lg:p-5">
          <Typography color="black" className="font-mono text-3xl font-bold lg:text-4xl">
            ¿Donde <span className="text-blue-500">chatear</span>?
          </Typography>
          <Typography color="black" className="mt-2 font-mono text-center text-md lg:text-lg lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </div>
        
        
      </section>
    </>
  );
}
