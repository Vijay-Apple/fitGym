import API from "./api";

export const getMessages = async (receiverId) => {
    const res = await API.get(`/chat/${receiverId}`);
    return res.data;
};

export const saveMessage = async (data) => {
    const res = await API.post("/chat", data);
    return res.data;
};
