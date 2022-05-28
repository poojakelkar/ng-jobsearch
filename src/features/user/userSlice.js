import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
    addUserToLocalStorage,
    getUser,
    removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
    user: getUser(),
    isLoading: false,
    isSidebarOpen: false,
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
        try {
            const resp = await customFetch.post("/auth/login", user);
            return resp.data;
        } catch (error) {
            toast.error(error.response.data.msg);
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        logoutuser: (state) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
        },
        toggleSidebar: (state) => {
            console.log("hii");
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Successfully Login ,${user.name}`);
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { ...payload }) => {
            const { ...user } = payload;
            console.log({ user, payload });

            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Welcome Back ,${user?.payload?.user?.name}`);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export const { toggleSidebar, logoutuser } = userSlice.actions;
export default userSlice.reducer;
