import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Government Exams",
    slug: "government-exams",
    description: "UPSC, SSC, Railway, Defence & more"
  },
  {
    id: 2,
    title: "Certificates",
    slug: "certificates",
    description: "Income, Caste, Domicile services"
  },
  {
    id: 3,
    title: "Utility Services",
    slug: "utility-services",
    description: "PAN, Aadhaar, Voter ID"
  }
];

export default function FormCategoryPage() {
  return (
    <div className="min-h-screen bg-[#0B1020] px-6 py-14">
      <h1 className="text-3xl font-bold text-slate-100 mb-10">
        Browse Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map(cat => (
          <Link
            key={cat.id}
            to={`/forms/${cat.slug}`}
            className="bg-[#121933] border border-[#1E2A5A]
              rounded-2xl p-6 hover:scale-[1.02] transition
              hover:shadow-[0_0_25px_#6366F1]"
          >
            <h2 className="text-xl font-semibold text-white">
              {cat.title}
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
