import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/Job";

const Job = ({
    _id,
    position,
    company,
    jobLocation,
    jobType,
    createdAt,
    status,
}) => {
    const disptach = useDispatch();
    console.log(company);
    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{String(company).charAt(0)}</div>
                <div className='info'>
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
        </Wrapper>
    );
};

export default Job;
