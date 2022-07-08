import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormInput } from "./FormInput";
import FormSelect from "./FormSelect";

const SearchContainer = () => {
    console.log("hello world");

    const { isLoading, search, searchStatus, searchType, sort, sortOption } =
        useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    const { jobTypeOptions, statusOption } = useSelector((store) => store.job);

    const handleSearch = (e) => {};
    const handleSubmit = (e) => {
        e.preventValue();
    };
    return (
        <Wrapper>
            <form className='form'>
                <h4>Search</h4>
                <div className='form-center'>
                    <FormInput
                        type='text'
                        name='search'
                        value={search}
                        handleChange={handleSearch}
                    />
                    <FormSelect
                        labelText='status'
                        name='searchStatus'
                        value={searchStatus}
                        handleChange={handleSearch}
                        list={statusOption}
                    />
                </div>
            </form>
        </Wrapper>
    );
};

export default SearchContainer;
