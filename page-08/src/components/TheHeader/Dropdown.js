import React, { useState } from "react";

import georgiaflag from '../../assets/images/georgiaflag.png'
import dropdownpart from '../../assets/images/dropdownpart.svg'


const Dropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

    const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

    const handleButtonClick1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    };

    return (
        <div className="dropdown-container relative">
        <button
          type="button"
          className="space-x-1 text-[#6F767E] font-bold text-[19px] flex justify-center gap-x-1.5 bg-[#FAFBFD] px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-full"
          id="menu-button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={handleButtonClick}
        >
          <img className="mr-1" src={georgiaflag} alt="" />
          <span>GEO</span>
          <img className="mt-[10px] " src={dropdownpart} alt="" />
        </button>
        {isDropdownOpen && (
          <div className="space-y-4 ml-4 dropdown-content absolute flex flex-col left-0 bg-white border border-gray-200">
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
          </div>
        )}
      </div>

    )
}

export default Dropdown