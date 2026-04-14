import MainData from "@/components/MainData/MainData";
import { readFile } from "node:fs/promises";
import path from "node:path";

const Data = async () => {
  const filePath = path.join(process.cwd(), "public",  "data.json");
  const friendsData = JSON.parse(await readFile(filePath, "utf-8"));
  return friendsData
}



const jsonData = Data()
const AllData = () => {
  return (
    <div className="container mx-auto py-12">
      
        <MainData jsonData={jsonData}></MainData>
  
    </div>
  );
};

export default AllData;