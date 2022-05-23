import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialState = {
    user: null,
    isLoading: false,
};

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        try {
            const resp = customFetch.post("/auth/register", user);
            return resp.data;
        } catch (error) {
            toast.error(error.response.data.msg);
            return thunkAPI.rejectWithValue(error.response.data.msg);
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
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            toast.success(`Successfully Login ,${user.name}`);
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export default userSlice.reducer;
