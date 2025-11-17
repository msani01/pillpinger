"use client"
import ClientSidebar from '@/components/ClientSidebar';
import Header from '@/components/Header';
import React from 'react';
import { BsFillSunFill } from "react-icons/bs";
import { IoAlarmOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";
import Image from 'next/image';

const page = () => {
  return (
    <main className="min-h-screen flex bg-green-950 text-gray-800 antialiased">
        {/* sidebar */}
        <ClientSidebar/>
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
              <p className='text-green-900 text-sm'>It's a <span className='font-bold text-green-950'>
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
            <Image
            src={"/list.png"}
            alt=''
            height={200}
            width={1000} 
            className='object-cover'/>
            
          </section>
        </section>
    </main>
  )
}

export default page
