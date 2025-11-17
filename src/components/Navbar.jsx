import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-emerald-600 h-10"></div>

      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md w-full  transition-all duration-300">
        <div className="max-w-7xl mx-auto h-[100px] flex justify-between items-center px-4 md:px-6">

          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xl shadow-lg">
              F
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-wide">
              Fill<span className="text-emerald-600">It</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-gray-700 font-semibold">
            <a href="#home" className="hover:text-emerald-600 transition">Home</a>
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="Login">
              <button className="px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-500 hover:text-white transition shadow-sm">
                Login
              </button>
            </NavLink>

            <NavLink to="Signup">
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-sm">
                Sign Up
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-emerald-600 focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden bg-white shadow-lg rounded-b-2xl px-6 py-5 space-y-5 text-gray-700 font-medium transition-all duration-300 
          ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <a href="#home" className="block hover:text-emerald-600">Home</a>
          <a href="#about" className="block hover:text-emerald-600">About</a>
          <a href="#contact" className="block hover:text-emerald-600">Contact</a>

          <div className="pt-3 border-t border-gray-200">
            <NavLink to="/Login">
              <button className="w-full mb-3 px-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-500 hover:text-white transition">
                Login
              </button>
            </NavLink>

            <NavLink to="/Signup">
              <button className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet/>
    </>
  );
};

export default Navbar;
