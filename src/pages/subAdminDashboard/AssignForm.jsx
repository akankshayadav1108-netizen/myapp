import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const AssignForm = () => {
  const [query, setQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const employees = ["Amit Sharma", "Riya Patel", "Deepak Verma", "Kunal Singh"];

  const requests = [
    {
      id: "REQ-2024-0012",
      formName: "Government ID Verification",
      type: "Government",
      status: "Pending",
      requestDate: "12 Aug 2024, 1:20 PM",
      assignedTo: "",
      assignedOn: "",
    },
    {
      id: "REQ-2024-0015",
      formName: "Private Company Background Check",
      type: "Private",
      status: "In Review",
      requestDate: "12 Aug 2024, 11:45 AM",
      assignedTo: "Amit Sharma",
      assignedOn: "12 Aug 2024, 12:00 PM",
    },
    {
      id: "REQ-2024-0021",
      formName: "UPSC Document Validation",
      type: "UPSC",
      status: "Completed",
      requestDate: "11 Aug 2024, 5:50 PM",
      assignedTo: "Riya Patel",
      assignedOn: "11 Aug 2024, 6:00 PM",
    },
  ];

  // Status colors
  const statusColors = {
    Pending: "text-yellow-600",
    Assigned: "text-blue-600",
    "In Review": "text-purple-600",
    Completed: "text-emerald-600",
    Rejected: "text-red-600",
  };

  // Filter search
  const filtered = requests.filter((r) =>
    r.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-white text-gray-800 p-6">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-700">
        Assign Form To Employee
      </h2>

      {/* Search Box */}
      <div className="max-w-md mb-6 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm flex items-center gap-2">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search request by ID..."
          className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Request Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((req, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition"
          >
            {/* Request ID */}
            <h3 className="text-lg font-semibold text-emerald-700">{req.id}</h3>
            <p className="text-sm text-gray-500">
              {req.formName} •{" "}
              <span className="text-gray-700">{req.type}</span>
            </p>

            {/* Request Date */}
            <p className="mt-2 text-sm text-gray-600">
              Requested On:{" "}
              <span className="font-medium">{req.requestDate}</span>
            </p>

            {/* Status */}
            <p className="mt-1 text-sm">
              Status:{" "}
              <span className={`font-semibold ${statusColors[req.status]}`}>
                {req.status}
              </span>
            </p>

            {/* Assignment Section */}
            <div className="mt-4">
              {/* Assigned To */}
              {req.assignedTo ? (
                <p className="text-sm text-gray-700">
                  Assigned To:{" "}
                  <span className="text-emerald-600 font-medium">
                    {req.assignedTo}
                  </span>
                </p>
              ) : (
                <p className="text-sm text-gray-400">Not Assigned</p>
              )}

              {/* Assigned On */}
              {req.assignedOn && (
                <p className="text-sm text-gray-600">
                  Assigned On:{" "}
                  <span className="font-medium">{req.assignedOn}</span>
                </p>
              )}

              {/* Assign Dropdown */}
              <div className="relative mt-4">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="w-full bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-xl flex items-center justify-between hover:bg-gray-50 transition"
                >
                  {req.assignedTo || "Assign Employee"}
                  <ChevronDown size={18} className="text-gray-500" />
                </button>

                {/* Dropdown List */}
                {openDropdown === index && (
                  <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg p-2">
                    {employees.map((emp, i) => (
                      <button
                        key={i}
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-sm text-gray-700"
                      >
                        {emp}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssignForm;
