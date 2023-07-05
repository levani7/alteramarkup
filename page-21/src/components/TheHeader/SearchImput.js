import React, { useState } from "react";
import { GoSearch } from "react-icons/go";


const SearchImput = () => {
    return (
        <label className="flex">
          <input
            className="pl-4 placeholder:italic rounded-full placeholder:text-slate-400 block bg-[#FAFBFD] h-[50px] w-[452px] border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg placeholder:text-[16px] placeholder:pl-[50px]"
            placeholder="ძებნა"
            type="text"
            name="search"
          />
          <div className="flex justify-center items-center bg-[#377DFF] h-[50px] rounded-full ml-[-40px]">
            <a className="text-[23px] px-3.5 text-white " href="">
              <GoSearch />
            </a>
          </div>
        </label>

    )
}

export default SearchImput;