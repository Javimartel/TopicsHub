import React from "react";
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
} from "@material-tailwind/react";
import { FirebaseContext } from "../../contexts/FirebaseContext";
import { FaSpinner } from "react-icons/fa";

export default function Modal() {
    const { googleLogIn, createUser } = React.useContext(FirebaseContext);
    const [type, setType] = React.useState("card");
    const [isCreating, setIsCreating] = React.useState(false);
    const formRef = React.useRef(null);

    const handleRegister = (event) => {
        event.preventDefault();
        const name = formRef.current["sign_name"].value;
        const email = formRef.current["sign_email"].value;
        const password = formRef.current["sign_password"].value;
        const profilePicture = formRef.current["sign_profile_picture"].files[0];

        if (!name || !email || !password || !profilePicture) {
            alert("Please fill all fields");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        setIsCreating(true);

        console.log("name", name);
        console.log("email", email);
        console.log("password", password);
        console.log("profilePicture", profilePicture);

        createUser(name, email, password, profilePicture)
            .then(() => {
                window.location.reload();
            })
    };

    return (
        <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />

            {/* El preventDefault de aquí evita que se quite el modal si pulsas fuera, pero si no lo pongo el login de Google se ejecuta si pulso el modal en cualquier lado */}
            {/* <label htmlFor="my-modal-4" className="cursor-pointer modal" onClick={(event) => { event.stopPropagation(); event.preventDefault() }}> */}
            {/* <label className="relative bg-transparent shadow-none modal-box"> */}
            <div className="cursor-pointer modal">
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

                                        <form className="flex flex-col w-full">
                                            <div className="flex justify-center mb-2">
                                                <Button onClick={(event) => { event.stopPropagation(); event.preventDefault(); googleLogIn() }} size="md" variant="outlined" className="flex items-center gap-3">
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
                                            <Button size="lg">Login</Button>
                                        </form>

                                    </TabPanel>

                                    <TabPanel value="sign" className="p-0 min-h-[300px]">

                                        <form
                                            className="flex flex-col mt-8"
                                            ref={formRef}
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
                                                <Input type="email" label="Name" id="sign_name" />
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
                </label >
            </div>
            {/* </label > */}
        </>
    );
}
