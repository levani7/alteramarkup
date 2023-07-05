import {
    Bars3Icon,
} from '@heroicons/react/24/outline'; 
import SearchImput from "./SearchImput"
import Dropdown from './Dropdown';
import ProfileStage from './ProfileStage';

function TheHeader() {
    return (
        <div className=''>

            <header className=" xl:pl-[380px] md:p-0">
                <div className=" flex flex-wrap justify-between item-center py-3  px-3 w-full  bg-white rounded-[50px] ">
                    <SearchImput />
                    <Dropdown />
                    <ProfileStage />
                </div>
                <a
                    href="sidebar"
                    className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden"
                    >
                    <Bars3Icon className="h-6 w-6" />
                </a>
            </header>
        </div>
    );
}

export default TheHeader;
