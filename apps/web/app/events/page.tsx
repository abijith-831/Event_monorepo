'use client';
import React from 'react';
import Header from '../Components/Header';
import MobileSidebar from '../Components/MobileSidebar';
import Tasks from '../Components/Tasks';
import SideBar from '../Components/SideBar';

const Page = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-12 xl:px-16 py-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/bg/dark-bg.jpg')" }}
    >
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-4rem)] gap-4">

        {/* Sidebar only on desktop */}
        <div className="hidden lg:flex w-1/5 bg-white rounded-xl p-4">
          <SideBar />
        </div>

        {/* Main content */}
        <div className="w-full lg:w-4/5 flex flex-col gap-4 h-auto lg:h-[calc(100vh-4rem)]">

          {/* Normal Header visible only on small screens */}
          <div className=" lg:hidden flex flex-col gap-4">
            <MobileSidebar />
            <Header />
          </div>

          {/* Desktop Header visible only on large screens */}
          <div className="hidden lg:block">
            <Header />
          </div>

          {/* Tasks section */}
          <div className="flex bg-white rounded-xl p-4 overflow-auto flex-1">
            <Tasks />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
