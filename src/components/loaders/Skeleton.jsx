import React from "react";



const Skeleton = () => {
    return (
        <>
            <div className="flex max-w-[30rem] min-w-[360px] gap-5 p-5 bg-white dark:bg-gray-800 shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl ">
                <div className="bg-gray-200 dark:bg-gray-600 h-52 sm:h-full sm:w-32 rounded-xl animate-pulse">
                </div>
                <div className="flex flex-col flex-1 gap-5 sm:p-2">
                    <div className="flex flex-col flex-1 gap-3">
                        <div className="w-full bg-gray-200 dark:bg-gray-600 animate-pulse h-14 rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 animate-pulse rounded-2xl">
                        </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                        <div className="w-20 h-8 bg-gray-200 rounded-full dark:bg-gray-600 animate-pulse">
                        </div>
                        <div className="w-20 h-8 bg-gray-200 rounded-full dark:bg-gray-600 animate-pulse">
                        </div>
                        <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full dark:bg-gray-600 animate-pulse">
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Skeleton;






