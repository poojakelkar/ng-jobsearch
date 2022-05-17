import React from "react";
import Wrapper from "../assets/wrappers/LandingCss";
import errorImg from "../assets/images/error.svg";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={errorImg} alt='error' className='img'></img>
                <h2 className='title'>Ohh! Page Not Found</h2>
                <Link to='/landing'>
                    <h3>Back to Home</h3>
                </Link>
            </div>
        </Wrapper>
    );
};

export default Error;
