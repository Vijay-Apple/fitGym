import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
        onlineUsers: [],
        selectedUser: ""
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
            state.messages = []; // clear messages when switching user
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    }
});

export const { setMessages, addMessage, setOnlineUsers, setSelectedUser, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
