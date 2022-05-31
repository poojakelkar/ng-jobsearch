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

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (user, thunkAPI) => {
        try {
            console.log(thunkAPI.getState());
            const resp = await customFetch.patch("/auth/updateUser", user, {
                headers: {
                    authorization: `Bearer ${
                        thunkAPI.getState().user.user.payload.user.token
                    }`,
                },
            });
            return resp.data;
        } catch (error) {
            console.log(error.response);
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
