import React, { useState } from "react";

export default function AllUsers() {
  // ---------- STATIC USER DATA (DEMO) ----------
  const usersData = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit@example.com",
      joined: "12 Jan 2024",
      requests: 18,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@example.com",
      joined: "08 Feb 2024",
      requests: 5,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Rahul Meena",
      email: "rahul@example.com",
      joined: "22 Mar 2024",
      requests: 12,
      status: "Active",
    },
    {
      id: 4,
      name: "Kritika Soni",
      email: "kritika@example.com",
      joined: "05 Apr 2024",
      requests: 26,
      status: "Active",
    },
  ];

  const [search, setSearch] = useState("");

  // ---------- SEARCH FILTER ----------
  const users = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between">
         {/* ---------- PAGE HEADER ---------- */}
      <h1 className="text-2xl font-semibold mt-10 text-gray-800">All Users</h1>
      
      {/* ---------- TOTAL USERS CARD ---------- */}
      <div className="mt-6 mb-6">
        <div className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-xl shadow-lg w-full md:w-64">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-4xl font-bold mt-2">{users.length}</p>
        </div>
      </div>
      </div>
      {/* ---------- SEARCH BAR ---------- */}
      <div className="mb-6 w-full md:w-80">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>

      {/* ---------- USERS TABLE ---------- */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Users Overview
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse">
            {/* TABLE HEAD */}
            <thead>
              <tr className="bg-emerald-300 text-gray-700 text-sm border-b">
                <th className="py-3 px-5 font-medium text-left">User</th>
                <th className="py-3 px-5 font-medium text-left">Email</th>
                <th className="py-3 px-5 font-medium text-left">
                  Joining Date
                </th>
                <th className="py-3 px-5 font-medium text-left">
                  Requests Made
                </th>
                <th className="py-3 px-5 font-medium text-left">Status</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="text-gray-700">
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b transition hover:bg-emerald-50/50"
                  >
                    <td className="py-4 px-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-800">
                        {user.name}
                      </span>
                    </td>

                    <td className="py-4 px-5">{user.email}</td>
                    <td className="py-4 px-5">{user.joined}</td>

                    {/* REQUEST COUNT */}
                    <td className="py-4 px-5 font-semibold">
                      {user.requests}
                    </td>

                    {/* STATUS BADGE */}
                    <td className="py-4 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          user.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
