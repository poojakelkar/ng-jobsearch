import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "./Logo";
import { logoutuser, toggleSidebar } from "../features/user/userSlice";

export const Navbar = () => {
    const { user } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [logoutbtn, setLogoutbtn] = useState(false);

    const togglebtn = () => {
        dispatch(toggleSidebar());
    };
    return (
        <Wrapper>
            <div className='nav-center'>
                <button
                    type='button'
                    className='toggle-btn'
                    onClick={togglebtn}>
                    <FaAlignLeft />
                </button>
            </div>
            <div className='logo'>
                <Logo />
                <h1 className='logo-text'>Dashboard</h1>
            </div>
            <div className='btn-container'>
                <button
                    type='button'
                    className='btn'
                    onClick={() => setLogoutbtn(!logoutbtn)}>
                    <FaUserCircle />
                    {user?.name}
                    <FaCaretDown />
                </button>
                <div
                    className={
                        logoutbtn ? "dropdown show-dropdown" : "dropdown"
                    }>
                    <button
                        type='button'
                        className='dropdown-btn'
                        onClick={() => dispatch(() => logoutuser())}>
                        Logout
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};
