import React from "react";

const StaticCards = () => {

    return (
        <>
        {/* Card 1 */}
            <div className="text-gray-900 shadow-md card min-w-[300px] max-w-[300px] cursor-pointer select-none"> 
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="flex flex-col items-center card-body">
                    <h2 className="card-title">
                        Anime
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> Chat sobre Anime </p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">Anime</div>
                        <div className="badge badge-outline">Manga</div>
                    </div>
                </div>
            </div>
        {/* Card 2 */} 
            <div className="text-gray-900 shadow-md card min-w-[300px] max-w-[300px] cursor-pointer select-none">
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="flex flex-col items-center card-body">
                    <h2 className="card-title">
                        Ropa
                    </h2>
                    <p> Chat sobre Ropa </p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">Ropa</div>
                        <div className="badge badge-outline">Moda</div>
                    </div>
                </div>
            </div>
        {/* Card 3 */}            
            <div className="text-gray-900 shadow-md card min-w-[300px] max-w-[300px] cursor-pointer select-none">
                <figure>
                    <img className="object-cover" />
                </figure>
                <div className="flex flex-col items-center card-body">
                    <h2 className="card-title">
                        Deportes
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> Chat sobre deportes </p>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">Deportes</div>
                        <div className="badge badge-outline">Fútbol</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StaticCards;
