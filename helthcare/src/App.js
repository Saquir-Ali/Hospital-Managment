import React, { useEffect } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import SideBar from './Component/SideBar'
import Dashboard from './Component/Dashboard'
import Appointment from './Component/Appointment'
import Header from './Component/Header'
import NewAppointments from './Component/NewAppointments'
import CompletedAppointments from './Component/CompletedAppointments'

const BodyStructure = () => (
  <>
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <main className="flex-1 p-6">
        <Header/>
        <Outlet />
      </main>
    </div>
  </>
)


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BodyStructure />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: '/Appointments',
        element: <Appointment />,
        children:[
          {
            path:'/Appointments',
            element:<NewAppointments/>

          },
          {
            path:'/Appointments/completed',
            element:<CompletedAppointments/>

          }
        ]
      }
    ]
  }
])

export default appRouter;