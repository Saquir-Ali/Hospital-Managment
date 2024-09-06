import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SideBar from "./Component/SideBar";
import Dashboard from "./Component/Dashboard";
import Appointment from "./Component/Appointment";
import Header from "./Component/Header";
import NewAppointments from "./Component/NewAppointments";
import CompletedAppointments from "./Component/CompletedAppointments";
import Patients from "./Component/Patients";
import Messages from "./Component/Messages";
import Reviews from "./Component/Reviews";
import Doctors from "./Component/Doctors"; // Import the Doctors component

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
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/doctors", // New route for Doctors page
        element: <Doctors />, // Render the Doctors component
      },
    ],
  },
]);

export default appRouter;
