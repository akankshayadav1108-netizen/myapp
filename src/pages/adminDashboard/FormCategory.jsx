import React, { useEffect, useState } from "react";
import { Layers, PlusCircle } from "lucide-react";
import api from "../../api/axios";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function Reports() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [level, setLevel] = useState(1);
  const [parent, setParent] = useState("");
  const [mainCategories, setMainCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleLoadingId, setToggleLoadingId] = useState(null);

  /* ================= FETCH CATEGORIES ================= */
  const fetchCategories = async () => {
    try {
      const mainRes = await api.get("/categories/main");
      const mains = Array.isArray(mainRes.data) ? mainRes.data : mainRes.data?.data || [];

      let subs = [];
      for (let m of mains) {
        const subRes = await api.get(`/categories/${m.slug}/sub`);
        const subData = Array.isArray(subRes.data) ? subRes.data : subRes.data?.data || [];
        subs = [...subs, ...subData];
      }

      setMainCategories(mains);
      setAllCategories([...mains, ...subs]);
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /* ================= AUTO SLUG ================= */
  useEffect(() => {
    setSlug(slugify(name));
  }, [name]);

  /* ================= CREATE CATEGORY ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/categories/create", {
        name,
        slug,
        level,
        parent: level === 2 ? parent : null,
      });

      alert("Category created successfully!");
      setName("");
      setSlug("");
      setLevel(1);
      setParent("");
      fetchCategories();
    } catch (err) {
      console.error("Failed to create category:", err);
      alert("Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  /* ================= TOGGLE ACTIVE ================= */
  const toggleActive = async (id) => {
    if (!id) return;
    setToggleLoadingId(id);
    try {
      const res = await api.patch(`/categories/${id}/toggle-active`);
      console.log("Toggle response:", res.data);
      fetchCategories(); // refresh the list to reflect dependent subcategories
    } catch (err) {
      console.error("Failed to toggle status:", err);
      alert("Failed to update status");
    } finally {
      setToggleLoadingId(null);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen w-full bg-white p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-emerald-700">
          Admin – Category Management
        </h1>
        <p className="text-gray-700">
          Create main categories and sub-categories for exam forms.
        </p>
      </div>

      {/* CREATE FORM */}
      <div className="max-w-xl bg-white border border-emerald-200 rounded-2xl p-6 shadow-md mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-emerald-600">Add Category</h2>
          <Layers className="w-8 h-8 text-emerald-500" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* LEVEL */}
          <div>
            <label className="text-gray-700 text-sm">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full mt-1 p-2 rounded-lg border border-emerald-200 text-gray-700"
            >
              <option value={1}>Main Category</option>
              <option value={2}>Sub Category</option>
            </select>
          </div>

          {/* NAME */}
          <div>
            <label className="text-gray-700 text-sm">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 rounded-lg border border-emerald-200 text-gray-700"
              required
            />
          </div>

          {/* SLUG */}
          <div>
            <label className="text-gray-700 text-sm">Slug</label>
            <input
              value={slug}
              readOnly
              className="w-full mt-1 p-2 rounded-lg border border-emerald-200 text-gray-500 bg-gray-100"
            />
          </div>

          {/* PARENT */}
          {level === 2 && (
            <div>
              <label className="text-gray-700 text-sm">Parent Category</label>
              <select
                value={parent}
                onChange={(e) => setParent(e.target.value)}
                className="w-full mt-1 p-2 rounded-lg border border-emerald-200 text-gray-700"
                required
              >
                <option value="">Select Main Category</option>
                {mainCategories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold"
          >
            <PlusCircle className="w-5 h-5" />
            {loading ? "Saving..." : "Create Category"}
          </button>
        </form>
      </div>

      {/* CATEGORY TABLE */}
      <div className="overflow-x-auto bg-white border border-emerald-200 rounded-2xl p-4 shadow-md">
        <h2 className="text-lg font-semibold text-emerald-600 mb-4">All Categories</h2>

        <table className="min-w-full text-left text-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Slug</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Parent</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {allCategories.map((cat) => {
              // disable toggle if parent is inactive
              const parentCat = cat.parent
                ? allCategories.find((c) => c._id === cat.parent)
                : null;
              const isDisabled = parentCat && !parentCat.isActive;

              return (
                <tr key={cat._id} className="border-t border-emerald-200">
                  <td className="px-4 py-2">{cat.name}</td>
                  <td className="px-4 py-2">{cat.slug}</td>
                  <td className="px-4 py-2">{cat.level === 1 ? "Main" : "Sub"}</td>
                  <td className="px-4 py-2">
                    {parentCat ? parentCat.name : "-"}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => toggleActive(cat._id)}
                      disabled={toggleLoadingId === cat._id || isDisabled}
                      className={`px-3 py-1 rounded text-sm font-semibold ${
                        cat.isActive
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                      } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {toggleLoadingId === cat._id
                        ? "Updating..."
                        : cat.isActive
                        ? "Active"
                        : "Deactive"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
