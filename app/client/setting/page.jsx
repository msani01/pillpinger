"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import {
  FiHome,
  FiLogOut,
  FiSettings,
  FiBookOpen,
  FiCalendar,
} from "react-icons/fi";

function SidebarItem({ icon: Icon, label, active, href }) {
  return (
    <Link href={href} className="w-full">
      <div
        className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg cursor-pointer transition ${
          active ? "bg-white/10" : "hover:bg-white/5"
        }`}
      >
        <Icon className="text-lg text-white/90" />
        <span className="text-white/90 text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
}

const TimeColumn = ({ values, selectedValue, setSelectedValue }) => {
  const columnRef = useRef(null);

  // Scroll to selected value on mount
  useEffect(() => {
    if (columnRef.current) {
      const index = values.indexOf(selectedValue);
      const itemHeight = columnRef.current.children[0].offsetHeight;
      columnRef.current.scrollTop = index * itemHeight;
    }
  }, [selectedValue, values]);

  const handleClick = (val) => {
    setSelectedValue(val);
    if (columnRef.current) {
      const itemHeight = columnRef.current.children[0].offsetHeight;
      columnRef.current.scrollTo({ top: values.indexOf(val) * itemHeight, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={columnRef}
      className="flex flex-col items-center overflow-y-auto scroll-smooth h-40 snap-y snap-mandatory py-10"
    >
      {values.map((val) => (
        <div
          key={val}
          onClick={() => handleClick(val)}
          className={`text-2xl py-2 snap-start transition-all duration-150 cursor-pointer ${
            val === selectedValue ? "text-4xl text-orange-500 font-semibold" : "text-gray-500"
          }`}
        >
          {val}
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  const pathname = usePathname();
  const [selectedHour, setSelectedHour] = useState(18);
  const [selectedMinute, setSelectedMinute] = useState(18);
  const [snooze, setSnooze] = useState(true);

  const timeValues = Array.from({ length: 7 }, (_, i) => 16 + i);

  const settings = [
    { label: "Repeat", value: "Everyday" },
    { label: "Medication", value: "Nifedipine" },
    { label: "Sound", value: "Radial" },
  ];

  return (
    <section className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-950 text-white flex flex-col justify-between shadow-lg sticky top-0 h-screen p-6">
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Link href="/" className="flex items-center relative gap-1">
              <div className="p-5 bg-white rounded-lg absolute -left-4"></div>
              <h1 className="text-xl font-semibold text-white rounded-r-2xl bg-orange-500 py-1 px-5 ml-5">
                PillPinger
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col gap-1">
            <SidebarItem
              icon={FiHome}
              label="Home"
              href="/client"
              active={pathname === "/client"}
            />
            <SidebarItem
              icon={FiBookOpen}
              label="Log Tracker"
              href="/client/logTracker"
              active={pathname === "/client/logTracker"}
            />
            <SidebarItem
              icon={FiSettings}
              label="Settings"
              href="/client/setting"
              active={pathname === "/client/setting"}
            />
            <SidebarItem
              icon={FiCalendar}
              label="Help & Support"
              href="/client/help"
              active={pathname === "/client/help"}
            />
          </nav>
        </div>

        <div className="text-sm text-red-400 flex items-center gap-2 cursor-pointer hover:text-red-300">
          <FiLogOut className="text-lg" />
          Logout
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1  p-6 flex flex-col ">
        {/* Header */}
        <Header className="text-gray-900"/>
        <div className="flex flex-col items-center">
        {/* Greeting */}
        <div className="w-full max-w-2xl mt-4 items-center">
          <p className="text-lg font-light text-gray-800">
            Hello,{" "}
            <span className="font-bold text-orange-500">Mr Akeem!</span>
          </p>
          <p className="mt-2 text-sm font-medium text-gray-700">
            Set up your medication alarm
          </p>
        </div>

        {/* Alarm Picker */}
        <div className="w-full max-w-2xl mt-8 flex justify-between items-start">
          <button className="text-orange-500 font-medium text-lg">Cancel</button>
          <div className="flex flex-col items-center relative">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Add Alarm</h2>

            <div className="flex space-x-12 h-40 relative">
              <TimeColumn
                values={timeValues}
                selectedValue={selectedHour}
                setSelectedValue={setSelectedHour}
              />
              <TimeColumn
                values={timeValues}
                selectedValue={selectedMinute}
                setSelectedValue={setSelectedMinute}
              />

              {/* Highlight Bar */}
              <div className="absolute top-16 w-48 h-10 bg-gray-200 rounded-lg opacity-50 pointer-events-none"></div>
            </div>
          </div>
          <button className="text-orange-500 font-medium text-lg">Save</button>
        </div>

        {/* Settings List */}
        <div className="w-full max-w-2xl mt-16">
          {settings.map((item, index) => (
            <div
              key={item.label}
              className={`flex justify-between items-center py-4 ${
                index < settings.length ? "border-b border-gray-200 text-gray-500" : ""
              }`}
            >
              <span className="text-lg text-gray-700">{item.label}</span>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium">{item.value}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* Snooze Toggle */}
          <div className="flex justify-between items-center py-4">
            <span className="text-lg text-gray-700">Snooze</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={snooze}
                onChange={() => setSnooze(!snooze)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-orange-500 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
