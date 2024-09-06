import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MessageIcon from "@mui/icons-material/Message";
import SchoolIcon from "@mui/icons-material/School";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import SettingsIcon from "@mui/icons-material/Settings";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const SideBar = () => {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold">JHC Clinic</h1>
      </div>
      <nav className="mt-6">
        <Link
          to="/"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <HomeIcon className="mr-3" />
          Dashboard
        </Link>
        <Link
          to="/patients"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <PersonIcon className="mr-3" />
          Patients
        </Link>
        <Link
          to="/appointments"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <CalendarTodayIcon className="mr-3" />
          Appointments
        </Link>
        <Link
          to="/doctors"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <LocalHospitalIcon className="mr-3" />
          Doctors
        </Link>
        <Link
          to="/messages"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <MessageIcon className="mr-3" />
          Messages
        </Link>
        <Link
          to="/education-content"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <SchoolIcon className="mr-3" />
          Education Content
        </Link>
        <Link
          to="/medicine-inventory"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <LocalPharmacyIcon className="mr-3" />
          Medicine Inventory
        </Link>

        <Link
          to="/AvailabilityChecker"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
           <MedicalServicesIcon className="mr-3" />
          AvailabilityChecker
        </Link>
        <Link
          to="/settings"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-100"
        >
          <SettingsIcon className="mr-3" />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
