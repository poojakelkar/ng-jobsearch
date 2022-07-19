import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/LandingCss";
import { FormInput, Logo } from "../component";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
    name: "",
    email: "",
    password: "",
    isPerson: true,
};
const Register = () => {
    const [value, setValue] = useState(initialState);

    const { user, isLoading } = useSelector((store) => store.user);
    console.log({ user, isLoading });
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(`${name},${value}`);
        setValue((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isPerson } = value;
        if (!email || !password || (!isPerson && !name)) {
            toast.error("Please fill all Fileds.");
            return;
        }
        if (isPerson) {
            dispatch(loginUser({ email: email, password: password }));
            return;
        }
        dispatch(registerUser({ name, email, password }));
    };

    const togglePerson = () => {
        setValue({ ...value, isPerson: !value.isPerson });
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }, [user]);
    return (
        <>
            <p>
                Admin: email: pooja@gmail.com, password: secret,<br></br>
                User : email: testUser@test.com, password: secret
            </p>
            <Wrapper className='full-page'>
                <form className='form' onSubmit={handleSubmit}>
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
                    <button
                        type='submit'
                        className='btn btn-block'
                        disabled={isLoading}>
                        {isLoading ? "Loading..." : "Submit"}
                    </button>
                    <button
                        type='button'
                        className='btn btn-block btn-hipster'
                        disabled={isLoading}
                        onClick={() =>
                            dispatch(
                                loginUser({
                                    email: "testUser@test.com",
                                    password: "secret",
                                })
                            )
                        }>
                        {isLoading ? "Loading.." : "Demo App"}
                    </button>

                    <p className='title'>
                        {value.isPerson
                            ? "Not account yet? "
                            : "Already Account? "}
                        <button
                            type='button'
                            className='btn'
                            onClick={togglePerson}>
                            {value.isPerson ? "Register" : "Login"}
                        </button>
                    </p>
                </form>
            </Wrapper>
        </>
    );
};

export default Register;
