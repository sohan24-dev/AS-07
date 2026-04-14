"use client"



import { createContext, useState } from "react"


export const AllDataCollect = createContext();


const CollectAllData = ({ children }) => {
    const [CollectData, setCollectData] = useState([]);
    const data = {
        CollectData,
        setCollectData,
    }
    return (
        <div>
            <AllDataCollect.Provider value={data}>
                {children}
            </AllDataCollect.Provider>
        </div>
    );
};

export default CollectAllData;