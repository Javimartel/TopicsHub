import React from "react";
import { Typography, Button } from "@material-tailwind/react";

export default function MiddleSection() {
  return (
    <>
      <section className="flex flex-col w-full justify-evenly lg:mt-6">
        <div className="flex justify-center w-full mt-2">
          <img src="/images/uploadfree.jpg" alt="Photo" className="w-3/6 border-b md:w-2/5 border-light-blue-300" />
        </div>
      </section>
    </>
  );
}
