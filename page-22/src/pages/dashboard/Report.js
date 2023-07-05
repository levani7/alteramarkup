import React from "react";

const Report = () => {
    const divCount = 24

    return (
        <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10">
            {Array.from({ length: divCount}). map((_,index) => (

                <div
                key={index}
                className=" w-[458px] h-[76px] bg-white rounded-[15px]">
                    <p className=" text-center pt-[25px] text-[#B3B3B4] text-[16px]">რეპორტი</p>
                </div>
            ))}
        </div>
    )
}

export default Report;