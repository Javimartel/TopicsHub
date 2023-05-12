import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const Cards = (props) => {
    return (
        <>
            <Card className="flex-row max-w-[30rem]  min-w-[360px] shadow-md hover:bg-gray-100 dark:shadow-sm  dark:shadow-white dark:bg-[#333f4e]">
                <CardHeader shadow={false} floated={false} className="w-2/5 m-0 rounded-r-none shrink-0 min-w-[200px]">
                    <img
                        src={props.img}
                        alt={props.name}
                        className="object-cover w-full h-full min-h-[200px]"
                    />
                </CardHeader>
                <CardBody className="flex items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray" className="flex flex-wrap items-center gap-2 mb-2 font-mono dark:text-white">
                            {props.name}
                            {props.new ? (
                                <>
                                    <div>
                                        <span className="flex items-center badge badge-secondary">New</span>
                                    </div>
                                </>
                            ) : null}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-mono dark:text-white">
                            {props.description}
                        </Typography>
                        <div className="card-actions dark:text-white ">
                            <div className=" badge badge-outline">{props.category}</div>
                        </div>
                    </div>
                </CardBody>
            </Card>


        </>
    );
}

export default Cards;
