import React from 'react'
import DemographicsChart from './DemographicsChart'

const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Jonitha Cathrine (Admin)</span>
          <div className="relative">
            <span className="w-3.5 h-3.5 bg-red-500 rounded-full absolute top-0 right-0"></span>
            <img src="/path/to/avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </div>
      </header>

      <section className="grid grid-cols-4 gap-6">
        <div className="col-span-3 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-100 p-4 rounded">
              <h3 className="text-lg font-semibold">100 Appointments</h3>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <h3 className="text-lg font-semibold">50 New Patients</h3>
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <h3 className="text-lg font-semibold">500 Medicines Sold</h3>
            </div>
            <div className="bg-purple-100 p-4 rounded">
              <h3 className="text-lg font-semibold">100 Lab Tests</h3>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-bold mb-4">New Appointments</h4>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Time</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Patient Name</th>
                  <th className="py-2">Doctor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">9:30 AM</td>
                  <td className="py-2">05/12/2022</td>
                  <td className="py-2">Elizabeth Polson</td>
                  <td className="py-2">Dr. John</td>
                </tr>
                {/* More rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-xl font-bold mb-4">Patient Fee</h4>
          <ul>
            <li className="mb-4">
              <div className="flex items-center justify-between">
                <span>EG Subramani</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Request Fee</button>
              </div>
            </li>
            {/* More items as needed */}
          </ul>
        </div>

        <div className="col-span-3 bg-white p-6 rounded-lg shadow mt-6">
          <h4 className="text-xl font-bold mb-4">Top Medicines Sold</h4>
          <div className=' text-sm'>
          
          <DemographicsChart />
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-bold mb-4">Education Content</h4>
            <ul>
              <li className="flex items-center justify-between mb-4">
                <div>
                  <h5 className="font-semibold">4 Nutritions to Take Daily</h5>
                  <span className="text-sm text-gray-600">By Joel Paulliston</span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Assign</button>
              </li>
              {/* More items as needed */}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
