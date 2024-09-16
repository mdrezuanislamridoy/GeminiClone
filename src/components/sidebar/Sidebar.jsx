import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./sidebar.css";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  const handleExpand = () => {
    setExtended(!extended);
  };
  return (
    <div
      className={`sidebar min-h-screen inline-flex flex-col justify-between bg-slate-100 px-2 ${
        extended ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="top">
        <img
          className="block m-2 cursor-pointer"
          onClick={handleExpand}
          src={assets.menu_icon}
        />
        <div className="newChat mt-12 inline-flex items-center gap-2 py-2 px-4 bg-slate-200 rounded-full text-sm text-gray-400 cursor-pointer">
          <img className="" src={assets.plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent flex flex-col ">
            <p className="mt-7 mb-6">Recent</p>
            <div className="recent-entity flex items-center justify gap-3 p-3 rounded-full text-gray-800 cursor-pointer hover:bg-slate-200 ">
              <img src={assets.message_icon} alt="" />
              <p>What is React ...</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom recent flex flex-col ">
        <div className="bottom-item flex items-center justify gap-3 p-3 rounded-full text-gray-800 cursor-pointer hover:bg-slate-200 pr-3">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item flex items-center justify gap-3 p-3 rounded-full text-gray-800 cursor-pointer hover:bg-slate-200 pr-3">
          <img src={assets.history_icon} alt="" />
          {extended && <p>History</p>}
        </div>
        <div className="bottom-item flex items-center justify gap-3 p-3 rounded-full text-gray-800 cursor-pointer hover:bg-slate-200 pr-3">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}
