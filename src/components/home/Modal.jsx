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

import { BsFillHeartFill } from "react-icons/bs";

export default function Modal() {
    const [type, setType] = React.useState("card");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

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
                                <TabsHeader className="">
                                    <Tab value="card" onClick={() => setType("card")}>
                                        Login
                                    </Tab>
                                    <Tab value="sign" onClick={() => setType("sign")}>
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
                                                <Button size="md" variant="outlined" className="flex items-center gap-3">
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
                                        <form className="flex flex-col mt-8">
                                            <div className="mb-4">
                                                <p className="font-mono text-lg text-center text-black">
                                                    Welcome to Topics<span className="text-blue-500">Hub</span>
                                                </p>
                                                <p className="mb-2 font-mono text-lg text-center text-black ">
                                                    Join <span className="text-blue-500">us</span> filling the form below
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-4 mb-4 sm:flex-row">
                                                <Input type="email" label="Name" />
                                            </div>
                                            <div className="mb-4">
                                                <Input type="email" label="Email" id="sign_email" />
                                            </div>
                                            <div className="mb-6">
                                                <Input type="password" label="Password" id="sign_password" />
                                            </div>
                                            <Button size="lg">Sign Up</Button>
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
