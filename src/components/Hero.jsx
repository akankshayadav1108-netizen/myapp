import React from 'react'

function Hero() {
  return (
    <>
     {/* HERO */}
      <header className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <h2 className="text-5xl font-extrabold leading-tight mb-4">
            Simplify Forms. <br /> <span className="text-yellow-300">Save Time. Go Smart.</span>
          </h2>
          <p className="text-white/90 mb-6 max-w-md">
            Apply for scholarships, government certificates and college forms — all from one secure dashboard.
          </p>

          <div className="flex gap-3">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-indigo-900 px-5 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
            >
              Start Now
            </Link>
            <a
              href="#forms"
              className="border border-white/40 text-white px-5 py-3 rounded-lg hover:bg-white/10 transition"
            >
              View Forms
            </a>
          </div>
        </div>

        {/* Illustration + search */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4897/4897164.png"
            alt="illustration"
            className="w-44 mx-auto mb-4"
          />
          <div className="bg-white rounded-lg p-3 flex items-center gap-2">
            <input
              type="text"
              placeholder="Search forms, e.g. Scholarship, Ration Card..."
              className="flex-1 outline-none px-2 text-sm text-gray-700"
            />
            <button className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700">
              Search
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-white/90 text-sm">
            <div className="bg-white/5 p-3 rounded-lg">Fast Booking</div>
            <div className="bg-white/5 p-3 rounded-lg">Encrypted Storage</div>
            <div className="bg-white/5 p-3 rounded-lg">Online Payment</div>
            <div className="bg-white/5 p-3 rounded-lg">Live Tracking</div>
          </div>
        </div>
      </header>
    
    </>
  )
}

export default Hero