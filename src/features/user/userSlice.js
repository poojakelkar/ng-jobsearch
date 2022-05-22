import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialState = {
    isLoading: false,
    user: null,
};

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        try {
            const resp = customFetch.post("/auth/testingRegister", user);
        } catch (error) {
            toast.error(error.response.data.msg);
            console.log("error", error.response);
        }
    }
);
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
        console.log(`Login User: ${JSON.stringify(user)}`);
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export default userSlice.reducer;
