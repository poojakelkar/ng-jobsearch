import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/BigSidebar";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";
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
                    <div className='nav-links'>
                        {links.map((link) => {
                            const { text, id, path, icon } = link;
                            return (
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active"
                                            : "nav-link"
                                    }
                                    key={id}
                                    onClick={toggleSidebar}>
                                    <span className='icon'>{icon}</span>
                                    {text}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
