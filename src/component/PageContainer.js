import React from "react";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

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
            {pages.map((pageNumber) => {
                return (
                    <button
                        type='button'
                        key={pageNumber}
                        onClick={() => console.log("changed Page")}>
                        {pageNumber}
                    </button>
                );
            })}
            <button className='prev-btn' onClick={nextPage}>
                <HiChevronDoubleRight />
                Next
            </button>
        </Wrapper>
    );
};

export default PageContainer;
