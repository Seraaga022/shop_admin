import React from "react";
import { Line } from "react-chartjs-2";

const RevenueChart = ({ revenue }) => {
  if (!Array.isArray(revenue)) {
    return <div>Error: Revenue data is not in the expected format.</div>;
  }

  const labels = revenue.map((entry) => entry.date);
  const dataPoints = revenue.map((entry) => entry.revenue);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue",
        data: dataPoints,
        backgroundColor: "#8B93FF",
        borderColor: "#D895DA",
        borderWidth: 4,
        tension: .4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default RevenueChart;
