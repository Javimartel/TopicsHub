import React from "react";
import { Link } from "react-router-dom";
import CardAbout from "./CardAbout"
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from "./chat/SignIn";
import LogOut from "./chat/LogOut";
import Navbar from "./theme-components/Navbar";
import { Input } from "@material-tailwind/react";
import Cards from "./home-components/Cards";
import Footer from "./home-components/Footer";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
function Themes() {
    const [user] = useAuthState(auth)
    return (
        <>
            <main className="flex flex-col items-center">
                <Navbar />
                <div className="flex flex-col items-center mt-12 w-72">
                    <h1 className="m-3 text-3xl">Topics</h1>
                    <Input variant="outlined" label="Search" className="text-center" />
                </div>

                <section className="flex flex-col w-full">
                    <div className="flex justify-center mt-12">
                        <div className="flex flex-wrap justify-center w-3/5 gap-5">
                            <Cards />
                        </div>
                    </div>
                </section>

                <div className="flex justify-center mt-12">
                    <div className="flex items-center">
                        <BsArrowLeft size={15} />
                        <div className="p-2 m-2 text-lg">
                            1
                        </div>
                        <BsArrowRight size={15} />

                    </div>
                </div>

                <Footer />
            </main >

            {/* <div className="flex flex-col items-center justify-center w-full h-screen">
                    <h1 className="text-3xl text-white">Temáticas</h1>
                    <h2 className="italic font-bold">Eliminar este botón cuando esté el Login creado</h2>
                    {user ? <LogOut /> : <SignIn />}
                    <Link to="/">Home</Link>
                    <div className="flex justify-center w-[50%]">
                        <Link to="/chat/Anime">
                            <CardAbout
                                theme="Anime"
                                description="Chat para hablar de anime y manga"
                                category="Entretenimiento"
                                img="https://t.ctcdn.com.br/-jRX-9m58XZ2bTM0qcuI-Pp0fI4=/340x265:1654x1005/720x405/smart/filters:format(webp)/i521747.jpeg"
                            />
                        </Link>
                        <Link to="/chat/Ropa">
                            <CardAbout
                                theme="Ropa"
                                description="Chat para hablar de moda y tendencias"
                                category="Moda"
                                img="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg"
                            />
                        </Link>
                </div> */}
        </>
    );
}

export default Themes;