
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
import { NavLink, useNavigate } from "react-router-dom";


import React, { useEffect, useState } from "react";
import api from "../api/axios"; // 🔁 apna axios instance

const LandingPage = () => {

  const navigate = useNavigate();

  // 🔹 Search states

  const [searchText, setSearchText] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  // 🔹 Data states
  const [mainCategories, setMainCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [forms, setForms] = useState([]);

  const [loading, setLoading] = useState(false);

   const isFilterSelected =
    searchText.trim() !== "" || mainCategory !== "" || subCategory !== "";


  /* ===============================
     FETCH MAIN CATEGORIES
  =============================== */
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const res = await api.get("/categories/main");
        setMainCategories(res.data.data);
      } catch (error) {
        console.error("Main category error", error);
      }
    };

    fetchMainCategories();
  }, []);

  /* ===============================
     FETCH SUB CATEGORIES
  =============================== */
  useEffect(() => {
    if (!mainCategory) {
      setSubCategories([]);
      return;
    }

    const fetchSubCategories = async () => {
      try {
        const res = await api.get(
          `/categories/${mainCategory}/sub`
        );
        setSubCategories(res.data.data);
      } catch (error) {
        console.error("Sub category error", error);
      }
    };

    fetchSubCategories();
  }, [mainCategory]);

  /* ===============================
     SEARCH FORMS
  =============================== */
 const handleSearch = () => {
  navigate(
    `/search?search=${searchText}&mainCategory=${mainCategory}&subCategory=${subCategory}`
  );
};


  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-800 overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 text-gray-900 py-14 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 gap-10">

          {/* LEFT */}
          <div className="flex-1 space-y-6 ml-15 text-center md:text-left">
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

      {/* 🔍 SEARCH SECTION */}
       {/* ================= SEARCH SECTION ================= */}
      <section className="bg-emerald-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Find Your <span className="text-emerald-500">Form</span>
        </h2>

        <p className="text-slate-600 mb-8">
          Search directly by form name or browse by category
        </p>

        {/* 🔍 Search Input */}
        <div className="max-w-3xl mx-auto mb-6">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && isFilterSelected && handleSearch()
            }
            placeholder="Search form name (eg: SSC GD 2026, JEE Main)"
            className="w-full p-4 rounded-xl bg-slate-900 text-white border border-emerald-800 placeholder-slate-500 focus:outline-none"
          />
        </div>

        {/* 🔽 Category Selects */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* MAIN CATEGORY */}
          <select
            value={mainCategory}
            onChange={(e) => {
              setMainCategory(e.target.value);
              setSubCategory("");
            }}
            className="p-3 rounded-lg bg-slate-900 text-white border border-emerald-800"
          >
            <option value="">Select Category</option>
            {mainCategories.map((cat) => (
              <option key={cat._id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* SUB CATEGORY */}
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            disabled={!mainCategory}
            className="p-3 rounded-lg bg-slate-900 text-white border border-emerald-800 disabled:opacity-50"
          >
            <option value="">Select Sub Category</option>
            {subCategories.map((sub) => (
              <option key={sub._id} value={sub.slug}>
                {sub.name}
              </option>
            ))}
          </select>

          {/* SEARCH BUTTON */}
          <button
            onClick={handleSearch}
            disabled={!isFilterSelected || loading}
            className={`p-3 rounded-lg font-semibold transition
              ${
                !isFilterSelected || loading
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-emerald-500 text-black hover:bg-emerald-400"
              }
            `}
          >
            {loading ? "Searching..." : "Search Forms"}
          </button>
        </div>
      </div>
    </section>

      {/* ================= SEARCH RESULT =================
      <section className="bg-slate-950 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {forms.length === 0 && !loading && (
            <p className="text-center text-slate-400">
              No forms found
            </p>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {forms.map((form) => (
              <div
                key={form._id}
                className="bg-slate-900 p-5 rounded-xl border border-slate-800"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {form.title}
                </h3>

                <p className="text-slate-400 text-sm mb-3">
                  {form.description}
                </p>

                <p className="text-xs text-emerald-400">
                  {form.mainCategory?.name} /{" "}
                  {form.subCategory?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Features Section */}
      <section className="bg-gradient-to-br from-white via-emerald-50 to-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900"> Why Choose <span className="text-green-500">Fill It</span> </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-2xl mx-auto"> Simplify your form-filling journey with smart & secure features. </p> </div>
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ icon: FaFileUpload, title: "Easy Upload", desc: "Upload your documents quickly." },
          { icon: FaUniversity, title: "College/Govt Forms", desc: "Fill all types of forms easily." },
          { icon: FaLock, title: "Secure Payment", desc: "Encrypted and safe transactions." },
          { icon: FaReceipt, title: "Track Status", desc: "Track every step in real-time." },
          { icon: FaRobot, title: "AI Assistant", desc: "Smart help for choosing forms." },
          { icon: FaMobileAlt, title: "Mobile Friendly", desc: "Use Fill It on any device." },]
            .map((item, index) => (<div key={index} className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition" >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1.5 bg-green-500 rounded-r-lg"></div>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full"> <item.icon className="text-3xl text-green-500" /> </div>
              </div> <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
            </div>))}
        </div>
      </section>
      {/* How Fill It Works */}
      <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How Fill It Works</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-14 max-w-2xl mx-auto"> A simple workflow designed for accuracy, reliability and privacy. </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[{ title: "Fast & Reliable", icon: "⚡", desc: "Quick and efficient processing." },
            { title: "100% Accuracy", icon: "✔️", desc: "Every form checked properly." },
            { title: "Data Privacy", icon: "🔐", desc: "Your data stays secure." },
            { title: "User Satisfaction", icon: "😊", desc: "We ensure the best service." },]
              .map((item, i) => (<div key={i} className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                <div className="bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto text-3xl mb-4">
                  {item.icon} </div> <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p> </div>))}
          </div>
        </div>
      </section>
      {/* Review Section */}
      <div className="bg-white py-16 px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-emerald-700 text-center"> What Our Users Say </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Review Card */}
          {[{
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Aarav Sharma", stars: 5, text: "Fill It made my form process so easy! The employee was very professional, and I got my confirmation instantly.",
          },
          { img: "https://randomuser.me/api/portraits/women/44.jpg", name: "Priya Verma", stars: 4, text: "Fast service and secure process! There was a slight delay in downloading the PDF, but overall a great experience.", },
          { img: "https://randomuser.me/api/portraits/men/51.jpg", name: "Rohit Mehta", stars: 5, text: "The process was super smooth. The employee guided me step-by-step. Highly recommend using Fill It!", },
          { img: "https://randomuser.me/api/portraits/women/65.jpg", name: "Sneha Kapoor", stars: 5, text: "Amazing platform! Filling my form was completely stress-free. Thank you, Fill It!", },
          { img: "https://randomuser.me/api/portraits/men/28.jpg", name: "Aditya Singh", stars: 4, text: "The user interface is clean and simple. Employee support was quick. Definitely using it again!", },]
            .map((review, index) => (<div key={index} className="bg-white border border-emerald-200 text-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition duration-300" >
              <div className="flex items-center mb-4"> <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full border-2 border-emerald-500 mr-4" /> <div>

                <h3 className="font-semibold text-lg text-emerald-700"> {review.name} </h3>
                {/* Stars */}
                <div className="flex"> {[...Array(review.stars)].map((_, i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gold" className="w-5 h-5" >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L3.048 9.1c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
                </svg>))}
                </div>
              </div>
              </div>
              <p className="text-sm text-gray-600">{review.text}</p> </div>))}
        </div>
      </div>
      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-tr from-emerald-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-600 mb-12"> Our Services </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[{ icon: "🗓️", title: "Form Booking", desc: "Book your form slots easily." },
          { icon: "✍️", title: "Smart Form Filling", desc: "AI helps you fill forms accurately." },
          { icon: "📄", title: "Instant PDF", desc: "Get downloadable PDF instantly." },]
            .map((item, i) => (<div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-semibold text-emerald-600">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p> </div>))}
        </div>
        <div className=" h-10 w-100% bg-amber-100 mt-10 gap-30 flex justify-center">
          <NavLink to={"admin"}>
            <a href="#contact" className="hover:text-emerald-600 transition">admin</a>
          </NavLink>
          <NavLink to={"subAdmin"}>
            <a href="#contact" className="hover:text-emerald-600 transition">subadmin</a>
          </NavLink>
          <NavLink to={"emp"}> <a href="#contact" className="hover:text-emerald-600 transition">employee</a>
          </NavLink>
          <NavLink to={"user"}> <a href="#contact" className="hover:text-emerald-600 transition">user</a>
          </NavLink>
        </div>
      </section>
    </div>

  );
};

export default LandingPage;
