import React from "react";

const AddForm = () => {

    const textStyle = 'text-[14px] text-[#6F767E] font-extrabold' 
    const inputStyle = 'w-[452px]  h-[53px] bg-[#FAFBFD] rounded-[15px]'

    return (
        <div className=" flex justify-center  w-[968px]  bg-white rounded-[15px]">
            <div className=" space-y-[34px]">
                <h1 className=" pt-[70px] text-center text-[30px] text-[#333333] font-extrabold">ახალი დეპარტამენტის დამატება</h1>
                <div className=" space-y-2">
                    <p className={textStyle}>კომპანიის დასახელება</p>
                    <button type="button" class="inline-flex justify-end w-[452px] h-[53px] gap-x-1.5 rounded-[18px] bg-[#FAFBFD] px-3 py-2 text-[12px] font-semibold text-[#6F767E] shadow-sm ">
                        <svg class="mr-[48px] h-9 w-9  text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className=" space-y-2">
                    <p className={textStyle}>დეპარტამენტის დასახელება</p>
                    <input className={inputStyle} />
                </div>
                <div className=" space-y-2">
                    <p className={textStyle}>მოცულობა</p>
                    <input className={inputStyle} />
                </div>
                <div className=" space-y-2">
                    <p className={textStyle}>ანაზღაურება</p>
                    <input className={inputStyle} />
                </div>
                <div className=" space-y-2">
                    <p className={textStyle}>მშობელი დეპარტამენტი</p>
                    <button type="button" class="inline-flex justify-end w-[452px] h-[53px] gap-x-1.5 rounded-[18px] bg-[#FAFBFD] px-3 py-2 text-[12px] font-semibold text-[#6F767E] shadow-sm ">
                        <svg class="mr-[48px] h-9 w-9  text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className="pb-[40px]">
                    <button className=" w-[400px] h-[70px] bg-[#0FD89E] text-white font-bold text-[24px]  rounded-lg"> დამატება </button>
                </div>
            </div>
        </div>
    )
}

export default AddForm;