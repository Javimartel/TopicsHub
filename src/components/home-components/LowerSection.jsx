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

export default function LowerSection() {
    const [type, setType] = React.useState("card");
    return (
        <>
            <section className="flex flex-col items-center justify-center mt-8 mb-14">
                <div className="hidden">
                    <Typography color="black" className="font-mono">
                        Come <span className="text-blue-500">In</span>.
                    </Typography>
                    <Typography variant="paragraph" color="black" className="w-2/3 font-mono text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        voluptas, quod, quia, voluptate quae quibusdam voluptates
                    </Typography>
                </div>

                <div className="lg:hidden">
                    <Typography color="black" className="mb-4 font-mono text-3xl font-bold md:text-4xl">
                        Join <span className="text-blue-500">Us</span>
                    </Typography>
                </div>

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

                <div className="hidden">
                    <Typography variant="h2" color="black" className="font-mono text-right">
                        Join <span className="text-blue-500">Us</span>.
                    </Typography>

                    <Typography variant="paragraph" color="black" className="w-2/3 font-mono text-center" >
                        Join Us and enjoy the freedom of expression and the freedom of
                        opinion. Be free and opinion.
                    </Typography>
                </div>
            </section>
        </>
    );
}
