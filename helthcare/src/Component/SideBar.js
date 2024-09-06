import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold">JHC Clinic</h1>
      </div>
      <nav className="mt-6">
        <Link
          to="/"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Dashboard
        </Link>
        <Link
          to="/Patients"
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Patients
        </Link>
        <Link
          to="/Appointments"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Appointments
        </Link>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Doctors
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Messages
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Education Content
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Medicine Inventory
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
};
export default SideBar;
