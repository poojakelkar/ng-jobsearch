import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../../assets/wrappers/DashboardInputFormPage";
import { FormInput } from "../../component/FormInput";
import FormSelect from "../../component/FormSelect";
import {
    clearValues,
    createJob,
    handleChange,
    editJob,
} from "../../features/job/jobSlice";

export const AddJobs = () => {
    const {
        isLoading,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOption,
        isEditing,
        editJobId,
    } = useSelector((store) => store.job);
    const { user } = useSelector((store) => store.user);

    useEffect(() => {
        if (!isEditing) {
            dispatch(
                handleChange({
                    name: "jobLocation",
                    value: user.payload.user.location,
                })
            );
        }
    }, []);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!position || !company || !jobLocation) {
            toast.error("Please fill all the fileds");
            return;
        }
        if (isEditing) {
            dispatch(
                editJob({
                    jobId: editJobId,
                    job: { position, company, jobLocation, jobType, status },
                })
            );
            return;
        }
        dispatch(
            createJob({ position, company, jobLocation, jobType, status })
        );
    };

    const handleJobInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
    };

    return (
        <Wrapper>
            <form className='form'>
                <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
                <div className='form-center'>
                    <FormInput
                        type='text'
                        name='position'
                        value={position}
                        handleChange={handleJobInputs}></FormInput>
                    <FormInput
                        type='text'
                        name='company'
                        value={company}
                        handleChange={handleJobInputs}></FormInput>
                    <FormInput
                        type='text'
                        name='jobLocation'
                        value={jobLocation}
                        handleChange={handleJobInputs}></FormInput>

                    <FormSelect
                        name='status'
                        value={status}
                        handleChange={handleJobInputs}
                        list={statusOption}></FormSelect>

                    <FormSelect
                        name='jobType'
                        labelText='job type'
                        value={jobType}
                        handleChange={handleJobInputs}
                        list={jobTypeOptions}></FormSelect>

                    <div className='btn-container'>
                        <button
                            type='button'
                            className='btn btn-block clear-btn'
                            onClick={() => dispatch(clearValues())}>
                            Clear Value
                        </button>
                    </div>
                    <div className='btn-container'>
                        <button
                            type='submit'
                            className='btn btn-block submit-btn'
                            onClick={handleSubmit}
                            disabled={isLoading}>
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};
