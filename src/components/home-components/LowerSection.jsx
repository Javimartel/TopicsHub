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
    TabPanel
} from "@material-tailwind/react";


export default function LowerSection() {
    const [type, setType] = React.useState("card");
    return (
        <>
            <section className="flex w-full mt-20 justify-evenly">
                <div className="flex flex-col items-center justify-center w-1/3">
                    <Typography variant="h2" color="black" className="font-mono">
                        Come <span className="text-blue-500">In</span>.
                    </Typography>
                    <Typography variant="paragraph" color="black" className="w-2/3 font-mono text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        voluptas, quod, quia, voluptate quae quibusdam voluptates
                    </Typography>
                </div>
                <Card className="w-1/4 pt-5 border-gray-200">
                    <CardBody>
                        <Tabs value={type} className="overflow-visible">
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
                                            <Button
                                                size="lg"
                                                variant="outlined"
                                                color="blue-gray"
                                                className="flex items-center gap-3"
                                            >
                                                <img src="./src/assets/google-tile.svg" alt="metamask" className="w-6 h-6" />
                                                Continue with Google
                                            </Button>
                                        </div>
                                        <div className="mb-2">
                                            <Typography variant="small" color="blue-gray" className="text-center">
                                                Or
                                            </Typography>
                                        </div>
                                        <div className="mb-4">
                                            <Typography variant="small" color="blue-gray">
                                                Email Address
                                            </Typography>
                                            <Input type="email" label="Email" id="login_email" />
                                        </div>
                                        <div className="mb-6">
                                            <Typography variant="small" color="blue-gray">
                                                Password
                                            </Typography>
                                            <Input type="password" label="Password" id="login_password" />
                                        </div>

                                        <Button size="lg">Login</Button>
                                    </form>
                                </TabPanel>

                                <TabPanel value="sign" className="p-0">
                                    <form className="flex flex-col mt-8">
                                        <div className="flex justify-center w-full mb-4">
                                            <Button
                                                size="lg"
                                                variant="outlined"
                                                color="blue-gray"
                                                className="flex items-center gap-3"
                                            >
                                                <img src="./src/assets/google-tile.svg" alt="metamask" className="w-6 h-6" />
                                                Continue with Google
                                            </Button>
                                        </div>
                                        <div className="mb-2">
                                            <Typography variant="small" color="blue-gray" className="text-center">
                                                Or
                                            </Typography>
                                        </div>
                                        <div className="mb-4">
                                            <Typography variant="small" color="blue-gray">
                                                Email Address
                                            </Typography>
                                            <Input type="email" label="Email" id="login_email" />
                                        </div>
                                        <div className="mb-6">
                                            <Typography variant="small" color="blue-gray">
                                                Password
                                            </Typography>
                                            <Input type="password" label="Password" id="login_password" />
                                        </div>

                                        <Button size="lg">Login</Button>
                                    </form>
                                </TabPanel>
                            </TabsBody>
                        </Tabs>
                    </CardBody>
                </Card>

                <div className="flex flex-col items-center justify-center w-1/3">
                    <Typography variant="h2" color="black" className="font-mono text-right">
                        Join <span className="text-blue-500">Us</span>.
                    </Typography>

                    <Typography variant="paragraph" color="black" className="w-2/3 font-mono text-center">
                        Join Us and enjoy the freedom of expression and the freedom of opinion.
                        Be free and opinion.
                    </Typography>


                </div>

            </section>
        </>
    )
}








