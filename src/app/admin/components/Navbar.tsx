"use client";
import { FaWindows,FaList,FaCircleUser,FaUsers,FaUserTie,FaCamera,FaHouse} from "react-icons/fa6";
import { useState } from "react";
export default function Navbar() {
  const [sideNavbar, setsideNavbar] = useState(false);
  const [Navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-sky-900">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setsideNavbar(!sideNavbar)}>
                  <span className="sr-only">Open sidebar</span>
                  <FaList />
              </button>
              <FaWindows />
            <span className="font-semibold text-xl tracking-tight">ReWisata</span>
            </div>
            <div className="flex items-center">
                <div className="flex items-center ms-3">
                  <div>
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={() => setNavbar(!Navbar)}>
                      <span className="sr-only">Open user menu</span>
                      <FaCircleUser className="w-8 h-8 rounded-full" />
                    </button>
                  </div>
                  <div className={`z-50 absolute right-0 top-10 my-4 text-base list-none bg-sky-950 divide-y divide-gray-100 rounded shadow bg-sky-950  ${Navbar ? "block" : "hidden"}`} id="dropdown-user">
                    <ul className="py-1" role="none">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                          Pengaturan
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                          Keluar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </nav>
      <aside className={`py-5 fixed top-0 left-0 z-40 w-64 h-screen sm:translate-x-0 flex-grow lg:flex lg:items-center lg:w-auto bg-sky-950 ${sideNavbar ? "block" : "hidden"}`} aria-label="Sidebar">
        <div className="h-full py-10 px-3 pb-4 overflow-y-auto bg-sky-950">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaHouse className="w-6 h-6 rounded-full" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/admin/destinasi" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaCamera className="w-6 h-6 rounded-full" />
                <span className="flex-1 ms-3 whitespace-nowrap">Data Destinasi</span>
              </a>
            </li>
            <li>
              <a href="/admin/pengelola" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaUserTie className="w-6 h-6 rounded-full" />
                <span className="flex-1 ms-3 whitespace-nowrap">Data Pengelola</span>
              </a>
            </li>
            <li>
              <a href="/admin/pengunjung" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaUsers className="w-6 h-6 rounded-full" />
                <span className="flex-1 ms-3 whitespace-nowrap">Data Pengunjung</span>
              </a>
            </li>
            {/* <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaCircleUser className="w-6 h-6 rounded-full" />
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
    
  )
}