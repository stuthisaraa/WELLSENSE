import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import io from "socket.io-client";
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

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Establish socket connection
const socket = io("http://192.168.204.155:8000");

function PulseChart({ patientId }) {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    socket.on("pulseData", (data) => {
      // Check if the data corresponds to the patient
      if (data.patientId === patientId) {
        setDataPoints((prev) => {
          const newData = [...prev, data.pulse];
          if (newData.length > 20) newData.shift(); // Keep last 20 readings
          return newData;
        });
      }
    });

    return () => {
      socket.off("pulseData");
    };
  }, [patientId]); // Depend on patientId for filtering

  const chartData = {
    labels: dataPoints.map((_, i) => i),
    datasets: [
      {
        label: "Pulse Rate",
        data: dataPoints,
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(255,0,0,0.2)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="pulse-chart">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default PulseChart;
