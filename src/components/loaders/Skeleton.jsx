import React from "react";



const Skeleton = () => {
    return (
        <>
            <div class="flex max-w-[30rem] min-w-[360px] gap-5 p-5 bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl ">
                <div class="bg-gray-200 h-52 sm:h-full sm:w-32 rounded-xl animate-pulse">
                </div>
                <div class="flex flex-col flex-1 gap-5 sm:p-2">
                    <div class="flex flex-col flex-1 gap-3">
                        <div class="w-full bg-gray-200 animate-pulse h-14 rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                    </div>
                    <div class="flex gap-3 mt-auto">
                        <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                        </div>
                        <div class="w-20 h-8 bg-gray-200 rounded-full animate-pulse">
                        </div>
                        <div class="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skeleton;






