import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";
import { FormInput } from "./FormInput";
import FormSelect from "./FormSelect";

const SearchContainer = () => {
    console.log("hello world");

    const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
        useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    const { jobTypeOptions, statusOption } = useSelector((store) => store.job);

    const handleSearch = (e) => {
        if (isLoading) return;
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventValue();
        dispatch(clearFilters());
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
                        list={["all", ...statusOption]}
                    />
                    <FormSelect
                        labelText='Type'
                        name='searchType'
                        value={searchType}
                        handleChange={handleSearch}
                        list={["all", ...jobTypeOptions]}
                    />
                    <FormSelect
                        name='sort'
                        value={sort}
                        handleChange={handleSearch}
                        list={sortOptions}
                    />
                    <button
                        className='btn btn-block btn-danger'
                        disabled={isLoading}
                        onClick={handleSubmit}>
                        Clear Filter
                    </button>
                </div>
            </form>
        </Wrapper>
    );
};

export default SearchContainer;
