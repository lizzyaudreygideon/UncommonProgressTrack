import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Students Taught',
                data: data.values,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default BarChart;
