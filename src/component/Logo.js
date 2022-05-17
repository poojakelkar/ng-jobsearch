import logo from "../assets/images/logo.png";

import React from "react";

export const Logo = () => {
    return (
        <nav>
            <img src={logo} alt='logo' className='logo' />
            <h1>JOBSEARCH</h1>
        </nav>
    );
};
