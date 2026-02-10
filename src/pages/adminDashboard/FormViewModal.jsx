import React from "react";

const FormViewModal = ({ open, onClose, form }) => {
  if (!open || !form) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-emerald-600 mb-4">
          Form Details
        </h2>

        <div className="space-y-2 text-sm">
          <p><b>Title:</b> {form.title}</p>
          <p><b>Description:</b> {form.description}</p>
          <p><b>Main Category:</b> {form.mainCategory?.name || form.mainCategory}</p>
          <p><b>Sub Category:</b> {form.subCategory?.name || form.subCategory}</p>
          <p><b>Start Date:</b> {form.applicationStartDate}</p>
          <p><b>End Date:</b> {form.applicationEndDate}</p>
          <p><b>Form Fees:</b> ₹{form.formFees}</p>
          <p><b>Platform Charge:</b> ₹{form.platformCharge}</p>
          <p><b>Total Payable:</b> ₹{form.totalPayable}</p>
          <p><b>Terms:</b> {form.termsAndConditions}</p>
        </div>
      </div>
    </div>
  );
};

export default FormViewModal;
