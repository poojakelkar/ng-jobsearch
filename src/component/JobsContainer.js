import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import Job from "./Job";
import Loading from "./Loading";
import PageContainer from "./PageContainer";
const JobsContainer = () => {
    const {
        jobs,
        isLoading,
        page,
        totalJobs,
        numOfPages,
        searchStatus,
        searchType,
        sort,
        search,
    } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();
    console.log(numOfPages);

    useEffect(() => {
        dispatch(getAllJobs());
    }, [page, search, searchStatus, searchType, sort]);

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
            <h5>
                {totalJobs} Job{jobs.length > 1 && "s"} found
            </h5>
            <div className='jobs'>
                {jobs.map((job) => {
                    console.log(job);
                    return <Job key={job._id} {...job}></Job>;
                })}
            </div>
            {numOfPages && <PageContainer />}
        </Wrapper>
    );
};

export default JobsContainer;
