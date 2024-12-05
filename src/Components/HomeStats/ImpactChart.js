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
        data: [10, 20, 40, 45, 50, 60],
        backgroundColor: '#ffd700',
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
          text: 'Impact Metrics',
          color: '#ffffff', // White text
        },
        ticks: {
          color: '#ffffff', // White ticks
          callback: function (value) {
            // Format values on log scale for readability
            return Number(value.toString());
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Light white grid lines
        },
      },
      x: {
        ticks: {
          color: '#ffffff', // White ticks
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Light white grid lines
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff', // White legend text
        },
      },
      title: {
        display: true,
        text: 'Impact Metrics Over the Years',
        color: '#ffffff', // White title text
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ImpactChart;
