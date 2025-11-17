import React from "react";
import { motion } from "framer-motion";
import { BiCloudUpload } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
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
    <div className="min-h-screen font-sans bg-gradient-to-br from-white via-green-50 to-emerald-100 text-gray-800">
     

      {/* Hero Section */}
    <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 text-gray-900 py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-12">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Simplify Your Form Filling <br />
            Process with{" "}
            <span className="text-emerald-600">
              Fill<span className="text-gray-900">It</span>
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            No more queues, no more confusion. Book, upload, pay, and get your official
            forms filled from home — fast, secure, and hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NavLink to="Login">
           <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 shadow-lg hover:shadow-emerald-200">
              Get Started
            </button>
          </NavLink>
           
            <button className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition duration-300">
              Get Demo
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/7/329845866/ZZ/KV/DC/13334865/form-filling-projects-250x250.jpg"
              alt="Form Filling Illustration"
              className="relative rounded-2xl shadow-2xl w-[450px] max-w-md md:max-w-lg border border-emerald-100"
            />
          </div>
        </div>
      </div>
    </section>

 {/* Features Section */}

 <section className="bg-gradient-to-br from-white via-emerald-50 to-white py-16 px-6 lg:px-20">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose <span className="text-green-500">Fill It</span>
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Simplify your form-filling experience with secure and smart solutions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-green-500 rounded-r-lg"></div>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <FaFileUpload className="text-3xl text-green-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Upload Document</h3>
          <p className="text-gray-600 text-sm mb-4">
            Upload your documents quickly and securely without any hassle.
          </p>
          <p className="text-green-500 font-medium text-sm">Learn more →</p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-green-500 rounded-r-lg"></div>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <FaUniversity className="text-3xl text-green-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Fill Form (College & Govt)</h3>
          <p className="text-gray-600 text-sm mb-4">
            Easily fill and submit your college and government forms online.
          </p>
          <p className="text-green-500 font-medium text-sm">Learn more →</p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-green-500 rounded-r-lg"></div>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <FaLock className="text-3xl text-green-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payment</h3>
          <p className="text-gray-600 text-sm mb-4">
            Enjoy safe and encrypted online payments for all your services.
          </p>
          <p className="text-green-500 font-medium text-sm">Learn more →</p>
        </div>

        {/* Card 4 */}
        <div className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-green-500 rounded-r-lg"></div>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <FaReceipt className="text-3xl text-green-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Status & Get Receipt</h3>
          <p className="text-gray-600 text-sm mb-4">
            Check your form status anytime and get instant digital receipts.
          </p>
          <p className="text-green-500 font-medium text-sm">Learn more →</p>
        </div>

        {/* Card 5 */}
        <div className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-green-500 rounded-r-lg"></div>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <FaRobot className="text-3xl text-green-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Assistant</h3>
          <p className="text-gray-600 text-sm mb-4">
            Get real-time guidance and support with our AI-powered assistant.
          </p>
          <p className="text-green-500 font-medium text-sm">Learn more →</p>
        </div>

        {/* Card 6 */}
        <div className="relative bg-white border border-gray-100 rounded-2xl shadow-md p-6 text-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1.5 bg-green-500 rounded-r-lg"></div>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-green-100 rounded-full">
              <FaMobileAlt className="text-3xl text-green-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile Friendly</h3>
          <p className="text-gray-600 text-sm mb-4">
            Access Fill It easily on mobile and desktop with full responsiveness.
          </p>
          <p className="text-green-500 font-medium text-sm">Learn more →</p>
        </div>

      </div>
    </section>


      {/* About Section */}
  <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          How <span className="text-emerald-600">Fill It</span> Works
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Fill It ensures your form-filling experience is smooth, accurate, and secure from start to finish.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-md">
            <div className="bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              {/* Fast & Reliable Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
            <p className="text-gray-600 text-sm">Quick and efficient form processing with consistent results.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-md">
            <div className="bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              {/* Accuracy Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Accuracy</h3>
            <p className="text-gray-600 text-sm">Every form is checked carefully to ensure perfect accuracy.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-md">
            <div className="bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              {/* Privacy Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3v1h-6v-1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10H4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Privacy</h3>
            <p className="text-gray-600 text-sm">Your documents and details remain safe and confidential.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-md">
            <div className="bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6">
              {/* User Satisfaction Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M15 10h.01M9 10h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Satisfaction</h3>
            <p className="text-gray-600 text-sm">We deliver top-quality service that users love and trust.</p>
          </div>
        </div>
      </div>
    </section>


      {/* <section id="about" className="py-20 px-6 md:px-20 text-center bg-white">
        <h2 className="text-4xl font-bold text-emerald-600 mb-6">About Fill It</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          <b>Fill It</b> is an intelligent digital platform that automates and simplifies
          the process of filling government and official forms. From booking an appointment
          to generating your final PDF, we handle it all efficiently.  
          Save your time, reduce errors, and ensure secure data management with Fill It.
        </p>
      </section> */}
     {/* Review section */}
     <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mt-2">
          Genuine reviews from people who trust Fill It.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Review Card 1 */}
        <div className="p-6 bg-green-50 rounded-2xl shadow-md border border-green-300 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-1 mb-3">
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
          </div>

          <p className="text-gray-700 mb-4">
            “Fill It made the entire form filling process super easy. I uploaded
            the documents and received my completed form the same day!”
          </p>

          <h3 className="font-semibold text-green-700">Rahul Sharma</h3>
          <p className="text-sm text-gray-500">Student</p>
        </div>

        {/* Review Card 2 */}
        <div className="p-6 bg-green-50 rounded-2xl shadow-md border border-green-300 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-1 mb-3">
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
          </div>

          <p className="text-gray-700 mb-4">
            “The service is fast and reliable. The tracking feature and secure
            payment method gave me complete confidence. Highly recommended!”
          </p>

          <h3 className="font-semibold text-green-700">Priya Verma</h3>
          <p className="text-sm text-gray-500">Working Professional</p>
        </div>

        {/* Review Card 3 */}
        <div className="p-6 bg-green-50 rounded-2xl shadow-md border border-green-300 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-1 mb-3">
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
          </div>

          <p className="text-gray-700 mb-4">
            “Great experience! The AI assistant helped me choose the correct
            government form. Smooth and user-friendly platform.”
          </p>

          <h3 className="font-semibold text-green-700">Amit Singh</h3>
          <p className="text-sm text-gray-500">Business Owner</p>
        </div>
      </div>
    </section>




      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-gradient-to-tr from-emerald-50 to-white">
        <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "🗓️",
              title: "Form Booking",
              desc: "Pre-book your government form slots and save valuable time.",
            },
            {
              icon: "✍️",
              title: "Smart Form Filling",
              desc: "AI assistance ensures accurate and quick form filling for all users.",
            },
            {
              icon: "📄",
              title: "Instant PDF Delivery",
              desc: "Receive downloadable PDFs of filled forms instantly after submission.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      

     

     
    </div>
    
  );
};

export default LandingPage;
