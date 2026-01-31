import React, { useEffect, useState } from "react";
import {
  Pencil,
  Trash2,
  KeyRound,
  UserX,
  Search,
  X
} from "lucide-react";
import api from "../../api/axios";

export default function AllSubAdmin() {

  /* ================= STATES ================= */
  const [subAdmins, setSubAdmins] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: ""
  });

  /* ================= GET ALL ================= */
  const getAllSubAdmins = async () => {
    try {
      const res = await api.get("subadmin/get-all");
      setSubAdmins(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllSubAdmins();
  }, []);

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await api.put(`subadmin/update/${editId}`, formData);
      } else {
        await api.post("subadmin/create", formData);
      }

      setOpenModal(false);
      setEditId(null);
      setFormData({
        username: "",
        email: "",
        password: "",
        mobile: ""
      });

      getAllSubAdmins();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  /* ================= DELETE ================= */
  const deleteSubAdmin = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await api.delete(`subadmin/delete/${id}`);
      getAllSubAdmins();
    } catch (err) {
      alert("Delete failed");
    }
  };

  /* ================= FILTER ================= */
  const data = subAdmins.filter(
    (item) =>
      item.username?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-700">
          Sub-Admin Management
        </h1>

        <div className="flex items-center bg-white shadow px-3 py-2 rounded-xl w-72 border">
          <Search size={18} className="mr-2 text-gray-500" />
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <button
          onClick={() => {
            setEditId(null);
            setFormData({
              username: "",
              email: "",
              password: "",
              mobile: ""
            });
            setOpenModal(true);
          }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl"
        >
          + Add Sub-Admin
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-emerald-700 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-emerald-50"
              >
                <td className="p-4">{item.username}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4 font-semibold text-emerald-700">
                  {item.role}
                </td>
                <td className="p-4 flex gap-4 justify-center">

                  <Pencil
                    className="text-emerald-600 cursor-pointer"
                    onClick={() => {
                      setEditId(item._id);
                      setFormData({
                        username: item.username,
                        email: item.email,
                        password: "",
                        mobile: item.mobile
                      });
                      setOpenModal(true);
                    }}
                  />

                  <Trash2
                    className="text-red-600 cursor-pointer"
                    onClick={() => deleteSubAdmin(item._id)}
                  />

                  <KeyRound className="text-yellow-500 cursor-pointer" />
                  <UserX className="text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-[400px] rounded-xl p-6 relative">

            <X
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 cursor-pointer"
            />

            <h2 className="text-xl font-bold mb-4 text-emerald-700">
              {editId ? "Update Sub-Admin" : "Create Sub-Admin"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                placeholder="Username"
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Password"
                type="password"
                required={!editId}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                placeholder="Mobile"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded">
                {editId ? "Update" : "Create"}
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}
