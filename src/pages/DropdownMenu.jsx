import React, { useState } from "react";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-xl border hover:bg-emerald-50 transition"
      >
        
        <span className="font-medium text-gray-700">⋮</span>
        
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-xl border py-2 z-20">
          {/* Profile */}
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer transition">
            <User className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700">Profile</span>
          </div>

          {/* Setting */}
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer transition">
            <Settings className="w-5 h-5 text-emerald-600" />
            <span className="text-gray-700">Setting</span>
          </div>

          {/* Logout */}
          <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 cursor-pointer transition">
            <LogOut className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Logout</span>
          </div>
        </div>
      )}
    </div>
  );
}
