import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export function Chart() {
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Appoinments',
      data: [10,2,4,56,],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Revenue',
      data:[],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


  return <Bar options={options} data={data} />;
}
