import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Monthly Progress',
                data: data.values,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    return <Line data={chartData} />;
};

export default LineChart;
