import React from "react";
import { CiSearch } from "react-icons/ci";

export default function InputwithSearch() {
  return (
    <div className="border border-black flex flex-row justify-between items-center p-2 rounded-2xl">
      <input
        type="text"
        name="searchblog"
        id="searchblog"
        className="border-0 flex-grow text-sm md:text-md lg:text-lg"
      />
      <button>
        <CiSearch className="text-md md:text-xl lg:text-3xl" />
      </button>
    </div>
  );
}
