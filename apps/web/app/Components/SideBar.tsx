import React from "react";
import { LayoutDashboard, FolderKanban, ListTodo, Wrench, Bell, MessageCircle } from "lucide-react";

const SideBar = () => {
  return (
    <div className="p-4 w-full h-full flex flex-col">
      <div className="text-xl mb-8 border-b-2 border-gray-300 pb-2">
        <h1>Hi, Admin</h1>
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 cursor-pointer py-3  px-4 hover:bg-black hover:text-white hover:rounded-full">
            <LayoutDashboard size={20} />
            <h1>Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 cursor-pointer py-3  px-4 hover:bg-black hover:text-white hover:rounded-full">
            <FolderKanban size={20} />
            <h1>Projects</h1>
          </div>
          <div className="flex items-center gap-2 bg-black rounded-full text-white cursor-pointer py-3  px-4 hover:bg-black hover:text-white hover:rounded-full">
            <ListTodo size={20} />
            <h1>TaskList</h1>
          </div>
          <div className="flex items-center gap-2 cursor-pointer py-3  px-4 hover:bg-black hover:text-white hover:rounded-full">
            <Wrench size={20} /> 
            <h1>Services</h1>
          </div>
          <div className="flex items-center gap-2 cursor-pointer py-3  px-4 hover:bg-black hover:text-white hover:rounded-full">
            <Bell size={20} />
            <h1>Notifications</h1>
          </div>
          <div className="flex items-center gap-2 cursor-pointer py-3  px-4 hover:bg-black hover:text-white hover:rounded-full">
            <MessageCircle size={20} />
            <h1>Chat</h1>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center text-gray-700">
          <div className="w-24 h-24 rounded-full border border-gray-400 bg-gray-300 flex items-center justify-center">
            <span className="text-xl font-bold text-white">A</span>
          </div>
          <h2 className="mt-3 text-lg font-semibold">Admin</h2>
          <p className="text-sm text-gray-500">admin@example.com</p>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
