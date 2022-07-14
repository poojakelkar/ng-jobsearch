import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartsContainer, StatsContainer } from "../../component";
import { showStats } from "../../features/allJobs/allJobsSlice";

export const Stats = () => {
    const { isLoading, monthlyApplications } = useSelector(
        (store) => store.allJobs
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showStats());
    }, []);
    return (
        <>
            <StatsContainer />
            {monthlyApplications?.length > 0 && <ChartsContainer />}
        </>
    );
};
