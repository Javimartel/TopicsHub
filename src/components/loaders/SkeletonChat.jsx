import React from "react";



const Skeleton = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-12">
                <div class="w-1/4 h-10 bg-gray-200 animate-pulse rounded-2xl mb-4">
                </div>
                <div className="w-2/4 p-5 border border-gray-200">
                    <div class="chat chat-start bg-white">
                        <div class="chat-bubble text-gray-200 bg-gray-200 animate-pulse">I have the high ground.</div>
                    </div>
                    <div class="chat chat-end bg-white">
                        <div class="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div class="chat chat-end bg-white">
                        <div class="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div class="chat chat-start bg-white">
                        <div class="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div class="chat chat-start bg-white">
                        <div class="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                    <div class="chat chat-end bg-white">
                        <div class="chat-bubble text-gray-200 bg-gray-200 animate-pulse ">I have the high ground.</div>
                    </div>
                </div>
                    <div className="flex justify-center w-full gap-2 mt-8">
                        <div class="w-2/12 h-10 bg-gray-200 animate-pulse rounded-2xl">
                        </div>
                        <div class="w-1/12 h-10 bg-gray-200 animate-pulse rounded-full">
                        </div>
                    </div>
            </div>
        </>
    );
}

export default Skeleton;






