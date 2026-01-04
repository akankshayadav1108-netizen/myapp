import React from "react";
import { Info, User, Phone, Mail, Layers } from "lucide-react";

export default function About() {
  return (
    <div className="w-full p-6 md:p-10">

      
      
      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 border border-emerald-100">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 flex items-center gap-2">
          <Info className="w-7 h-7" />
          About The Project
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          This project is designed to streamline requests, improve user–
          admin communication, and provide a modern dashboard interface.
          It includes features like form submissions, admin management,  
          real-time status tracking, and secure authentication.
        </p>

        {/* Information Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* Project Name */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700">Project Name</h3>
            <p className="text-gray-600 mt-1">Fill It – Service Request Portal</p>
          </div>

          {/* Version */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700">Version</h3>
            <p className="text-gray-600 mt-1">v1.0.0</p>
          </div>

          {/* Developed By */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700 flex items-center gap-2">
              <User className="w-5 h-5" />
              Developed By
            </h3>
            <p className="text-gray-600 mt-1">Aakanksha Yadav</p>
          </div>

          {/* Technology Stack */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700 flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Technology Used
            </h3>
            <p className="text-gray-600 mt-1">React JS, TailwindCSS, Node.js (Optional)</p>
          </div>

          {/* Contact Email */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Email
            </h3>
            <p className="text-gray-600 mt-1">fillit.support@gmail.com</p>
          </div>

          {/* Contact Phone */}
          <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Number
            </h3>
            <p className="text-gray-600 mt-1">+91 98765 43210</p>
          </div>

          
        </div>
      </div>
    
    </div>
    
  );
}
