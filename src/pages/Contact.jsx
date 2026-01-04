import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full p-6 md:p-10">
      
      {/* Container */}
      <div className="bg-white shadow-xl border border-emerald-100 rounded-2xl p-6 md:p-10">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-emerald-600 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Have a question or need help with your service request?  
          Our support team at Fill It is ready to assist you anytime.
        </p>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          {/* Phone */}
          <div className="p-6 border border-emerald-200 bg-emerald-50 rounded-xl text-center shadow-sm">
            <Phone className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-semibold text-emerald-700 mt-2">Phone</h3>
            <p className="text-gray-700 mt-1">+91 98765 43210</p>
          </div>

          {/* Email */}
          <div className="p-6 border border-emerald-200 bg-emerald-50 rounded-xl text-center shadow-sm">
            <Mail className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-semibold text-emerald-700 mt-2">Email</h3>
            <p className="text-gray-700 mt-1">support@fillit.com</p>
          </div>

          {/* Address */}
          <div className="p-6 border border-emerald-200 bg-emerald-50 rounded-xl text-center shadow-sm">
            <MapPin className="w-8 h-8 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-semibold text-emerald-700 mt-2">Address</h3>
            <p className="text-gray-700 mt-1">Lucknow, Uttar Pradesh, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-emerald-700">Send Us a Message</h3>
          
          <form className="grid md:grid-cols-2 gap-6 mt-6">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-emerald-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-emerald-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-4 border border-emerald-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="p-4 border border-emerald-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {/* Message Full Width */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="md:col-span-2 p-4 border border-emerald-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="md:col-span-2 bg-emerald-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold hover:bg-emerald-700 transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
