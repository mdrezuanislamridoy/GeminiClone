import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}
