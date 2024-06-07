"use client";
import { FaWindows,FaList } from "react-icons/fa6";
import { useState } from "react";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap p-4 bg-gradient-to-r from-violet-900 via-sky-600 to-sky-500">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <FaWindows />
      <span className="font-semibold text-xl tracking-tight">ReWisata</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => setNavbar(!navbar)}>
      <FaList />
      </button>
    </div>
    <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${navbar ? "block" : "hidden"}`}>
      <div className="text-sm lg:flex-grow">
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Beranda
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Tentang
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
          Cara
        </a>
      </div>
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
      </div>
    </div>
  </nav>
  )
}