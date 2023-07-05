import React from "react";
import {AiOutlinePlus} from "react-icons/ai"
import SaveButton from "./SaveButton";

const AddFields = () => {

    const textStyle = 'text-[#6F767E] text-[16px] space-y-2 font-bold'
    
    return (
        <div className=" w-full space-y-[45px] bg-white rounded-[15px]">
            <div className=" text-center space-y-[13px] pt-[60px]">
                <h1 className=" text-[29px] text-[#333333] font-extrabold">კომპანიის დამატების ველები</h1>
                <p className=" text-[#6F767E] text-[14px] font-bold">დაამატეთ კომპანიის სასურველი ველები</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-[35px]">
                <div className={textStyle}>
                    <p>დეპარტამენტის დასახელება</p>
                    <input className=" w-[329px]  h-[53px] bg-[#FAFBFD] rounded-[15px]" />
                </div>
                <div className={textStyle}>
                    <p>კომპანიის დასახელება</p>
                    <button type="button" class="inline-flex justify-end w-[329px] h-[53px] gap-x-1.5 rounded-[18px] bg-[#FAFBFD] px-3 py-2 text-[12px] font-semibold text-[#6F767E] shadow-sm ">
                    <svg class="mr-[48px] h-9 w-9  text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>
                <div className={textStyle}>
                    <p>მოცულობა</p>
                    <input className=" w-[160px]  h-[53px] bg-[#FAFBFD] rounded-[15px]" />
                </div>
                <div className={textStyle}>
                    <p>ანაზღაურება</p>
                    <input className=" w-[160pxpx]  h-[53px] bg-[#FAFBFD] rounded-[15px]" />
                </div> 
            </div>
                <div className=" flex justify-center items-center  space-x-6  space text-[#6F767E] text-[16px] space-y-2 font-bold">
                    <div className=" space-y-2">
                        
                        <p>მშობელი დეპარტამენტი</p>
                        <button type="button" class="inline-flex justify-end w-[329px] h-[53px] gap-x-1.5 rounded-[18px] bg-[#FAFBFD] px-3 py-2 text-[12px] font-semibold text-[#6F767E] shadow-sm ">
                        <svg class="mr-[48px] h-9 w-9  text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>
                    <div className=" pt-4">
                        <button class="btn flex justify-center items-center mt-1 w-[55px] h-[53px] border-[3px] border-[#377DFF] rounded-[15px] text-[30px] text-[#377DFF] font-light">
                            <AiOutlinePlus/>
                        </button>
                    </div>
                </div>
                <div className=" flex justify-center pb-[65px] pt-[245px]">
                    <SaveButton/>
                </div>
        </div>
    )
}
export default AddFields;