import React, { useState } from "react";
import {
  Search,
  BadgeCheck,
  Clock,
  XCircle,
  Calendar,
  FileCheck,
} from "lucide-react";

export default function UserHistory() {
  const [query, setQuery] = useState("");

  const history = [
    { id: "FRM-1024", name: "Aadhar Update Form", date: "12 Nov 2025", status: "Completed" },
    { id: "FRM-2041", name: "PAN Application Form", date: "10 Nov 2025", status: "Pending" },
    { id: "FRM-3081", name: "Income Certificate Form", date: "05 Nov 2025", status: "Rejected" },
    { id: "FRM-4410", name: "Driving License Form", date: "28 Oct 2025", status: "Completed" },
  ];

  const filtered = history.filter((item) =>
    (item.name + item.id + item.status).toLowerCase().includes(query.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return (
          <span className="flex items-center gap-1 bg-emerald-100 text-emerald-700 border border-emerald-300 px-3 py-1 rounded-lg text-xs">
            <BadgeCheck size={14} /> Completed
          </span>
        );
      case "Pending":
        return (
          <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 border border-yellow-300 px-3 py-1 rounded-lg text-xs">
            <Clock size={14} /> Pending
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 bg-red-100 text-red-700 border border-red-300 px-3 py-1 rounded-lg text-xs">
            <XCircle size={14} /> Rejected
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-emerald-700">History</h1>
        <p className="text-gray-600">Track all your past form requests.</p>

        <div className="relative">
          <Search size={18} className="absolute left-4 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by form name, request id, status..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-gray-100 text-gray-800 pl-12 pr-4 py-3 rounded-xl border border-emerald-300 focus:border-emerald-500 outline-none shadow-sm"
          />
        </div>

        <div className="space-y-5">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-5 rounded-2xl border border-emerald-200 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                {getStatusBadge(item.status)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <FileCheck size={16} className="text-emerald-600" />
                  <span>Form ID: {item.id}</span>
                </p>

                <p className="flex items-center gap-2 text-gray-700">
                  <Calendar size={16} className="text-emerald-600" />
                  Date: {item.date}
                </p>

                <p className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} className="text-emerald-600" />
                  Status: {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No records found.</p>
        )}
      </div>
    </div>
  );
}