import React from "react";
import { ImUpload3 } from "react-icons/im";
import AddComentar from "./AddComentar";

const AddFormButtomSide = () => {
    return (
        <div className=" space-y-[35px]">
            <div>
                <h5 className=" text-[14px] text-[#6F767E] font-extrabold">მცირე აღწერა</h5>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your</label>
                <textarea id="message" rows="4" class="block p-2.5 xl:w-[954px] lg:w-[500px] h-[138px] text-sm text-gray-900 bg-white rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500 dark:bg-[#FAFBFD]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="დატოვეთ კომენტარი"></textarea>

            </div>
            <div>
                <h5 className=" text-[14px] text-[#6F767E] font-extrabold">სრული აღწერა</h5>
                <AddComentar/>
            </div>
            <div className=" space-y-[10px]">
            <h5 className=" text-[14px] text-[#6F767E] font-extrabold">შეფასების კრიტერიუმი</h5>
            <div className="">
                    <button className="flex flex-wrap justify-between px-3 2xl:w-[954px] lg:w-[600px] md:w-[400px] sm:-w-[250px] h-[53px] bg-[#FAFBFD] items-center rounded-[15px]">
                        <input className=" 2xl:w-[430px] md:w-[200px] h-[32px]  border-dashed border-4 border-[#377DFF] rounded-[15px] text-[14px] font-semibold text-[#377DFF] flex justify-center  items-center focus-within:border-none"></input>
                        <input className=" 2xl:w-[430px] md:w-[200px] h-[32px]  border-dashed border-4 border-[#377DFF] rounded-[15px] text-[14px] font-semibold text-[#377DFF] flex justify-center  items-center focus-within:border-none"></input>
                        <svg class="mr-[20px] h-9 w-9  text-[#6F767E] cursor-pointer" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
            </div>
                <h5 className=" text-[14px] text-[#6F767E] font-extrabold">პასუხისმგებელი პიროვნება</h5>

                <button type="button" class="inline-flex justify-end 2xl:w-[952px] lg:w-[600px] md:w-[400px] sm:w-[300px] h-[53px] gap-x-1.5 rounded-[18px] bg-[#FAFBFD] px-3 py-2 text-[12px] font-semibold text-[#6F767E] shadow-sm ">
                    <svg class="mr-[23px] h-9 w-9  text-[#6F767E]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default AddFormButtomSide;