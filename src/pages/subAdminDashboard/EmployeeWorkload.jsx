import React, { useState } from "react";
import { Search } from "lucide-react";

const EmployeeWorkload = () => {
  const [query, setQuery] = useState("");

  const employees = [
    {
      id: "EMP1024",
      name: "Amit Sharma",
      lastActive: "12 Aug 2024, 3:14 PM",
      progress: 70,
    },
    {
      id: "EMP1033",
      name: "Riya Patel",
      lastActive: "12 Aug 2024, 2:50 PM",
      progress: 40,
    },
    {
      id: "EMP1040",
      name: "Deepak Verma",
      lastActive: "12 Aug 2024, 1:30 PM",
      progress: 90,
    },
  ];

  const filtered = employees.filter((emp) =>
    emp.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white text-gray-700 p-6">
      
      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6 text-emerald-700">
        Employee Workload
      </h2>

      {/* Search Bar */}
      <div className="max-w-md mb-6 bg-white px-4 py-2 rounded-xl 
          border border-emerald-300 shadow-sm flex items-center gap-2">
        <Search size={18} className="text-emerald-600" />
        <input
          type="text"
          placeholder="Search by Employee ID..."
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((emp, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl 
            shadow-md hover:shadow-lg border border-emerald-200 transition"
          >
            {/* Name + ID */}
            <h3 className="text-lg font-semibold text-gray-800">{emp.name}</h3>
            <p className="text-sm text-gray-500">{emp.id}</p>

            {/* Last Active */}
            <p className="mt-3 text-sm text-gray-600">
              Last Active:{" "}
              <span className="text-gray-800">{emp.lastActive}</span>
            </p>

            {/* Progress Bar Label */}
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <span>Today's Progress</span>
              <span className="text-gray-800">{emp.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-emerald-600 transition-all duration-300"
                style={{ width: `${emp.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeWorkload;
