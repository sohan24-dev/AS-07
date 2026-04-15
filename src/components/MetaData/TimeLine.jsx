

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
                <h2 className="text-4xl font-bold">Timeline</h2>
                <div>
                    <h4 className='font-semibold pb-3'>Filter type</h4>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="select"
                    ><option disabled={true}>Filter type </option>
                        <option value="all">All</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                        <option value="call">Call</option>
                    </select>
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