"use client";

import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center  text-center">

      <div className="text-6xl text-gray-300 mb-4">
        <FaUserFriends />
      </div>

      <h2 className="text-2xl font-semibold text-gray-700">
        No Contact Activity Yet
      </h2>
      <p className="text-gray-500 mt-2 max-w-md">
        You have not made any calls or sent messages yet.
        Start connecting with your contacts to see activity here.
      </p>
    </div>
  );
};

export default Empty;