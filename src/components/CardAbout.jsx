// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";

const CardAbout = (props) => {
  return (
    // <Card
    //   shadow={false}
    //   className="m-3 relative grid h-[20rem] min-w-[20rem] max-w-[20rem] items-end justify-center overflow-hidden text-center"
    // >
    //   <CardHeader
    //     floated={false}
    //     shadow={false}
    //     color="blue"
    //     // color="transparent"
    //     className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url('${props.img}')] bg-cover bg-center`}
    //   >
    //     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
    //   </CardHeader>
    //   <CardBody className="relative py-14 px-6 md:px-12">
    //     <Typography
    //       variant="h2"
    //       color="white"
    //       className="mb-6 font-medium leading-[1.5]"
    //     >
    //       {props.theme}
    //     </Typography>
    //     <Typography variant="h5" className="mb-4 text-gray-400">
    //       {props.category}
    //     </Typography>
    //   </CardBody>
    // </Card>
    <div className="card lg:card-side bg-white text-gray-700 hover:text-black shadow-xl m-5">
      <div className="min-w-[30%] max-w-[30%] min-h-[20vh] max-h-full"><img className="h-full min-w-full object-cover" src={props.img} alt={props.theme} /></div>
      <div className="card-body flex items-center">
        <h2 className="card-title">{props.theme}</h2>
        <p className="text-last-center">{props.description}</p>
        <p>{props.category}</p>
      </div>
    </div>
  );
}

export default CardAbout;