"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImStatsDots } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";

const Links = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <>
            <li>
                <Link href="/" 
                className={pathname === "/" ? "bg-green-700 text-white font-bold" : ""}
                > <IoHome /> Home</Link>
            </li>
            <li>
                <Link href="/timeline"
                className={pathname === "/timeline" ? "bg-green-700 text-white font-bold" : ""}
                > <MdAccessTime /> Timeline</Link>
            </li>
            <li>
                <Link href="/static"
                className={pathname === "/static" ? "bg-green-700 text-white font-bold" : ""}
                > <ImStatsDots /> Static</Link>
            </li>
        </>
    );
};

export default Links;