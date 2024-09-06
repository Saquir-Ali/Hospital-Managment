import React from "react";
import Header from "./Header";

const Doctors = () => {
  // Hardcoded doctors data
  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      specialty: "Cardiologist",
      availability: "Available",
      time: "10:00 AM - 2:00 PM",
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 2,
      name: "Dr. Sarah Johnson",
      specialty: "Pediatrician",
      availability: "Unavailable",
      time: "1:00 PM - 5:00 PM",
      imageUrl: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      specialty: "Dermatologist",
      availability: "Available",
      time: "9:00 AM - 1:00 PM",
      imageUrl: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      id: 4,
      name: "Dr. Emily Davis",
      specialty: "Neurologist",
      availability: "Available",
      time: "11:00 AM - 3:00 PM",
      imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
    },
  ];

  return (
    <>
      <Header param="Doctors" />
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Doctors List</h2>
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id} className="flex items-center p-4 border-b">
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="text-gray-500">Time: {doctor.time}</p>
              </div>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  doctor.availability === "Available"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {doctor.availability}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Doctors;
