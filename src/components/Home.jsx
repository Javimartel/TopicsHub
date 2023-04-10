import React from "react";
import { Typography, Button, Input, Textarea } from "@material-tailwind/react";
import Navbar from "./home-components/Navbar";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { BsChatFill, BsPersonCheckFill, BsAwardFill } from "react-icons/bs";
import Login from "./home-components/Form";

function Home() {
  return (
    <main id="home-main" className="flex-col">
      <Navbar />

      <section className="flex flex-col w-full p-12 ">
        <div className="flex justify-between">
          <div className="w-1/2 pt-4 pl-8 h-2/3">
            <Typography variant="h2" color="black" className="font-mono">
              See libre de opinar y <br /> hablar de lo que <br />
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

            <div className="flex justify-center w-4/5 mt-8 ">
              <Button variant="outlined" className="flex items-center gap-2">
                Read More
                <ArrowLongRightIcon className="w-5 h-5" />
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

        <div className="flex flex-col w-full pl-8 mt-2">
          <Typography variant="h2" color="black" className="font-mono">
            ¿Qué es <span className="text-blue-500">Libre Opinión</span>?
          </Typography>

          <div className="flex items-center mt-16 justify-evenly">
            <div className="w-1/5">
              <h1>
                <BsChatFill
                  size={30}
                  color="rgb(46 149 237)"
                  className="mb-2 ml-1"
                />
              </h1>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
            <div className="w-1/5">
              <h1>
                <BsPersonCheckFill
                  size={30}
                  color="rgb(46 149 237)"
                  className="mb-2 ml-1"
                />
              </h1>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
            <div className="w-1/5">
              <h1>
                <BsAwardFill
                  size={30}
                  color="rgb(46 149 237)"
                  className="mb-2 ml-1"
                />
              </h1>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center w-full mt-4">
        <div className="text-center">
          <Typography variant="h2" color="black" className="font-mono">
            Donde quieras, cuando quieras <br />
            <span className="text-blue-500">Libre Opinión</span>.
          </Typography>
          <div className="flex justify-center w-full">
            <Typography
              variant="paragraph"
              color="black"
              className="w-1/2 mt-8 font-mono text-center"
            >
              Donde quieras, cuando quieras, con quien quieras. <br />
              Disfruta de la libertad de expresión y de la libertad de opinión.{" "}
              <br />
              Se libre y opina.
            </Typography>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <img
            src="./src/assets/uploadfree.jpg"
            alt="Photo"
            className="w-1/3"
          />
        </div>
      </section>

      <section className="flex items-center w-full mt-8 justify-evenly">
        <div className="flex flex-col w-1/3">
          <Typography variant="h3" color="black" className="font-mono">
            Contact <span className="text-blue-500">Us</span>.
          </Typography>

          <form action="#" className="mt-4">
            <div className="mb-2">
              <Input
                type="text" 
                label="Email"
                color="light-blue"
                size="lg"
              />
            </div>
            <div className="mb-2">
              <Textarea
                type="text"
                label="Message"
                color="light-blue"
                size="lg"
              />
            </div>
            <div className="w-full ">
              <Button
                color="light-blue"
                buttontype="filled"
                size="lg"
                className="w-full"
              >
                Send
              </Button>
            </div>
          </form>
        </div>  
        <img src="./src/assets/contact.jpg" alt="Photo" className="w-1/3" />
      </section>

      <section className="flex items-center w-full mt-8 justify-evenly">
        
      </section>
    </main>
  );
}

export default Home;
