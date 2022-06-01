import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    position: "",
    company: "",
    jobLocation: "",
    jobTypeOption: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOption: ["interview", "declined", "pending"],
    status: "pending",
    isEditing: false,
    editJobId: "",
};

const jobSlice = createSlice({
    name: "job",
    initialState,
});

export default jobSlice.reducer;
