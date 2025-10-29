import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <main className='bg-green-950 px-20'>
        <section className="flex justify-between items-center py-3 border-b-2 border-dotted
         border-white">
            <Link href={"/#"}className="flex items-center gap-2">
                <div className='p-5 bg-white rounded-lg'></div>
                <h1 className="text-xl font-semibold text-white">PillPinger</h1>
            </Link>
    
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
                <li className="text-white cursor-pointer">About Us</li>
                <li className="text-white cursor-pointer">Pricing</li>
                <li className="text-white cursor-pointer">Testimonial</li>
                <li className="text-white cursor-pointer">Features</li>
            </ul>
    
            <div className="flex gap-3">
                <button className="bg-[#FF7F00] hover:bg-[#ff9933] text-white px-5 py-2
                 rounded-sm font-medium">
                Sign Up
                </button>
                <button className="border border-[#FF7F00] hover:bg-[#FF7F00] 
                hover:text-white text-[#FF7F00] px-5 py-2 rounded-sm font-medium">
                Log in
                </button>
            </div>
        </section>
    </main>
  )
}

export default Navbar
