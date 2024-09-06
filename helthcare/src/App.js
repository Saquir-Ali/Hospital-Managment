import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SideBar from "./Component/SideBar";
import Dashboard from "./Component/Dashboard";
import Appointment from "./Component/Appointment";
import Header from "./Component/Header";
import NewAppointments from "./Component/NewAppointments";
import CompletedAppointments from "./Component/CompletedAppointments";
import Patients from "./Component/Patients"; // Import the Patients component

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
        path: "/appointments",
        element: <Appointment />,
        children: [
          {
            path: "/appointments",
            element: <NewAppointments />,
          },
          {
            path: "/appointments/completed",
            element: <CompletedAppointments />,
          },
        ],
      },
      {
        path: "/patients",
        element: <Patients />,
      },
      {},
    ],
  },
]);

export default appRouter;
