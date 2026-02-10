import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import api from "../api/axios";

export default function Search() {
  const location = useLocation();

  /* ===============================
     READ QUERY PARAMS
  =============================== */
  const params = new URLSearchParams(location.search);

  const search = params.get("search") || "";
  const maincategory = params.get("mainCategory") || "";
  const subcategory = params.get("subCategory") || "";

  /* ===============================
     STATE
  =============================== */
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ===============================
     FETCH FILTERED FORMS
  =============================== */
  useEffect(() => {
    const fetchForms = async () => {
      try {
        setLoading(true);

        const res = await api.get("/form/filter", {
          params: {
            search,
            maincategory,
            subcategory,
            page: 1,
            limit: 10
          }
        });

        setForms(res.data?.data || []);
      } catch (error) {
        console.error("Search API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [search, maincategory, subcategory]);

  /* ===============================
     UI
  =============================== */
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-white">
      {/* HEADING */}
      <h2 className="text-3xl font-bold mb-8">
        Search Results{" "}
        {search && (
          <span className="text-emerald-400">
            for "{search}"
          </span>
        )}
      </h2>

      {/* LOADING */}
      {loading && (
        <p className="text-slate-400">
          Searching forms...
        </p>
      )}

      {/* NO DATA */}
      {!loading && forms.length === 0 && (
        <p className="text-slate-400">
          No forms found.
        </p>
      )}

      {/* RESULTS */}
      <div className="grid md:grid-cols-2 gap-6">
        {forms.map((form) => (
          <div
            key={form._id}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-2">
              {form.title}
            </h3>

            <div className="flex justify-between text-sm text-slate-400 mb-3">
              <span>
                Last Date:{" "}
                {form.lastDate || "—"}
              </span>
              <span>
                Fees:{" "}
                {form.totalPayable
                  ? `₹${form.totalPayable}`
                  : "—"}
              </span>
            </div>

            <p className="text-xs text-emerald-400 mb-4">
              {form.maincategory?.title} /{" "}
              {form.subcategory?.title}
            </p>

            <Link
              to={`/form/${form.slug}`}
              className="inline-block px-4 py-2 bg-emerald-500 text-black rounded-lg font-semibold hover:bg-emerald-400"
            >
              View Form
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
