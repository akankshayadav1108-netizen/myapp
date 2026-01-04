import axios from "axios";
import React, { useState } from "react";
import VerifyEmailOTP from "../components/authentication/VerifyEmailOTP";

export default function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    role: "user", // ✅ lowercase (backend match)
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [emailVerified, setEmailVerified] = useState(null);
  const [userEmail, setUserEmail] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Username required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile required";
    if (!formData.password.trim()) newErrors.password = "Password required";
    if (!formData.agree) newErrors.agree = "Please accept terms & conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        formData
      );

      console.log("Signup successful:", response.data);

      if (response.data?.user) {
        setUserEmail(response.data.user.email);
        setEmailVerified(response.data.user.is_email_verified);
      }

    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
    }
  };

  /* =========================
     SHOW OTP SCREEN
  ========================= */
  if (emailVerified === false) {
    return <VerifyEmailOTP user={userEmail} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-emerald-700 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-3 border rounded-lg"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="w-full p-3 border rounded-lg"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50"
          >
            <option value="user">user</option>
            <option value="employee">employee</option>
            <option value="subadmin">subadmin</option>
          </select>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to Terms & Conditions
          </label>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          <button
            type="submit"
            disabled={!formData.agree}
            className={`w-full py-3 text-white rounded-lg font-semibold 
              ${formData.agree
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-gray-400 cursor-not-allowed"}`}
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
}
