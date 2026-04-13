

const Navber = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-end ">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content right-0 mt-3 w-40 bg-base-100 rounded-box p-2 shadow"
                    >
                        <li><a>Item 1</a></li>
                        
                    </ul>
                </div>
                <ul className="menu menu-horizontal hidden lg:flex px-1">
                    <li><a>Item 1</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navber;