import React from "react";

const AddForm = () => {
    return (
        <div className=" flex justify-center  w-[968px] h-[580px] bg-white rounded-[15px]">
            <div className=" space-y-[32px]">
                <h1 className=" py-[70px] pl-5 text-[24px] text-[#333333] font-extrabold">ახალი კომპანიის დამატება</h1>
                
                <div className=" space-y-2">
                    <h5 className=" text-[14px] text-[#6F767E] font-bold">კომპანიის დასახელება</h5>
                    <input className=" w-[452px]  h-[53px] bg-[#FAFBFD] rounded-[15px]" />
                </div>
                <div className=" space-y-2">
                    <h5 className=" text-[14px] text-[#6F767E] font-bold">საინდეთიფიკაციო</h5>
                    <input className=" w-[452px]  h-[53px] bg-[#FAFBFD] rounded-[15px]" />
                </div>
                <div>
                    <button className=" w-[400px] h-[70px]  bg-[#0FD89E] text-white font-bold text-[24px]  rounded-[15px]"> დამატება </button>
                </div>
            </div>
        </div>
    )
}

export default AddForm;