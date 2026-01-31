import React, { useEffect, useState } from "react";
import {
  Pencil,
  Trash2,
  UserX,
  KeyRound,
  Users,
  UserCheck,
  UserX as InactiveIcon,
  Search,
  X
} from "lucide-react";
import api from "../../api/axios";

export default function AllEmployee() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: ""
  });

  /* =========================
     GET ALL EMPLOYEES
  ========================= */
  const getAllEmployees = async () => {
    try {
      const res = await api.get("/employees/get-all");
      setEmployees(res.data.data || []);
    } catch (err) {
      console.error("GET EMPLOYEE ERROR 👉", err);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  /* =========================
     CREATE EMPLOYEE
  ========================= */
  const createEmployee = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employees/create", formData);
      setOpenModal(false);
      resetForm();
      getAllEmployees();
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  /* =========================
     UPDATE EMPLOYEE
  ========================= */
  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/employees/update/${selectedId}`, formData);
      setEditModal(false);
      resetForm();
      getAllEmployees();
    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    }
  };

  /* =========================
     DELETE EMPLOYEE
  ========================= */
  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await api.delete(`/employees/delete/${id}`);
      getAllEmployees();
    } catch (err) {
      alert("Delete failed");
    }
  };

  /* =========================
     HELPERS
  ========================= */
  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      mobile: ""
    });
    setSelectedId(null);
  };

  const openEdit = (emp) => {
    setSelectedId(emp._id);
    setFormData({
      username: emp.username,
      email: emp.email,
      password: "",
      mobile: emp.mobile || ""
    });
    setEditModal(true);
  };

  /* =========================
     FILTER
  ========================= */
  const data = employees.filter(
    (item) =>
      item.username?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase())
  );

  const totalEmp = employees.length;
  const activeEmp = employees.filter(e => e.is_active !== false).length;
  const inactiveEmp = totalEmp - activeEmp;

  return (
    <div className="p-8 bg-white min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-emerald-700">
          Employee Management
        </h1>

        <div className="flex items-center bg-white shadow px-3 py-2 rounded-xl w-72 border border-emerald-200">
          <Search size={18} className="mr-2 text-gray-400" />
          <input
            placeholder="Search Employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-emerald-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-emerald-700 transition"
        >
          + Add Employee
        </button>
      </div>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow p-6 rounded-xl flex gap-4 items-center border border-emerald-100">
          <Users size={40} className="text-emerald-700" />
          <div>
            <h3 className="text-gray-600">Total Employees</h3>
            <p className="text-2xl font-bold text-emerald-700">{totalEmp}</p>
          </div>
        </div>

        <div className="bg-white shadow p-6 rounded-xl flex gap-4 items-center border border-emerald-100">
          <UserCheck size={40} className="text-emerald-600" />
          <div>
            <h3 className="text-gray-600">Active Employees</h3>
            <p className="text-2xl font-bold text-emerald-600">{activeEmp}</p>
          </div>
        </div>

        <div className="bg-white shadow p-6 rounded-xl flex gap-4 items-center border border-emerald-100">
          <InactiveIcon size={40} className="text-red-600" />
          <div>
            <h3 className="text-gray-600">Inactive Employees</h3>
            <p className="text-2xl font-bold text-red-600">{inactiveEmp}</p>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-xl overflow-hidden border border-emerald-100">
        <table className="w-full">
          <thead className="bg-emerald-50 text-emerald-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-b hover:bg-emerald-50/50 transition-all">
                <td className="p-4">{item.username}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4 font-semibold text-emerald-700">{item.role}</td>
                <td className="p-4 flex gap-4 justify-center">
                  <Pencil
                    onClick={() => openEdit(item)}
                    className="text-emerald-600 cursor-pointer hover:text-emerald-800"
                  />
                  <Trash2
                    onClick={() => deleteEmployee(item._id)}
                    className="text-red-600 cursor-pointer hover:text-red-800"
                  />
                  <KeyRound className="text-yellow-600 cursor-pointer hover:text-yellow-700" />
                  <UserX className="text-emerald-700 cursor-pointer hover:text-emerald-900" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CREATE MODAL */}
      {openModal && (
        <Modal
          title="Create Employee"
          onClose={() => setOpenModal(false)}
          onSubmit={createEmployee}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {/* EDIT MODAL */}
      {editModal && (
        <Modal
          title="Update Employee"
          onClose={() => setEditModal(false)}
          onSubmit={updateEmployee}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

/* =========================
   REUSABLE MODAL
========================= */
function Modal({ title, onClose, onSubmit, formData, setFormData }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-[400px] rounded-xl p-6 relative border border-emerald-200 shadow-lg">
        <X onClick={onClose} className="absolute right-4 top-4 cursor-pointer text-gray-500 hover:text-gray-700" />

        <h2 className="text-xl font-bold mb-4 text-emerald-700">{title}</h2>

        <form onSubmit={onSubmit} className="space-y-3">
          <input
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full border border-emerald-200 p-2 rounded focus:ring-1 focus:ring-emerald-400"
          />

          <input
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-emerald-200 p-2 rounded focus:ring-1 focus:ring-emerald-400"
          />

          <input
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full border border-emerald-200 p-2 rounded focus:ring-1 focus:ring-emerald-400"
          />

          <input
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full border border-emerald-200 p-2 rounded focus:ring-1 focus:ring-emerald-400"
          />

          <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition">{title}</button>
        </form>
      </div>
    </div>
  );
}
