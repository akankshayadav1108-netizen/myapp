import React, { useState } from "react";
import {
  Search,
  Users,
  UserPlus,
  Edit,
  Trash2,
} from "lucide-react";

const TeamManagement = () => {
  const [query, setQuery] = useState("");

  const teams = [
    {
      name: "Verification Team",
      members: [
        { name: "Amit Sharma", status: "Active" },
        { name: "Riya Patel", status: "Busy" },
        { name: "Deepak Verma", status: "On Leave" },
      ],
    },
    {
      name: "Document Team",
      members: [
        { name: "Neha Singh", status: "Active" },
        { name: "Karan Mehta", status: "Active" },
      ],
    },
    {
      name: "Support Team",
      members: [
        { name: "Harsh Gupta", status: "Busy" },
        { name: "Sneha Rao", status: "Active" },
      ],
    },
  ];

  // STATUS BADGE COLORS (EMERALD THEME)
  const statusStyles = {
    Active: "text-emerald-700 bg-emerald-100 border-emerald-300",
    Busy: "text-yellow-700 bg-yellow-100 border-yellow-300",
    "On Leave": "text-red-700 bg-red-100 border-red-300",
  };

  // Filter Teams
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 text-gray-700">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-emerald-700">
            Teams Management
          </h1>
          <p className="text-gray-500 mt-1">Create and manage your teams</p>
        </div>

        <button
          className="
            flex items-center gap-2 
            px-5 py-3 rounded-xl
            bg-emerald-600 text-white 
            hover:bg-emerald-700
            shadow-md transition-all
          "
        >
          <UserPlus size={20} />
          Create Team
        </button>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-8 w-full md:w-1/2">
        <div
          className="
            flex items-center gap-3 
            bg-white border border-emerald-300/50 
            rounded-xl p-4 shadow-sm
          "
        >
          <Search className="text-emerald-600" size={20} />
          <input
            type="text"
            placeholder="Search teams..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700"
          />
        </div>
      </div>

      {/* TEAMS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {filteredTeams.map((team, index) => (
          <div
            key={index}
            className="
              p-6 rounded-2xl bg-white
              border border-emerald-300/40 
              shadow-md hover:shadow-lg
              transition-all duration-300 relative
            "
          >

            {/* EDIT / DELETE BUTTONS */}
            <div className="absolute top-4 right-4 flex gap-3">
              <button
                className="
                  p-2 rounded-lg bg-emerald-100 
                  border border-emerald-200
                  hover:bg-emerald-200 transition-all
                "
              >
                <Edit size={16} className="text-emerald-700" />
              </button>

              <button
                className="
                  p-2 rounded-lg bg-red-100 
                  border border-red-200
                  hover:bg-red-200 transition-all
                "
              >
                <Trash2 size={16} className="text-red-700" />
              </button>
            </div>

            {/* TEAM HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <Users size={28} className="text-emerald-600" />
              <h2 className="text-xl font-semibold text-gray-800">{team.name}</h2>
            </div>

            {/* TEAM MEMBERS */}
            <p className="text-gray-500 text-sm mb-3">Team Members</p>

            <div className="space-y-4">
              {team.members.map((member, i) => (
                <div
                  key={i}
                  className="
                    p-3 rounded-xl 
                    bg-emerald-50 border border-emerald-200
                    flex items-center justify-between
                    hover:bg-emerald-100 transition-all
                  "
                >
                  <p className="font-medium text-gray-800">{member.name}</p>

                  <span
                    className={`
                      px-3 py-1 rounded-lg border text-xs font-medium
                      ${statusStyles[member.status]}
                    `}
                  >
                    {member.status}
                  </span>
                </div>
              ))}
            </div>

            {/* TEAM SIZE */}
            <p className="mt-6 text-sm text-gray-600">
              Total Members:{" "}
              <span className="text-gray-800 font-medium">
                {team.members.length}
              </span>
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TeamManagement;
