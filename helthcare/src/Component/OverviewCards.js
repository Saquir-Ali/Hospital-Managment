import React from "react";

const cardsData = [
  { title: "Total Patients", count: "1,245", bgColor: "bg-blue-500", icon: "fas fa-user-injured" },
  { title: "Appointments Today", count: "150", bgColor: "bg-green-500", icon: "fas fa-calendar-check" },
  { title: "Occupied Beds", count: "75", bgColor: "bg-red-500", icon: "fas fa-bed" },
  { title: "Available Doctors", count: "30", bgColor: "bg-yellow-500", icon: "fas fa-user-md" },
];

const OverviewCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <div key={index} className={`${card.bgColor} text-white p-6 rounded shadow-lg`}>
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-lg font-bold">{card.title}</h5>
                  <h2 className="text-3xl font-bold">{card.count}</h2>
                </div>
                <i className={`${card.icon} text-4xl opacity-20`}></i>
              </div>
            </div>
          ))}
        </div>
  );
}

export default OverviewCards

