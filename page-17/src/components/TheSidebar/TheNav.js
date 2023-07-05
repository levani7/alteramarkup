import { MIN_DESKTOP_WIDTH } from '../../hooks/utils';
import logo from '../../assets/images/georgiaflag.png'
import dashboard from '../../assets/images/dashboard.svg'
import settings from '../../assets/images/settings.svg'
import companies from '../../assets/images/companies.svg'
import department from '../../assets/images/departments.svg'
import positions from '../../assets/images/positions.svg'
import vacancies from '../../assets/images/vacancies.svg'
import candidates from '../../assets/images/candidates.svg'
import reports from '../../assets/images/reports.svg'
import c from '../../assets/images/candidates.svg'


import {
    HomeIcon,
    MagnifyingGlassIcon,
    ViewColumnsIcon,
    PlusCircleIcon,
    HeartIcon,
    CalendarIcon,
} from '@heroicons/react/24/outline';
import NavItem from './NavItem';

const activeNavItemClasses =
    'flex items-center text-white bg-[#377DFF] mx-2 px-4 py-3 rounded';
const navItemClasses =
    'flex items-center hover:text-white hover:bg-[#377DFF] mx-2 px-4 py-3 rounded duration-300';
const offNavItemClass =
    'flex items-center text-black px-2 py-4 rounded duration-300 pointer-events-none';

function TheNav({ showPopover }) {
    const navItems = [
        {
            label: 'მენიუ',
            classes: offNavItemClass,
        
        },
        {
            label: 'დეშბორდი',
            classes: navItemClasses,
            img: dashboard,
        },
        {
            label: 'რეკრუტმენტი',
            classes: offNavItemClass,
        },
        {
            label: 'პარამეტრები',
            classes: navItemClasses,
            img: settings,
        },
        {
            label: 'კომპანიები',
            classes: navItemClasses,
            img: companies,
        },
        {
            label: 'დეპარტამენტები',
            classes: navItemClasses,
            img: department,
        },
        {
            label: 'პოზიციები',
            classes: activeNavItemClasses,
            img: positions,
        },
        {
            label: 'ვაკანსიები',
            classes: navItemClasses,
            img: vacancies,
        },
        {
            label: 'კანდიდატები',
            classes: navItemClasses,
            img: candidates,
        },
        {
            label: 'კალენდარი',
            classes: navItemClasses,
            img: candidates,
        },
        {
            label: 'რეპორტები',
            classes: navItemClasses,
            img: reports,
        },
    ];


    return (
        <nav>
            {navItems.map(({ classes, icon, label, action, img }) => (
                <NavItem key={label} img={img} classes={classes} icon={icon} onClick={action}>
                    {label}
                </NavItem>
            ))}

        </nav>
    );
}

export default TheNav;
