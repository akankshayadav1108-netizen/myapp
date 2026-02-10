import { useEffect, useState } from "react";
import { Search, Eye } from "lucide-react";
import api from "../api/axios";

export default function OnlineFormsSection() {
  const [forms, setForms] = useState([]);
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [formId, setFormId] = useState("");

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async (filters = {}) => {
    const res = await api.get("/forms", { params: filters });
    setForms(res.data.data || []);
  };

  const handleSearch = () => {
    fetchForms({
      mainCategory,
      subCategory,
      formId
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {/* ================= FILTER SECTION ================= */}
      <h2 className="text-2xl font-semibold text-emerald-700 mb-4">
        Online Filled Forms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Main Category"
          value={mainCategory}
          onChange={(e) => setMainCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="text"
          placeholder="Sub Category"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="text"
          placeholder="Form ID"
          value={formId}
          onChange={(e) => setFormId(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
        />

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 bg-emerald-600 text-white rounded-lg px-4 py-2 hover:bg-emerald-700"
        >
          <Search size={18} /> Search
        </button>
      </div>

      {/* ================= FORM LIST ================= */}
      <div className="space-y-4">
        {forms.length === 0 && (
          <p className="text-gray-500 text-center">
            No forms found
          </p>
        )}

        {forms.map((form) => (
          <div
            key={form._id}
            className="border rounded-lg p-4 flex justify-between items-center hover:shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold text-emerald-700">
                {form.title}
              </h3>
              <p className="text-sm text-gray-600">
                {form.mainCategory} → {form.subCategory}
              </p>
              <p className="text-xs text-gray-400">
                Form ID: {form._id}
              </p>
            </div>

            <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800">
              <Eye size={18} />
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
