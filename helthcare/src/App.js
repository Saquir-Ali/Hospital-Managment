import React, { useEffect } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SideBar from "./Component/SideBar";
import Dashboard from "./Component/Dashboard";
import Appointment from "./Component/Appointment";
import Header from "./Component/Header";
import NewAppointments from "./Component/NewAppointments";
import CompletedAppointments from "./Component/CompletedAppointments";
import Patients from "./Component/Patients"; // Import the Patients component
import MedicinalInventory from "./Component/MedicinalInventory";
import BloodAvailabilityChecker from "./Component/BloodAvailabilityChecker";
import AvailabilityChecker from "./Component/AvailabilityChecker";
import Doctors from "./Component/Doctors";
import Messages from "./Component/Messages";
import Reviews from "./Component/Reviews";
import MedicineAvailabilityChecker from "./Component/MedicineAvailabilityChecker";
import SuppliesAvailabilityChecker from "./Component/GeneralMedicalSupplierChecker";
import HospitalList from "./Component/HospitalList";

const BodyStructure = () => (
  <>
    <div className="min-h-screen bg-gray-100 flex">
      <div className="fixed top-0 left-0 h-full w-64 bg-white">
        <SideBar />
      </div>
      <main className="ml-64 flex-1 overflow-auto p-6">
        <Outlet />
      </main>
    </div>
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyStructure />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/Appointments",
        element: <Appointment />,
        children: [
          {
            path: "/Appointments",
            element: <NewAppointments />,
          },
          {
            path: "/Appointments/completed",
            element: <CompletedAppointments />,
          },
        ],
      },
      {
        path: "/Doctors",
        element: <Doctors />,
      },
      {
        path: "/Messages",
        element: <Messages />,
      },
      {
        path: "/Patients",
        element: <Patients />,
      },
      {
        path: "/medicine-inventory",
        element: <MedicinalInventory />,
      },
      {
        path: "/Reviews",
        element: <Reviews />,
      },
      {
        path: "AvailabilityChecker",
        element: <AvailabilityChecker />,
      },
      {
        path: "/AvailabilityChecker/BloodAvailabilityChecker",
        element: <BloodAvailabilityChecker />,
      },
      {
        path: "/AvailabilityChecker/MedicineAvailabilityChecker",
        element: <MedicineAvailabilityChecker />,
      },
      {
        path: "/AvailabilityChecker/GeneralMedicalSupplierChecker",
        element: <SuppliesAvailabilityChecker/>,
      },
      {
        path: "/AvailabilityChecker/HospitalList",
        element: <HospitalList/>,
      },
      
    ],
  },
]);

export default appRouter;
