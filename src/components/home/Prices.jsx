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
            <Card className="w-full max-w-[18rem] p-8 border shadow-md text-white bg-blue-gray-900 max-h-[300px] md:min-h-[550px] dark:shadow-white dark:border-none dark:shadow-sm dark:bg-blue-gray-800">
                <CardHeader floated={false} shadow={false} color="transparent" className="pb-8 m-0 mb-8 font-bold text-center">
                    <p className="uppercase dark:text-white">
                        premium
                    </p>
                    <p className="flex justify-center gap-1 mt-6 text-6xl dark:text-white">
                        <span className="mt-2 text-4xl ">$</span>99{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </p>
                </CardHeader>
                <CardBody className="hidden p-0 md:flex">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">Unlimited team members</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">500+ components</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">80+ built-in pages</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">3 years free updates</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
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
            <Card className="w-full max-w-[18rem] p-8 border shadow-md text-white bg-blue-gray-900 max-h-[300px] md:min-h-[550px] dark:shadow-white dark:border-none dark:shadow-sm dark:bg-blue-gray-800">
                <CardHeader floated={false} shadow={false} color="transparent" className="pb-8 m-0 mb-8 font-bold text-center">
                    <p className="uppercase dark:text-white">
                        premium
                    </p>
                    <p className="flex justify-center gap-1 mt-6 text-6xl dark:text-white">
                        <span className="mt-2 text-4xl ">$</span>99{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </p>
                </CardHeader>
                <CardBody className="hidden p-0 md:flex">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">Unlimited team members</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">500+ components</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">80+ built-in pages</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">3 years free updates</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
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
            <Card className="w-full max-w-[18rem] p-8 border shadow-md text-white bg-blue-gray-900 max-h-[300px] md:min-h-[550px] dark:shadow-white dark:border-none dark:shadow-sm dark:bg-blue-gray-800">
                <CardHeader floated={false} shadow={false} color="transparent" className="pb-8 m-0 mb-8 font-bold text-center">
                    <p className="uppercase dark:text-white">
                        premium
                    </p>
                    <p className="flex justify-center gap-1 mt-6 text-6xl dark:text-white">
                        <span className="mt-2 text-4xl ">$</span>99{" "}
                        <span className="self-end text-4xl">/mo</span>
                    </p>
                </CardHeader>
                <CardBody className="hidden p-0 md:flex">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">Unlimited team members</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">500+ components</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">80+ built-in pages</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
                            <p className="font-normal">3 years free updates</p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border border-white rounded-full"></span>
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