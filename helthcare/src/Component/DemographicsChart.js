import React, { useEffect } from 'react';
// import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// // Registering the necessary components
// Chart.register(
//     DoughnutController,
//     ArcElement,
//     Tooltip,
//     Legend
//   );

import { Chart, DoughnutController, LineController, BarController, ArcElement, LineElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(
  DoughnutController,
  LineController,
  BarController,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);


const DemographicsChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('demographicsChart').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female', 'Other'],
        datasets: [{
          label: 'Patients',
          data: [60, 35, 5],
          backgroundColor: ['#3b82f6', '#fbbf24', '#ef4444']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, []);

  return <canvas id="demographicsChart"></canvas>;
}

export default DemographicsChart;
