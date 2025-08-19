'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SideBar from './SideBar';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="lg:hidden flex items-center justify-between w-full bg-white p-4 rounded-xl shadow-md">
      <h1 className="text-xl font-bold">Hi, Admin</h1>

      {/* Hamburger Button */}
      <button onClick={toggleMenu} className="p-2 rounded-md bg-gray-100">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />
          <div className="relative w-64 bg-white h-full shadow-lg">
            <SideBar />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
