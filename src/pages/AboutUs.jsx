import React from "react";
import Navbar from "../components/Navbar";
import { Avatar } from "@material-tailwind/react";
import Footer from "../components/Footer";


export default function AboutUs() {
    return (
        <>
            <main>
                <Navbar />

                <section className="flex justify-center mt-12">
                    <div className="flex flex-col items-center w-full p-4">
                        <h1 className="p-1 text-5xl font-bold text-gray-900 ">Meet our <span className="text-blue-500" >Team</span></h1>
                        <p className="mt-4 text-center text-gray-900">
                            Our team is made up of three people who are passionate about technology and programming. <br />
                            We are always looking for new challenges and we love to learn new things.
                        </p>
                    </div>
                </section>


                <section className="flex justify-center mt-12">
                    <div className="flex flex-col items-center ">
                        <div className="flex items-center justify-center gap-5 ">
                            <Avatar src="/images/avatarjavi.jpg" alt="avatar" className="w-[200px] h-[200px] border-2 rounded-full" />
                            <p className="flex items-center justify-center w-2/3 text-gray-900 max-w-[750px] text-justify">
                                Javi es una persona amante de la tecnología. Siempre está al tanto de las últimas novedades y disfruta explorando nuevas ideas.
                                Es una persona reflexiva y creativa, capaz de encontrar soluciones innovadoras a los desafíos que se le presentan.
                                Además, tiene una personalidad amigable y cercana, lo que lo convierte en un gran colaborador en cualquier proyecto.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-5 ">
                            <p className="flex items-center justify-center w-2/3 text-gray-900 max-w-[750px] text-justify">
                                Esta persona es un entusiasta del lenguaje de programación PHP. Le apasiona el desarrollo web y tiene un amplio conocimiento en el campo.
                                Siempre está dispuesto a compartir sus conocimientos y ayudar a otros programadores.
                                Es perseverante y nunca se rinde ante los desafíos técnicos.
                                Además, es una persona sociable y disfruta colaborando en equipo para lograr resultados excepcionales.
                            </p>
                            <Avatar src="/images/avatarphplover.jpg" alt="avatar" className="w-[200px] h-[200px] border-2 rounded-full" />
                        </div>
                        <div className="flex items-center justify-center gap-5 ">
                            <Avatar src="https://robohash.org/cHati" alt="avatar" className="w-[200px] h-[200px] border-2 rounded-full" />
                            <p className="flex items-center justify-center w-2/3 text-gray-900 max-w-[750px] text-justify">
                                Esta figura robótica refleja la diversidad y la individualidad. Es un símbolo de la tecnología y la innovación.
                                Robohash tiene una mente analítica y una gran capacidad para procesar información.
                                Aunque su apariencia puede ser mecánica, su inteligencia artificial le permite interactuar y adaptarse al entorno.
                                Es una figura intrigante que despierta la curiosidad de todos aquellos que lo conocen.
                            </p>
                        </div>
                    </div>
                </section>

                <Footer />
            </main >

        </>
    )
}










