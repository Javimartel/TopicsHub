import React from "react";
import Navbar from "../components/Navbar";
import { Avatar } from "@material-tailwind/react";
import Footer from "../components/Footer";


export default function AboutUs() {
    return (
        <>
            <main>
                <div className="pt-5">
                    <Navbar />
                </div>

                <section className="flex flex-col items-center px-5 mt-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl ">Meet our <span className="text-blue-500">Team</span></h1>
                    <p className="mt-4 text-center text-gray-900 md:w-2/3 dark:text-white">
                        Our team is made up of three people who are passionate about technology and programming.
                    </p>
                </section>


                <section className="flex justify-center mt-12">
                    <div className="flex flex-col items-center gap-5">
                        <div className="flex flex-col items-center gap-7 lg:flex-row ">
                            <Avatar src="/images/avatarjavi.jpg" alt="avatar" className="w-[200px] h-[200px] border-2 rounded-full" />
                            <p className="flex items-center justify-center w-2/3 text-gray-900 dark:text-white max-w-[750px] text-justify ">
                                Javi is a technology lover. He is always up to date with the latest developments and enjoys exploring new ideas.
                                He is a thoughtful and creative person, capable of finding innovative solutions to the challenges that come his way.
                                In addition, he has a friendly and approachable personality, which makes him a great collaborator in any project.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-7 lg:flex-row-reverse">
                            <Avatar src="/images/avatarphplover.jpg" alt="avatar" className="w-[200px] h-[200px] border-2 rounded-full" />
                            <p className="flex items-center justify-center w-2/3 text-gray-900 dark:text-white max-w-[750px] text-justify ">
                                This person is a PHP programming language enthusiast. He is passionate about web development and have extensive knowledge in the field.
                                He is always willing to share their knowledge and help other programmers.
                                He is persevering and never give up in the face of technical challenges.
                                Additionally, he is sociable and enjoy collaborating in teams to achieve exceptional results.
                            </p>
                        </div>
                    </div>
                </section>


                <Footer />
            </main >

        </>
    )
}










