import React from "react";


const AddFormButtonSide = () => {

    const inputStyle ="w-[452px]  h-[53px] bg-white rounded-[15px]"
    return (
        <div className=" w-[1200px] bg-[#F5F6FA] rounded-[34px] ">
            <div className=" flex 2xl:flex-nowrap xl:flex-wrap md:flex-wrap sm:flex-wrap">

                <div className=" flex flex-col 2xl:pl-[103px] 2xl:pb-[95px]">
                    <h5 className="pt-[35px] text-[14px] text-[#6F767E] font-extrabold">დაამატეთ კანდიდატის სასურველი სტატუსი</h5>
                    <h5 className="pt-[51px] text-[14px] text-[#6F767E] font-extrabold">კანდიდატის სტატუსი</h5>
                    <div className=" space-y-[17px] pt-2">
                        <input className={inputStyle}/>     
                        <input className={inputStyle}/>     
                        <div className=" pt-[49px] pl-[39px] space-y-[5px] w-[452px] h-[165px] rounded-[15px] bg-white">
                            <h5 className=" text-[14px] text-[#6F767E] font-extrabold">კანდიდატის სტატუსი</h5>
                            <div className=" w-[350px] border-b-black border-[2px] "></div>
                            <h5 className=" text-[#377DFF] font-bold text-[10px]">სტატუსი ვერ მოიძებნა</h5>
                        </div>
                    </div>
                </div>
                <div className=" 2xl:pr-[161px] 2xl:pt-[80px] lg:pr-5 lg:pt-5 space-y-[25px]">
                    <input className={inputStyle}/>     
                    <input className={inputStyle}/>     
                </div>
            </div>
        </div>
    )
}

export default AddFormButtonSide;