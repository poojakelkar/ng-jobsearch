import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { logoutuser } from "../user/userSlice";
import { getUser } from "../../utils/localStorage";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";

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

export const createJob = createAsyncThunk(
    "job/createJob",
    async (job, thunkAPI) => {
        try {
            console.log(getUser());
            const resp = await customFetch.post("/jobs", job, {
                headers: {
                    authorization: `Bearer ${
                        thunkAPI.getState().user.user.payload.user.token
                    }`,
                },
            });
            thunkAPI.dispatch(clearValues());
            return resp.data;
        } catch (error) {
            if (error.response.status === 401) {
                thunkAPI.dispatch(logoutuser());
                thunkAPI.rejectWithValue("Unauthorized Access...Logging Out");
            }
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

export const deleteJob = createAsyncThunk(
    "job/deleteJob",
    async (jobId, thunkAPI) => {
        thunkAPI.dispatch(showLoading());
        try {
            console.log(jobId);
            const resp = await customFetch.delete(`/jobs/${jobId}`, {
                headers: {
                    authorization: `Bearer ${
                        thunkAPI.getState().user.user.payload.user.token
                    }`,
                },
            });
            thunkAPI.dispatch(getAllJobs());
            return resp.data.msg;
        } catch (error) {
            thunkAPI.dispatch(hideLoading());
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        clearValues: () => {
            return { ...initialState };
        },
    },
    extraReducers: {
        [createJob.pending]: (state) => {
            state.isLoading = true;
        },
        [createJob.fulfilled]: (state) => {
            state.isLoading = false;
            toast.success("Job Created");
        },
        [createJob.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [deleteJob.rejected]: ({ payload }) => {
            toast.error(payload);
        },
    },
});

export const { handleChange, clearValues } = jobSlice.actions;
export default jobSlice.reducer;
