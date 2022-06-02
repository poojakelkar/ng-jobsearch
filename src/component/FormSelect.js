import React from "react";

const FormSelect = ({ labelText, name, value, handleChange, list }) => {
    console.log(list);
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <select
                className='form-select'
                name={name}
                id={name}
                value={value}
                onChange={handleChange}>
                {list?.length > 0 &&
                    list.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
};

export default FormSelect;
