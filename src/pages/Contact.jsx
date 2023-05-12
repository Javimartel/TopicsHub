import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Input, Textarea, Button } from "@material-tailwind/react";
import { FaSpinner } from "react-icons/fa";
import sendMailWith from "../infrastructure/email";

const Contact = () => {
    const sendFormRef = React.useRef(null);
    const [isSending, setIsSending] = React.useState(false);
    const [emailSent, setEmailSent] = React.useState(false);

    const handleSend = async () => {
        const name = sendFormRef.current["send_name"].value;
        const subject = sendFormRef.current["send_subject"].value;
        const email = sendFormRef.current["send_email"].value;
        const body = sendFormRef.current["send_body"].value;

        if (!name || !subject || !email || !body) {
            alert("Please fill up all the fields");
            return;
        }

        // Cambiamos el estado de envío a true
        setIsSending(true);

        const sendEmail = await sendMailWith(name, subject, email, body);

        if (sendEmail) {
            setIsSending(false);
            setEmailSent(true);
            sendFormRef.current.reset();
        } else {
            setIsSending(false)
            alert("Something went wrong, email not sent")
        }


    }

    return (
        <>
            <main>
                <div className="pt-5">
                    <Navbar />
                </div>

                <section className="flex flex-col items-center mt-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl ">Contact <span className="text-blue-500">Us</span></h1>
                    <p className="mt-3 text-center text-gray-900 dark:text-white">
                        Fill up the form and send us your message.
                    </p>
                    <p className="text-center text-gray-900 dark:text-white">
                        We will get back to you as soon as possible.
                    </p>
                </section>

                <section className="flex justify-center w-full mt-8">
                    <form className="flex flex-col items-center w-full gap-2 sm:w-1/2" ref={sendFormRef}>
                        <div className="flex flex-col items-center w-full gap-3 mb-2 lg:flex-row lg:justify-between lg:items-start">
                            <div className="w-full mt-2 lg:w-1/2 lg:mr-2">
                                <Input label="Name" id="send_name" />
                            </div>
                            <div className="w-full mt-2 lg:w-1/2 lg:ml-2">
                                <Input label="Subject" id="send_subject" />
                            </div>
                        </div>
                        <div className="w-full mt-2 mb-2">
                            <Input label="Email" id="send_email" />
                        </div>
                        <div className="w-full mt-2 mb-2">
                            <Textarea label="Body" id="send_body" />
                        </div>
                        <div>
                            {isSending ? (
                                <div className="flex justify-center w-full mt-10 mb-3">
                                    <FaSpinner className="animate-spin" color="blue" size={20} />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center">
                                    <Button className="mt-5 mb-5" size="md" onClick={handleSend}>
                                        Send
                                    </Button>
                                </div>
                            )}
                            {emailSent && (
                                <div className="flex justify-center w-full mt-3 mb-3">
                                    <p className="text-xl font-bold text-green-800 dark:text-white">Email sent successfully!</p>
                                </div>
                            )}
                        </div>
                    </form>
                </section>

                <div className="pt-4">
                    <Footer />
                </div>
            </main >
        </>
    )
}

export default Contact;
