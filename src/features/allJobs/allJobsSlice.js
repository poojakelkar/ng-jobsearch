import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

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
    async (_, thunkAPI) => {
        let url = `/jobs`;
        try {
            const resp = await customFetch.get(url);
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("There was an error");
        }
    }
);

export const showStats = createAsyncThunk(
    "allJobs/showStats",
    async (_, thunkAPI) => {
        try {
            const resp = await customFetch.get("jobs/stats");
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.resp.data.msg);
        }
    }
);

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
    },
    extraReducers: {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getAllJobs.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.jobs = payload.jobs;
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

export const { showLoading, hideLoading } = allJobSlice.actions;
export default allJobSlice.reducer;
