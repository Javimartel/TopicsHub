import React from "react";



const Skeleton = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-12">
                <div className="w-2/5 h-10 bg-gray-200 animate-pulse rounded-2xl mb-4">
                </div>
                <div className="p-5 border border-gray-200 min-h-[40vh] max-h-[60vh] max-w-[60rem] w-full">
                    <div className="chat chat-start bg-white">
                        <div className="chat-bubble text-gray-200 bg-gray-200 animate-pulse">I have the high ground.</div>
                    </div>
                    <div className="chat chat-end bg-white">
                        <div className="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div className="chat chat-end bg-white">
                        <div className="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div className="chat chat-start bg-white">
                        <div className="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div className="chat chat-start bg-white">
                        <div className="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div className="chat chat-end bg-white">
                        <div className="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div className="chat chat-start bg-white">
                        <div className="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                </div>
                    <div className="flex justify-center w-4/5 py-5 lg:w-3/5">
                        <div className="w-2/12 h-10 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div className="w-1/12 h-10 bg-gray-200 animate-pulse rounded-full">
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Skeleton;






