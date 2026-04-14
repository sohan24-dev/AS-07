import Image from "next/image";
import Link from "next/link";


const FriendsData = ({ frData }) => {
    // console.log(frData);
    const { days_since_contact, name, tags, status, picture } = frData
    return (
        <Link href={`/main/${frData.id}`}>
            <div className="mx-auto space-y-3 shadow-xl bg-white p-7 w-full rounded-2xl flex flex-col">
                <div className="w-25 h-25 overflow-hidden mx-auto rounded-full">
                    <Image
                        src={picture}
                        width={100}
                        height={100}
                        alt={name}
                        className="rounded-full object-cover"
                    />
                </div>
                <h3>{name}</h3>
                <p>{days_since_contact}d ago</p>
                <div className="flex justify-center items-center gap-1">
                    {tags.map((tag, index) => (
                        <p className="bg-green-300 py-1 px-3 rounded-2xl " key={index}>{tag}</p>
                    ))}
                </div>
                <div>
                    <p
                        className={`inline-block px-2 py-1 rounded text-white ${status === "overdue"
                                ? "bg-red-400"
                                : status === "on-track"
                                    ? "bg-green-400"
                                    : status === "almost due"
                                        ? "bg-yellow-400"
                                        : "bg-gray-400"
                            }`}
                    >
                        {status}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default FriendsData;