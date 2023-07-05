import React from "react";
import GreenDD from "./GreenDD";
import WhiteDD from "./WhiteDD";
import OrangeInput from "./OrangeInput"
import WhiteInput from "./WhiteInput";

const AddFormTopSide = () => {

    const textStyle = 'text-[14px] text-[#6F767E] font-extrabold'

    return (
        <div className=" flex flex-wrap justify-center space-x-[50px] ">
                <div className=" space-y-[35px]" >
                    <div className=" space-y-2">
                        <p className={textStyle}>სახელი გვარი</p>
                        <OrangeInput />
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>ტელ.ნომერი</p>
                        <OrangeInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>დაბადების თარიღი</p>
                        <WhiteInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>სქესი</p>
                        <WhiteDD/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>ქალაქი</p>
                        <OrangeInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>სასურველი ანაზღაურება</p>
                        <WhiteInput />
                    </div>
                </div>
                <div className=" space-y-[35px]" >
                    <div className=" space-y-2">
                        <p className={textStyle}>ვაკანსია</p>
                        <GreenDD/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>ელ.ფოსტა</p>
                        <OrangeInput />
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>პირადი ნომერი</p>
                        <WhiteInput />
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>ქვეყანა</p>
                        <WhiteInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>მისამართი</p>
                        <WhiteInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>გამოცდილება</p>
                        <WhiteInput/>
                    </div>
                </div>
            </div>
    )
}

export default AddFormTopSide;