import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-center text-5xl underline">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
