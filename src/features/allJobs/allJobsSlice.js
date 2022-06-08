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
            const resp = await customFetch.get(url, {
                headers: {
                    authorization: `Bearer ${
                        thunkAPI.getState().user.user.payload.user.token
                    }`,
                },
            });
            console.log(resp.data);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("There was an error");
        }
    }
);

const allJobSlice = createSlice({
    name: "allJobs",
    initialState,
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
    },
});

export default allJobSlice.reducer;
