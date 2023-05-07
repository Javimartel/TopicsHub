import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from "@material-tailwind/react";

export default function Prices() {
    return (
        <>
        {/* Price 1 */}
            <Card className="w-full max-w-[18rem] p-8 border shadow-md lg:max-w-[20rem] text-blue-gray-800">
                <CardHeader floated={false} shadow={false} color="transparent" className="pb-8 m-0 mb-8 font-bold text-center">
                    <p className="uppercase ">
                        basic
                    </p>
                    <p className="flex justify-center gap-1 mt-6 text-6xl text-blue-gray-800">
                        <span className="mt-2 text-4xl">$</span>29
                        <span className="self-end text-4xl">/mo</span>
                    </p>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full">
                            </span>
                            <p className="font-normal">5 team members</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full">
                            </span>
                            <p className="font-normal">200+ components</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full">
                            </span>
                            <p className="font-normal">40+ built-in pages</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full">
                            </span>
                            <p className="font-normal">1 year free updates</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full">
                            </span>
                            <p className="font-normal">Life time technical support</p>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="p-0 mt-12">
                    <Button size="lg" color="light-blue" fullWidth={true}>
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
        {/* Price 2 */}
            <Card className="w-full max-w-[18rem] p-8 border shadow-md  lg:max-w-[20rem] text-blue-gray-800">
                <CardHeader floated={false} shadow={false} color="transparent" className="pb-8 m-0 mb-8 font-bold text-center">
                    <p className="uppercase ">
                        standard
                    </p>
                    <p className="flex justify-center gap-1 mt-6 text-6xl text-blue-gray-800">
                        <span className="mt-2 text-4xl">$</span>49{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </p>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">10 team members</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">300+ components</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">60+ built-in pages</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">2 years free updates</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">Life time technical support</p>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="p-0 mt-12">
                    <Button size="lg" color="light-blue" fullWidth={true}>
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
        {/* Price 3 */}
            <Card className="w-full max-w-[18rem] p-8 border shadow-md lg:max-w-[20rem] text-blue-gray-800">
                <CardHeader floated={false} shadow={false} color="transparent" className="pb-8 m-0 mb-8 font-bold text-center">
                    <p className="uppercase ">
                        premium
                    </p>
                    <p className="flex justify-center gap-1 mt-6 text-6xl text-blue-gray-800">
                        <span className="mt-2 text-4xl">$</span>99{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </p>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">Unlimited team members</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">500+ components</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">80+ built-in pages</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">3 years free updates</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-blue-500 rounded-full ">
                            </span>
                            <p className="font-normal">Life time technical support</p>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="p-0 mt-12">
                    <Button size="lg" color="light-blue" fullWidth={true}>
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
}