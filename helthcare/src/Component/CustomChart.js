import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomChart = () => {
  const data = {
    labels: [
      "Mon - 14",
      "Tue - 15",
      "Wed - 16",
      "Thu - 17",
      "Fri - 18",
      "Sat - 19",
      "Sun - 20",
    ],
    datasets: [
      {
        label: "Patients",
        data: [1500, 2212, 1800, 2400, 2100, 2000, 1800],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.1)",
        borderColor: "#007bff",
        borderWidth: 4,
        tension: 0.4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#007bff",
        pointBorderWidth: 4,
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend as it's not in the provided design
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            return ` ${context.parsed.y} patients`;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false, // Remove grid lines on X axis
        },
      },
      y: {
        display: true,
        min: 0,
        max: 3000,
        ticks: {
          stepSize: 500,
        },
        grid: {
          color: "#d3d3d3",
          drawBorder: false,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CustomChart;
