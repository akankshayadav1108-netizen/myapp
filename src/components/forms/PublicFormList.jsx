import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axios";

export default function PublicFormList() {
  const { subSlug } = useParams();
  const [forms, setForms] = useState([]);

  useEffect(() => {
    if (!subSlug) return;

    const fetchForms = async () => {
      try {
        const res = await api.get("/form/filter", {
          params: {
            subcategory: subSlug,
            isActive: true,
            visibility: "public",
            sortBy: "latest"
          }
        });

        setForms(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch forms", error);
      }
    };

    fetchForms();
  }, [subSlug]);

  return (
    <div className="min-h-screen bg-[#0B1020] px-6 py-14">
      <h2 className="text-2xl font-bold text-white mb-8 uppercase">
        {subSlug} Forms
      </h2>

      <div className="space-y-5">
        {forms.map((form, i) => (
          <div
            key={form._id || i}
            className="bg-[#121933] border border-[#1E2A5A]
              rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg text-white">{form.title}</h3>
              <p className="text-slate-400 text-sm mt-1">
                Last Date:{" "}
                {form.applicationEndDate
                  ? new Date(form.applicationEndDate).toLocaleDateString("en-IN")
                  : "N/A"}
              </p>
            </div>

            <button
              className="bg-gradient-to-r from-indigo-500 to-pink-500
                text-white px-5 py-2 rounded-lg text-sm"
            >
              Apply
            </button>
          </div>
        ))}

        {forms.length === 0 && (
          <p className="text-slate-400">No forms available</p>
        )}
      </div>
    </div>
  );
}
