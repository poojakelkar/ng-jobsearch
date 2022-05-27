import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "./Logo";

export const Navbar = () => {
    const { user } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <div className='nav-center'>
                <button
                    type='button'
                    className='toggle-btn'
                    onClick={() => console.log("toggle sidebar")}>
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
                    onClick={() => console.log("toggle logout")}>
                    <FaUserCircle />
                    {user?.name}
                    <FaCaretDown />
                </button>
                <div className='dropdown show-dropdown'>
                    <button
                        type='button'
                        className='dropdown-btn'
                        onClick={() => console.log("toggle dropdown ")}>
                        Logout
                    </button>
                </div>
            </div>
        </Wrapper>
    );
};
