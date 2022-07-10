import React from "react";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changePages } from "../features/allJobs/allJobsSlice";

const PageContainer = () => {
    const { numOfPages, page } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    });
    const nextPage = () => {
        console.log("next page");
    };
    const prevPage = () => {
        console.log("prev page");
    };
    return (
        <Wrapper>
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft />
                Prev
            </button>
            <div className='btn-container'>
                {pages.map((pageNumber) => {
                    return (
                        <button
                            type='button'
                            key={pageNumber}
                            className={
                                pageNumber === page ? "pageBtn active" : "page"
                            }
                            onClick={() => dispatch(changePages(pageNumber))}>
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
            <button className='prev-btn' onClick={nextPage}>
                <HiChevronDoubleRight />
                Next
            </button>
        </Wrapper>
    );
};

export default PageContainer;
