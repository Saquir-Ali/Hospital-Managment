import React, { useEffect } from 'react';
import { Chart, ArcElement, LineElement, PointElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// Registering the elements
Chart.register(ArcElement, LineElement, PointElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AppointmentChart = () => {
  useEffect(() => {
    const ctx = document.getElementById('appointmentChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Appointments',
          data: [50, 75, 60, 90, 110, 65, 80],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, []);

  return <canvas id="appointmentChart"></canvas>;
}

export default AppointmentChart;
