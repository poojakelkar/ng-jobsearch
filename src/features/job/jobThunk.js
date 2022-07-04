import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import customFetch from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { getUser } from "../../utils/localStorage";
import { logoutuser } from "../user/userSlice";
import authHeader from "../../utils/authHeader";

export const createJobThunk = async (job, thunkAPI) => {
    try {
        console.log(getUser());
        const resp = await customFetch.post("/jobs", job, authHeader(thunkAPI));
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutuser());
            thunkAPI.rejectWithValue("Unauthorized Access...Logging Out");
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};
export const deleteJobThunk = async (jobId, thunkAPI) => {
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
};
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/jobs/${jobId}`, job);
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};
