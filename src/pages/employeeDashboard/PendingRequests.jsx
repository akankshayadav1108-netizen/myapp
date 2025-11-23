import React, { useState } from "react";
import { Search, Clock, FileWarning } from "lucide-react";

const PendingRequests = () => {
  const [query, setQuery] = useState("");

  const pendingData = [
    {
      id: "REQ-1001",
      form: "Aadhar Update",
      user: "Amit Sharma",
      status: "Pending",
      date: "10 Nov 2024",
    },
    {
      id: "REQ-1004",
      form: "PAN Correction",
      user: "Riya Patel",
      status: "Pending",
      date: "11 Nov 2024",
    },
    {
      id: "REQ-1011",
      form: "Bank KYC",
      user: "Mahesh Yadav",
      status: "Pending",
      date: "13 Nov 2024",
    },
  ];

  return (
    <div className="p-6 md:p-8 text-gray-800 bg-white min-h-screen">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent flex items-center gap-3">
          <FileWarning className="text-emerald-500" /> Pending Requests
        </h1>
        <p className="text-gray-600 mt-1">All requests assigned to you but not completed yet</p>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center bg-white border border-emerald-300 rounded-xl p-3 shadow-sm">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search pending requests..."
            className="bg-transparent outline-none text-gray-700 ml-3 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-emerald-300 shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-emerald-50 text-gray-600 text-sm">
            <tr>
              <th className="p-4">Request ID</th>
              <th className="p-4">Form Name</th>
              <th className="p-4">Username</th>
              <th className="p-4">Status</th>
              <th className="p-4">Assigned Date</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {pendingData
              .filter(
                (req) =>
                  req.id.toLowerCase().includes(query.toLowerCase()) ||
                  req.form.toLowerCase().includes(query.toLowerCase()) ||
                  req.user.toLowerCase().includes(query.toLowerCase())
              )
              .map((req, index) => (
                <tr
                  key={index}
                  className="border-b border-emerald-100 hover:bg-emerald-50 transition-all"
                >
                  <td className="p-4 font-medium">{req.id}</td>
                  <td className="p-4">{req.form}</td>
                  <td className="p-4">{req.user}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-600 flex items-center gap-1 w-fit border border-yellow-300">
                      <Clock size={14} /> Pending
                    </span>
                  </td>
                  <td className="p-4">{req.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingRequests;