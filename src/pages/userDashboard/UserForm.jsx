import React, { useState } from "react";
import { Search, FileText, Calendar, CreditCard, Folder } from "lucide-react";

export default function UserForm() {
  const [query, setQuery] = useState("");

  const categories = [
    {
      name: "Government Forms",
      key: "gov",
      forms: [
        {
          formName: "Aadhar Update Form",
          startDate: "01 Jan 2025",
          endDate: "01 Mar 2025",
          documents: "ID Proof, Address Proof",
          fee: "Free",
        },
        {
          formName: "PAN Application",
          startDate: "05 Jan 2025",
          endDate: "15 Mar 2025",
          documents: "ID Proof, Photo",
          fee: "₹110",
        },
      ],
    },
    {
      name: "Private Sector Forms",
      key: "private",
      forms: [
        {
          formName: "Company Internship Form",
          startDate: "20 Feb 2025",
          endDate: "20 Apr 2025",
          documents: "Resume, College ID",
          fee: "₹50",
        },
      ],
    },
    {
      name: "College Admission Forms",
      key: "college",
      forms: [
        {
          formName: "B.Sc Admission Form",
          startDate: "10 Feb 2025",
          endDate: "10 May 2025",
          documents: "10th & 12th Marksheet",
          fee: "₹300",
        },
      ],
    },
    {
      name: "Below 10th Forms",
      key: "below10",
      forms: [
        {
          formName: "Navodaya Entrance Form",
          startDate: "01 April 2025",
          endDate: "30 June 2025",
          documents: "Birth Certificate, Photo",
          fee: "Free",
        },
      ],
    },
    {
      name: "Below 12th Forms",
      key: "below12",
      forms: [
        {
          formName: "Polytechnic Entrance Form",
          startDate: "05 March 2025",
          endDate: "01 July 2025",
          documents: "10th Marksheet, Photo",
          fee: "₹200",
        },
      ],
    },
  ];

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      forms: cat.forms.filter(
        (form) =>
          form.formName.toLowerCase().includes(query.toLowerCase()) ||
          cat.name.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((cat) => cat.forms.length > 0);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* SEARCH BAR */}
        <div className="bg-gray-100 border border-emerald-300 p-4 rounded-2xl shadow-md flex items-center gap-3">
          <Search className="text-emerald-600" size={20} />
          <input
            type="text"
            placeholder="Search forms or categories..."
            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* CATEGORY SECTIONS */}
        {filteredCategories.map((category) => (
          <div key={category.key} className="space-y-3">
            <h2 className="text-xl font-semibold text-emerald-700 flex items-center gap-2">
              <Folder size={20} /> {category.name}
            </h2>

            <div className="space-y-4">
              {category.forms.map((form, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-emerald-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <FileText size={20} className="text-emerald-600" />
                      {form.formName}
                    </h3>
                    <p className="text-sm px-3 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-emerald-700">
                      {form.fee}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <p className="flex items-center gap-2">
                      <Calendar size={16} className="text-emerald-600" />
                      <span>Start: {form.startDate}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar size={16} className="text-emerald-600" />
                      <span>End: {form.endDate}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <CreditCard size={16} className="text-emerald-600" />
                      <span>Documents: {form.documents}</span>
                    </p>
                  </div>

                  <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No forms found matching <span className="text-emerald-600">"{query}"</span>
          </p>
        )}
      </div>
    </div>
  );
}
