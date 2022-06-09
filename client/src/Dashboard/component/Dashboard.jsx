import React from "react";
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement
);
export default function Dashboard() {
  const data={
    labels:['2020', '2020', '2020', '2021'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12,47,132,123,5,66],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  }
  return (
    <div>
      <div className="col-lg-10 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Rating Chart</h4>
            <Line data={data}/>
          </div>
        </div>
      </div>
      <div className="col-lg-10 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Sci-Fi Rating Distribution</h4>
            <Bar data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
}
