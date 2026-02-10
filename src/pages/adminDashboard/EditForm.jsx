import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = () => {
  const navigate = useNavigate();
  const { formId } = useParams();

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
  const [loading, setLoading] = useState(false);

  /* ================= FETCH MAIN CATEGORIES ================= */
  useEffect(() => {
    api.get("/categories/main")
      .then(res => setMainCategories(res.data?.data || []))
      .catch(console.error);
  }, []);

  /* ================= FETCH FORM DETAILS ================= */
  useEffect(() => {
  const fetchForm = async () => {
    try {
      setLoading(true);

      const res = await api.get(`/form/getform/${formId}`);
      const data = res.data.data;

      setFormData({
        title: data.title || "",
        slug: data.slug || "",
        description: data.description || "",
        mainCategory: data.mainCategory?._id || "",
        subCategory: data.subCategory?._id || "",
        applicationStartDate: data.applicationStartDate?.slice(0, 10) || "",
        applicationEndDate: data.applicationEndDate?.slice(0, 10) || "",
        formFees: data.formFees || "",
        platformCharge: data.platformCharge || "",
        termsAndConditions: data.termsAndConditions || ""
      });

    } catch (err) {
      console.error(err);
      alert("Failed to load form");
    } finally {
      setLoading(false);
    }
  };

  fetchForm();
}, [formId]);

  /* ================= FETCH SUB CATEGORIES ================= */
  useEffect(() => {
    if (!formData.mainCategory) {
      setSubCategories([]);
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

  /* ================= UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/form/update/${formId}`, formData);
      alert("Form Updated Successfully");
      navigate("/admin/formrequest");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Form update failed");
    }
  };

  /* ================= HANDLER ================= */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (loading) return <p className="p-6">Loading...</p>;

  /* ================= UI ================= */
  return (
    <section className="min-h-screen bg-white p-8 text-black">
      <div className="max-w-2xl mx-auto border border-emerald-500 rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-emerald-600 mb-6">
          Edit Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <select
            name="mainCategory"
            value={formData.mainCategory}
            onChange={handleChange}
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          >
            <option value="">Select Main Category</option>
            {mainCategories.map(cat => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            required
            disabled={!formData.mainCategory}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          >
            <option value="">Select Sub Category</option>
            {subCategories.map(sub => (
              <option key={sub._id} value={sub._id}>
                {sub.name}
              </option>
            ))}
          </select>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <input
            type="date"
            name="applicationStartDate"
            value={formData.applicationStartDate}
            onChange={handleChange}
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <input
            type="date"
            name="applicationEndDate"
            value={formData.applicationEndDate}
            onChange={handleChange}
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <input
            type="number"
            name="formFees"
            value={formData.formFees}
            onChange={handleChange}
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <input
            type="number"
            name="platformCharge"
            value={formData.platformCharge}
            onChange={handleChange}
            required
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <textarea
            name="termsAndConditions"
            value={formData.termsAndConditions}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border border-emerald-500 rounded-xl px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 font-semibold"
          >
            Update Form
          </button>

        </form>
      </div>
    </section>
  );
};

export default EditForm;
