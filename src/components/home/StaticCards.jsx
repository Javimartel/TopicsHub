import React from "react";

const StaticCards = () => {

    return (
        <>
        {/* Card 1 */}
            <div className="text-gray-900 shadow-md card"> 
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="flex flex-col items-center card-body">
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
            <div className="text-gray-900 shadow-md card">
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="flex flex-col items-center card-body">
                    <h2 className="card-title">
                        Test
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
            <div className="text-gray-900 shadow-md card">
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="flex flex-col items-center card-body">
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
