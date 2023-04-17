import React from "react";
import {
    Card,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export default function SliderForm() {
    const [type, setType] = React.useState("card");
    return (
        <>
            <section className="flex flex-col items-center justify-center mt-8 mb-14">
                <Card className="w-4/5 max-w-sm md:max-w-md">
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
                                <TabPanel value="card" className="p-0">
                                    <form className="flex flex-col mt-8">
                                        <div className="flex justify-center w-full mb-4">
                                            <Button size="lg" variant="outlined" className="flex items-center gap-3">
                                                <img src="/images/google-tile.svg" alt="google" className="w-6 h-6" />
                                                Continue with Google
                                            </Button>
                                        </div>
                                        <div className="mb-4">
                                            <Typography variant="small" color="blue-gray" className="font-bold text-center" >
                                                Or
                                            </Typography>
                                        </div>
                                        <div className="mb-4">
                                            <Input type="email" label="Email" id="login_email" />
                                        </div>
                                        <div className="mb-6">
                                            <Input type="password" label="Password" id="login_password" />
                                        </div>
                                        <Button size="lg">Login</Button>
                                    </form>
                                </TabPanel>

                                <TabPanel value="sign" className="p-0">
                                    <form className="flex flex-col mt-8">
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
            </section>
        </>
    );
}
