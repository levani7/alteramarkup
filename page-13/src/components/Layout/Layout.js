import React, {useRef} from 'react';
import TheSidebar from "../TheSidebar/TheSidebar";
import TheSidebarOverlay from "../TheSidebar/TheSidebarOverlay";
import TheHeader from "../TheHeader/TheHeader";
import useEvent from "../../hooks/useEvent";

const Layout = ({ children }) => {
    const contentWrapperRef = useRef();
    const popoverRef = useRef();
    const toastRef = useRef();

    let isScrollingEnabled = true;

    useEvent('wheel', handleScrolling, true, () => contentWrapperRef.current);

    function showPopover(title, description, target, offset) {
        popoverRef.current.show(title, description, target, offset);
    }

    function showToast(message) {
        toastRef.current.show(message);
    }

    function toggleScrolling(isEnabled) {
        isScrollingEnabled = isEnabled;
    }

    function handleScrolling(event) {
        if (isScrollingEnabled) return;

        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <div className="flex grow overflow-auto ">
            <TheSidebar showPopover={showPopover}/>
            <TheSidebarOverlay/>
            <div className="flex-1 overflow-auto p-4 pl-[52px]" ref={contentWrapperRef}>
                <TheHeader/>
                <main>{children}</main>
            </div>
        </div>

    );
};

export default Layout;
