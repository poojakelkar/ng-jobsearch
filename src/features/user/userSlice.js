import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
    addUserToLocalStorage,
    getUser,
    removeUserFromLocalStorage,
} from "../../utils/localStorage";
import {
    loginUserThunk,
    registerUserThunk,
    updateUserThunk,
} from "./userThunk";

const initialState = {
    user: getUser(),
    isLoading: false,
    isSidebarOpen: false,
};

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        return registerUserThunk("auth/register", user, thunkAPI);
    }
);
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
        return loginUserThunk("/auth/login", user, thunkAPI);
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (user, thunkAPI) => {
        return updateUserThunk("/auth/updateUser", user, thunkAPI);
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
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Welcome Back ,${user?.payload?.user?.name}`);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
        [updateUser.pending]: (state) => {
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state, { ...payload }) => {
            const { ...user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Changes Updated!`);
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        },
    },
});

export const { toggleSidebar, logoutuser } = userSlice.actions;
export default userSlice.reducer;
