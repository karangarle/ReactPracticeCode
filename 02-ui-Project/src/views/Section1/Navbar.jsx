import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-6 px-16">
        <h4 className="bg-black uppercase rounded-4xl text-white px-5 py-3">
          Target Audience
        </h4>
        <button className="bg-gray-200 uppercase rounded-full px-6 py-3 text-sm p-2 tracking-widest text-black">
          digital Banking Platform
        </button>
    </div>
  );
}

export default Navbar;
