import { useParams } from "react-router-dom";

const forms = [
  {
    title: "SSC GD Constable 2026",
    lastDate: "15 Feb 2026",
    fees: "₹100"
  },
  {
    title: "SSC CHSL 2026",
    lastDate: "28 Feb 2026",
    fees: "₹100"
  }
];

export default function PublicFormList() {
  const { subSlug } = useParams();

  return (
    <div className="min-h-screen bg-[#0B1020] px-6 py-14">
      <h2 className="text-2xl font-bold text-white mb-8 uppercase">
        {subSlug} Forms
      </h2>

      <div className="space-y-5">
        {forms.map((form, i) => (
          <div
            key={i}
            className="bg-[#121933] border border-[#1E2A5A]
              rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg text-white">{form.title}</h3>
              <p className="text-slate-400 text-sm mt-1">
                Last Date: {form.lastDate}
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
      </div>
    </div>
  );
}
