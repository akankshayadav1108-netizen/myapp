import React from "react";
import {
  Clock,
  FileWarning,
  BadgeInfo,
  AlertTriangle,
  FileCheck,
  CreditCard,
  Calendar,
} from "lucide-react";

export default function UserPending() {
  const pending = [
    {
      id: "FRM-1024",
      name: "Aadhar Update Form",
      bookingDate: "12 Nov 2025",
      status: "Pending",
      paymentStatus: "Paid",
      note: "Document not uploaded",
      type: "error",
    },
    {
      id: "FRM-2041",
      name: "PAN Application Form",
      bookingDate: "10 Nov 2025",
      status: "Pending",
      paymentStatus: "Unpaid",
      note: "Payment not completed",
      type: "warning",
    },
    {
      id: "FRM-3081",
      name: "College Admission Form",
      bookingDate: "05 Nov 2025",
      status: "Pending",
      paymentStatus: "Paid",
      note: "Waiting for admin verification",
      type: "info",
    },
  ];

  const getNoteStyle = (type) => {
    switch (type) {
      case "error":
        return "text-red-700 bg-red-100 border-red-300";
      case "warning":
        return "text-yellow-700 bg-yellow-100 border-yellow-300";
      default:
        return "text-blue-700 bg-blue-100 border-blue-300";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "error":
        return <AlertTriangle size={18} className="text-red-700" />;
      case "warning":
        return <FileWarning size={18} className="text-yellow-700" />;
      default:
        return <BadgeInfo size={18} className="text-blue-700" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-emerald-700">Pending Requests</h1>
        <p className="text-gray-600">Here you can track your ongoing form submissions.</p>

        <div className="space-y-5">
          {pending.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-5 rounded-2xl border border-emerald-200 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>

                <p className="text-sm flex items-center gap-2">
                  <Clock size={16} className="text-yellow-600" />
                  <span className="text-yellow-700 font-semibold">{item.status}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <FileCheck size={16} className="text-emerald-600" />
                  <span>Form ID: {item.id}</span>
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={16} className="text-emerald-600" />
                  Booking Date: {item.bookingDate}
                </p>

                <p className="flex items-center gap-2">
                  <CreditCard
                    size={16}
                    className={
                      item.paymentStatus === "Paid" ? "text-emerald-600" : "text-red-600"
                    }
                  />
                  <span>
                    Payment: {" "}
                    <span
                      className={
                        item.paymentStatus === "Paid"
                          ? "text-emerald-700 font-semibold"
                          : "text-red-700 font-semibold"
                      }
                    >
                      {item.paymentStatus}
                    </span>
                  </span>
                </p>
              </div>

              <div
                className={`mt-4 p-3 rounded-xl border flex items-center gap-2 ${getNoteStyle(
                  item.type
                )}`}
              >
                {getIcon(item.type)}
                <p className="text-sm">{item.note}</p>
              </div>

              <div className="mt-4 flex justify-end">
                {item.paymentStatus === "Unpaid" ? (
                  <button className="bg-emerald-600 hover:bg-emerald-700 px-5 py-2 rounded-xl text-white transition">
                    Complete Payment
                  </button>
                ) : item.type === "error" ? (
                  <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-white transition">
                    Upload Document
                  </button>
                ) : (
                  <button className="bg-emerald-600 hover:bg-emerald-700 px-5 py-2 rounded-xl text-white transition">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {pending.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No pending requests found.</p>
        )}
      </div>
    </div>
  );
}
