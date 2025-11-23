import { useState } from "react";
import { Camera, Mail, User, Phone, MapPin, Lock } from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Aakanksha yadav",
    email: "akanksha@gmail.com",
    phone: "123345568",
    address: "Indore, Madhya Pradesh",
  });

  const [passwords, setPasswords] = useState({
    old: "",
    newPass: "",
    confirm: "",
  });

  return (
    <section className="p-6 space-y-12 min-h-screen bg-white text-gray-800">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold mb-3 text-emerald-400">
        Profile Settings
      </h1>

      {/* TOP SECTION → AVATAR + BASIC INFO */}
      <div className="flex gap-10 items-center pb-8 border-b border-emerald-500/20">

        {/* Avatar */}
        <div className="relative w-32 h-32">
          <img
            src="https://i.ibb.co/4pDNDk1/avatar.png"
            className="w-32 h-32 rounded-full object-cover border border-emerald-500/40"
            alt="avatar"
          />

          {/* Upload Button */}
          <button className="absolute bottom-1 right-1 bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition shadow-lg">
            <Camera size={16} />
          </button>
        </div>

        {/* Basic Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">{profile.name}</h2>
          <p className="text-emerald-300">{profile.email}</p>
          <p className="text-gray-900 mt-1 text-sm">Member since 2024</p>
        </div>
      </div>

      {/* PROFILE DETAILS FORM */}
      <div className="space-y-8">

        {/* NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-900 flex items-center gap-2">
            <User size={16} className="text-emerald-400" /> Name
          </label>
          <input
            type="text"
            className="bg-white/5 text-gray-300 p-3 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500 transition"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-900 flex items-center gap-2">
            <Mail size={16} className="text-emerald-400" /> Email
          </label>
          <input
            type="email"
            className="bg-white/5 text-gray-300 p-3 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500 transition"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>

        {/* PHONE */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-900 flex items-center gap-2">
            <Phone size={16} className="text-emerald-400" /> Phone Number
          </label>
          <input
            type="text"
            className="bg-white/5 text-gray-300 p-3 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500 transition"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
          />
        </div>

        {/* ADDRESS */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-900 flex items-center gap-2">
            <MapPin size={16} className="text-emerald-400" /> Address
          </label>
          <textarea
            className="bg-white/5 text-gray-300 p-3 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500 transition"
            rows="2"
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
          />
        </div>
      </div>

      {/* CHANGE PASSWORD SECTION */}
      <div className="pt-10 border-t border-emerald-500/20 space-y-6">

        <h2 className="text-xl font-semibold text-emerald-300 flex items-center gap-2">
          <Lock size={20} /> Change Password
        </h2>

        {/* Old Password */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-900">Old Password</label>
          <input
            type="password"
            className="bg-white/5 text-gray-300 p-3 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500 transition"
            value={passwords.old}
            onChange={(e) =>
              setPasswords({ ...passwords, old: e.target.value })
            }
          />
        </div>

        {/* New Password */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-900">New Password</label>
          <input
            type="password"
            className="bg-white/5 text-gray-300 p-3 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500 transition"
            value={passwords.newPass}
            onChange={(e) =>
              setPasswords({ ...passwords, newPass: e.target.value })
            }
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-900">Confirm Password</label>
          <input
            type="password"
            className="bg-white/5 text-gray-300 p-3 rounded-xl outline-none border border-emerald-500/20 focus:border-emerald-500 transition"
            value={passwords.confirm}
            onChange={(e) =>
              setPasswords({ ...passwords, confirm: e.target.value })
            }
          />
        </div>

        <button className="mt-4 bg-emerald-600 px-6 py-2 rounded-xl text-white hover:bg-emerald-700 transition shadow-lg">
          Save Changes
        </button>
      </div>
    </section>
  );
};

export default Profile;
