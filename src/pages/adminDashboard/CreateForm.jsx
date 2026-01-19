import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    category: "",
    applicationStartDate: "",
    applicationEndDate: "",
    documents: "",
    formFees: "",
    platformCharge: "",
    termsAndConditions: ""
  });

  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    const createForm = async () => {
      try {
        const payload = { ...formData };
        if (!payload.slug) delete payload.slug;

        await api.post("/form/create", payload);
        alert("Form Created Successfully");
        setSubmitForm(false);
        navigate("/adminDashboard/form-request");
      } catch (err) {
        console.log(err);
        setSubmitForm(false);
      }
    };

    if (submitForm) createForm();
  }, [submitForm]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitForm(true);
  };

  return (
    <section className="min-h-screen bg-white p-8 text-black">
      <div className="max-w-2xl mx-auto bg-white border border-emerald-500 rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-emerald-600 mb-6">
          Create New Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {["title","slug","category","documents","termsAndConditions"].map((name,i)=>(
            <div key={i}>
              <label className="block mb-1 font-medium text-emerald-600 capitalize">
                {name.replace(/([A-Z])/g," $1")}
              </label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border border-emerald-500 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 font-medium text-emerald-600">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange}
              rows={4}
              className="w-full border border-emerald-500 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
          </div>

          {["applicationStartDate","applicationEndDate"].map((name,i)=>(
            <div key={i}>
              <label className="block mb-1 font-medium text-emerald-600">
                {name.includes("Start")?"Application Start Date":"Application End Date"}
              </label>
              <input type="date" name={name} value={formData[name]} onChange={handleChange}
                className="w-full border border-emerald-500 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
            </div>
          ))}

          {["formFees","platformCharge"].map((name,i)=>(
            <div key={i}>
              <label className="block mb-1 font-medium text-emerald-600 capitalize">{name}</label>
              <input type="number" name={name} value={formData[name]} onChange={handleChange}
                className="w-full border border-emerald-500 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 transition font-semibold">
            Create Form
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateForm;
