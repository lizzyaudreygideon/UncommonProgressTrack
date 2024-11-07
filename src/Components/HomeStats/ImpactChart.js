import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend);
const ImpactChart = () => {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Schools Worked With',
        data: [ 10, 20, 40, 45, 50, 60],
        backgroundColor: '#ffd700' ,
      },
      {
        label: 'Youths Taught',
        data: [800, 1200, 1800, 2500, 6000, 10000],
        backgroundColor: '#ff8c00',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'logarithmic', // Use logarithmic scale
        title: {
          display: true,
          text: 'Impact Metrics ',
        },
        ticks: {
          callback: function(value) {
            // Format values on log scale for readability
            return Number(value.toString());
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Impact Metrics Over the Years',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ImpactChart;
