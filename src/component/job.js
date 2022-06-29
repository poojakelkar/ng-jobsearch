import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/Job";
import { Link } from "react-router-dom";

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
                    <h4>more content</h4>
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
                        onClick={() => console.log("delete")}>
                        Delete
                    </button>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Job;
