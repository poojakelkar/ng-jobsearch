import React from "react";
import { useSelector } from "react-redux";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";

const StatsContainer = () => {
    const { stats } = useSelector((store) => store.allJobs);
    console.log({ stats });
    const defaultStats = [
        {
            title: "Pending Application",
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: "#e9b949",
            bcg: "#fcefc7",
        },
        {
            title: "Interview Schedule",
            count: stats.interview || 0,
            icon: <FaCalendarCheck />,
            color: "#647acb",
            bcg: "#e0e8f9",
        },
        {
            title: "Job Declined",
            count: stats.declined || 0,
            icon: <FaBug />,
            color: "#d66a6a",
            bcg: "#ffeeee",
        },
    ];
    return (
        <Wrapper>
            {defaultStats.map((item, index) => {
                return <StatItem key={index} {...item} />;
            })}
        </Wrapper>
    );
};
export default StatsContainer;
