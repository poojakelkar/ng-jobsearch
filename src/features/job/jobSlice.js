import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    position: "",
    company: "",
    jobLocation: "",
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOption: ["interview", "declined", "pending"],
    status: "pending",
    isEditing: false,
    editJobId: "",
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearValues: () => {
            return initialState;
        },
    },
});

export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
