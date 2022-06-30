import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import moment from "moment";
import { deleteJob } from "../features/job/jobSlice";

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
    const date = moment(createdAt).format("MMM DO,YYYY");

    console.log(status);
    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{String(company).charAt(0)}</div>
                <div className='info'>
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    <JobInfo
                        icon={<FaLocationArrow />}
                        text={jobLocation}></JobInfo>
                    <JobInfo icon={<FaCalendarAlt />} text={date}></JobInfo>
                    <JobInfo icon={<FaBriefcase />} text={jobType}></JobInfo>
                    <div className={`status ${status}`}>{status}</div>
                </div>
            </div>
            <footer>
                <div className='actions'>
                    <Link
                        to='/add-jobs'
                        className='btn edit-btn'
                        onClick={() => console.log("edit")}>
                        Edit
                    </Link>
                    <button
                        className='btn delete-btn'
                        onClick={() => disptach(deleteJob(_id))}>
                        Delete
                    </button>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Job;
