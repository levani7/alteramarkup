import {
    Bars3Icon,
} from '@heroicons/react/24/outline'; 
import SearchImput from "./SearchImput"
import Dropdown from './Dropdown';
import ProfileStage from './ProfileStage';

function TheHeader() {
    return (
        <div className=''>

            <header className=" pl-[380px] ">
                <div className=" flex lg:flex-wrap md:flex-wrap sm:flex-wrap justify-between item-center py-3  px-3 max-w-[1149px] h-[70px] bg-white rounded-[50px] ">
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
