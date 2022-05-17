import React from "react";

export const FormInput = ({ value, name, type, labelText, handleChange }) => {
    return (
        <div className='form-row'>
            <label className='form-label' htmlFor={name}>
                {name}
            </label>
            <input
                className='form-input'
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};
