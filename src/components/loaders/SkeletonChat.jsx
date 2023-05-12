import React from "react";



const Skeleton = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-12">
                <div className="w-1/5 h-10 mb-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl"></div>
                <div className="p-5 border border-gray-200 rounded-lg dark:border-gray-800 dark:bg-gray-800 dark:rounded-lg min-h-[60vh] max-h-[60vh] max-w-[60rem] w-full">
                    <div className="bg-white chat chat-start dark:bg-gray-800">
                        <div className="text-gray-200 bg-gray-200 chat-bubble dark:text-gray-700 dark:bg-gray-700 animate-pulse">
                            I have the high ground.
                        </div>
                    </div>
                    <div className="bg-white chat chat-end dark:bg-gray-800">
                        <div className="text-gray-200 bg-gray-200 chat-bubble dark:text-gray-700 dark:bg-gray-700 animate-pulse">
                            I have the high ground.
                        </div>
                    </div>
                    <div className="bg-white chat chat-end dark:bg-gray-800">
                        <div className="text-gray-200 bg-gray-200 chat-bubble dark:text-gray-700 dark:bg-gray-700 animate-pulse">
                            I have the high ground.
                        </div>
                    </div>
                    <div className="bg-white chat chat-start dark:bg-gray-800">
                        <div className="text-gray-200 bg-gray-200 chat-bubble dark:text-gray-700 dark:bg-gray-700 animate-pulse">
                            I have the high ground.
                        </div>
                    </div>
                    <div className="bg-white chat chat-start dark:bg-gray-800">
                        <div className="text-gray-200 bg-gray-200 chat-bubble dark:text-gray-700 dark:bg-gray-700 animate-pulse">
                            I have the high ground.
                        </div>
                    </div>
                    <div className="bg-white chat chat-end dark:bg-gray-800">
                        <div className="text-gray-200 bg-gray-200 chat-bubble dark:text-gray-700 dark:bg-gray-700 animate-pulse">
                            I have the high ground.
                        </div>
                    </div>
                    <div className="bg-white chat chat-start dark:bg-gray-800">
                        <div className="text-gray-200 bg-gray-200 chat-bubble dark:text-gray-700 dark:bg-gray-700 animate-pulse">
                            I have the high ground.
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-4/5 gap-2 py-5 lg:w-3/5">
                    <div className="w-5/12 h-10 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl"></div>
                    <div className="w-1/12 h-10 bg-gray-200 rounded-full dark:bg-gray-800 animate-pulse"></div>
                </div>
            </div>

        </>
    );
}

export default Skeleton;






