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

export function Chart({saleReport}) {
  let monthlySales = [];
  let monthlyProfit = [];
  let datedata = [];

  for (let i = 0; i < saleReport.length; i++) {
      monthlySales.push(saleReport[i].totalPrice);
      monthlyProfit.push((saleReport[i].totalPrice * 10) / 100)
      datedata.push(saleReport[i]._id);
  }
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

const labels = datedata;
 const data = {
  labels,
  datasets: [
    {
      label:'Monthly Earning', 
      data: monthlySales,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Monthly Profit',
      data: monthlyProfit,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


  return <Bar options={options} data={data} />;
}
