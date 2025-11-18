import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Clock,
  CreditCard,
  ClipboardList,
  Calendar,
  Bell,
} from "lucide-react";

export default function UserPannel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSlotBook = () => {
    alert(`Slot booked for: ${selectedSlot}`);
  };

  return (
    <div className="min-h-screen bg-emerald-100 flex justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-lg p-4 md:p-6 lg:p-8 space-y-6">
        
        {/* ---------------- HEADER ---------------- */}
        <div className="bg-emerald-600 text-white rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 relative">

          {/* LEFT */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold">Welcome Back 👋</h2>
            <p className="text-sm opacity-90">Manage all your tasks easily.</p>
          </div>

          {/* MIDDLE */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start flex-1">
            <div className="bg-white/20 rounded-lg px-4 py-2 text-sm flex items-center gap-2">
              📅 Tuesday, Apr 21
            </div>

            <div className="bg-white/20 rounded-lg px-4 py-2 text-sm flex items-center gap-2">
              🔁 One way
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 justify-end flex-1">
            {/* Notification */}
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-white/20 transition">
                <Bell className="w-5 h-5" />
              </button>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] rounded-full flex items-center justify-center">
                3
              </span>
            </div>

            {/* Profile */}
            <div className="relative flex items-center gap-3 bg-white text-black px-3 py-2 rounded-xl shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFNeUn89NkscCQdePBFlIp7ixL81eU9pY3g&s"
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="hidden sm:block">
                <p className="text-xs text-gray-500">Hello,</p>
                <p className="font-semibold">Akanksha yadav</p>
              </div>

              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-xl font-bold p-1 rounded hover:bg-gray-100"
                >
                  ⋮
                </button>

                {menuOpen && (
                  <div className="absolute right-0 top-10 w-44 bg-white shadow-xl rounded-xl p-2 space-y-1 z-50">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg text-sm">
                      Edit Profile
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg text-sm">
                      Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-red-100 text-red-600 rounded-lg text-sm">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ---------------- DASHBOARD STATS CARDS ---------------- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* Total Bookings */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm opacity-90">Total Bookings</p>
              <ClipboardList />
            </div>
            <h2 className="text-3xl font-bold mt-2">1,248</h2>
            <p className="text-xs opacity-80 mt-1">Updated now</p>
          </div>

          {/* Completed */}
          <div className="bg-white p-5 rounded-2xl border hover:scale-[1.02] transition cursor-pointer shadow">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Completed</p>
              <CheckCircle className="text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-emerald-600 mt-2">1,032</h2>
            <p className="text-xs text-gray-400 mt-1">All-time</p>
          </div>

          {/* Processing */}
          <div className="bg-white p-5 rounded-2xl border hover:scale-[1.02] transition cursor-pointer shadow">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Processing</p>
              <Clock className="text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-amber-500 mt-2">142</h2>
            <p className="text-xs text-gray-400 mt-1">Awaiting</p>
          </div>

          {/* Payment */}
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm">Total Payment</p>
              <CreditCard />
            </div>
            <h2 className="text-3xl font-bold mt-2">$58,420</h2>
            <p className="text-xs opacity-90 mt-1">USD Received</p>
          </div>

        </div>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT LIST */}
          <div className="lg:col-span-9 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-5 flex flex-col sm:flex-row items-center gap-5">
                <div className="sm:w-40">
                  <p className="font-semibold">10:30 AM</p>
                  <p className="text-sm text-gray-500">Barcelona (BCN)</p>
                  <p className="text-xs text-gray-400">Tue, Apr 21</p>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div className="h-1 bg-gray-200 flex-1 rounded-full relative">
                      <span className="absolute -left-1 -top-1 w-3 h-3 bg-emerald-600 rounded-full" />
                      <span className="absolute -right-1 -top-1 w-3 h-3 bg-emerald-600 rounded-full" />
                    </div>
                    <p className="text-xs text-gray-400">1h 50m</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Non-stop</p>
                </div>

                <div className="text-right sm:w-40">
                  <p className="text-lg font-bold">$56 <span className="text-xs text-gray-400">USD</span></p>
                  <button className="mt-3 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg shadow text-sm">Select</button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3 space-y-5">
            
            {/* Alerts */}
            <div className="bg-white p-4 rounded-xl shadow">
              <button className="w-full bg-emerald-100 text-emerald-700 py-2 rounded-lg font-semibold">
                Get slot alerts
              </button>
            </div>

            {/* Slot Booking */}
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-emerald-600" />
                <h3 className="font-semibold text-lg">Book a Slot</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Select Date</label>
                  <input type="date" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500" />
                </div>

                <div>
                  <label className="text-sm font-medium">Select Time Slot</label>
                  <select
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Choose a slot</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                    <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                    <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                  </select>
                </div>

                <button
                  disabled={!selectedSlot}
                  onClick={handleSlotBook}
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    selectedSlot
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Book Slot
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
