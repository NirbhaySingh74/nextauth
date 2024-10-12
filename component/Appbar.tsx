"use client";

import { signIn, signOut, useSession } from "next-auth/react";
const Appbar = () => {
  const session = useSession();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-black text-white-white font-medium rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
        style={{ width: "auto", minWidth: "120px" }}
      >
        Sign In
      </button>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-black text-white font-medium rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
        style={{ width: "auto", minWidth: "120px" }}
      >
        Logout
      </button>

      {JSON.stringify(session)}
    </div>
  );
};

export default Appbar;
