import React from "react";
import DemographicsChart from "./DemographicsChart";
import CustomChart from "./CustomChart";
import appointmentsIcon from "../Images/appointmentsIcon.png"; // Adjust path as necessary
import patientsIcon from "../Images/patientsIcon.png";
import medicinesIcon from "../Images/medicinesIcon.png";
import labTestsIcon from "../Images/labTestsIcon.png";

const Dashboard = () => {
  return (
    <main className="flex-1 bg-gray-100">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Activity Overview Section */}
        <div className="bg-white rounded-lg shadow p-4 col-span-1 md:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold">Activity Overview</h4>
            <div className="text-gray-500 cursor-pointer">Weekly ▼</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded flex flex-col items-center">
              <img
                src={appointmentsIcon}
                alt="Appointments"
                className="w-8 h-8 mb-2"
              />
              <h3 className="text-lg text-center font-semibold">
                100 Appointments
              </h3>
            </div>
            <div className="bg-green-100 p-4 rounded flex flex-col items-center">
              <img src={patientsIcon} alt="Patients" className="w-8 h-8 mb-2" />
              <h3 className="text-lg text-center font-semibold">50</h3>
              <h3 className="text-lg text-center font-semibold">
                New Patients
              </h3>
            </div>
            <div className="bg-yellow-100 p-4 rounded flex flex-col items-center">
              <img
                src={medicinesIcon}
                alt="Medicines Sold"
                className="w-8 h-8 mb-2"
              />
              <h3 className="text-lg text-center font-semibold">500</h3>
              <h3 className="text-lg text-center font-semibold">
                Medicines Sold
              </h3>
            </div>
            <div className="bg-purple-100 p-4 rounded flex flex-col items-center">
              <img
                src={labTestsIcon}
                alt="Lab Tests"
                className="w-8 h-8 mb-2"
              />
              <h3 className="text-lg text-center font-semibold">100</h3>
              <h3 className="text-lg text-center font-semibold">Lab Tests</h3>
            </div>
          </div>
        </div>

        {/* New Appointments Section */}
        <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow">
          <h4 className="text-xl font-bold mb-4">New Appointments</h4>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
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
              <tr>
                <td className="py-2">10:30 AM</td>
                <td className="py-2">05/12/2022</td>
                <td className="py-2">John David</td>
                <td className="py-2">Dr. Joel</td>
              </tr>
              <tr>
                <td className="py-2">11:00 AM</td>
                <td className="py-2">05/12/2022</td>
                <td className="py-2">Krishtav Rajan</td>
                <td className="py-2">Dr. Joel</td>
              </tr>
              <tr>
                <td className="py-2">11:30 AM</td>
                <td className="py-2">05/12/2022</td>
                <td className="py-2">EG Subramani</td>
                <td className="py-2">Dr. John</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {/* Real Time data of pateints Section */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold">Patients</h4>
            <div className="text-gray-500 cursor-pointer">Weekly ▼</div>
          </div>
          <div className="mb-6">
            <CustomChart />
          </div>
          <div className="flex justify-between text-gray-700">
            <div className="text-center">
              <p className="text-s">All time</p>
              <p className="text-lg font-semibold">41,234</p>
            </div>
            <div className="text-center">
              <p className="text-s">30 days</p>
              <p className="text-lg font-semibold">41,234</p>
            </div>
            <div className="text-center">
              <p className="text-s">7 days</p>
              <p className="text-lg font-semibold">41,234</p>
            </div>
          </div>
        </div>

        {/* Top Medicines Sold Section */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold">Top Medicine Sold</h4>
            <div className="text-gray-500 cursor-pointer">Weekly ▼</div>
          </div>
          <div className="text-sm">
            <DemographicsChart />
          </div>
        </div>

        {/* Patient Fee Section */}
        <div className="bg-white p-20 rounded-lg shadow col-span-1">
          <h4 className="text-xl text-center font-bold mb-4">
            Section To Be Decided Later...
          </h4>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
