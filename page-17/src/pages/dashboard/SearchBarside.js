import React from "react";

const SearchBarside = () => {
    return (
        
            <div class="flex items-center justify-center">
                <input type="search" id="search-dropdown" class=" p-2.5  text-sm text-gray-900 bg-white w-[450px] h-[44px] rounded-l-xl focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "/>
                <button type="submit" class=" h-[45px] p-2.5 text-sm font-medium text-white bg-[#377DFF] rounded-r-lg hover:bg-blue-800  ">
                    <svg aria-hidden="true" class="w-8 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                </button>
            </div>
       
    )
}

export default SearchBarside;