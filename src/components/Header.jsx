import React, { useEffect, useState } from "react";
import { Bell, User, MoreVertical, LogOut, Settings } from "lucide-react";

export default function Header({ username = "Admin User" }) {
  const [dateTime, setDateTime] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      setDateTime(now.toLocaleString("en-IN", options));
    };

    update(); // first time
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-4 px-6 shadow-md flex items-center justify-between rounded-b-2xl">

      {/* LEFT — Username + Date/Time */}
      <div>
        <h2 className="text-lg font-semibold tracking-wide">{username}</h2>
        <p className="text-white/80 text-sm">{dateTime}</p>
      </div>

      {/* RIGHT — Icons */}
      <div className="flex items-center gap-5 relative">

        {/* Notification Bell */}
        <button className="hover:text-white/80 transition">
          <Bell className="w-6 h-6" />
        </button>

        {/* Profile */}
        <button className="hover:text-white/80 transition">
          <User className="w-6 h-6" />
        </button>

        {/* 3-Dot Menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-white/80 transition"
          >
            <MoreVertical className="w-6 h-6" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2 border border-gray-200 z-50">

              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <User className="w-4 h-4" /> Profile
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <Settings className="w-4 h-4" /> Settings
              </button>

              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600">
                <LogOut className="w-4 h-4" /> Logout
              </button>

            </div>
          )}
        </div>
      </div>
    </header>
  );
}
