import { Link, useParams } from "react-router-dom";

const subCategories = {
  "government-exams": [
    { title: "SSC", slug: "ssc" },
    { title: "UPSC", slug: "upsc" },
    { title: "Railway", slug: "railway" }
  ],
  certificates: [
    { title: "Income Certificate", slug: "income" },
    { title: "Caste Certificate", slug: "caste" }
  ]
};

export default function FormSubCategoryPage() {
  const { categorySlug } = useParams();
  const list = subCategories[categorySlug] || [];

  return (
    <div className="min-h-screen bg-[#0B1020] px-6 py-14">
      <h2 className="text-2xl font-bold text-white mb-8 capitalize">
        {categorySlug.replace("-", " ")}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {list.map(sub => (
          <Link
            key={sub.slug}
            to={`/forms/${categorySlug}/${sub.slug}`}
            className="bg-[#121933] rounded-xl p-5
              border border-[#1E2A5A]
              hover:border-pink-500 transition"
          >
            <h3 className="text-lg text-slate-100">
              {sub.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
