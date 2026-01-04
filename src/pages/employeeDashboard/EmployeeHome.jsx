import React from "react";
import {
  ClipboardList,
  Clock,
  CheckCircle,
  BarChart3,
  FileText,
  Play,
  ClipboardCheck,
  ListTodo,
} from "lucide-react";

const EmployeeHome = () => {
  const assignedRequests = [
    { form: "Aadhar Update", user: "Amit Sharma", status: "Assigned", time: "1 hr ago" },
    { form: "PAN Correction", user: "Neha Verma", status: "Pending", time: "3 hrs ago" },
    { form: "GST Registration", user: "Rahul Singh", status: "Completed", time: "1 day ago" },
  ];

  const card =
    "p-6 rounded-2xl bg-white border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300";

  return (
    <div className="p-6 md:p-8 text-gray-800 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-emerald-600">
          Employee Dashboard
        </h1>
        <p className="text-gray-500 mt-1">Your assigned form requests & daily workflow</p>
      </div>

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        {/* Assigned Requests */}
        <div className={card}>
          <ClipboardList size={38} className="text-emerald-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Total Assigned</p>
            <h2 className="text-3xl font-bold text-gray-700">38</h2>
          </div>
        </div>

        {/* Pending Assigned */}
        <div className={card}>
          <Clock size={38} className="text-yellow-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Pending</p>
            <h2 className="text-3xl font-bold text-gray-700">12</h2>
          </div>
        </div>

        {/* Completed Assigned */}
        <div className={card}>
          <CheckCircle size={38} className="text-green-500" />
          <div className="mt-3">
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="text-3xl font-bold text-gray-700">26</h2>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

        {/* LEFT SECTION */}
        <div className="xl:col-span-3 space-y-8">

          {/* REQUEST OVERVIEW */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-emerald-600">
              <BarChart3 /> Request Overview
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-100 rounded-xl border border-gray-200 hover:bg-gray-200 transition-all">
                <p className="text-gray-500 text-sm">Today's Assigned</p>
                <h2 className="text-3xl font-bold text-gray-700 mt-1">7</h2>
              </div>

              <div className="p-4 bg-gray-100 rounded-xl border border-gray-200 hover:bg-gray-200 transition-all">
                <p className="text-gray-500 text-sm">Today's Completed</p>
                <h2 className="text-3xl font-bold text-gray-700 mt-1">4</h2>
              </div>
            </div>
          </div>

          {/* ASSIGNED REQUEST LIST */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-emerald-600">
              <FileText /> Assigned Requests
            </h3>

            <div className="space-y-4">
              {assignedRequests.map((req, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-100 rounded-xl border border-gray-200 hover:bg-gray-200 transition-all"
                >
                  <p className="font-medium text-gray-800">{req.form}</p>
                  <p className="text-sm text-gray-500">
                    {req.user} • {req.status}
                  </p>
                  <p className="text-xs text-gray-400">{req.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">

          {/* QUICK ACTIONS */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-emerald-600">
              <ListTodo /> Quick Actions
            </h3>

            <div className="space-y-4">
              {/* Start Processing */}
              <button className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-4 rounded-xl border border-gray-300 transition-all">
                <span className="font-medium text-gray-700">Start Processing</span>
                <Play className="text-emerald-500" />
              </button>

              {/* Update Status */}
              <button className="w-full flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-4 rounded-xl border border-gray-300 transition-all">
                <span className="font-medium text-gray-700">Update Request Status</span>
                <ClipboardCheck className="text-emerald-500" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EmployeeHome;