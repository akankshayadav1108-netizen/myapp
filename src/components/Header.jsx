import React, { useState } from "react";
import { Calendar, Clock, Sun, User, Settings, LogOut } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md p-4 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">

      {/* LEFT SECTION */}
      <div className="bg-emerald-600 w-full lg:w-[80%] rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-30">

        {/* Logo */}
        <div className="text-white">
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">Fill It Form</h1>
          <p className="text-sm opacity-90">Form Filling Service</p>
        </div>

        {/* Date / Day / Time Section */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 overflow-x-auto no-scrollbar">

          <div className="bg-white shadow-sm px-3 py-2 rounded-xl border flex items-center gap-2 whitespace-nowrap">
            <Calendar size={18} className="text-emerald-600" />
            <span className="text-gray-700 font-medium text-sm md:text-base">
              Tuesday, Apr 21
            </span>
          </div>

          <div className="bg-white shadow-sm px-3 py-2 rounded-xl border flex items-center gap-2 whitespace-nowrap">
            <Sun size={18} className="text-emerald-600" />
            <span className="text-gray-700 font-medium text-sm md:text-base">
              One Way
            </span>
          </div>

          <div className="bg-white shadow-sm px-3 py-2 rounded-xl border flex items-center gap-2 whitespace-nowrap">
            <Clock size={18} className="text-emerald-600" />
            <span className="text-gray-700 font-medium text-sm md:text-base">
              12:45 PM
            </span>
          </div>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 w-full sm:w-auto bg-white border px-4 py-2 rounded-xl shadow-sm relative">

        {/* Profile Icon */}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX6+vqPj4////+Li4u5ubn8/PyIiIiFhYWJiYnk5OShoaGnp6fT09Pn5+eRkZHu7u7Z2dn19fXCwsKamprHx8exsbHOzs7X19eurq6/v7+jo6Pe3t6WlpZaNtXmAAAE3UlEQVR4nO2d25aqOhBFsUIRbgqI4AX//zsP0fa0vUfbBoKm4ljzpfvROapIIGSFKAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEWamG+P/vn/Owhi5Juu3XZHnp6Lblutm1PT9q5aDKRriVulEqZVBqUSr9pjxh0gyrWOlr273KL05Vh/gyDTkv+jdJIsscEemrNUP9K7oU0W+f6UD1Bz+9rs4xuEOrFSrR/15T7rJwiwjU/y8gF9l3IWoyHxKLAVHxS68AYej1qZDbyRFaIocbaYIjhNHHlajTqygIS2CUqRiquDYqHFAinS0H2S+0WUwijzYThP/KFahjDY8vUWvtIEUkeK5hkkYMz9X83rUoJsQ+pTy2YIrFcJ4ytn8EoZRRCocBEMoostVeFH0LfAUOs4dSK8kpfQ2pbOT4Gp1Et6mvHZr0vEOXPhYQ7vU0TCphRueHAXFj6bsKij95pSrOY9N/xQxktymPLgbJqKfobh3HWhGw0GyIW3d5vuLoeg5f/6j4TdpL9qwczdUoh+DYWhDuhPdpY5PFhdD2dfhboGxdC/ZkMsFZvxMtOH64+9pGnfDjWTBBR7xxT/ku08XqejpcGzTvWub6rXsLnW/EIVfhu7LGNIXMdxnRC16NjRw5FZD2as0F9xuTWU//l7hxmVNeCO/hKaI89dqdAAljBxe4wdxFRp4P7dPpc/2/zNnv5AhFT8X3uBonuE5FMG57/IT4e/VfkDldEU9hFPCyCx+T1XU+6AEzaw4TVH3gQmaZbcpisFV0DDlWkzD3K1Pa8ud0EnbBClotut3NmXUx9B2sd9B2fmZo86DjgVFTOXmr4d+fa4DLuAV4rJ9EF5TOg/fz2ACiBud/rRUiT5vPyF+eIWJ1v3hnGidGMY/566sPione00CR1U21HU9rCs2YWffP+kV8A3fPwQAAIAP7k/1WApJkwpTM/THeFmOfRYJuelhGgo13nYuTaJX3VqCI1W5awDhIUof/K+hzlkZneKY+F7Bmb4uOhXPq3DUv1rQ85t916CaHcrjtegSF51gePDWp1y/o4Q+X5y+p4RjETtPRVxiq6UlnmrovkvPFl9tusS2dTt87SNaInpgh68IBh3eJLhSWxjCcK7h265DX4afP9IsEDa0w1cUaomQkx2+olBLhJwsDT09IrqfEGFt6CkKxY17cNsOb3ujqX2Tobfj+N41mCbeUqVzT56bis+T6t4i6HN/+3va1Gde7z3zhdfd0e4H7jzHb5rN7fg5OzwfUjc3WmGPOvp9NeOW47Iy9P16jXavvf3W/o/+ovyVfeptufsO19Do34IiwmxLnO/1EP8vuQ30sttTJeWIjFcpihE0W/Jf0KhqI0fQbDmZeIz+c9JWxjV4g7lYtlN1LGGz0A+of/jBnOkoJTGMSM1iZdSdzNMhmYbzEiOObkVsZ/sVpv7PDJCdn+wcDfH+UQbIhiByQkzZQc8qpEqSWG5/3sMUlYVOJn5nRieHOpxPzfEoWXcbW0uT8oqHcPS+GH9wVXZ33wT81c18JzCP96F+DfGS5lrvt4d8oy65tTS9bJZOr/k1dc67XV1Foae8Lrv4uamqoS77frfd7nZ9X9ZZ1TQsbEe+E1+Zte+gARJsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJP/AAFSQ7wNy+LTAAAAAElFTkSuQmCC"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />

        {/* Username */}
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Hello,</p>
          <p className="text-sm sm:text-base font-semibold text-gray-800">User Name</p>
        </div>

        {/* Dropdown Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto px-2 py-1 text-xl text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          ⋮
        </button>

        {/* DROPDOWN MENU */}
        {open && (
          <div className="absolute right-0 top-14 w-40 bg-white shadow-lg rounded-xl border py-2 z-20">

            <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer">
              <User className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700">Profile</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer">
              <Settings className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700">Setting</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 cursor-pointer">
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">Logout</span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
