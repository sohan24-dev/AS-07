"use client"


import EmptyCart from "@/components/Contact/EmptyCart";
import { AllDataCollect } from "@/components/context/AllData";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";




const StaticPage = () => {
    const { CollectData } = useContext(AllDataCollect);
    const callCount = CollectData.filter(item => item.type === "call").length;
    const textCount = CollectData.filter(item => item.type === "text").length;
    const videoCount = CollectData.filter(item => item.type === "video").length;
    const isEmpty = CollectData.length === 0;

    const data = [
        { name: 'Text', value: textCount, fill: '#0088FE' },
        { name: 'Call', value: callCount, fill: '#00C49F' },
        { name: 'Video', value: videoCount, fill: '#FF8042' },
    ];
    return (
        <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-2xl font-bold">Friendship Analytics</h2>
            <div className="bg-white py-5 px-8 my-4">
                <p>By interaction Type</p>
                <div className="space-y-4">
                    {
                        isEmpty ? (
                            
                                <div className="text-center">
                                    <EmptyCart />
                                </div>
                        ) : <PieChart className="py-4 mx-auto" style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    }
                </div>
            </div>
        </div>
    );
};

export default StaticPage;