import React from "react";
import { Pencil, Trash2, KeyRound, UserX } from "lucide-react";

export default function AllSubAdmin() {
  const data = [
    { name: "Rahul Sharma", email: "rahul@gmail.com", role: "SubAdmin", status: "Active" },
    { name: "Pooja Verma", email: "pooja@gmail.com", role: "SubAdmin", status: "Inactive" },
  ];

  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-700">
          SubAdmin Management
        </h1>

        <button className="bg-emerald-600 hover:bg-emerald-700 transition-all text-white px-5 py-2 rounded-xl shadow-md">
          + Add SubAdmin
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-emerald-100">
        <table className="w-full">
          <thead className="bg-emerald-50 text-emerald-700">
            <tr>
              <th className="p-4 text-left font-semibold">Name</th>
              <th className="p-4 text-left font-semibold">Email</th>
              <th className="p-4 text-left font-semibold">Role</th>
              <th className="p-4 text-left font-semibold">Status</th>
              <th className="p-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="border-b border-emerald-100 hover:bg-emerald-50/50 transition-all"
              >
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4">{item.role}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      item.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="p-4 flex gap-4 justify-center">
                  <Pencil className="text-emerald-700 hover:text-emerald-900 cursor-pointer" />
                  <Trash2 className="text-red-600 hover:text-red-800 cursor-pointer" />
                  <KeyRound className="text-yellow-500 hover:text-yellow-600 cursor-pointer" />
                  <UserX className="text-purple-600 hover:text-purple-800 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
