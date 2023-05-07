import React from "react";

const Cards = (props) => {

    return (
        <>
            <div className="shadow-md card bg-base-100 hover:text-white">
                <figure>
                    <img className="object-cover" src={props.img} alt={props.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> {props.description} </p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">{props.category}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
