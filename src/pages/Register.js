import React, { useState } from "react";
import Wrapper from "../assets/wrappers/LandingCss";
import { Logo } from "../component";

const initialState = {
    name: "",
    email: "",
    password: "",
    isPerson: true,
};
const Register = () => {
    const [value, setValue] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={handleSubmit}>
                <Logo />
                <h1>Login</h1>
                <div className='form-row'>
                    <label className='form-label' htmlFor='name'>
                        name
                    </label>
                    <input
                        className='form-input'
                        type='text'
                        name='name'
                        value={value.name}
                        onChange={handleChange}
                    />

                    <button type='button' className='btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

export default Register;
