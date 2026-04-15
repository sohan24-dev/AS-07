import { use } from "react";
import FriendsData from "./FriendsData";


const MainData = ({ jsonData }) => {
    const AllData = use(jsonData)
    console.log(AllData);
    return (
        <>
        <h2 className="text-4xl font-extrabold pb-7">Your Friends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
                {
                    AllData.map((frData, idx) => <FriendsData key={idx} frData={frData}></FriendsData>
                    )
                }
            </div>
        </>
    );
};

export default MainData;