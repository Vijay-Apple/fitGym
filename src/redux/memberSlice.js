import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/api/members" });

export const fetchMemberData = createAsyncThunk("member/fetchMemberData",
    async (id, { getState }) => {
        const { token } = getState().auth;
        const res = await API.get(`/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        return res.data;
    }
);

const memberSlice = createSlice({
    name: "member",
    initialState: { member: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMemberData.pending, (state) => { state.status = "loading"; })
            .addCase(fetchMemberData.fulfilled, (state, action) => { state.status = "succeeded"; state.member = action.payload; })
            .addCase(fetchMemberData.rejected, (state, action) => { state.status = "failed"; state.error = action.error.message; })
    }
});

export default memberSlice.reducer;


