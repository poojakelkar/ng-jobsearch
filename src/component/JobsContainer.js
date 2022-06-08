import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import Job from "./Job";
import Loading from "./Loading";
const JobsContainer = () => {
    const { jobs, isLoading } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No Jobs found</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>Jobs Information</h5>
            <div className='jobs'>
                {jobs.map((job) => {
                    console.log(job);
                    return <Job key={job._id} {...jobs}></Job>;
                })}
            </div>
        </Wrapper>
    );
};

export default JobsContainer;
