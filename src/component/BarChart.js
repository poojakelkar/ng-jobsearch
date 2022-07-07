import React from "react";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Bar,
} from "recharts";

const BarChart = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data} margin={{ top: 50 }}>
                <CartesianGrid strokeDasharray='10 10' />
                <XAxis dataKey='date'></XAxis>
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey='count' fill='#bef8fd' barSize={75} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChart;
