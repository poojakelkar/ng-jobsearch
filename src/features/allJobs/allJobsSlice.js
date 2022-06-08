import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
    search: "",
    searchStatus: "",
    searchType: "",
    sort: "latest",
    sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
    isLoading: true,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFilterState,
};

const allJobSlice = createSlice({
    name: "allJobs",
    initialState,
});

export default allJobSlice.reducer;
