import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-4">

      <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-10 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Login to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* EMAIL */}
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Email</label>
            <div className="flex items-center gap-2 px-4 py-3 border rounded-xl bg-emerald-50 
              border-emerald-200 focus-within:ring-2 focus-within:ring-emerald-400 transition">
              <Mail className="w-5 h-5 text-emerald-600" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center gap-2 px-4 py-3 border rounded-xl bg-emerald-50 
              border-emerald-200 focus-within:ring-2 focus-within:ring-emerald-400 transition">
              <Lock className="w-5 h-5 text-emerald-600" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <Link
              to="/forget"
              className="text-emerald-600 hover:text-emerald-800 font-medium transition"
            >
              Forgot Password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <NavLink to="/userpanel">
         <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold 
            hover:bg-emerald-700 transition-all duration-300 shadow-md"
          >
            Login
          </button>

          </NavLink>
          
        </form>

        {/* OR Divider */}
        <div className="text-center">
          <div className="flex items-center my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Signup Navigation */}
          <Link
            to="/signup"
            className="text-emerald-600 hover:text-emerald-800 font-medium transition"
          >
            Don’t have an account? Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}
