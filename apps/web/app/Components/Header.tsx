'use client';
import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { useEventStore } from '../../src/store/useEventStore';
import { LayoutGrid, List } from "lucide-react"; 

const Header = () => {
  const { viewType, setViewType ,searchQuery,setSearchQuery} = useEventStore();

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",   
    day: "numeric",   
    month: "long" 
  });


  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 bg-white rounded-xl gap-4 md:gap-6 py-4">
        
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-4">
          {/* Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search..."
              className="w-full pr-10 pl-4 py-2 rounded-full border border-gray-300 bg-gray-200"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Date */}
          <div className="ml-0 md:ml-4 text-center md:text-left">
            <h1 className="text-gray-500 text-sm md:text-base whitespace-nowrap">{formattedDate}</h1>
          </div>
        </div>

        {/* Right Section (View Toggle) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="view-toggle-wrapper flex">
          <div className="view-toggle-container"> 
            <button className={`view-toggle-button flex font-bold gap-2 ${viewType === 'card' ? 'active' : ''}`} onClick={() => setViewType('card')}><LayoutGrid size={18} /> Card View </button>
            <button className={`view-toggle-button flex font-bold gap-2 ${viewType === 'list' ? 'active' : ''}`} onClick={() => setViewType('list')}><List size={18} /> List View </button> </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;
