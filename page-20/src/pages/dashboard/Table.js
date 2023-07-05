import React from "react";
import {ImBin2} from "react-icons/im"
import {MdEdit} from "react-icons/md"
import DisplayDropdown from "./DisplayDropdown";
import Pagination from "./Pagination";
import {TbArrowsSort} from "react-icons/tb";
import TodayDate from './TodayDate'
import TypeDropdown from './TypeDropdown'
import StatusDropdown from './StatusDropdown'

const Table = () => {
    const rows = Array.from({ length: 10 });
    const currentDate = new Date().toLocaleDateString();

    const rows1 = [
        {items:[
                    {title:"დასახელება"},
                    {title:"ქალაქი"},
                    {title:"პოზიცია"},
                    {title:"თარიღი დან-მდე"},
                    {title:"ანაზღაურება"},
                    {title:"აპლიკანტები"},
                    {title:"ტიპი"},
                    {title:"სტატუსი"},
                    {title:"ქმედებები"},
                ]
        }
    ]

    return (
        <div class="table w-full ">
        <table class="w-full border">
            <thead className="">
                <tr class="bg-[#377DFF] border-b">
                    <th class=" mb-2">

                    </th>
                    {rows1[0].items.map((item,rowIndex) => (

                        <th key={rowIndex} class="p-2 px-[25px] cursor-pointer border-r text-[14px] font-bold text-white">
                            <div class="flex items-center justify-center">
                                {item.title}
                                <span className="pl-1 text-[#B2B2B2]"><TbArrowsSort className="text-[20px]"/></span>
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {rows.map((_,index) => (
                <tr class="list bg-white text-center border-b ">
                    <td class="p-4 border-r">
                        <input type="checkbox"/>
                    </td>
                    <td class="p-2 border-r text-[#377DFF] text-[16px] font-bold">ვებ დეველოპერი</td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold">ქალაქი</td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold">ვებ დეველოპერი</td>
                    <td class="p-2 border-r text-[#2CD889] text-[16px] font-bold"><span className="flex justify-center"><TodayDate/>    </span>  </td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold">10 000ლ </td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold">10 </td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold"><TypeDropdown/></td>
                    <td class="p-2 border-r text-[#333333] text-[16px] font-bold"><StatusDropdown/> </td>
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