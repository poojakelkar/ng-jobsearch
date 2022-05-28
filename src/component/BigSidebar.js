import React from "react";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSidebar";
import { Logo } from "./Logo";
import NavbarLinks from "./NavbarLinks";

export const BigSidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);

    return (
        <Wrapper>
            <div
                className={
                    isSidebarOpen
                        ? "sidebar-container show-sidebar"
                        : "sidebar-container"
                }>
                <div className='content'>
                    <header>
                        <Logo />
                    </header>
                    <NavbarLinks />
                </div>
            </div>
        </Wrapper>
    );
};
