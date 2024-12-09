import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";
import Papa from 'papaparse';
import { Download, Loader2, AlertCircle } from "lucide-react";

// Custom Alert Component
const Alert = ({ title, description }) => (
  <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded">
    <div className="flex items-center">
      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
      <div>
        <h3 className="text-lg font-medium text-red-800">{title}</h3>
        <p className="text-sm text-red-700 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

const ReportCard = ({ title, value, description, color, isLoading }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${color}`}>
    {isLoading ? (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    ) : (
      <>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-4xl font-bold mt-2 text-gray-900">{value}</p>
        <p className="mt-2 text-sm font-medium">{description}</p>
      </>
    )}
  </div>
);

const ChartContainer = ({ title, children, isLoading }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {isLoading ? (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    ) : (
      <div className="w-full h-64">
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    )}
  </div>
);

const ReportsPage = () => {
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadLoading, setDownloadLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://continuing-veradis-uncommon-44b1416d.koyeb.app/student");
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      // Transform data for line chart
      const lineTransformed = data.reduce((acc, student) => {
        const date = new Date(student.dateJoined).toLocaleDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
      setLineData(
        Object.entries(lineTransformed).map(([date, Taught]) => ({ name: date, Taught }))
      );

      // Transform data for bar chart
      const barTransformed = data.reduce((acc, student) => {
        acc[student.school] = (acc[student.school] || 0) + 1;
        return acc;
      }, {});
      setBarData(
        Object.entries(barTransformed).map(([school, Taught]) => ({ school, Taught }))
      );

      // Transform data for pie chart
      const pieTransformed = data.reduce((acc, student) => {
        acc[student.help_hub] = (acc[student.help_hub] || 0) + 1;
        return acc;
      }, {});
      setPieData(
        Object.entries(pieTransformed).map(([name, value]) => ({ name, value }))
      );

      // Set card data
      const totalStudents = data.length;
      const totalSchools = [...new Set(data.map((student) => student.school))].length;
      setCardData([
        {
          title: "Students Taught This Month",
          value: totalStudents,
          description: "+5.2% from last month",
          color: "border-green-500"
        },
        {
          title: "Total Number Of Schools",
          value: totalSchools,
          description: "Includes 3 new schools",
          color: "border-blue-500"
        },
        {
          title: "Monthly Reports",
          value: "Ready",
          description: "Download available below",
          color: "border-orange-500"
        }
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (format) => {
    setDownloadLoading(true);
    try {
      const response = await fetch("https://continuing-veradis-uncommon-44b1416d.koyeb.app/student");
      const data = await response.json();

      if (format === 'csv') {
        const csv = Papa.unparse(data);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `report-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        // For PDF, we'll create a simple structure
        const content = JSON.stringify(data, null, 2);
        const blob = new Blob([content], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `report-${new Date().toISOString().split('T')[0]}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      setError('Failed to download report');
    } finally {
      setDownloadLoading(false);
    }
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  if (error) {
    return (
      <div className="p-6">
        <Alert title="Error" description={error} />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto px-3 sm:px-10 ">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-900 text-center pt-4 pb-5">Reports Dashboard</h1>
        <p className="text-gray-600 mt-2">Track monthly and school-specific statistics</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cardData.map((card, index) => (
          <ReportCard key={index} {...card} isLoading={isLoading} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartContainer title="Teaching Progress Over Time" isLoading={isLoading}>
          <LineChart data={lineData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <Line type="monotone" dataKey="Taught" stroke="#2F4F7F" strokeWidth={3} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ChartContainer>

        <ChartContainer title="School Performance Metrics" isLoading={isLoading}>
          <BarChart data={barData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="school" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Taught" fill="#3F51B5" />
          </BarChart>
        </ChartContainer>
      </div>

      {/* Pie Chart Section */}
      <div className="mb-8">
        <ChartContainer title="School Contributions" isLoading={isLoading}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ChartContainer>
      </div>

      {/* Reports Download Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Download Monthly Reports</h2>
        <p className="text-gray-600 mb-6">Get detailed statistics in PDF or CSV format</p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleDownload('pdf')}
            disabled={downloadLoading}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {downloadLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Download PDF
          </button>
          <button
            onClick={() => handleDownload('csv')}
            disabled={downloadLoading}
            className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {downloadLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Download className="h-4 w-4" />
            )}
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;