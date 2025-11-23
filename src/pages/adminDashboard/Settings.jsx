import React, { useState } from "react";

const Settings = () => {
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSmsNotification] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-emerald-400">
        Settings
      </h1>

      <div className="w-full flex-col items-end max-w-3xl space-y-8">

        {/* -------------------- ACCOUNT SETTINGS -------------------- */}
        <section className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-emerald-400/20 shadow-[0_0_25px_rgba(0,255,180,0.15)]">
          <h2 className="text-xl font-semibold mb-4 text-emerald-300">
            Account Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-900">Full Name</label>
              <input
                type="text"
                placeholder="Admin Name"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-emerald-500/30 outline-none text-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-900">Email Address</label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-emerald-500/30 outline-none text-gray-400"
              />
            </div>

            <button className="px-5 py-2 bg-emerald-600/80 rounded-lg hover:bg-emerald-700 transition text-white">
              Save Changes
            </button>
          </div>
        </section>

        {/* -------------------- CHANGE PASSWORD -------------------- */}
        <section className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-emerald-400/20 shadow-[0_0_25px_rgba(0,255,180,0.15)]">
          <h2 className="text-xl font-semibold mb-4 text-emerald-300">
            Change Password
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-900">Current Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-emerald-500/30 outline-none text-gray-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-900">New Password</label>
              <input
                type="password"
                className="w-full mt-1 p-2 rounded-lg bg-white border border-emerald-500/30 outline-none text-gray-400"
              />
            </div>

            <button className="px-5 py-2 bg-emerald-600/80 rounded-lg hover:bg-emerald-700 transition text-white">
              Update Password
            </button>
          </div>
        </section>

        {/* -------------------- NOTIFICATION SETTINGS -------------------- */}
        <section className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-emerald-400/20 shadow-[0_0_25px_rgba(0,255,180,0.15)]">
          <h2 className="text-xl font-semibold mb-4 text-emerald-300">
            Notification Preferences
          </h2>

          <div className="space-y-4 text-gray-900">

            {/* Email */}
            <div className="flex items-center justify-between">
              <span>Email Notifications</span>
              <button
                onClick={() => setEmailNotification(!emailNotification)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  emailNotification ? "bg-emerald-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    emailNotification ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* SMS */}
            <div className="flex items-center justify-between">
              <span>SMS Notifications</span>
              <button
                onClick={() => setSmsNotification(!smsNotification)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  smsNotification ? "bg-emerald-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    smsNotification ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>

            {/* Dark Mode */}
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full flex items-center transition ${
                  darkMode ? "bg-emerald-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </section>

        {/* -------------------- DANGER ZONE -------------------- */}
        <section className="bg-red-900/20 p-6 rounded-2xl border border-red-600 shadow-[0_0_25px_rgba(255,0,0,0.25)]">
          <h2 className="text-xl font-semibold mb-4 text-red-400">
            Danger Zone
          </h2>

          <div className="flex items-center justify-between">
            <span>Delete Account</span>
            <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700">
              Delete
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span>Logout</span>
            <button className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600">
              Logout
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Settings;
