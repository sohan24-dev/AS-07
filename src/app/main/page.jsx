import MainData from "@/components/MainData/MainData";

const Data = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data
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