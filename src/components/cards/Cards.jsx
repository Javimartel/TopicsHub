import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

const Cards = (props) => {
    return (
        <>
            <Card className="flex-row max-w-[30rem] min-w-[360px] shadow-lg hover:bg-gray-100">
                <CardHeader shadow={false} floated={false} className="w-2/5 m-0 rounded-r-none shrink-0 min-w-[200px]">
                    <img
                        src={props.img}
                        alt={props.name}
                        className="object-cover w-full h-full min-h-[200px]"/>
                </CardHeader>
                <CardBody>
                    {props.new ? (
                        <>
                            <div className="font-bold">
                                <span className="badge badge-secondary">New</span>
                            </div>
                        </>
                    ) : null}
                    <Typography variant="h4" color="blue-gray" className="flex items-center gap-4 mb-2 font-mono">
                        {props.name}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-mono font-semibold">
                        {props.description}
                    </Typography>
                </CardBody>
            </Card>
        </>
    );
}

export default Cards;
