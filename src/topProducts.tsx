import React from "react";
import { Bar } from "react-chartjs-2";

const TopProductsChart = ({ topProducts }) => {
  if (!Array.isArray(topProducts)) {
    return <div>Error: TopProducts data is not in the expected format.</div>;
  }

  const labels = topProducts.map((product) => `${product.product_name}`);
  const dataPoints = topProducts.map((product) => product.quantity);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Top Products",
        data: dataPoints,
        backgroundColor: "#D9EDBF",
        borderColor: "#627254",
        borderWidth: 1,
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

  return <Bar data={data} options={options} />;
};

export default TopProductsChart;
