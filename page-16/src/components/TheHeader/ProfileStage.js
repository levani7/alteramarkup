import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import profilepicture from "../../assets/images/profilepicture.svg";
import profilesetting from "../../assets/images/profilesetting.svg"


const ProfileStage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  
    const handleButtonClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleButtonClick1 = () => {
      setIsDropdownOpen1(!isDropdownOpen1);
    };
  
    
    return (
        <div className="justify-around flex space-x-4 px-7  h-[50px] bg-[#377DFF] rounded-full">
        <a href="" className="text-[45px] text-white">
          <IoIosNotificationsOutline/>
        </a>
        <a href="">
          <img className="w-[40px] mt-1" src={profilepicture} alt="" />
        </a>
        <p className="text-white font-semibold mt-[10px]">ლაშა კოხრეიძე</p>
        <button
          type="button"
          className=" flex  items-center"
          id="menu-button1"
          aria-expanded={isDropdownOpen1}
          aria-haspopup="true"
          onClick={handleButtonClick1}
        >
          <img href="#" className="w-[30px]" src={profilesetting} alt="" />
        </button>

        {isDropdownOpen1 && (
          <div className=" absolute top-[75px] right-[190px]  bg-white border  border-gray-200">
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-blue-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-blue-300"
            >
              content
            </a>
          </div>
        )}
      </div>

    )
}

export default ProfileStage