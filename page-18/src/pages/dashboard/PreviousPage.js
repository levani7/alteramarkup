import React from "react";
import {IoIosArrowBack} from "react-icons/io"

const PreviousPage = () => {
    return (
        <div className=" flex items-center text-center">
            <a href="#" className=" text-[40px]"><IoIosArrowBack /></a>    
            <a href="#" className=' text-[#333333] text-[25px] pb-2 font-extrabold'>პოზიციები</a>
        </div>
    )
}

export default PreviousPage;