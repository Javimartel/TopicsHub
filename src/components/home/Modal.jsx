import React from "react";
import { Fragment, useState } from "react";

import {
    Button,
    Card,
    CardBody,
    Input,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Dialog,
} from "@material-tailwind/react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { FaSpinner } from "react-icons/fa";

import { BsFillHeartFill } from "react-icons/bs";

export default function Modal() {
    const { googleLogIn, createUser, logIn } = React.useContext(FirebaseContext);
    const [type, setType] = React.useState("card");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    
    const [isCreating, setIsCreating] = React.useState(false);
    const [isLoggingIn, setIsLoggingIn] = React.useState(false);
    const [loginError, setLoginError] = React.useState(null);
    const loginFormRef = React.useRef(null);
    const registerFormRef = React.useRef(null);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = loginFormRef.current["login_email"].value;
        const password = loginFormRef.current["login_password"].value;

        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        setIsLoggingIn(true);

        logIn(email, password)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => {
                setIsLoggingIn(false);
                setLoginError(error.message);
            });
    };

    const handleRegister = (event) => {
        event.preventDefault();
        const name = registerFormRef.current["sign_name"].value;
        const email = registerFormRef.current["sign_email"].value;
        const password = registerFormRef.current["sign_password"].value;
        const profilePicture = registerFormRef.current["sign_profile_picture"].files[0];

        if (!name || !email || !password || !profilePicture) {
            alert("Please fill all fields");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        setIsCreating(true);

        createUser(name, email, password, profilePicture)
            .then(() => {
                window.location.reload();
            })
            .catch(() => {
                setIsCreating(false);
            });
    };

    return (
        <>
            <Fragment>
                <Button onClick={handleOpen} size="lg" className="items-center hidden gap-2 lg:flex lg:ml-auto selection:border-none">
                    Join Us <BsFillHeartFill size={15} />
                </Button>
                <Dialog open={open} handler={handleOpen}>
                    <Card>
                        <CardBody>
                            <Tabs value={type} className="overflow-visible ">
                                <TabsHeader>
                                    <Tab value="card" onClick={() => setType("card")}>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />

            {/* El preventDefault de aquí evita que se quite el modal si pulsas fuera, pero si no lo pongo el login de Google se ejecuta si pulso el modal en cualquier lado */}
            {/* <label htmlFor="my-modal-4" className="cursor-pointer modal" onClick={(event) => { event.stopPropagation(); event.preventDefault() }}> */}
            {/* <label className="relative bg-transparent shadow-none modal-box"> */}
            {/* <div className="cursor-pointer modal">
                <label htmlFor="my-modal-4" className="relative bg-transparent shadow-none modal-box" onClick={(event) => { event.stopPropagation(); }}>
                    <Card>
                        <CardBody>
                            <Tabs value={type} className="overflow-visible ">
                                <TabsHeader className="">
                                    <Tab value="card" onClick={(event) => { event.stopPropagation(); event.preventDefault(); setType("card") }}>
                                        Login
                                    </Tab>
                                    <Tab value="sign" onClick={(event) => { event.stopPropagation(); event.preventDefault(); setType("sign") }}>
                                        Sign Up
                                    </Tab>
                                   */}
                                </TabsHeader>
                                <TabsBody
                                    className="!overflow-x-hidden !overflow-y-visible"
                                    animate={{
                                        initial: {
                                            x: type === "card" ? 400 : -400,
                                        },
                                        mount: {
                                            x: 0,
                                        },
                                        unmount: {
                                            x: type === "card" ? 400 : -400,
                                        },
                                    }}
                                >
                                    <TabPanel value="card" className="p-0 min-h-[300px] flex items-end">

                                        <form
                                            className="flex flex-col w-full"
                                            ref={loginFormRef}
                                        >
                                            <div className="flex justify-center mb-2">
                                                <Button onClick={(event) => { event.stopPropagation(); event.preventDefault(); googleLogIn() }} size="md" variant="outlined" className="flex items-center justify-center w-2/3 gap-3">
                                                    <img src="/images/google-tile.svg" alt="google" className="w-6 h-6" />
                                                    Continue with Google
                                                </Button>
                                            </div>
                                            <div className="divider text-md">Or</div>
                                            <div className="mb-4">
                                                <Input type="email" label="Email" id="login_email" />
                                            </div>
                                            <div className="mb-6">
                                                <Input type="password" label="Password" id="login_password" />
                                            </div>

                                            <>
                                                {isLoggingIn ? (
                                                    <div className="flex justify-center">
                                                        <FaSpinner className="animate-spin" color="blue" size={20} />
                                                    </div>
                                                ) : (
                                                    <Button
                                                        type="submit"
                                                        color={loginError ? "red" : "blue"}
                                                        size="lg"
                                                        onClick={handleLogin}
                                                    >
                                                        Log In
                                                    </Button>
                                                )}
                                            </>

                                        </form>

                                    </TabPanel>

                                    <TabPanel value="sign" className="p-0 min-h-[300px]">

                                        <form
                                            className="flex flex-col mt-8"
                                            ref={registerFormRef}
                                        >
                                            <div className="mb-4">
                                                <p className="font-mono text-lg text-center text-black">
                                                    Welcome to Topics<span className="text-blue-500">Hub</span>
                                                </p>
                                                <p className="mb-2 font-mono text-lg text-center text-black ">
                                                    Join <span className="text-blue-500">us</span> filling the form below
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-4 mb-4 sm:flex-row">
                                                <Input type="text" label="Name" id="sign_name" />
                                            </div>
                                            <div className="mb-4">
                                                <Input type="email" label="Email" id="sign_email" />
                                            </div>
                                            <div className="mb-6">
                                                <Input type="password" label="Password" id="sign_password" />
                                            </div>
                                            <div className="mb-6">
                                                <Input type="file" label="Profile Picture" id="sign_profile_picture" />
                                            </div>

                                            <>
                                                {isCreating ? (
                                                    <div className="flex justify-center">
                                                        <FaSpinner className="animate-spin" color="blue" size={20} />
                                                    </div>
                                                ) : (
                                                    <Button
                                                        type="submit"
                                                        size="lg"
                                                        onClick={handleRegister}
                                                    >
                                                        Sign Up
                                                    </Button>
                                                )}
                                            </>
                                        </form>

                                    </TabPanel>
                                </TabsBody>
                            </Tabs>
                        </CardBody>
                    </Card>
                </Dialog>
            </Fragment>

        </>
    );
}
