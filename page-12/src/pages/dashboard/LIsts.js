import React from "react";

const Lists = () => {

    const styleOn = 'flex text-center justify-center items-center w-[276px] h-[50px] bg-[#377DFF] rounded-[15px] text-white text-[16px] font-bold hover:cursor-pointer'
    const stylHover = 'flex text-center justify-center items-center w-[276px] h-[50px] bg-white rounded-[15px] text-[#C4C4C4] text-[16px] font-bold hover:text-white hover:bg-[#377DFF] hover:cursor-pointer'

    return (
        <div className="flex flex-wrap justify-between ">
            <div className={styleOn}>
                <a href="#" className=" ">კომპანიები</a>
            </div>
            <div className={stylHover}>
                <a href="#" className=" ">დეპარტამენტები</a>
            </div>
            <div className={stylHover}>
                <a href="#" className=" ">პოზიციები</a>
            </div>
            <div className={stylHover}>
                <a href="#" className=" ">ვაკანსიები</a>
            </div>
            <div className={stylHover}>
                <a href="#" className=" ">კანდიდატები</a>
            </div>
        </div>
    )
}

export default Lists;   