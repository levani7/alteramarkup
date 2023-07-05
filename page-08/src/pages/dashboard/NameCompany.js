import React from "react";


const Companies = () => {

    const rows = Array.from({length: 4})
    return (
        <div className=" flex flex-wrap justify-between px-6 items-center w-full py-[15px] bg-white rounded-[15px]">  
            <h1 className=" font-bold text-[24px] text-[#333333]">კომპანიის დასახელება</h1>
        {rows.map(() =>(
            <div className=" flex flex-col  items-center w-[105px] h-[52px] p-1 rounded-[10px] bg-[#F5F6FA] font-bold text-[#6F767E] text-[7px]"> <span>დეპარტამენტი </span> 
                <span className=" text-[27px] font-bold">10</span> 
            </div>
        ))}
            <div>
                <button type="button" class="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-[#2CD889] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                    კომპანიის რეკრუტერი
                    <svg class="-mr-1 h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Companies