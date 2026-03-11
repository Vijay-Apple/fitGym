import React, { useEffect, useState, useRef } from "react";
import socket from "../../socket/socket";
import axios from "axios";

const ChatPage = ({ userId }) => {
  const [users, setUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [receiver, setReceiver] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Get all users
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Socket connection
  useEffect(() => {
    if (!userId) return;

    socket.emit("add_user", userId);

    const handleOnlineUsers = (data) => setOnlineUsers(data);
    const handleReceiveMessage = (data) =>
      setMessages((prev) => [...prev, data]);

    socket.on("online_users", handleOnlineUsers);
    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("online_users", handleOnlineUsers);
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [userId]);

  // Scroll to bottom when new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message
  const sendMessage = () => {
    if (!receiver) return alert("Select a user first");
    if (!message.trim()) return;

    socket.emit("send_message", { sender: userId, receiver, message });
    setMessage("");
  };

  const receiverUser = users.find((u) => u._id === receiver);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Users list */}
      <div className="w-1/4 bg-white border-r p-4">
        <h2 className="text-lg font-bold mb-4">Users</h2>
        {users.map((user) => {
          const isOnline = onlineUsers.includes(user._id);
          return (
            <div
              key={user._id}
              onClick={() => setReceiver(user._id)}
              className={`flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100 rounded ${receiver === user._id ? "bg-gray-200" : ""}`}
            >
              <span>{user.name}</span>
              {isOnline ? (
                <span className="text-green-500 text-sm">🟢 Online</span>
              ) : (
                <span className="text-gray-400 text-sm">⚪ Offline</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Chat section */}
      <div className="flex flex-col flex-1">
        <div className="p-4 bg-white border-b font-semibold">
          {receiverUser
            ? `Chat with ${receiverUser.name}`
            : "Select a user to chat"}
        </div>

        <div className="flex-1 p-4 overflow-y-auto">
          {messages
            .filter(
              (msg) =>
                (msg.sender === userId && msg.receiver === receiver) ||
                (msg.sender === receiver && msg.receiver === userId),
            )
            .map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === userId ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${msg.sender === userId ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"}`}
                >
                  {msg.message}
                </span>
              </div>
            ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t flex gap-2">
          <input
            type="text"
            placeholder="Type message..."
            className="flex-1 border rounded px-3 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
