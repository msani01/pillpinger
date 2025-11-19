"use client"
import Header from '@/components/Header';
import React from 'react';
import { BsFillSunFill } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import {
  FiHome,
  FiLogOut,
  FiSettings,
  FiUsers,
  FiBookOpen,
  FiCalendar,
  FiBell,
  FiSearch,} from "react-icons/fi";


const medicationData = [
  { id: '01', name: 'Christine Brooks', medication: 'Amlodipine', time: '8:00 AM', status: 'Completed' },
  { id: '02', name: 'Rosie Pearson', medication: 'Lisinopril', time: '9:00 AM', status: 'Pending' },
  { id: '03', name: 'Darrell Caldwell', medication: 'Atorvastatin', time: '7:00 PM', status: 'Missed' },
  { id: '04', name: 'Gilbert Johnston', medication: 'Omeprazole', time: '8:00 AM', status: 'Completed' },
  { id: '05', name: 'Alan Cain', medication: 'Metformin', time: '4:00 PM', status: 'Pending' },
];

// Helper function to determine status badge styles
const getStatusClasses = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-teal-100 text-teal-800';
    case 'Pending':
      return 'bg-amber-100 text-amber-800';
    case 'Missed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};


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
        {/* sidebar */}
    <aside className="w-64 bg-emerald-950 text-white flex flex-col justify-between shadow-lg 
    sticky top-0 h-screen p-6 ">
      <div>
        <div className="flex items-center justify-center gap-3 mb-8">
        <Link href={"/#"}className="flex items-center relative gap-1">
          <div className='p-5 bg-white rounded-lg absolute -left-4'></div>
          <h1 className="text-xl font-semibold text-white rounded-r-2xl bg-orange-500 py-1 px-5 ml-5">
            PillPinger</h1>
      </Link>
        </div>

        <nav className="flex flex-col gap-1">
          <Link href={"/client"}><SidebarItem icon={FiHome} label="Home" /></Link>
          <Link href={"/client/logTracker"} className="bg-white/5 rounded-lg">
          <SidebarItem icon={FiBookOpen} label="Log Tracker" /></Link>
          {/* <Link href={"/"}><SidebarItem icon={FiUsers} label="Clients" /></Link> */}
          <Link href={"/client/setting"}><SidebarItem icon={FiSettings} label="Settings" /></Link>
          <Link href={"/"}><SidebarItem icon={FiCalendar} label="Help & Support" /></Link>
        </nav>
      </div>
   
      <div className="text-sm text-red-400 flex items-center gap-2 cursor-pointer hover:text-red-300">
        <FiLogOut className="text-lg" />
        Logout
      </div>
    </aside>
    <section className="flex-1 bg-gray-100 h-screen overflow-y-auto p-8 rounded-l-2xl scroll-smooth">
      <Header/>

      {/* welcome bar  */}
      <div className='flex gap-2 items-center border border-white bg-white py-4 px-5 rounded-xl
        justify-between max-w-6xl'>
        <div className='flex gap-1'>
          <h3 className='text-gray-900 text-lg'>Welcome back</h3>
          <p className='text-lg font-bold text-orange-500'>Mr Akeem!</p>
        </div>
        
        <div className='flex gap-2 items-center justify-center'>
          <BsFillSunFill className='text-amber-400 text-3xl'/>
          <p className='text-sm text-green-950 font-bold'>26°C</p>
        </div>

        <div className='gap-x-5 '>
          <p className="text-green-900 text-sm">It's a <span className="font-bold text-green-950">
            Sunny day</span> today!</p>
        </div>
        
        <div className='border-l-2 border-gray-100 px-3 text-gray-400'>
          Don't forget to take your water bottle with you
        </div>

      </div>

      {/* Med Count */}
      <section className='grid grid-cols-4 gap-4 py-5 '>
        <div className='bg-green-950 max-w-xs rounded-2xl py-1'>
          <div className='text-gray-200 font-light px-4 pt-2'>Active reminders</div>
          <div className='flex items-center px-4 justify-between pb-2'>
            <div className='text-6xl text-gray-50 font-bold '>7</div>
            <IoAlarmOutline className='text-green-100 text-6xl font-extrabold '/>
          </div>
        </div>
        <div className='bg-green-50 max-w-xs rounded-2xl py-1'>
          <div className='text-green-300 font-light px-4 pt-2'>Completed</div>
          <div className='flex items-center px-4 justify-between pb-2'>
            <div className='text-6xl text-green-300 font-bold '>7</div>
            <IoIosCheckmarkCircleOutline className='text-green-100 text-6xl font-extrabold '/>
          </div>
        </div>
        <div className='bg-yellow-50 max-w-xs rounded-2xl py-1'>
          <div className='text-yellow-500 font-light px-4 pt-2'>Pending</div>
          <div className='flex items-center px-4 justify-between pb-2'>
            <div className='text-6xl text-yellow-500 font-bold '>7</div>
            <FaRegCircleXmark className='text-yellow-200 text-6xl font-extrabold '/>
          </div>
        </div>
        <div className='bg-red-50 max-w-xs rounded-2xl py-1'>
          <div className='text-red-400 font-light px-4 pt-2'>Missed Dosses</div>
          <div className='flex items-center px-4 justify-between pb-2'>
            <div className='text-6xl text-red-400 font-bold '>7</div>
            <FaRegCircleXmark className='text-red-100 text-6xl font-extrabold '/>
          </div>
        </div>
      </section>

      {/* list */}
      <section>
        <div className='text-gray-900 text-xl font-bold'>
          Today
        </div>
      <div className="p-4 bg-white rounded-2xl shadow-xl max-w-6xl mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-gray-500 text-left text-sm font-semibold">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">NAME</th>
            <th className="px-6 py-3">MEDICATION</th>
            <th className="px-6 py-3">TIME</th>
            <th className="px-6 py-3">STATUS</th>
            <th className="px-6 py-3"></th> {/* For the View Details button */}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {medicationData.map((item) => (
            <tr key={item.id} className="text-gray-900">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{item.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{item.medication}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">{item.time}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-md ${getStatusClasses(item.status)}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm transition duration-150 ease-in-out"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        
      </section>
    </section>
    </main>
  )
}

export default page
