import React from "react";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.png";
import styled from "styled-components";

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

const Wrapper = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: var(--max-width);
        height: var(--nav-height);
        margin: auto;
        display: flex;
        align-items: center;
        h1 {
            margin-left: 1rem;
            color: var(--primary-700);
        }
    }
    .pages {
        min-height: calc(100vh - var(--nav-height));
        display: grid;
        align-items: center;
    }
    h1 {
        font-weight: 800;
        span {
            color: var(--primary-700);
        }
    }
    p {
        color: var(--grey-600);
        font-size: 20px;
    }
    .main-img {
        display: none;
    }
    @media (min-width: 992px) {
        .pages {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`;

export default LandingPage;
