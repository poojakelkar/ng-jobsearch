import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { logoutuser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
        console.log(thunkAPI.getState());
        const resp = await customFetch.patch(url, user, {
            headers: {
                authorization: `Bearer ${
                    thunkAPI.getState().user.user.payload.user.token
                }`,
            },
        });
        return resp.data;
    } catch (error) {
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutuser());
            return thunkAPI.rejectWithValue(
                "Unauthorized User Access..Logging Out"
            );
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};
