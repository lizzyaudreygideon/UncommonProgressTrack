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
        backgroundColor: '#ffd700', // Gold color for clarity
      },
      {
        label: 'Youths Taught',
        data: [800, 1200, 1800, 2500, 6000, 10000],
        backgroundColor: '#ff8c00', // Orange color for clarity
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'logarithmic',
        title: {
          display: true,
          text: 'Impact Metrics',
          color: '#ffffff' // White title for visibility
        },
        ticks: {
          color: '#ffffff', // White tick labels for visibility
          callback: function(value) {
            return Number(value) >= 1000 ? value / 1000 + 'k' : value;
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)' // Soft white grid lines
        },
      },
      x: {
        ticks: {
          color: '#ffffff' // White x-axis tick labels for visibility
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)' // Soft white grid lines
        },
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff' // White legend text for visibility
        }
      },
      title: {
        display: true,
        text: 'Impact Metrics Over the Years',
        color: '#ffffff', // White title for visibility
        font: {
          size: 16
        }
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ImpactChart;
