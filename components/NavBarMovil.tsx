"use client"

import {useEffect, useState} from 'react'
import Link from 'next/link'
export default function NavBarMovil(){
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 756) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </h1>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 10H20V12H4V10Z"} />
          </svg>
        </button>
      </div>
      <ul className={`mt-2 overflow-hidden transition-max-height duration-300 ${isOpen ? "max-h-44" : "max-h-0"} md:flex md:max-h-none`}>
        <li className='border-b-[1px] rounded'>
          <Link href="/" className="block cursor-pointer hover:bg-white p-2 hover:text-gray-400">Home</Link>
        </li>
        <li className='border-b-[1px] rounded'>
          <Link href="/projects" className="block cursor-pointer hover:bg-white p-2 hover:text-gray-400">Projects</Link>
        </li>
        <li className='border-b-[1px] rounded'>
          <Link href="/about" className="block cursor-pointer hover:bg-white p-2 hover:text-gray-400">About me</Link>
        </li>
        <li className='border-b-[1px] rounded'>
          <Link href="/contact" className="block cursor-pointer hover:bg-white p-2 hover:text-gray-400">Contact</Link>
        </li>
      </ul>

    </nav>
  );
}