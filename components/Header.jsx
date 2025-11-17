import Image from 'next/image';
import React from 'react';
import {
  FiBell,
  FiSearch,
} from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-xl">
                <input
                  className="w-full border border-gray-200 rounded-xl py-3 px-5 pl-8 shadow-sm bg-white"
                  placeholder="Search"
                />
                <FiSearch className="absolute right-4 top-4.5 text-gray-900 text-lg rounded-full" />
              </div>
              
    
              {/* Profile */}
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                <IoChatbubblesOutline/>
                </button>
                <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                  <FiBell />
                </button>
                <div className="flex items-center gap-3 bg-white rounded-full px-3 py-1 shadow">
                  <Image
                    src="/thumb.png"
                    alt="avatar"
                    height={10}
                    width={10}
                    className="object-cover w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium">Akeem O.</span>
                </div>
              </div>
            </header>
  )
}

export default Header
