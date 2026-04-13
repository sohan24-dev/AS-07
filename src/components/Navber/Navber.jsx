
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";



const Navber = () => {
    const link = <>
            <li>
                <Link href="/"><IoHome /> Home</Link>
            </li>
        <li>
            <Link href="/"><MdAccessTime /> Timeline</Link>
        </li>
        <li>
            <Link href="/"><ImStatsDots /> Static</Link>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <h3 className="font-bold text-xl">Keen<span className="text-green-800">
                    keeper</span></h3>
            </div>
            <div className="navbar-end ">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content right-0 mt-3 w-40 bg-base-100 rounded-box p-2 shadow"
                    >
                        {link}

                    </ul>
                </div>
                <ul className="menu menu-horizontal hidden sm:flex px-1">
                    {link}
                </ul>
            </div>
        </div>
    );
};

export default Navber;