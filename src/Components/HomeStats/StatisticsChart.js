import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StatisticsChart = () => {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'], 
    datasets: [
      {
        label: 'Children Taught',
        data: [800, 1200, 1800, 2500, 6000, 10000], 
        borderColor: 'blue',
        backgroundColor: 'blue',
        tension: 0.4, // Makes the line smooth
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Children taught Over the Years',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default StatisticsChart;
