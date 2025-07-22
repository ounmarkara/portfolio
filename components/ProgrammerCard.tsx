import React from "react";

export default function ProgrammerCard() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-blue-100 rounded-xl overflow-hidden">
      {/* Programmer Avatar */}
      <div className="relative w-48 h-64 bg-white rounded-xl shadow-lg flex flex-col items-center p-4">
        {/* Head */}
        <div className="w-20 h-20 bg-[#f1c27d] rounded-full mt-2 relative z-10"></div>

        {/* Hair */}
        <div className="absolute top-2 w-20 h-12 bg-[#3b2e2a] rounded-t-full z-20"></div>

        {/* Glasses */}
        <div className="absolute top-10 flex gap-2 z-30">
          <div className="w-5 h-3 border-2 border-black rounded-sm bg-white"></div>
          <div className="w-5 h-3 border-2 border-black rounded-sm bg-white"></div>
        </div>

        {/* Body */}
        <div className="mt-4 w-24 h-32 bg-[#1f2937] rounded-xl"></div>

        {/* Laptop */}
        <div className="absolute bottom-4 w-36 h-24 bg-white rounded-md shadow-md flex items-center justify-center z-40">
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      {/* Floating Tech Tags */}
      <span className="absolute top-10 left-10 bg-yellow-400 text-white px-3 py-1 text-sm rounded shadow-md animate-pulse">
        &lt;/&gt;
      </span>
      <span className="absolute top-24 right-16 bg-purple-500 text-white px-3 py-1 text-sm rounded shadow-md animate-bounce">
        CSS
      </span>
      <span className="absolute bottom-10 left-16 bg-red-500 text-white px-3 py-1 text-sm rounded shadow-md animate-ping">
        {"{ }"}
      </span>
      <span className="absolute bottom-12 right-10 bg-green-500 text-white px-3 py-1 text-sm rounded shadow-md animate-pulse">
        JAVA
      </span>
    </div>
  );
}
