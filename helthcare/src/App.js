import React, { useEffect } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import SideBar from './Component/SideBar'
import Dashboard from './Component/Dashboard'


// const Applayout = () => {

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(loadUser());
//   }, [])

//   const isAuthenticated = useSelector((s) => s.user.isAuthenticated)
//   return (!isAuthenticated) ? <LoginPage /> : <HomePage />
// }


const BodyStructure = () => (

  <>
    <div className="min-h-screen bg-gray-100 flex">
      <SideBar />
      <Outlet />
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
    ]
  }
])

export default appRouter;