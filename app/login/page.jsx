"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GrShieldSecurity } from "react-icons/gr";

const Page = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <main className="w-full h-screen flex">
      {/* LEFT SIDE (Text Section) */}
      <section className="w-1/2 bg-white flex flex-col justify-center items-center px-12 space-y-6 relative">
        {/* Logo Section */}
        <div className="absolute top-8 left-8">
          <div className="bg-amber-500 text-white font-semibold text-lg px-6 py-2 rounded-lg shadow-md">
            PillPinger
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome to <span className="text-green-900">PillPinger</span>
          </h1>
          <div className="text-gray-600 text-sm">
            <span>Already have an account?</span>{" "}
            <Link href="#" className="text-orange-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>

        {/* User Type Selection */}
        <div className="flex items-center gap-1 mt-4">
          {/* Client Option */}
          <div
            onClick={() => setSelectedRole("client")}
            className={`flex flex-col items-center space-y-2 p-4 cursor-pointer transition-all `}
          >
            <Image src="/Group 115.png" alt="Client" width={30} height={30} />
            <label className="flex items-center gap-2 px-7 rounded-md py-2 border text-gray-700 cursor-pointer ">
              <input
                type="checkbox"
                checked={selectedRole === "client"}
                readOnly
                className="accent-orange-500 w-4 h-4 cursor-pointer"
              />
              Client <span className="text-green-900">(Patient)</span>
            </label>
          </div>

          {/* Care Giver Option */}
          <div
            onClick={() => setSelectedRole("caregiver")}
            className={`flex flex-col items-center space-y-2 p-4 cursor-pointer transition-all `}
          >
            <Image src="/Group 116.png" alt="Care Giver" width={30} height={30} />
            <label className="flex items-center gap-2 px-7 rounded-md py-2 border text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedRole === "caregiver"}
                readOnly
                className="accent-orange-500 w-4 h-4 cursor-pointer"
              />
              Care Giver
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mt-6 w-full max-w-xs">
          <Link
            href="#"
            className={`rounded-md w-full text-center px-8 py-2 font-medium transition-all ${
              selectedRole
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center gap-2 border border-orange-400 rounded-md px-8
             py-2 bg-white text-gray-800 hover:bg-orange-50 transition-all w-full"
          >
            <Image src="/Wrapper.png" alt="Google" width={20} height={20} />
            Sign Up with Google
          </Link>

          <div className="text-gray-500 text-xs mt-8 text-center">
            <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
            <span className="underline cursor-pointer">Terms of Services</span>
          </div>
        </div>
      </section>

      {/* Right side */}
      <section className="w-1/2 relative">
        <Image
          src="/doc.png"
          alt="Doctor background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className=" bg-white border rounded-md text-gray-950 flex gap-0.5 px-2 py-1 
            absolute -left-13 top-30">
            <GrShieldSecurity className="bg-orange-400 text-white p-0.5 text-3xl"/>
            <div>
                <div className="bg-white text-xs text-green-900 gap-x-0.5 flex">
                Your <h1 className="text-green-950 font-semibold">Health</h1>
                </div>
                <div className="bg-white text-xs gap-x-0.5 flex text-green-900 ">
                Our <h1 className="text-green-950 font-semibold">Priority</h1>
                </div>
            </div>
            </div>
      </section>
    </main>
  );
};

export default Page;
