import React, { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
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
  const [openModal, setOpenModal] = useState(false);

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
      setOpenModal(false);
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
    <section className="min-h-screen bg-gray-50 p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-600">
          Category Management
        </h1>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2 rounded-xl shadow hover:bg-emerald-700"
        >
          <PlusCircle size={20} />
          Create Category
        </button>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-emerald-600 mb-4">
              Create Category
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <select
                value={level}
                onChange={(e) => setLevel(Number(e.target.value))}
                className="w-full p-3 border rounded-lg"
              >
                <option value={1}>Main Category</option>
                <option value={2}>Sub Category</option>
              </select>

              <input
                placeholder="Category Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border rounded-lg"
              />

              <input
                value={slug}
                readOnly
                className="w-full p-3 border rounded-lg bg-gray-100"
              />

              {level === 2 && (
                <select
                  value={parent}
                  onChange={(e) => setParent(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="">Select Main Category</option>
                  {mainCategories.map((m) => (
                    <option key={m._id} value={m._id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-emerald-600 text-white rounded-lg"
                >
                  {loading ? "Creating..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* TABLES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* MAIN CATEGORY */}
        <div className="bg-white rounded-2xl shadow-sm border">
          <h3 className="p-4 text-lg font-semibold text-emerald-600 border-b">
            Main Categories
          </h3>

          <table className="w-full text-sm">
            <tbody>
              {mainCategories.map((main) => (
                <tr
                  key={main._id}
                  onClick={() => setSelectedMain(main)}
                  className={`cursor-pointer hover:bg-emerald-50 ${
                    selectedMain?._id === main._id
                      ? "bg-emerald-100"
                      : ""
                  }`}
                >
                  <td className="p-3 font-medium">{main.name}</td>
                  <td className="p-3">{main.slug}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleActive(main._id);
                      }}
                      className={`px-3 py-1 text-xs rounded text-white ${
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

        {/* SUB CATEGORY */}
        <div className="bg-white rounded-2xl shadow-sm border">
          <h3 className="p-4 text-lg font-semibold text-emerald-600 border-b">
            Sub Categories
            {selectedMain && (
              <span className="text-sm text-gray-500 ml-2">
                ({selectedMain.name})
              </span>
            )}
          </h3>

          {subCategories.length === 0 ? (
            <p className="p-4 text-gray-500 text-sm">
              No sub categories
            </p>
          ) : (
            <ul className="p-4 space-y-2">
              {subCategories.map((sub) => (
                <li
                  key={sub._id}
                  className="flex justify-between items-center border rounded-lg p-3"
                >
                  <span>{sub.name}</span>
                  <button
                    onClick={() => toggleActive(sub._id)}
                    className={`px-3 py-1 text-xs rounded text-white ${
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
          )}
        </div>
      </div>
    </section>
  );
}
