import React from "react";
import { Line } from "react-chartjs-2";

const TotalSalesChart = ({ totalSales }) => {
  if (!Array.isArray(totalSales)) {
    return <div>Error: TopSales data is not in the expected format.</div>;
  }

  const labels = totalSales.map((entry) => entry.date);
  const dataPoints = totalSales.map((entry) => entry.total_sales);


  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Number of Orders",
        data: dataPoints,
        backgroundColor: "#FFC94A",
        borderColor: "#C08B5C",
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true, // This makes the chart responsive
    maintainAspectRatio: false, // This allows you to set the width and height directly
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TotalSalesChart;
