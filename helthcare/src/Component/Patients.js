import React, { useState } from "react";
import Header from "./Header";

const Patient = () => {
  // Sample patient data (You can replace this with API data)
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Hugo Lloris",
      phone: "+1 234 567 890",
      createdAt: "20 Aug 2021",
      gender: "Male",
      bloodGroup: "A+",
      age: 25,
    },
    {
      id: 2,
      name: "Mauris auctor",
      phone: "+1 456 789 123",
      createdAt: "22 Nov 2023",
      gender: "Female",
      bloodGroup: "B+",
      age: 34,
    },
    {
      id: 3,
      name: "Hugo Lloris",
      phone: "+1 234 567 890",
      createdAt: "20 Aug 2021",
      gender: "Male",
      bloodGroup: "A-",
      age: 25,
    },
    {
      id: 4,
      name: "Mauris auctor",
      phone: "+1 456 789 123",
      createdAt: "22 Nov 2023",
      gender: "Female",
      bloodGroup: "B-",
      age: 34,
    },
    {
      id: 5,
      name: "Hugo Lloris",
      phone: "+1 234 567 890",
      createdAt: "20 Aug 2021",
      gender: "Male",
      bloodGroup: "O+",
      age: 25,
    },
    {
      id: 6,
      name: "Mauris auctor",
      phone: "+1 456 789 123",
      createdAt: "22 Nov 2023",
      gender: "Female",
      bloodGroup: "B+",
      age: 34,
    },
    {
      id: 7,
      name: "Hugo Lloris",
      phone: "+1 234 567 890",
      createdAt: "20 Aug 2021",
      gender: "Male",
      bloodGroup: "O-",
      age: 25,
    },
    {
      id: 8,
      name: "Mauris auctor",
      phone: "+1 456 789 123",
      createdAt: "22 Nov 2023",
      gender: "Female",
      bloodGroup: "O+",
      age: 34,
    },
  ]);

  // Search and Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler for gender filter
  const handleGenderFilter = (e) => {
    setGenderFilter(e.target.value);
  };

  // Handler for date filter
  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
  };

  return (
    <>
      <Header param="Patients" />
      <div className="p-4">
        {/* Top section for statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-white p-4 rounded shadow mb-6 mt-2">
            <h4 className="text-xl font-bold">Today Patients</h4>
            <div className="text-3xl font-bold">10</div>
            <p>
              Total Patients <span className="text-blue-600">10 today</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-6 mt-2">
            <h4 className="text-xl font-bold">Monthly Patients</h4>
            <div className="text-3xl font-bold">230</div>
            <p>
              Total Patients{" "}
              <span className="text-orange-600">230 this month</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow mb-6 mt-2">
            <h4 className="text-xl font-bold">Yearly Patients</h4>
            <div className="text-3xl font-bold">1,500</div>
            <p>
              Total Patients{" "}
              <span className="text-green-600">1,500 this year</span>
            </p>
          </div>
        </div>

        {/* Search and filter options */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Search 'Patients'"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border rounded-md w-full"
          />
          <select
            value={genderFilter}
            onChange={handleGenderFilter}
            className="p-2 border rounded-md w-full md:w-1/4"
          >
            <option value="">Gender...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            value={dateFilter}
            onChange={handleDateFilter}
            className="p-2 border rounded-md w-full md:w-1/4"
          />
          <button className="bg-blue-600 text-white p-2 rounded-md">
            Filter
          </button>
        </div>

        {/* Patients Table */}
        <div className="bg-white p-4 rounded shadow">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Patient</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Blood Group</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients
                .filter((patient) =>
                  patient.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .filter((patient) =>
                  genderFilter ? patient.gender === genderFilter : true
                )
                .map((patient) => (
                  <tr key={patient.id}>
                    <td className="border px-4 py-2">{patient.id}</td>
                    <td className="border px-4 py-2">{patient.name}</td>
                    <td className="border px-4 py-2">{patient.createdAt}</td>
                    <td className="border px-4 py-2">{patient.gender}</td>
                    <td className="border px-4 py-2">{patient.bloodGroup}</td>
                    <td className="border px-4 py-2">{patient.age}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-gray-200 p-2 rounded">...</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Patient;
