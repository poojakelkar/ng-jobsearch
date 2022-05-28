import { NavLink } from "react-router-dom";
import links from "../utils/links";

import React from "react";

const NavbarLinks = ({ toggleSidebar }) => {
    <div className='nav-links'>
        {links.map((link) => {
            const { text, id, path, icon } = link;
            return (
                <NavLink
                    to={path}
                    className={({ isActive }) => {
                        return isActive ? "nav-links active" : "nav-links";
                    }}
                    key={id}
                    onClick={toggleSidebar}>
                    <span className='icon'>{icon}</span>
                    {text}
                </NavLink>
            );
        })}
    </div>;
};

export default NavbarLinks;
