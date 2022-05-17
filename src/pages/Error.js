import React from "react";
import Wrapper from "../assets/wrappers/LandingCss";
import errorImg from "../assets/images/error.svg";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div className=''>
                <img src={errorImg} alt='error' className='img'></img>
                <h2>Ohh! Page Not Fount</h2>
                <Link to='/landing'>
                    <h3>Back to Home</h3>
                </Link>
            </div>
        </Wrapper>
    );
};

export default Error;
