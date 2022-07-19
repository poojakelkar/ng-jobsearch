import axios from "axios";
import { clearStore } from "../features/user/userSlice";
import { getUser } from "./localStorage";

const customFetch = axios.create({
    baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use((config) => {
    const user = getUser();
    if (user) {
        config.headers.common[
            "Authorization"
        ] = `Bearer ${user.payload.user.token}`;
    }
    return config;
});
export const checkForUnauthorizeResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        thunkAPI.dispatch(clearStore());
        thunkAPI.rejectWithValue("Unauthorized Access...Logging Out");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
