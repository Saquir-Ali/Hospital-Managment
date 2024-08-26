import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './Component/HomePage'


// const Applayout = () => {

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(loadUser());
//   }, [])
  
//   const isAuthenticated = useSelector((s) => s.user.isAuthenticated)
//   return (!isAuthenticated) ? <LoginPage /> : <HomePage />
// }


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
])

export default appRouter;