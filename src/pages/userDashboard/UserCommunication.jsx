import React, { useState, useRef, useEffect } from "react";
import { Send, User, Users, MessageSquare } from "lucide-react";

export default function UserCommunication() {
  const [message, setMessage] = useState("");
  const chatEndRef = useRef(null);

  const [chat, setChat] = useState([
    {
      sender: "employee",
      name: "Rahul (Employee)",
      text: "Hello! I am reviewing your PAN form.",
      time: "10:32 AM",
    },
    {
      sender: "subadmin",
      name: "Priya (Sub-admin)",
      text: "Please upload your missing address proof.",
      time: "10:40 AM",
    },
    {
      sender: "user",
      name: "You",
      text: "Sure, I will upload it today.",
      time: "10:42 AM",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg = {
      sender: "user",
      name: "You",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChat([...chat, newMsg]);
    setMessage("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const bubbleStyle = (sender) => {
    if (sender === "user") return "bg-emerald-600 text-white ml-auto";
    if (sender === "employee") return "bg-white border border-blue-300 text-gray-800";
    return "bg-white border border-yellow-300 text-gray-800";
  };

  const senderBadge = (sender) => {
    if (sender === "user")
      return <span className="text-emerald-600 text-xs font-medium">You</span>;

    if (sender === "employee")
      return (
        <span className="text-blue-600 text-xs font-medium flex items-center gap-1">
          <User size={12} /> Employee
        </span>
      );

    return (
      <span className="text-yellow-600 text-xs font-medium flex items-center gap-1">
        <Users size={12} /> Sub-admin
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 p-6 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex flex-col h-[85vh]">

        <div className="flex items-center gap-3 mb-4">
          <MessageSquare size={28} className="text-emerald-600" />
          <div>
            <h1 className="text-2xl font-semibold text-emerald-700">Communication</h1>
            <p className="text-gray-500 text-sm">Chat with Employee & Sub-admin</p>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow p-4 overflow-y-auto space-y-4">
          {chat.map((msg, i) => (
            <div key={i} className={`max-w-[70%] p-3 rounded-xl ${bubbleStyle(msg.sender)}`}>
              <div className="mb-1">{senderBadge(msg.sender)}</div>
              <p className="text-sm">{msg.text}</p>
              <p className="text-[10px] text-gray-400 mt-1 text-right">{msg.time}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-xl focus:border-emerald-600 outline-none shadow-sm"
          />
          <button
            onClick={sendMessage}
            className="bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl text-white flex items-center gap-2 transition shadow"
          >
            <Send size={18} />
            Send
          </button>
        </div>

      </div>
    </div>
  );
}