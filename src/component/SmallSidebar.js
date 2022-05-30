import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { toggleSidebar } from "../features/user/userSlice";
import links from "../utils/links";
import { Logo } from "./Logo";
import NavbarLinks from "./NavbarLinks";

export const SmallSidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);
    console.log(isSidebarOpen, "bye");
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleSidebar());
    };

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
                    <button className='close-btn' onClick={toggle}>
                        <FaTimes />
                    </button>
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
                    ;{/* <NavbarLinks toggleSidebar={toggle} /> */}
                </div>
            </div>
        </Wrapper>
    );
};
