const authHeader = (thunkAPI) => {
    return {
        headers: {
            authorization: `Bearer ${
                thunkAPI.getState().user.user.payload.user.token
            }`,
        },
    };
};

export default authHeader;
