import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiCloudUpload } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import {
  FaFileUpload,
  FaUniversity,
  FaLock,
  FaReceipt,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-800 overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 text-gray-900 py-14 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 gap-10">

          {/* LEFT */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Simplify Your Form Filling <br />
              Process with{" "}
              <span className="text-emerald-600">
                Fill<span className="text-gray-900">It</span>
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              No more queues. Upload, book, pay, and get your documents filled from home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NavLink to="Login">
                <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 shadow-lg">
                  Get Started
                </button>
              </NavLink>

              <button className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition">
                Get Demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2023/7/329845866/ZZ/KV/DC/13334865/form-filling-projects-250x250.jpg"
                alt="Form Filling Illustration"
                className="relative rounded-2xl shadow-2xl w-[260px] sm:w-[330px] md:w-[430px] border border-emerald-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-white via-emerald-50 to-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-green-500">Fill It</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
            Simplify your form-filling journey with smart & secure features.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: FaFileUpload, title: "Easy Upload", desc: "Upload your documents quickly." },
            { icon: FaUniversity, title: "College/Govt Forms", desc: "Fill all types of forms easily." },
            { icon: FaLock, title: "Secure Payment", desc: "Encrypted and safe transactions." },
            { icon: FaReceipt, title: "Track Status", desc: "Track every step in real-time." },
            { icon: FaRobot, title: "AI Assistant", desc: "Smart help for choosing forms." },
            { icon: FaMobileAlt, title: "Mobile Friendly", desc: "Use Fill It on any device." },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1.5 bg-green-500 rounded-r-lg"></div>

              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <item.icon className="text-3xl text-green-500" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Fill It Works */}
      <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How Fill It Works</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-14 max-w-2xl mx-auto">
            A simple workflow designed for accuracy, reliability and privacy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Fast & Reliable", icon: "⚡", desc: "Quick and efficient processing." },
              { title: "100% Accuracy", icon: "✔️", desc: "Every form checked properly." },
              { title: "Data Privacy", icon: "🔐", desc: "Your data stays secure." },
              { title: "User Satisfaction", icon: "😊", desc: "We ensure the best service." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                <div className="bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">What Our Users Say</h2>
          <p className="text-gray-600 mt-2">Trusted by thousands of users.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-6 bg-green-50 rounded-2xl shadow-md border border-green-300 hover:shadow-xl transition">
              <div className="flex gap-1 mb-3">
                {Array(5).fill(0).map((_, j) => (
                  <AiFillStar key={j} className="text-yellow-500 text-xl" />
                ))}
              </div>

              <p className="text-gray-700 mb-4">
                “Amazing service! Very helpful and fast.”
              </p>

              <h3 className="font-semibold text-green-700">User {i + 1}</h3>
              <p className="text-sm text-gray-500">Customer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-tr from-emerald-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-600 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: "🗓️", title: "Form Booking", desc: "Book your form slots easily." },
            { icon: "✍️", title: "Smart Form Filling", desc: "AI helps you fill forms accurately." },
            { icon: "📄", title: "Instant PDF", desc: "Get downloadable PDF instantly." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-emerald-600">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
