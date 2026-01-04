import React from "react";
import { BarChart3, FileText, Users, CheckCircle, AlertTriangle } from "lucide-react";

export default function AdminReport() {
  const stats = [
    { label: "Total Users", value: 1520, icon: Users },
    { label: "Total Requests", value: 4380, icon: FileText },
    { label: "Completed", value: 3920, icon: CheckCircle },
    { label: "Pending", value: 460, icon: AlertTriangle },
  ];

  const recentReports = [
    { id: "REQ-9012", user: "Amit Sharma", form: "Aadhar Update", status: "Completed", date: "22 Nov 2025" },
    { id: "REQ-9013", user: "Priya Patel", form: "PAN Correction", status: "Pending", date: "22 Nov 2025" },
    { id: "REQ-9014", user: "Rohan Mehta", form: "Voter ID Update", status: "Completed", date: "21 Nov 2025" },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-emerald-700">Admin Reports Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-2xl shadow-md flex items-center gap-4">
            <item.icon className="w-10 h-10 text-emerald-600" />
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Graph Placeholder */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <BarChart3 className="text-emerald-600" /> Monthly Performance Report
        </h2>
        <div className="w-full h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          Graph Placeholder
        </div>
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-3">Request ID</th>
              <th>User</th>
              <th>Form</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentReports.map((r, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-3 text-gray-800 font-medium">{r.id}</td>
                <td className="text-gray-700">{r.user}</td>
                <td className="text-gray-700">{r.form}</td>
                <td className={`font-semibold ${r.status === "Completed" ? "text-emerald-600" : "text-amber-500"}`}>{r.status}</td>
                <td className="text-gray-500">{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
