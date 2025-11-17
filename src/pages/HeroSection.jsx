import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-white via-emerald-50 to-white text-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-10">

        {/* Left Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Simplify Your Form Filling <br />
            Process with{" "}
            <span className="text-emerald-600">Fill<span className="text-gray-900">It</span></span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            No more queues, no more confusion. Book, upload, pay, and get your official
            forms filled from home — fast, secure, and hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 shadow-md">
              Get Started
            </button>
            <button className="px-6 py-3 border border-emerald-500 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition duration-300 shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/12/54/laptop-1867759_1280.jpg"
            alt="Form Filling Illustration"
            className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
