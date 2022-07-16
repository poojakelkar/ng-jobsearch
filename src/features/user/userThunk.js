import clearAllJobsFilter from "../allJobs/allJobsSlice";
import { toast } from "react-toastify";
import customFetch, { checkForUnauthorizeResponse } from "../../utils/axios";
import { clearValues } from "../job/jobSlice";
import { logoutuser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return checkForUnauthorizeResponse(error, thunkAPI);
    }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return checkForUnauthorizeResponse(error, thunkAPI);
    }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
        console.log(thunkAPI.getState());
        const resp = await customFetch.patch(url, user);
        return resp.data;
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutuser());
            return thunkAPI.rejectWithValue(
                "Unauthorized User Access..Logging Out"
            );
        }
        return checkForUnauthorizeResponse(error, thunkAPI);
    }
};

export const clearStoreThunk = async (message, thunkAPI) => {
    try {
        thunkAPI.dispatch(logoutuser(message));
        thunkAPI.dispatch(clearAllJobsFilter());
        thunkAPI.dispatch(clearValues());
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }
};
