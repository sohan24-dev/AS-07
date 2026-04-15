

"use client";
import { GoArrowDown } from 'react-icons/go';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'



const typeIcons = {
    text: text,
    video: video,
    call: call,
};

import { AllDataCollect } from "@/components/context/AllData";
import Image from "next/image";
import { useContext, useState } from "react";
import EmptyCart from '@/components/Contact/EmptyCart';

const TimeLineCart = () => {
    const { CollectData = [] } = useContext(AllDataCollect);

    const [filter, setFilter] = useState("all");
    const filteredData =
        filter === "all"
            ? CollectData
            : CollectData.filter(item => item.type === filter);

    const isEmpty = CollectData.length === 0;
    return (
        <div>
            <div className="p-4 space-y-4 container mx-auto">
                <h2 className="text-2xl font-bold">Timeline</h2>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1 w-40 flex justify-between items-center"><p>Filter timeline</p> <GoArrowDown /></div>
                    <ul className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm">

                        <li>
                            <button onClick={() => setFilter("all")}>
                                All
                            </button>
                        </li>

                        <li>
                            <button onClick={() => setFilter("text")}>
                                Text
                            </button>
                        </li>

                        <li>
                            <button onClick={() => setFilter("call")}>
                                Call
                            </button>
                        </li>

                        <li>
                            <button onClick={() => setFilter("video")}>
                                Video
                            </button>
                        </li>

                    </ul>
                </div>
                {
                    isEmpty ? (
                        <EmptyCart />
                    ) : (
                        filteredData.map((item, index) => (
                            <div key={index} className="bg-white py-3 px-4 rounded-2xl">
                                <div className='flex items-center gap-3'>
                                    <Image
                                        src={typeIcons[item.type]}
                                        alt={item.type}
                                        width={30}
                                        height={30}
                                    />

                                    <div>
                                        <p>
                                            <span className='font-medium text-lg'>
                                                {item.type}
                                            </span> with {item.person.name}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {new Date().toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default TimeLineCart;