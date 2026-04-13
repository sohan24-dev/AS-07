import { FaPlus } from "react-icons/fa";


const Hearder = () => {
    return (
        <div className="container mx-auto text-center space-y-4 pt-5">
            <h2 className="font-bold text-4xl">Friends to keep close in your life</h2>
            <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend,and nurture the relationships that matter most</p>

            <div>
                <button className="flex mx-auto items-center gap-2 bg-[#244D3F] text-white px-3 py-2 rounded-xl"><FaPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default Hearder;