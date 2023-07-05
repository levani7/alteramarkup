import React from "react";


const FiltersBar = () => {
    return (
        <div className=" flex flex-wrap justify-between items-center font-bold text-[#6F767E] text-[17px]">
            <div className="flex flex-wrap justify-around items-center space-x-4">
                
                <h2>ფილტრები</h2>
                <button type="button" class="flex  justify-center items-center w-[161px] h-[45px]  gap-x-1.5 rounded-[18px] bg-white  font-bold text-[#6F767E] shadow-sm  ">
                        კომპანია
                        <svg class="-mr-1 h-7 w-7 text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                </button>
                <button type="button" class="inline-flex  justify-center items-center w-[200px] gap-x-1.5 rounded-[18px] bg-white px-3 py-2  font-bold text-[#6F767E] shadow-sm  ">
                        დეპარტამენტი
                        <svg class="-mr-1 h-7 w-7 text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                </button>
            </div>
        </div>
    )
}

export default FiltersBar;