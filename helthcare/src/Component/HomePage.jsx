// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import logo from '../Images/logo.png'

// const HomePage = () => {
//     return (
//         <>
//             <div className=' flex mx-2 bg-gray-600 '>
//                 <div id="LeftPortion" className=' border  w-2/12 text-white '>
//                     <ul className=' mx-4 fixed '>
//                         <img src={logo} alt='FOUNDCOM' className=' w-48 m-[22]]'></img>
//                         <Link to='/'><li className='p-2'> <HomeOutlinedIcon /> <span>Home</span></li></Link>
//                         <Link to='/' ><li className='p-2'><SearchOutlinedIcon /> <span>Search</span></li></Link>
//                         <Link to='/'  ><li className='p-2'><MessageOutlinedIcon /> <span>Message</span></li></Link>
//                         <Link to='/' ><li className='p-2'><AddCircleOutlineOutlinedIcon/> <span>Create</span></li></Link>
//                         <Link to='/' ><li className='p-2'><AccountCircleOutlinedIcon /> <span>Profile</span></li></Link>
//                         <Link to='/' ><li className='p-2'><MenuOutlinedIcon /> <span>More</span></li></Link>
//                     </ul>
//                 </div>

//                 <div id="midPortion" className='mx-4 w-8/12 bg-gray-500 '>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default HomePage

import React from "react";
import OverviewCards from "./OverviewCards";
import AppointmentChart from "./AppointmentChart";
import DemographicsChart from "./DemographicsChart";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation Bar */}
            <nav className="bg-blue-600 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white text-2xl font-bold">Healthcare Dashboard</h1>
                    <div>
                        <a href="#" className="text-white px-4">Dashboard</a>
                        <a href="#" className="text-white px-4">Patients</a>
                        <a href="#" className="text-white px-4">Appointments</a>
                        <a href="#" className="text-white px-4">Staff</a>
                    </div>
                </div>
            </nav>

            {/* Main Dashboard Content */}
            <div className="container mx-auto py-8">
                <OverviewCards />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <div className="lg:col-span-2 bg-white p-6 shadow rounded">
                        <AppointmentChart />
                    </div>
                    <div className="bg-white p-6 shadow rounded">
                        <DemographicsChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage
