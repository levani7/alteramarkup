import React from "react";
import {ImBin2} from "react-icons/im"
import {MdEdit} from "react-icons/md"
import DisplayDropdown from "./DisplayDropdown";
import Pagination from "./Pagination";
import {TbArrowsSort} from "react-icons/tb";
import TodayDate from './TodayDate'
import TypeDropdown from './TypeDropdown'
import StatusDropdown from './StatusDropdown'
import {CgSoftwareDownload} from "react-icons/cg";

const Table = () => {
    const rows = Array.from({ length: 10 });
    const currentDate = new Date().toLocaleDateString();

    const rows1 = [
        {items:[
                    {title:"სახელი გვარი"},
                    {title:"პოზიცია"},
                    {title:"დეპარტამენტი"},
                    {title:"განცხადების თარიღი"},
                    {title:"ანაზღაურება"},
                    {title:"ტიპი"},
                    {title:"სტატუსი"},
                    {title:"რეზიუმე"},
                    {title:"ქმედებები"},
                ]
        }
    ]
    return (
        <div class="table w-full pt-4">
        <table class="w-full border">
            <thead>
                <tr class="bg-[#377DFF] border-b">
                    <th class=" mb-2">
                        <input type="checkbox"/>
                    </th>
                    {rows1[0].items.map((item,rowIndex) => (

                        <th key={rowIndex} class="p-2 px-[25px] cursor-pointer border-r text-[14px] font-bold text-white">
                        <div class="flex items-center justify-center">
                        {item.title}
                        <span className="pl-1 text-white"><TbArrowsSort className="text-[20px]"/></span>
                        </div>
                    </th>
                    ))}
                    
                </tr>
            </thead>
            <tbody>
            {rows.map((_,index) => (
                <tr class="list bg-white text-center border-b">
                    <td class="p-4 border-r">

                    </td>
                    <td class="p-2 border-r text-[#377DFF] text-[16px] font-bold">ლაშა კოხრეიძე</td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold">ვებ დეველოპერი</td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold">IT დეპარტამენტი</td>
                    <td class="p-2 border-r text-[#2CD889] text-[16px] font-bold"><span className="flex justify-center"><TodayDate/>    </span>  </td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold">10 000ლ </td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold"><TypeDropdown/></td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold"><StatusDropdown/> </td>
                    <td class=" border-r">
                    <button class=""> < CgSoftwareDownload className="text-gray-500 text-[25px]"/></button>
                    </td>
                    <td className=" flex justify-center items-center py-2 space-x-4">
                        <a href="#" class=""> < MdEdit className="text-[#6F767E] text-xl text-[17px]"/></a>
                        <a href="#" class=""> < ImBin2 className="text-red-600 text-[15px]"/></a>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <div className="flex justify-between pt-[90px] pb-[32px] px-[45px] bg-white">
            
            <DisplayDropdown/>
            <Pagination/>
            
            <button className=" w-[323px] h-[50px] float-right bg-[#377DFF] text-white font-semibold text-[14px]  rounded-[10px]"> მულტი ქმედებები</button>


        </div>

    </div>
        
    )
}

export default Table;