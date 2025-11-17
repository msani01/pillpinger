"use client";
import ClientSidebar from "@/components/ClientSidebar";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import {
  FiHome,
  FiLogOut,
  FiSettings,
  FiUsers,
  FiBookOpen,
  FiCalendar,
  FiBell,
  FiSearch,
} from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";



const Page = () => {
  return (
    <div className="min-h-screen flex bg-green-950 text-gray-800 antialiased">
      {/* Sidebar */}
      <ClientSidebar/>
    
      {/* Mainn content */}
      <main className="flex-1 bg-white h-screen overflow-y-auto p-8 rounded-l-2xl scroll-smooth">
        <Header/>

      {/* Dashboard */}
    <section className="flex gap-6 mb-3">
      {/* Left Column (Greeting + Medication Card) */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Greeting outside the box */}
        <h3 className="text-lg text-gray-950">
          Good Morning{" "}
          <span className="font-semibold text-2xl text-orange-500">Mr. Akeem!</span>
        </h3>

    <section className="flex gap-3 items-stretch">
      {/* Medication Card */}
      <div className="bg-green-950 text-white rounded-2xl p-6 shadow-lg flex-1 flex flex-col justify-between">
  <div className="bg-green-950 rounded-xl p-6 flex items-center justify-between">
    <div>
      <p className="text-sm text-white/80">Medications for today</p>
      <div className="text-6xl font-bold mt-2">3</div>
      <div className="flex gap-2 mt-4 flex-wrap">
        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-800 text-sm">
          Amlodipine
        </span>
        <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm">
          Prednisone
        </span>
        <span className="px-3 py-1 rounded-full bg-red-500 text-white text-sm">
          Insulin
        </span>
      </div>
    </div>
    <Image
      src="/thumb.png"
      alt="thumb"
      height={160}
      width={160}
      className="rounded-xl shadow w-40 h-40 object-cover"
    />
  </div>
      </div>

{/* Calendar */}
<div className="bg-white rounded-2xl p-6 shadow flex-1 flex flex-col justify-between">
  <div>
    <div className="flex items-center justify-between mb-1">
      <h4 className="text-sm font-medium">Calendar</h4>
      <div className="text-xs text-gray-400">September 2025</div>
    </div>

    <div className="grid grid-cols-7 gap-x-3 text-xs text-gray-500">
      {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
        <div key={d} className="text-center py-1">
          {d}
        </div>
      ))}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className={`text-center py-1 rounded ${
            i === 7 || i === 13
              ? "bg-amber-100 text-amber-800 font-semibold"
              : ""
          }`}
        >
          {(i % 30) + 1}
        </div>
      ))}
    </div>
  </div>

  <div>
    <div className="mt-1 bg-amber-50 p-3 rounded-lg flex items-center gap-2">
      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
        A
      </div>
      <div>
        <div className="text-sm font-medium">Insulin Injection</div>
        <div className="text-xs text-gray-500">
          11th September, 2025 | 04:00 PM
        </div>
      </div>
    </div>
    <div className="mt-1 text-right text-sm text-emerald-600">View All</div>
  </div>
</div>

    </section>
  

    <div className="flex ">
      <button className="bg-orange-500 hover:bg-orange-600 max-w-sm text-white px-6 py-2 rounded-xl
       shadow mt-6 flex items-center justify-center">
        Log Medications
      </button>
    </div>
      </div>

  
    </section>




        {/* DAILY READ */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Daily Read</h3>
            <a className="text-sm text-emerald-600" href="#">
              View All
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "How to take control of your health",
                img: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "The boundless benefits of exercises",
                img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Healthy eating made simple",
                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
              },
            ].map((item, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition"
                >
                  <div className="text-xs text-green-300 mb-2">DAILY READ</div>
                  <h4 className="font-semibold mb-3">{item.title}</h4>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-xl w-full h-40 object-cover shadow-sm"
                  />
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;
