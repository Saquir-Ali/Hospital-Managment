import React from "react";
import { useParams } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications"; // Importing Material-UI icon

const Header = ({ param }) => {
  return (
    <header className="flex items-center justify-between mb-2">
      <h2 className="text-3xl font-bold">{param}</h2>
      <div className="flex items-center space-x-4">
        <span className="font-semibold">Jonitha Cathrine (Admin)</span>
        <div className="relative flex items-center space-x-2">
          <div className="relative">
            <NotificationsIcon
              style={{ fontSize: 24 }}
              className="text-gray-600 cursor-pointer"
            />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>
          <div className="relative">
            <span className="w-3.5 h-3.5 bg-green-500 rounded-full absolute top-0 right-0"></span>
            <img
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
