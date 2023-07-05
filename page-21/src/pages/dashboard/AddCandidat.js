import React from "react";
import AddFormTopSide from "./AddFormTopSide";
import AddFormButtomSide from "./AddFormButtomSide";

const AddForm = () => {
    return (
        <div className=" w-[1481] bg-white rounded-[15px]">
                <h1 className=" py-[70px] text-center text-[24px] text-[#333333] font-extrabold">ახალი ვაკანსიის დამატება</h1>    
            <div className=" flex flex-wrap justify-center xl:space-y-[35px]  ">
                <AddFormTopSide/>
                <AddFormButtomSide/>
            </div>
                <div className=" flex justify-center pt-[63px] pb-[70px]">
                    <button className=" w-[400px] h-[70px]  bg-[#0FD89E] text-white font-bold text-[24px]  rounded-[15px]"> დამატება </button>
                </div>
        </div>
    )
}

export default AddForm;