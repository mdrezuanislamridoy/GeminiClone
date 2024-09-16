import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

export default function Main() {
  const { fetchData, setInput, input, loading, resultData, showResult } =
    useContext(Context);

  return (
    <div className="main flex-1 min-h-screen flex flex-col relative bg-white">
      {/* Navbar */}
      <div className="nav flex items-center justify-between p-5 text-xl text-gray-600">
        <p>Gemini</p>
        <img
          className="w-10 h-10 rounded-full"
          src={assets.user_icon}
          alt="User"
        />
      </div>

      {/* Main Content */}
      <div className="main-container flex-1 flex flex-col justify-center m-999">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        {/* Cards */}
        <div className="cards">{/* Add your cards here */}</div>
      </div>

      <div className="mx-8">
        {loading && <p>Loading...</p>}
        {showResult && <div>{resultData}</div>}
      </div>
      {/* Bottom Search Box */}
      <div className="main-bottom w-full py-3 px-5 bg-white shadow-md">
        <div className="search-box flex items-center justify-between gap-3 bg-gray-100 p-3 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="flex-1 bg-transparent outline-none text-lg p-1"
            type="text"
            placeholder="Enter Prompt Here"
          />
          <img
            className="w-5 cursor-pointer"
            src={assets.gallery_icon}
            alt="Gallery"
          />
          <img className="w-5 cursor-pointer" src={assets.mic_icon} alt="Mic" />
          <img
            onClick={() => fetchData()}
            className="w-5 cursor-pointer"
            src={assets.send_icon}
            alt="Send"
          />
        </div>
      </div>

      {/* Footer Information */}
      <div className="bottom-info text-center text-gray-400 p-4 text-xs">
        <p>
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy & Gemini Apps.
        </p>
      </div>

      {/* Display results */}
    </div>
  );
}
