import Link from 'next/link';
import React from 'react';
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


function SidebarItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-white/5 transition ${
        active ? "bg-white/5" : ""
      }`}
    >
      <Icon className="text-lg text-white/90" />
      <span className="text-white/90 text-sm font-medium">{label}</span>
    </button>
  );
}

const page = () => {
  return (
    <main className="min-h-screen flex bg-green-950 text-gray-800 antialiased">
    {/* Sidebar */}
    <aside className="w-64 bg-emerald-950 text-white flex flex-col justify-between shadow-lg sticky top-0
     h-screen p-6 ">
      <div>
        <div className="flex items-center justify-center gap-3 mb-8">
        <Link href={"/#"}className="flex items-center relative gap-1">
          <div className='p-5 bg-white rounded-lg absolute -left-4'></div>
          <h1 className="text-xl font-semibold text-white rounded-r-2xl bg-orange-500 py-1 px-5 ml-5">
            PillPinger</h1>
      </Link>
        </div>

        <nav className="flex flex-col gap-1">
          <Link href={"/caregiver"} ><SidebarItem icon={FiHome} label="Home" /></Link>
          <Link href={"/caregiver/logTracker"} className="bg-white/5 rounded-lg">
          <SidebarItem icon={FiBookOpen} label="Log Tracker" /></Link>
          <Link href={"/caregiver/clients"}><SidebarItem icon={FiUsers} label="Clients" /></Link>
          <Link href={"/caregiver/setting"}><SidebarItem icon={FiSettings} label="Settings" /></Link>
          <Link href={"/caregiver/help"}><SidebarItem icon={FiCalendar} label="Help & Support" /></Link>
        </nav>
      </div>
   
      <div className="text-sm text-red-400 flex items-center gap-2 cursor-pointer hover:text-red-300">
        <FiLogOut className="text-lg" />
        Logout
      </div>
    </aside>

    <section className='flex-1 bg-white h-screen overflow-y-auto p-8 rounded-l-2xl scroll-smooth'>

    </section>
    </main>
    
  )
}

export default page
