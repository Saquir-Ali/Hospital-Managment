import React from 'react'
import DemographicsChart from './DemographicsChart'

const Dashboard = () => {
  return (
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
  )
}

export default Dashboard
