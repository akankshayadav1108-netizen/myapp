import React, { useState } from "react";
import { 
  ClipboardList, CheckCircle, Clock, FileWarning, Calendar, User 
} from "lucide-react";

const UserHome = () => {
  const [selectedSlot, setSelectedSlot] = useState("");

  const recentRequests = [
    { id: "REQ-2001", form: "Aadhar Update", date: "20 Nov 2025", status: "Completed" },
    { id: "REQ-2008", form: "PAN Correction", date: "19 Nov 2025", status: "Pending" },
    { id: "REQ-2012", form: "Bank KYC", date: "18 Nov 2025", status: "Docs Needed" },
  ];

  const statusBadge = (status) => {
    if (status === "Completed")
      return (
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs flex items-center gap-1">
          <CheckCircle size={12} /> Completed
        </span>
      );
    if (status === "Pending")
      return (
        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs flex items-center gap-1">
          <Clock size={12} /> Pending
        </span>
      );
    return (
      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs flex items-center gap-1">
        <FileWarning size={12} /> Docs Needed
      </span>
    );
  };

  const bookSlot = () => {
    alert(`Slot booked for ${selectedSlot}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6 flex justify-center">
      <div className="w-full max-w-7xl space-y-10">

        {/* TOP CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Total Requests */}
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white p-5 rounded-2xl shadow hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm opacity-90">Total Requests</p>
              <ClipboardList size={22} />
            </div>
            <h1 className="text-3xl font-bold mt-3">24</h1>
            <p className="text-xs opacity-90 mt-1">Updated just now</p>
          </div>

          {/* Completed */}
          <div className="bg-white p-5 rounded-2xl border border-green-300 shadow hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Completed</p>
              <CheckCircle size={22} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-green-600 mt-3">18</h1>
            <p className="text-xs text-gray-500 mt-1">All-time</p>
          </div>

          {/* Pending */}
          <div className="bg-white p-5 rounded-2xl border border-yellow-300 shadow hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Pending</p>
              <Clock size={22} className="text-yellow-600" />
            </div>
            <h1 className="text-3xl font-bold text-yellow-600 mt-3">5</h1>
            <p className="text-xs text-gray-500 mt-1">Awaiting action</p>
          </div>

          {/* Docs Needed */}
          <div className="bg-gradient-to-br from-red-400 to-red-600 text-white p-5 rounded-2xl shadow hover:scale-[1.03] transition cursor-pointer">
            <div className="flex justify-between items-center">
              <p className="text-sm opacity-90">Documents Needed</p>
              <FileWarning size={22} />
            </div>
            <h1 className="text-3xl font-bold mt-3">1</h1>
            <p className="text-xs opacity-90 mt-1">Needs attention</p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT - RECENT REQUESTS */}
          <div className="lg:col-span-9 space-y-4">
            <h2 className="text-xl font-semibold text-emerald-700">Recent Requests</h2>

            {recentRequests.map((req, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl border border-emerald-200 shadow hover:bg-gray-50 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{req.form}</h3>
                    <p className="text-xs text-gray-500 mt-1">{req.date}</p>
                  </div>
                  {statusBadge(req.status)}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - SIDEBAR */}
          <div className="lg:col-span-3 space-y-6">

            {/* PROFILE */}
            <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow text-center">
              <User size={40} className="mx-auto text-emerald-600" />
              <h3 className="mt-3 font-semibold text-lg">Welcome, Vinay</h3>
              <p className="text-xs text-gray-500 mt-1">User Dashboard</p>
            </div>

            {/* SLOT BOOKING */}
            <div className="bg-white p-6 rounded-2xl border border-emerald-300 shadow">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-emerald-600" />
                <h3 className="font-semibold">Book a Slot</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">Select Date</label>
                  <input
                    type="date"
                    className="w-full mt-1 p-2 bg-white border border-emerald-300 rounded-lg outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Select Time Slot</label>
                  <select
                    className="w-full mt-1 p-2 bg-white border border-emerald-300 rounded-lg outline-none"
                    onChange={(e) => setSelectedSlot(e.target.value)}
                  >
                    <option value="">Choose slot</option>
                    <option value="9AM - 10AM">9AM - 10AM</option>
                    <option value="10AM - 11AM">10AM - 11AM</option>
                    <option value="2PM - 3PM">2PM - 3PM</option>
                  </select>
                </div>

                <button
                  disabled={!selectedSlot}
                  onClick={bookSlot}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 transition p-2 rounded-lg font-semibold text-white disabled:bg-gray-400"
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
};

export default UserHome;
