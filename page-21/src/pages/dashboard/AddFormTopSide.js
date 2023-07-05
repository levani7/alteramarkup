import React from "react";
import WhiteDD from "./WhiteDD";
import GreenInput from "./GreenInput"
import WhiteInput from "./WhiteInput";

const AddFormTopSide = () => {

    const textStyle = 'text-[14px] text-[#6F767E] font-extrabold'

    return (
        <div className=" flex flex-wrap justify-center 2xl:space-x-[50px] lg:space-x-0  ">
                <div className=" space-y-[35px]" >
                    <div className=" space-y-2">
                        <p className={textStyle}>კომპანიის დასახელება</p>
                        <WhiteInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>პოზიცია</p>
                        <WhiteDD/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>დაწყების თარიღი</p>
                        <WhiteInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>განაკვეთი</p>
                        <WhiteDD/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>ანაზღაურება</p>
                        <GreenInput/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>ლოკაცია</p>
                        <WhiteInput />
                    </div>
                </div>
                <div className=" space-y-[35px]" >
                    <div className=" space-y-2">
                        <p className={textStyle}>დეპარტამენტი</p>
                        <WhiteDD/>
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>პასუხისმგებელი რეკრუტერი</p>
                        <WhiteDD />
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>დასრულების თარიღი</p>
                        <WhiteInput />
                    </div>
                    <div className=" space-y-2">
                        <p className={textStyle}>გრაფიკი</p>
                        <WhiteDD/>
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