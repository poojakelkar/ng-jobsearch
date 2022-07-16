import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import customFetch, { checkForUnauthorizeResponse } from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { getUser } from "../../utils/localStorage";
import { logoutuser } from "../user/userSlice";
import authHeader from "../../utils/authHeader";

export const createJobThunk = async (job, thunkAPI) => {
    try {
        const resp = await customFetch.post("/jobs", job);
        thunkAPI.dispatch(clearValues());
        return resp.data.msg;
    } catch (error) {
        return checkForUnauthorizeResponse(error, thunkAPI);
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
        return checkForUnauthorizeResponse(error, thunkAPI);
    }
};
export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
    try {
        const resp = await customFetch.patch(`/jobs/${jobId}`, job);
        thunkAPI.dispatch(clearValues());
        return resp.data;
    } catch (error) {
        return checkForUnauthorizeResponse(error, thunkAPI);
    }
};
