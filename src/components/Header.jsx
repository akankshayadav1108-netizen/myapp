import React, { useState } from "react";
import { Calendar, Clock, Sun, User, Settings, LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
   

  return (

 
    <div className="w-full bg-white shadow-md p-4 rounded-2xl flex items-center justify-between">
      
      {/* LEFT SECTION */}
      <div className="bg-emerald-600 flex w-[80%] rounded-2xl gap-25 p-4">

        {/* Logo */}
        <div className="text-white px-6 py-4 rounded-xl">
          <h1 className="text-xl font-semibold tracking-wide">Fill It Form</h1>
          <p className="text-sm opacity-90">Form Filling Service</p>
        </div>

        {/* Date / Day / Time */}
        <div className="flex items-center gap-4">

          <div className="bg-white shadow-sm px-4 py-2 rounded-xl border flex items-center gap-2">
            <Calendar size={18} className="text-emerald-600" />
            <span className="text-gray-700 font-medium">Tuesday, Apr 21</span>
          </div>

          <div className="bg-white shadow-sm px-4 py-2 rounded-xl border flex items-center gap-2">
            <Sun size={18} className="text-emerald-600" />
            <span className="text-gray-700 font-medium">One Way</span>
          </div>

          <div className="bg-white shadow-sm px-4 py-2 rounded-xl border flex items-center gap-2">
            <Clock size={18} className="text-emerald-600" />
            <span className="text-gray-700 font-medium">12:45 PM</span>
          </div>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 w-60 mr-10 bg-white border px-4 py-2 rounded-xl shadow-sm relative">

        {/* Profile Icon */}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAMFBMVEXk5ueutLersbTn6erR1Nba3d6orrLEyMq0uby9wsTg4uO5vsHW2dvJzc/d3+HM0NJCGuNYAAAEf0lEQVR4nO2cy5KsIAyGhSB35f3f9ng7M9qtNkICTFX/m1705quQhACJXffVV1999dVXXzUogNoEHwSdHXsvhkGpYRC+t7ZJZIAxKKe5lJJPmn+0U6FvDRa6oBnjnB3Fmdaha4cVOm/kK+QvrTS+EVgQ5s2YR1buRANOAKNjt5yrF7ixMipYJT9hbj6gbE1W8PqjPX9Yta+HCkMs5so6VEM1cSv/I2nqcFoXvfI/VnW2Bmi8i+5QWfHUCvZzbjqVLm3VhKXfrKrLgkIq6Ixacv0hMt+foxbMACCSLbqghmKkfQ7njDqWIk130o20kKtCyHDSDbXQvppp0UV9CVCDAFoi/sEjgE7FSoGgUhiLP9Uq5J46ZofTKnKjAo5JJxlqo2KBMk0b/g/PI3ei3lMdHqmj5ERKURsqZUxBQHNT6i3VIJIyyjrFInJORqUD7XqktL+REl6q5NX6b6R0jgoYZdROdNsU4IIyuowKqIs/BT9dRsUmJdv6e2RSRhb8HpmUCyLSzAuJL2kR0kBFGnBB/5JNyUj/TOyjZym6fIqe+XuyEuXP7KbYtRTdOwrgnaEXEVZ9aFc9qwgvfATqOYpRbVGTRtxzFOXVhMYkZZQ3E5iOyinvJVF3funpQKddCnP5SV+lEU/8XFGCopZTZIXUhop3e07KOccUUvIv8CCJA0p6JblpwHk5U/RvvBYnUZFzIt31l2mbwKinC3V45VdUnO4AdRDkBpUsEE6bUhrldhYlfd07CPJee3TB/t6s6k8Sb/gvqOmuKgv3yyajlm/sTWztk7RV6QVqglUL5qc96vOL31o93SCe9fVyLqpwzqj9ky2Al8yjb6igYs3Kp5WvOtAB3kXlAOkqTkhsqF2ImJCZPLQ26MwKQd+NHXHuKi/8r8AKwy9muTg3Tdjzv6CzwvGT6TgXbEuci6YF9oNxej0Qaq2NGTy0suyvgnWQc1I/jo2PncJOtVlOtGDZ1Zrivya7+tFa2zXCPGOMPgxq9VC+1+ytzik1iL4uLiwRr9yWjC6z6fKPNqGv4rirJQ2T8eU0l1Ir4cvOSgN4ZW73pUta5kwoBgve3Kz2Z1q2bAfklNYrdj0DHW9bF0bCvQugVy7dmEdWrg3ZsPRUirLEMcNzWMYUgV1hFBr3eXeBlarHhYVO5V2aXbMyg3oYwJs3OGHlDuk2FTrB8Nf9wDr5AAIriNypvRjW/NiCEbWD/441664SugEpfUZIZnzgoZhBV3Gd2peCOmQSx5r2ABD7rQtU1ARvfXY5hqinF6zgyxt01dNJVJwH5zTUJ5eXUDTm31Hjv/FSYFe6V2zRUtWiD1AzPiGBqJiSpQnQGKsit5imiusPVsXuhU0Xv++kROuGQtB9EZD7UQ5U3Tb+NRJNm66nPOtuTSeSV6DVqpJLXVQrSM1lmLoYoWkmQe111p6OPv6CobOub6hU43+QfCtWGwynVe/fTUEefsHTS1JF/YAEqt7OVa0l/V/x47hXk4G/6tin3E6xdyJ5IG008BftJ32bTVGrdomquSLqqPXTCf8Aggw+NuVBVG0AAAAASUVORK5CYII="
          alt="profile"
          className="w-10 h-10 rounded-full"
        />

        {/* Text */}
        <div>
          <p className="text-sm text-gray-500">Hello,</p>
          <p className="font-semibold text-gray-800">User Name</p>
        </div>

        {/* Dropdown Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto px-3 py-1 text-xl text-gray-700 hover:bg-gray-100 rounded-lg"
        >
          ⋮
        </button>

        {/* DROPDOWN MENU */}
        {open && (
          <div className="absolute right-0 top-16 w-44 bg-white shadow-lg rounded-xl border py-2 z-20">

            <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer transition">
              <User className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700">Profile</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 hover:bg-emerald-50 cursor-pointer transition">
              <Settings className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700">Setting</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 cursor-pointer transition">
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">Logout</span>
            </div>

          </div>
        )}
      </div>
    </div>
    
     
  );
}
