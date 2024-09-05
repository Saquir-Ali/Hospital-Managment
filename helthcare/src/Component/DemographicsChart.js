import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DemographicsChart = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the chart if it already exists
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    // Create a new chart
    myChartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Paracetamol", "Vitamin Tablets", "Antacid Tablets", "Others"],
        datasets: [
          {
            label: "Top Medicines Sold",
            data: [40, 30, 20, 10], // Replace with your actual data
            backgroundColor: ["#4F46E5", "#10B981", "#F59E0B", "#6B7280"],
            hoverBackgroundColor: ["#6366F1", "#34D399", "#FBBF24", "#9CA3AF"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Clean up the chart on component unmount
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return <canvas id="demographicsChart" ref={chartRef} />;
};

export default DemographicsChart;
