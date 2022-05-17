import React from "react";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.png";
import Wrapper from "../assets/wrappers/LandingCss";

const LandingPage = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='logo' className='logo' />
                <h1>JOBSEARCH</h1>
            </nav>
            <div className='container pages'>
                <div className='info'>
                    <h1>
                        Job <span>Searching</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus nec sagittis ipsum, a dignissim erat. Cras nec
                        dui aliquam, mattis dui et, dictum nisi.Maecenas feugiat
                        sodales leo, at imperdiet sapien sagittis at.
                    </p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt='main-img' className='img main-img'></img>
            </div>
        </Wrapper>
    );
};

export default LandingPage;
