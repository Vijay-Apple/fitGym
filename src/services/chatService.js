import axios from "axios";

const API = "http://localhost:5003/api/chat";

// ==============================
// Get chat messages
// ==============================
export const getMessages = async (user1, user2) => {
    try {
        const res = await axios.get(`${API}?user1=${user1}&user2=${user2}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        return [];
    }
};

// ==============================
// Delete message
// ==============================
export const deleteMessage = async (msgId, userId) => {
    try {
        const res = await axios.delete(`${API}/${msgId}?userId=${userId}`);
        return res.data;
    } catch (error) {
        console.error("Error deleting message:", error);
    }
};
