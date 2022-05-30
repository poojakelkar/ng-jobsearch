import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";
import Wrapper from "../../assets/wrappers/DashboardInputFormPage";
import { FormInput } from "../../component/FormInput";

export const Profile = () => {
    const { isLoading, user } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        name: user.payload.user.name || "",
        email: user.payload.user.email || "",
        lastName: user.payload.user.lastName || "",
        location: user.payload.user.location || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, lastName, location } = userData;
        if (!name || !email || !lastName || !location) {
            toast.error("Please fill all Fields");
            return;
        }
        dispatch(updateUser(userData));
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <Wrapper>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Profile</h3>
                <div className='form-center'>
                    <FormInput
                        type='text'
                        name='name'
                        value={userData.name}
                        handleChange={handleChange}></FormInput>
                    <FormInput
                        type='text'
                        name='lastName'
                        value={userData.lastName}
                        handleChange={handleChange}></FormInput>
                    <FormInput
                        type='text'
                        name='email'
                        value={userData.email}
                        handleChange={handleChange}></FormInput>
                    <FormInput
                        type='text'
                        name='location'
                        value={userData.location}
                        handleChange={handleChange}></FormInput>
                    <button
                        className='btn btn-block'
                        type='submit'
                        disabled={isLoading}>
                        {isLoading ? "Please Wait" : "submit Changes"}
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};
