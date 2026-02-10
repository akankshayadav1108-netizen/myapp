import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await api.get(`/form/getform/${id}`);

        setForm(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchForm();
  }, [id]);

  if (!form) return <div className="p-6">Loading...</div>;

  return (
    <section className="p-6 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto border rounded-xl p-6 shadow">

        <button
          onClick={() => navigate(-1)}
          className="text-emerald-600 mb-4 font-medium"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-semibold text-emerald-700 mb-6">
          View Form Details
        </h1>

        <div className="space-y-3 text-sm">
          <p><b>Title:</b> {form.title}</p>
          <p><b>Description:</b> {form.description}</p>
          <p><b>Main Category:</b> {form.mainCategory?.name}</p>
          <p><b>Sub Category:</b> {form.subCategory?.name}</p>
          <p><b>Start Date:</b> {form.applicationStartDate}</p>
          <p><b>End Date:</b> {form.applicationEndDate}</p>
          <p><b>Form Fees:</b> ₹{form.formFees}</p>
          <p><b>Platform Charge:</b> ₹{form.platformCharge}</p>
          <p><b>Total Payable:</b> ₹{form.totalPayable}</p>

          <div>
            <b>Terms & Conditions:</b>
            <div className="mt-1 p-3 bg-gray-50 rounded">
              {form.termsAndConditions}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
