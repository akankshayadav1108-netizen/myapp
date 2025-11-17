import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OtpVerify() {
  const navigate = useNavigate();
  const location = useLocation();

  const { email } = location.state || {};

  const OTP_LENGTH = 5;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const otpRefs = useRef([]);

  otpRefs.current = Array.from(
    { length: OTP_LENGTH },
    (_, i) => otpRefs.current[i] || React.createRef()
  );

  const [error, setError] = useState("");

  function handleOtpChange(e, idx) {
    const val = e.target.value.replace(/\D/g, "").slice(0, 1);

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    if (val && idx < OTP_LENGTH - 1) {
      otpRefs.current[idx + 1].current.focus();
    }
  }

  function handleVerify() {
    if (otp.some((d) => d === "")) {
      setError("Please enter complete OTP");
      return;
    }

    alert("Account Created Successfully!");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl border border-emerald-100 p-8 rounded-2xl w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-2">
          Verify OTP
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mb-6">
          Enter the 5-digit OTP sent to  
          <br />
          <span className="text-emerald-700 font-medium">
            {email || "demo@example.com"}
          </span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-4">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={otpRefs.current[i]}
              value={digit}
              onChange={(e) => handleOtpChange(e, i)}
              maxLength={1}
              className="w-14 h-14 text-center text-xl border border-emerald-200 rounded-xl 
              bg-emerald-50 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300 transition"
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center text-sm mb-2">{error}</p>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 mt-3 rounded-lg 
          font-semibold shadow-md transition-all"
        >
          Verify OTP
        </button>

        {/* Resend OTP */}
        <button
          onClick={() => alert("OTP Resent!")}
          className="mt-4 w-full text-emerald-700 text-sm font-medium hover:underline"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}
