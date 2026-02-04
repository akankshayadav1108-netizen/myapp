import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";

export default function Login() {

  const navigate = useNavigate();
const dispatch= useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/user/login", formData);

      if(res.data){
        dispatch(loginSuccess(res.data))
      }
      
      const role = res.data?.user?.role;

      if (role === "employee") navigate("/emp");
      else if (role === "admin") navigate("/admin");
      else if (role === "subAdmin") navigate("/subAdmin");
      else if (role === "user") navigate("/user");
      else navigate("/dashboard");

      


    } catch (err) {
      if (err.response) {
        setError(
          err.response.data?.errors?.[0] ||
          err.response.data?.message ||
          "Login failed"
        );
      } else {
        setError("Server not responding");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full shadow-xl shadow-emerald-200">

        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-4">
          Welcome Back 👋
        </h2>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="text-emerald-900 font-medium">Email</label>
            <div className="flex items-center gap-2 px-4 py-3 border border-emerald-200 rounded-xl focus-within:border-emerald-500">
              <Mail className="w-5 h-5 text-emerald-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-emerald-900 font-medium">Password</label>
            <div className="flex items-center gap-2 px-4 py-3 border border-emerald-200 rounded-xl focus-within:border-emerald-500">
              <Lock className="w-5 h-5 text-emerald-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}
