import React from "react";
import { ImUpload3 } from "react-icons/im";
import AddComentar from "./AddComentar";

const AddFormMiddleSide = () => {
    return (
        <div className=" space-y-[35px]">
            <div>
                <h5 className=" text-[14px] text-[#6F767E] font-extrabold">კომენტარი</h5>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your</label>
                <textarea id="message" rows="4" class="block p-2.5 xl:w-[954px] lg:w-[500px] h-[138px] text-sm text-gray-900 bg-white rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500 dark:bg-[#FAFBFD]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="დატოვეთ კომენტარი"></textarea>

            </div>
            <div>
                <h5 className=" text-[14px] text-[#6F767E] font-extrabold">სამოტივაციო წერილი</h5>
                {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your</label>
                <textarea id="message" rows="4" class="block p-2.5 xl:w-[954px] lg:w-[500px] h-[390px]  text-sm text-gray-900 bg-white rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500 dark:bg-[#FAFBFD]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "></textarea> */}
                <AddComentar/>
            </div>
            <div className=" space-y-[10px]">
                <h5 className=" text-[14px] text-[#6F767E] font-extrabold">რეზიუმე</h5>
                <button className=" w-[452px] h-[53px]  border-dashed border-4 border-[#377DFF] rounded-[15px] text-[14px] font-semibold text-[#377DFF] flex justify-center  items-center ">
                <span className="text-[#377DFF] text-[20px] mr-4">
                <ImUpload3 />
                </span>
                აირჩიეთ ან ჩააგდეთ ფაილი
                </button>
            </div>
        </div>
    )
}

export default AddFormMiddleSide;