"use client"


import { GoArrowDown } from 'react-icons/go';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'



const typeIcons = {
    text: text,
    video: video,
    call: call,
};

import React, { useContext } from 'react';
import { AllDataCollect } from '../context/AllData';
import Image from 'next/image';
import Empty from '../Emtry/Emtry';

const Recent = ({ id }) => {
    // console.log(id);
    const { CollectData } = useContext(AllDataCollect);
    // console.log(CollectData);
    const filter = CollectData.filter(items => items.person.id === parseInt(id))
    // console.log(filter);
    const isEmpty = filter.length === 0;

    return (
        <div className='space-y-4'>
            <h2 className="font-bold text-lg mb-3">Recent Contact</h2>

            {
                isEmpty ? (
                    <Empty />
                ) : (
                    filter.map((item, index) => (
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
    );
};

export default Recent;