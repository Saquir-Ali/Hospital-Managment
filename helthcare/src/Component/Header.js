import React from "react";
import { useParams } from "react-router-dom";
const Header = () => {
  const params = useParams();
  console.log(params);
  return (
    <header className="flex items-center justify-between mb-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <span className="font-semibold">Jonitha Cathrine (Admin)</span>
        <div className="relative">
          <span className="w-3.5 h-3.5 bg-red-500 rounded-full absolute top-0 right-0"></span>
          <img
            src="/path/to/avatar.jpg"
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
