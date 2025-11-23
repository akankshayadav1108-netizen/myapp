import React, { useState } from "react";
import { Search, Send, User, MessageCircle } from "lucide-react";

const Communications = () => {
  const [query, setQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);

  const users = [
    { id: 1, name: "Amit Sharma", role: "User" },
    { id: 2, name: "Riya Patel", role: "Employee" },
    { id: 3, name: "Deepak Verma", role: "User" },
  ];

  const messagesDB = {
    1: [
      { sender: "admin", message: "Hello Amit, we need additional documents.", time: "10:20 AM", status: "seen" },
      { sender: "user", message: "Sure, I will upload it today.", time: "10:22 AM" },
    ],
    2: [
      { sender: "admin", message: "Riya, please check the new request assigned to you.", time: "9:50 AM", status: "delivered" },
    ],
    3: [
      { sender: "admin", message: "Deepak, your form is under review.", time: "8:10 AM", status: "seen" },
      { sender: "user", message: "Thanks for the update!", time: "8:20 AM" },
    ],
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    messagesDB[selectedChat].push({
      sender: "admin",
      message: newMessage,
      time: "Just now",
      status: "delivered",
    });

    setNewMessage("");
  };

  return (
    <div className="min-h-screen p-6 bg-white text-gray-900">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-700">Communication</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="bg-white p-4 rounded-2xl border border-emerald-300 shadow-lg h-[75vh] flex flex-col">

          {/* Search */}
          <div className="bg-gray-100 px-3 py-2 rounded-xl flex items-center gap-2 mb-4 border border-emerald-200">
            <Search size={18} className="text-emerald-600" />
            <input
              type="text"
              placeholder="Search user..."
              className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Users */}
          <div className="overflow-auto space-y-2">
            {filteredUsers.map((u) => (
              <div
                key={u.id}
                onClick={() => setSelectedChat(u.id)}
                className={`p-3 rounded-xl cursor-pointer transition-all 
                  ${
                    selectedChat === u.id
                      ? "bg-emerald-100 border border-emerald-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-200 text-emerald-700 rounded-full">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{u.name}</p>
                    <p className="text-xs text-emerald-700">{u.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CHAT WINDOW */}
        <div className="lg:col-span-2 bg-white p-4 rounded-2xl border border-emerald-300 shadow-lg h-[75vh] flex flex-col">

          {!selectedChat && (
            <div className="h-full flex gap-2 items-center justify-center text-gray-500">
              <MessageCircle size={40} className="mb-2 text-emerald-600" />
              <p>Select a user to start communication</p>
            </div>
          )}

          {selectedChat && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-auto p-2 space-y-4">
                {messagesDB[selectedChat].map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.sender === "admin" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-sm lg:max-w-md p-3 rounded-xl text-sm shadow 
                        ${
                          msg.sender === "admin"
                            ? "bg-emerald-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }
                      `}
                    >
                      <p>{msg.message}</p>
                      <p className="text-[10px] mt-1 text-gray-200/70 flex justify-between">
                        <span>{msg.time}</span>
                        {msg.status && (
                          <span className="text-emerald-200 font-semibold">{msg.status}</span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="mt-4 flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-xl border border-emerald-300 shadow-inner">
                <input
                  type="text"
                  className="bg-transparent outline-none w-full text-sm text-gray-800"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  onClick={sendMessage}
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition-all text-white"
                >
                  <Send size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communications;