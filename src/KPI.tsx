import { useEffect, useState } from "react";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  LineElement,
  BubbleController,
} from "chart.js";
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  BubbleController,
  Title,
  Tooltip,
  Legend
);

import TotalSalesChart from "./total_sales";
import RevenueChart from "./revenue";
import TopProductsChart from "./topProducts";

import { useContext } from "react";
import { AuthContext, AuthContextType } from "./AuthContext";

const KPI = () => {
  const API_BASE_URL = import.meta.env.VITE_SIMPLE_REST_URL;
  const [data, setData] = useState({
    revenue: 0,
    total_sales: 0,
    top_products: [],
  });

  const { Admin } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    const fetch_COI = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/kpi`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: Admin.name, id: Admin.id }),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetch_COI();
  }, []);

  return (
    <>
      {/* <h1 className="mt-3">
        <span style={{ color: "#EB1C61" }}>k</span>ey{" "}
        <span style={{ color: "#EB1C61" }}>P</span>erformance{" "}
        <span style={{ color: "#EB1C61" }}>I</span>ndicator
        <span style={{ fontSize: "23px" }}>s</span>
      </h1> */}
      <div className="chart-container mt-5">
        <div className="R" style={{ flex: "1", paddingRight: "20px" }}>
          <RevenueChart revenue={data.revenue} />
        </div>
        <div className="TP" style={{ flex: "1", paddingRight: "20px" }}>
          <TopProductsChart topProducts={data.top_products} />
        </div>
        <div className="TS" style={{ flex: "1", paddingRight: "20px" }}>
          <TotalSalesChart totalSales={data.total_sales} />
        </div>
      </div>
    </>
  );
};

export default KPI;
