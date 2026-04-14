import CollectAllData from "@/components/context/AllData";


const Providers = ({ children }) => {
    return (
        <div>
            <CollectAllData>
                {children}
            </CollectAllData>
        </div>
    );
};

export default Providers;