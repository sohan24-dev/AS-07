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
import { useContext } from "react";

const Cart = () => {
    const { CollectData } = useContext(AllDataCollect);

    return (
        <div>
            <div className="p-4 space-y-4 container mx-auto">
                <h2 className="text-2xl font-bold">Timeline</h2>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1 w-40 flex justify-between items-center"><p>Click</p> <GoArrowDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                {CollectData.map((item, index) => (
                    <div key={index} className="bg-white py-3 px-4 rounded-2xl">

                        <div className='flex items-center gap-3'>
                            <Image
                                src={typeIcons[item.type]}
                                alt={item.type}
                                width={20}
                                height={20}
                            />

                            <div><p className="font-medium text-lg">
                                {item.type} with{" "}
                                {item.person.name}
                            </p>
                                <p className="text-sm text-gray-500">
                                    {new Date().toLocaleString()}
                                </p></div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;