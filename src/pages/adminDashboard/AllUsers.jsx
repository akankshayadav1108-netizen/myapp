import React, { useEffect, useState } from "react";
import api from "../../api/axios";

export default function AllUsers() {

  const [search, setSearch] = useState("");
  const [users, setusers] = useState([]);

 useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await api.get("/user/getalluser");
      console.log( res.data.allUser);
      
      setusers(res.data.allUser);
    } catch (err) {
      console.log(error);
    }
  };
  fetchUsers();
}, []);


  // ---------- SEARCH FILTER ----------
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold mt-10 text-gray-800">All Users</h1>

        <div className="mt-6 mb-6">
          <div className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-xl shadow-lg w-full md:w-64">
            <h3 className="text-lg font-medium">Total Users</h3>
            <p className="text-4xl font-bold mt-2">{filteredUsers.length}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 w-full md:w-80">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
        />
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Users Overview
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-emerald-300 text-gray-700 text-sm border-b">
                <th className="py-3 px-5 text-left">username</th>
                <th className="py-3 px-5 text-left">Email</th>
                <th className="py-3 px-5 text-left">mobile </th>
                <th className="py-3 px-5 text-left">Role</th>
                <th className="py-3 px-5 text-left">createAt</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-emerald-50/50">
                    <td className="py-4 px-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        {user.username.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-800">
                        {user.username}
                      </span>
                    </td>
                    <td className="py-4 px-5">{user.email}</td>
                     <td className="py-4 px-5">{user.mobile}</td>
                     
                    <td className="py-4 px-5">{user.role}</td>
                     <td className="py-4 px-5">{user.createAt}</td>
                    <td className="py-4 px-5 font-semibold">
                      {user.requests}
                    </td>
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
