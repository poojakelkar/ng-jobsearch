import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getAllJobsThunk, showStatsThunk } from "./allJobsThunk";

const initialFilterState = {
    search: "",
    searchStatus: "",
    searchType: "",
    sort: "latest",
    sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
    isLoading: true,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFilterState,
};

export const getAllJobs = createAsyncThunk(
    "allJobs/getAllJobs",
    getAllJobsThunk
);

export const showStats = createAsyncThunk("allJobs/showStats", showStatsThunk);

const allJobSlice = createSlice({
    name: "allJobs",
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        handleChange: (state, { payload: { name, value } }) => {
            state.page = 1;
            state[name] = value;
        },
        clearFilters: (state) => {
            return { ...state, ...initialFilterState };
        },
        changePages: (state, { payload }) => {
            state.page = payload;
        },
        clearAllJobsFilter: (state) => initialState,
    },
    extraReducers: {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
            state.numOfPages = payload.numOfPages;
            state.totalJobs = payload.totalJobs;
        },
        [getAllJobs.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [showStats.pending]: (state) => {
            state.isLoading = true;
        },
        [showStats.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.stats = payload.defaultStats;
            state.monthlyApplications = payload.monthlyApplications;
        },
        [showStats.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export const {
    showLoading,
    hideLoading,
    handleChange,
    clearFilters,
    changePages,
} = allJobSlice.actions;
export default allJobSlice.reducer;
