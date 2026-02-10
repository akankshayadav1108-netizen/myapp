import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();

  /* ================= FORM STATE ================= */
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    mainCategory: "",
    subCategory: "",
    applicationStartDate: "",
    applicationEndDate: "",
    formFees: "",
    platformCharge: "",
    termsAndConditions: ""
  });


  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  /* ================= FETCH MAIN CATEGORIES ================= */
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const res = await api.get("/categories/main");
        setMainCategories(res.data?.data || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMainCategories();
  }, []);

  /* ================= FETCH SUB CATEGORIES ================= */
  useEffect(() => {
    if (!formData.mainCategory) {
      setSubCategories([]);
      setFormData(p => ({ ...p, subCategory: "" }));
      return;
    }

    const selectedMain = mainCategories.find(
      m => m._id === formData.mainCategory
    );

    if (!selectedMain) return;

    api
      .get(`/categories/${selectedMain.slug}/sub`)
      .then(res => setSubCategories(res.data?.data || []));
  }, [formData.mainCategory, mainCategories]);

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/form/create", formData);
      alert("Form Created Successfully");
      navigate("/adminDashboard/formrequest");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Form create failed");
    }
  };

  /* ================= HANDLER ================= */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* ================= UI ================= */
  return (
    <section className="min-h-screen bg-white p-8 text-black">
      <div className="max-w-2xl mx-auto border border-emerald-500 rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-emerald-600 mb-6">
          Create New Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* TITLE */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
            required
          />

          {/* SLUG */}
          <input
            type="text"
            name="slug"
            placeholder="Slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          {/* MAIN CATEGORY */}
          <select
            name="mainCategory"
            value={formData.mainCategory}
            onChange={handleChange}
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          >

            <option value="">Select Main Category</option>
            {mainCategories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* SUB CATEGORY */}
          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            required
            disabled={!formData.mainCategory}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          >

            <option value="">Select Sub Category</option>
            {subCategories.map((sub) => (
              <option key={sub._id} value={sub._id}>
                {sub.name}
              </option>
            ))}
          </select>

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
            required
          />

          {/* DATES */}
          <input
            type="date"
            name="applicationStartDate"
            value={formData.applicationStartDate}
            onChange={handleChange}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
            required
          />

          <input
            type="date"
            name="applicationEndDate"
            value={formData.applicationEndDate}
            onChange={handleChange}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
            required
          />

          {/* FEES */}
          <input
            type="number"
            name="formFees"
            placeholder="Form Fees"
            value={formData.formFees}
            onChange={handleChange}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
            required
          />

          <input
            type="number"
            name="platformCharge"
            placeholder="Platform Charge"
            value={formData.platformCharge}
            onChange={handleChange}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
            required
          />

          {/* TERMS */}
          <textarea
            name="termsAndConditions"
            placeholder="Terms & Conditions"
            value={formData.termsAndConditions}
            onChange={handleChange}
            rows={3}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 font-semibold"
          >
            Create Form
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateForm;
