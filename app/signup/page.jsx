"use client";
import Image from "next/image";
import { useState } from "react";
import { FaUserMd } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

export default function Onboarding() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="absolute top-8 left-8">
          <div className="bg-orange-500 text-white font-semibold text-lg px-6 py-2 rounded-lg shadow-md">
            PillPinger
          </div>
      </div>
      {/* LEFT SIDE: FORM */}
      <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center px-8 md:px-16 py-10">
        {/* Step Indicator */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Let’s Get <span className="text-green-700">Started</span>
          </h1>
          <div className="flex items-center mt-4 space-x-6 text-sm font-medium text-gray-700">
            <button
              className={`border-b-2 pb-1 ${
                step === 1
                  ? "text-green-700 border-green-700"
                  : "border-transparent"
              }`}
            >
              1. Personal Information
            </button>
            <button
              className={`border-b-2 pb-1 ${
                step === 2
                  ? "text-green-700 border-green-700"
                  : "border-transparent"
              }`}
            >
              2. Health Information
            </button>
            <button
              className={`border-b-2 pb-1 ${
                step === 3
                  ? "text-green-700 border-green-700"
                  : "border-transparent"
              }`}
            >
              3. Account Setup
            </button>
          </div>
        </div>

        {/* Step 1 FORM */}
        {step === 1 && (
          <form className="space-y-5 pr-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
                focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
                focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              />
            </div>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
              focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
              focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
              focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                nextStep();
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 w-full
               rounded-md transition"
            >
              Next
            </button>
          </form>
        )}

        {/* Step 2 FORM */}
        {step === 2 && (
          <form className="space-y-5 pr-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Existing Conditions"
                className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
                focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Allergies"
                className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
                focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Emergency Contact Name"
                className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
                focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Emergency Contact Number"
                className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
                focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                nextStep();
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 w-full
               rounded-md transition"
            >
              Next
            </button>
          </form>
        )}

        {/* Step 3 FORM */}
        {step === 3 && (
          <form className="space-y-5 pr-5">
            <input
              type="password"
              placeholder="Create Password"
              className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
              focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-orange-400 rounded-md px-3 py-2 w-full focus:outline-none 
              focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
            />
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="privacy"
                className="mt-1 accent-orange-500"
              />
              <label
                htmlFor="privacy"
                className="text-sm text-gray-700 leading-snug"
              >
                I agree to the{" "}
                <a href="#" className="text-orange-600 font-medium underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-orange-600 font-medium underline">
                  Terms of Service
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 w-full 
              rounded-md transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>

      {/* RIGHT SIDE: IMAGE SECTION */}
      <section className="w-full md:w-1/2 relative">
        <Image
          src="/doc2.png"
          alt="Doctor background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        {step === 1  && ( 
        <>
          <div
          className="bg-white border rounded-md text-gray-950 flex gap-0.5 px-2 py-1 
          absolute -left-9 bottom-30 shadow-md "
        >
          <div className="">
            <div className="text-xs text-green-900 gap-x-0.5 flex">
              Your <h1 className="text-green-950 font-semibold">Health</h1>
            </div>
            <div className="text-xs gap-x-0.5 flex text-green-900">
              Our <h1 className="text-green-950 font-semibold">Priority</h1>
            </div>
          </div>
        </div>
        </>)}

        {/* Floating Cards */}
        {step === 3 && (
          <>
            <div className="absolute top-12 left-10 bg-white px-3 py-2 rounded-md shadow-md flex items-center
             space-x-2">
              <FaUserMd className="text-orange-500 text-xl" />
              <p className="text-xs text-green-900 gap-x-0.5 flex ">
                Never <span className="text-green-950 font-semibold">miss</span> a dose.
              </p>
            </div>

          <div className="absolute bottom-24 -left-16 bg-white px-3 py-2 rounded-md shadow-md flex items-center
            space-x-2">
          <MdHealthAndSafety className="text-orange-500 text-xl" />
          <p className="text-xs text-green-900 gap-x-0.5 flex max-w-20">
            Take Control, of Your Health
          </p>
        </div>
          </>
        )}
        

        {step === 2 && (
          <>
            <div className="absolute top-12 left-10 bg-white px-3 py-2 rounded-md shadow-md flex items-center
             space-x-2">
              <FaUserMd className="text-orange-500 text-xl" />
              <p className="text-xs text-green-900 gap-x-0.5 flex ">
                Never <span className="text-green-950 font-semibold">miss</span> a dose.
              </p>
            </div>

            <div className="absolute top-40 right-8 bg-white px-3 py-2 rounded-md shadow-md flex items-center
             space-x-2">
              <MdHealthAndSafety className="text-orange-500 text-xl" />
              <p className="text-xs text-green-900 gap-x-0.5 flex">
                Care <span className="text-green-950 font-semibold">beyond</span> medication.
              </p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
