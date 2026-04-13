

const Count = () => {
    return (
        <div className="container mx-auto">
            <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-7">
                <div className="border p-6 rounded-lg shadow-md text-center">

                    <p className="text-lg font-semibold">
                        10
                    </p>

                    <p className="text-gray-600 mt-2">
                       Total Friends
                    </p>

                </div>
                <div className="border p-6 rounded-lg shadow-md text-center">

                    <p className="text-lg font-semibold">
                        3
                    </p>

                    <p className="text-gray-600 mt-2">
                        On Track
                    </p>

                </div>
                <div className="border p-6 rounded-lg shadow-md text-center">

                    <p className="text-lg font-semibold">
                       6
                    </p>

                    <p className="text-gray-600 mt-2">
                         Need Attention 
                    </p>

                </div>
                <div className="border p-6 rounded-lg shadow-md text-center">

                    <p className="text-lg font-semibold">
                        12
                    </p>

                    <p className="text-gray-600 mt-2">
                        Interactions This Month
                    </p>

                </div>
            </div>
            <hr />
        </div>
    );
};

export default Count;