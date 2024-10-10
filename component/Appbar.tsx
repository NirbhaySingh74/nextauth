"use client";
import { useRouter } from "next/navigation";

const Appbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        onClick={() => router.push("/api/auth/signin")}
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out"
        style={{ width: "auto", minWidth: "120px" }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Appbar;
