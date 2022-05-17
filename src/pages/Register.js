import React, { useState } from "react";
import Wrapper from "../assets/wrappers/LandingCss";
import { FormInput, Logo } from "../component";

const initialState = {
    name: "",
    email: "",
    password: "",
    isPerson: true,
};
const Register = () => {
    const [value, setValue] = useState(initialState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(`${name},${value}`);
        setValue({ ...value, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isPerson } = value;
        if (!email || !password) {
            console.log("please");
        }
    };

    const togglePerson = () => {
        setValue({ ...value, isPerson: !value.isPerson });
    };
    return (
        <Wrapper className='full-page'>
            <form className='form' onClick={handleSubmit}>
                <Logo />
                <h1 className='title'>
                    {value.isPerson ? "Login" : "Register"}
                </h1>
                {!value.isPerson && (
                    <FormInput
                        type='text'
                        handleChange={handleChange}
                        name='name'
                        value={value.name}
                    />
                )}
                {/* email  */}
                <FormInput
                    type='email'
                    handleChange={handleChange}
                    name='email'
                    value={value.email}
                />
                {/* password */}
                <FormInput
                    type='password'
                    handleChange={handleChange}
                    name='password'
                    value={value.password}
                />
                <button type='button' className='btn btn-block'>
                    Submit
                </button>
                <p className='title'>
                    {value.isPerson ? "Not account yet? " : "Already Account? "}
                    <button
                        type='button'
                        className='btn'
                        onClick={togglePerson}>
                        {value.isPerson ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;
