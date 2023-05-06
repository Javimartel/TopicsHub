import React from "react";

const StaticCards = () => {

    return (
        <>
        {/* Card 1 */}
            <div className="shadow-md card bg-base-100 hover:text-white"> 
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Test
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> Awesome description </p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">Test</div>
                        <div className="badge badge-outline">Anime</div>
                        <div className="badge badge-outline">Test</div>
                    </div>
                </div>
            </div>
        {/* Card 2 */} 
            <div className="shadow-md card bg-base-100 hover:text-white">
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Test
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> Awesome description </p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">Test</div>
                        <div className="badge badge-outline">Anime</div>
                        <div className="badge badge-outline">Test</div>
                    </div>
                </div>
            </div>
        {/* Card 3 */}            
            <div className="shadow-md card bg-base-100 hover:text-white">
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Test
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> Awesome description </p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">Test</div>
                        <div className="badge badge-outline">Anime</div>
                        <div className="badge badge-outline">Test</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StaticCards;
