import React, { useState } from "react";
import {
  Settings,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ menuItems = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-emerald-600 text-white p-2 rounded-md shadow-md hover:bg-emerald-700 transition"
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Sidebar Wrapper */}
      <div
        className={`fixed top-0 left-0 h-screen z-40 bg-gradient-to-b 
        from-emerald-500 via-emerald-600 to-emerald-800 text-white 
        shadow-2xl border-r border-white/20 transition-all duration-300
        ${open ? "w-64" : "w-0"} 
        overflow-hidden lg:w-64`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-8 px-6 py-6 border-b border-white/20">
          <h2 className="text-3xl font-bold tracking-wide">FILL IT</h2>
        </div>

        {/* MENU SECTION */}
        <div className="px-4  space-y-1 overflow-y-auto h-[calc(100%-180px)]">
          {menuItems.map((item) => (
            <NavLink
              to={item.route}
              key={item.label}
              onClick={() => setOpen(false)} // auto close on mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer 
                transition-all group
                hover:bg-white/10 hover:translate-x-1
                ${isActive ? "bg-white/20" : ""}`
              }
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* BOTTOM MENU */}
        <div className="absolute bottom-0 left-0 w-full px-4  border-t border-white/10">
<NavLink to={"profile"}>
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-white/10 transition group">
            <User className="w-5 h-5 group-hover:scale-110 transition" />
            Profile
          </button>
</NavLink>
          <NavLink to={"setting"}>
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-white/10 transition group">
            <Settings className="w-5 h-5 group-hover:scale-110 transition" />
            Settings
          </button>
        </NavLink>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-300 hover:bg-red-500/20 rounded-lg transition group">
            <LogOut className="w-5 h-5 group-hover:scale-110 transition" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
