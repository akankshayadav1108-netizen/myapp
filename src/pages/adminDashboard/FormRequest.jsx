import React, { useState } from "react";
import { Search, PlusCircle, Pencil, Trash2, FileText } from "lucide-react";

const FormRequest = () => {
  const [search, setSearch] = useState("");

  const forms = [
    {
      id: 1,
      title: "Employee Registration Form",
      startDate: "05 Jan 2025",
      endDate: "25 Jan 2025",
      documents: ["Aadhar", "Resume", "Photo"],
    },
    {
      id: 2,
      title: "Leave Application Form",
      startDate: "01 Feb 2025",
      endDate: "28 Feb 2025",
      documents: ["Attendance Report"],
    },
    {
      id: 3,
      title: "Asset Allocation Form",
      startDate: "10 Mar 2025",
      endDate: "20 Mar 2025",
      documents: ["ID Card", "Confirmation Letter"],
    },
  ];

  const filteredForms = forms.filter((form) =>
    form.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6 space-y-8 text-gray-700 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-3xl font-semibold text-emerald-700">
          Form Management
        </h1>

        {/* SEARCH */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search form..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              bg-white text-gray-700 pl-10 pr-4 py-2 rounded-xl
              outline-none w-64 border border-emerald-300
              focus:ring-2 focus:ring-emerald-500 transition-all
            "
          />
        </div>

        {/* CREATE BUTTON */}
        <button
          className="
            flex items-center gap-2 px-5 py-2 rounded-xl
            bg-emerald-600 text-white shadow-md
            hover:bg-emerald-700 transition font-medium
          "
        >
          <PlusCircle size={18} />
          Create New Form
        </button>
      </div>

      {/* TABLE CARD */}
      <div
        className="
          bg-white p-6 rounded-2xl shadow-md
          border border-emerald-300/40
        "
      >
        <h2 className="text-xl font-semibold mb-5 text-emerald-700">
          Forms Overview
        </h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="w-full border-collapse text-gray-700">
            <thead className="bg-emerald-100 text-emerald-700">
              <tr>
                <th className="py-3 px-4 text-left">Form Title</th>
                <th className="py-3 px-4 text-left">Start Date</th>
                <th className="py-3 px-4 text-left">End Date</th>
                <th className="py-3 px-4 text-left">Required Documents</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredForms.map((form) => (
                <tr
                  key={form.id}
                  className="border-t border-gray-200 hover:bg-emerald-50 transition"
                >
                  <td className="py-3 px-4 font-medium flex items-center gap-2">
                    <FileText size={18} className="text-emerald-600" />
                    {form.title}
                  </td>

                  <td className="py-3 px-4">{form.startDate}</td>
                  <td className="py-3 px-4">{form.endDate}</td>

                  {/* DOCUMENT TAGS */}
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-2">
                      {form.documents.map((doc, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* ACTION BUTTONS */}
                  <td className="py-3 px-4 flex gap-3">
                    <button
                      className="
                        p-2 rounded-lg bg-emerald-100 text-emerald-700
                        hover:bg-emerald-200 transition
                      "
                    >
                      <Pencil size={18} />
                    </button>

                    <button
                      className="
                        p-2 rounded-lg bg-red-100 text-red-700
                        hover:bg-red-200 transition
                      "
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {/* EMPTY STATE */}
              {filteredForms.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 text-center text-gray-500 italic"
                  >
                    No forms found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FormRequest;
