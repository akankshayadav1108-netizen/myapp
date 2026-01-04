import React, { useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function VerifyEmailOTP({ user }) {
  // ✅ user directly email string hai
  const [email, setEmail] = useState(user || "");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  /* =========================
     SEND OTP
  ========================= */
  const sendOtp = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "http://localhost:3000/api/v1/user/send-otp",
        {
          sendBy: email,
          otpType: "email",
        }
      );

      console.log("Send OTP Response:", res.data);

      setShowOtpModal(true);
      setTimeout(() => inputsRef.current[0]?.focus(), 300);

    } catch (err) {
      console.error("Send OTP Error:", err);
      setError(err.response?.data?.message || "OTP send failed");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     VERIFY OTP
  ========================= */
  const verifyOtp = async () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Please enter 6 digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        "http://localhost:3000/api/v1/user/verify-otp", // ✅ correct route
        {
          sendBy: email,
          otp: otpValue,
        }
      );

      console.log("Verify OTP Response:", res.data);

      alert("Email verified successfully ✅");
      setShowOtpModal(false);

    } catch (err) {
      console.error("Verify OTP Error:", err);
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     OTP INPUT HANDLERS
  ========================= */
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const newOtp = pasted.split("");
    setOtp((prev) => prev.map((_, i) => newOtp[i] || ""));

    inputsRef.current[Math.min(pasted.length - 1, 5)]?.focus();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-6">
          Email Verification
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-xl mb-4"
        />

        <button
          onClick={sendOtp}
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-3 rounded-xl"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}
      </div>

      <AnimatePresence>
        {showOtpModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-sm"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-lg font-bold text-center mb-4">
                Enter 6 Digit OTP
              </h3>

              <div
                className="flex justify-between gap-2 mb-4"
                onPaste={handlePaste}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    maxLength={1}
                    value={digit}
                    onChange={(e) =>
                      handleChange(e.target.value, index)
                    }
                    onKeyDown={(e) =>
                      handleKeyDown(e, index)
                    }
                    className="w-12 h-12 border text-center rounded-xl"
                  />
                ))}
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center mb-2">
                  {error}
                </p>
              )}

              <button
                onClick={verifyOtp}
                disabled={loading}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                onClick={() => setShowOtpModal(false)}
                className="w-full mt-3 text-gray-500 text-sm"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
