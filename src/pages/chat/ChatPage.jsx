import React, { useEffect, useState, useRef } from "react";
import socket from "../../socket/socket";
import { getMessages } from "../../services/chatService";

const ChatPage = () => {
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [receiver, setReceiver] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesEndRef = useRef(null);

  // ===============================
  // Load logged in user
  // ===============================
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Please login first");
      window.location.href = "/login";
      return;
    }

    const id = storedUser.id || storedUser._id;

    if (id) {
      setUserId(id);
    }
  }, []);

  // ===============================
  // Fetch users
  // ===============================
  useEffect(() => {
    fetch("http://localhost:5003/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("Users fetch error:", err));
  }, []);

  // ===============================
  // Socket setup
  // ===============================
  useEffect(() => {
    if (!userId) return;

    socket.connect();
    socket.emit("add_user", userId);

    const handleUsers = (data) => {
      const onlineIds = data
        .filter((u) => u.isOnline)
        .map((u) => (u._id || u.id).toString());

      setOnlineUsers(onlineIds);
    };

    const handleMessage = (data) => {
      const msg = {
        ...data,
        sender: data.sender?._id || data.sender?.id || data.sender,
        receiver: data.receiver?._id || data.receiver?.id || data.receiver,
      };

      setMessages((prev) => [...prev, msg]);
    };

    socket.on("get_users", handleUsers);
    socket.on("receive_message", handleMessage);

    return () => {
      socket.off("get_users", handleUsers);
      socket.off("receive_message", handleMessage);
    };
  }, [userId]);

  // ===============================
  // Auto scroll
  // ===============================
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ===============================
  // Load chat history
  // ===============================
  useEffect(() => {
    if (!receiver || !userId) return;

    getMessages(userId, receiver)
      .then((res) => {
        const chats = res.map((m) => ({
          ...m,
          sender: m.sender?._id || m.sender?.id || m.sender,
          receiver: m.receiver?._id || m.receiver?.id || m.receiver,
        }));

        setMessages(chats);
      })
      .catch((err) => console.log("Chat history error:", err));
  }, [receiver, userId]);

  // ===============================
  // Send message
  // ===============================
  const sendMessage = () => {
    if (!receiver) return alert("Select user first");
    if (!message.trim()) return;

    const newMessage = {
      sender: userId,
      receiver,
      message,
    };

    socket.emit("send_message", newMessage);

    setMessage("");
  };

  // ===============================
  // Delete message
  // ===============================
  const deleteMessage = async (msgId) => {
    try {
      await fetch(`http://localhost:5003/api/chat/${msgId}?userId=${userId}`, {
        method: "DELETE",
      });

      setMessages((prev) => prev.filter((m) => m._id !== msgId));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  const receiverUser = users.find((u) => (u._id || u.id) === receiver);

  // ===============================
  // Filter messages
  // ===============================
  const filteredMessages = messages.filter((msg) => {
    return (
      (msg.sender?.toString() === userId?.toString() &&
        msg.receiver?.toString() === receiver?.toString()) ||
      (msg.sender?.toString() === receiver?.toString() &&
        msg.receiver?.toString() === userId?.toString())
    );
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* USERS LIST */}

      <div className="w-1/4 bg-white border-r p-4">
        <h2 className="text-lg font-bold mb-4">Users</h2>

        {users
          .filter((u) => (u._id || u.id) !== userId)
          .map((user) => {
            const uid = user._id || user.id;
            const isOnline = onlineUsers.includes(uid);

            return (
              <div
                key={uid}
                onClick={() => setReceiver(uid)}
                className={`flex justify-between items-center p-2 cursor-pointer rounded hover:bg-gray-100 ${
                  receiver === uid ? "bg-gray-200" : ""
                }`}
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

      {/* CHAT AREA */}

      <div className="flex flex-col flex-1">
        <div className="p-4 bg-white border-b font-semibold">
          {receiverUser
            ? `Chat with ${receiverUser.name}`
            : "Select a user to start chat"}
        </div>

        {/* Messages */}

        <div className="flex-1 p-4 overflow-y-auto">
          {filteredMessages.map((msg) => (
            <div
              key={msg._id || Math.random()}
              className={`mb-2 flex ${
                msg.sender?.toString() === userId?.toString()
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-2 rounded-lg max-w-xs break-words ${
                    msg.sender?.toString() === userId?.toString()
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {msg.message}
                </span>

                {msg.sender?.toString() === userId?.toString() && msg._id && (
                  <button
                    onClick={() => deleteMessage(msg._id)}
                    className="text-red-500 text-xs"
                  >
                    delete
                  </button>
                )}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {/* Message input */}

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
