import React from "react";


const StatusDropdown = () => {
    return (
        <button type="button" class="inline-flex  justify-center items-center gap-x-1.5 rounded-[18px] bg-blue-100 px-3 py-2 text-[12px] font-bold text-[#6F767E] shadow-sm  ">
                    ინტერვიუ
                    <svg class="-mr-1 h-7 w-7 text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
        </button>
    )
}

export default StatusDropdown;