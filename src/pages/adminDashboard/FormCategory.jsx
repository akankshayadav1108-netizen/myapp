import React, { useEffect, useState } from "react";
import { Layers, PlusCircle } from "lucide-react";
import api from "../../api/axios";

/* ================= UTILS ================= */
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* ================= COMPONENT ================= */
export default function Reports() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [level, setLevel] = useState(1);
  const [parent, setParent] = useState("");
  const [mainCategories, setMainCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedMain, setSelectedMain] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const fetchCategories = async () => {
    try {
      const mainRes = await api.get("/categories/main");
      const mains = Array.isArray(mainRes.data)
        ? mainRes.data
        : mainRes.data?.data || [];

      let subs = [];
      for (let m of mains) {
        const subRes = await api.get(`/categories/${m.slug}/sub`);
        const subData = Array.isArray(subRes.data)
          ? subRes.data
          : subRes.data?.data || [];
        subs = [...subs, ...subData];
      }

      setMainCategories(mains);
      setAllCategories([...mains, ...subs]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /* ================= AUTO SLUG ================= */
  useEffect(() => {
    setSlug(slugify(name));
  }, [name]);

  /* ================= CREATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/categories/create", {
        name,
        slug,
        level,
        ...(level === 2 && { parent }),
      });

      setName("");
      setSlug("");
      setLevel(1);
      setParent("");
      fetchCategories();
    } finally {
      setLoading(false);
    }
  };

  /* ================= TOGGLE ================= */
  const toggleActive = async (id) => {
    await api.patch(`/categories/${id}/toggle-active`);
    fetchCategories();
  };

  /* ================= SUB FILTER ================= */
  const subCategories = selectedMain
    ? allCategories.filter(
        (c) => c.level === 2 && c.parent === selectedMain._id
      )
    : [];

  /* ================= UI ================= */
  return (
    <section className="min-h-screen bg-white p-4 sm:p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-emerald-600">
          Category Management
        </h1>
      </div>

      {/* CREATE FORM */}
      <div className="max-w-xl bg-white rounded-2xl p-6 border mb-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            <option value={1}>Main Category</option>
            <option value={2}>Sub Category</option>
          </select>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <input
            value={slug}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />

          {level === 2 && (
            <select
              value={parent}
              onChange={(e) => setParent(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Main</option>
              {mainCategories.map((m) => (
                <option key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))}
            </select>
          )}

          <button className="w-full bg-emerald-600 text-white py-2 rounded">
            Create
          </button>
        </form>
      </div>

      {/* MAIN + SIDE PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MAIN TABLE */}
        <div className="lg:col-span-2 bg-white border rounded-xl shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-emerald-600 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {mainCategories.map((main) => (
                <tr
                  key={main._id}
                  onClick={() => setSelectedMain(main)}
                  className={`cursor-pointer border-t hover:bg-emerald-50 ${
                    selectedMain?._id === main._id
                      ? "bg-emerald-100"
                      : ""
                  }`}
                >
                  <td className="p-3 font-semibold">{main.name}</td>
                  <td className="p-3">{main.slug}</td>
                  <td className="p-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleActive(main._id);
                      }}
                      className={`px-3 py-1 rounded text-white ${
                        main.isActive
                          ? "bg-emerald-600"
                          : "bg-red-500"
                      }`}
                    >
                      {main.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SIDE SUB CATEGORY PANEL */}
        <div className="bg-white border rounded-xl shadow-sm p-4">
          <h3 className="text-lg font-semibold text-emerald-600 mb-3">
            {selectedMain
              ? `Sub Categories of ${selectedMain.name}`
              : "Select a Main Category"}
          </h3>

          {subCategories.length === 0 && (
            <p className="text-gray-500 text-sm">
              No sub categories
            </p>
          )}

          <ul className="space-y-2">
            {subCategories.map((sub) => (
              <li
                key={sub._id}
                className="flex justify-between items-center border p-2 rounded"
              >
                <span>{sub.name}</span>
                <button
                  onClick={() => toggleActive(sub._id)}
                  className={`px-2 py-1 text-xs rounded text-white ${
                    sub.isActive
                      ? "bg-emerald-600"
                      : "bg-red-500"
                  }`}
                >
                  {sub.isActive ? "Active" : "Inactive"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
