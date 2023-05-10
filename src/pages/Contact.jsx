import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input, Textarea, Button } from "@material-tailwind/react";


export default function Contact() {

    return (
        <>
            <main>
                <Navbar />

                <section className="flex flex-col items-center mt-12">
                    <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl ">Contact <span className="text-blue-500" >Us</span></h1>
                    <p className="p-5 mt-4 text-center text-gray-900">
                        Fill up the form and send us your message. We will get back to you as soon as possible.
                    </p>
                </section>

                <section className="flex justify-center mt-8">
                    <form className="flex flex-col">
                        <div className="flex flex-col gap-3 mb-2 sm:flex-row">
                            <div className="w-2/3 sm:w-full">
                                <Input label="Name" />
                            </div>
                            <div className="w-2/3 sm:w-full">
                                <Input label="Subject" />
                            </div>
                        </div>
                        <div className="w-2/3 mb-2 sm:w-full">
                            <Input label="Email" />
                        </div>
                        <div className="w-2/3 mb-2 sm:w-full">
                            <Textarea label="Body" />
                        </div>
                        <div>
                            <Button fullWidth>
                                Send
                            </Button>
                        </div>
                    </form>
                </section>
                <Footer />
            </main >
        </>
    )

}


