// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   BarChart,
//   Bar,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const ReportCard = ({ title, value, description, color }) => (
//   <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${color}-500`}>
//     <h2 className="text-xl font-bold">{title}</h2>
//     <p className="text-4xl font-bold mt-2">{value}</p>
//     <p className={`mt-2 text-${color}-500`}>{description}</p>
//   </div>
// );

// const ReportsPage = () => {
//   const [lineChartData, setLineChartData] = useState([]);
//   const [barChartData, setBarChartData] = useState([]);
//   const [pieChartData, setPieChartData] = useState([]);
//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     // Fetch data from MongoDB
//     axios.get("http://localhost:5000/student").then((res) => {
//       const data = res.data;

//       // Transform data for charts and cards
//       const lineData = data.reduce((acc, student) => {
//         const date = new Date(student.dateJoined).toISOString().split("T")[0];
//         acc[date] = (acc[date] || 0) + 1;
//         return acc;
//       }, {});
//       setLineChartData(
//         Object.entries(lineData).map(([date, fed]) => ({ name: date, fed }))
//       );

//       const barData = data.reduce((acc, student) => {
//         acc[student.school] = (acc[student.school] || 0) + 1;
//         return acc;
//       }, {});
//       setBarChartData(
//         Object.entries(barData).map(([school, fed]) => ({ school, fed }))
//       );

//       const pieData = data.reduce((acc, student) => {
//         acc[student.help_hub] = (acc[student.help_hub] || 0) + 1;
//         return acc;
//       }, {});
//       setPieChartData(
//         Object.entries(pieData).map(([name, value]) => ({ name, value }))
//       );

//       const totalStudents = data.length;
//       const totalSchools = [...new Set(data.map((student) => student.school))]
//         .length;
//       setCardData([
//         {
//           title: "Children Fed This Month",
//           value: totalStudents,
//           description: "+5.2% from last month",
//           color: "green",
//         },
//         {
//           title: "Total Schools Served",
//           value: totalSchools,
//           description: "Includes 3 new schools",
//           color: "blue",
//         },
//         {
//           title: "Monthly Reports",
//           value: "Ready",
//           description: "Download available below",
//           color: "orange",
//         },
//       ]);
//     });
//   }, []);

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">Reports</h1>
//         <p className="text-gray-600">Track monthly and school-specific statistics</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cardData.map((card, index) => (
//           <ReportCard key={index} {...card} />
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold">Feeding Progress Over Time</h2>
//           <LineChart width={400} height={250} data={lineChartData}>
//             <Line type="monotone" dataKey="fed" stroke="#2F4F7F" strokeWidth={3} />
//             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//           </LineChart>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold">School Performance Metrics</h2>
//           <BarChart width={400} height={250} data={barChartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="school" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="fed" fill="#FF9800" />
//           </BarChart>
//         </div>
//       </div>

//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold">School Contributions</h2>
//         <PieChart width={300} height={300}>
//           <Pie
//             data={pieChartData}
//             dataKey="value"
//             nameKey="name"
//             cx="50%"
//             cy="50%"
//             outerRadius={100}
//             label
//           >
//             {pieChartData.map((entry, index) => (
//               <Cell key={index} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;


// import React from "react";
// import {
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   BarChart,
//   Bar,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// // COLORS for the Pie Chart
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// // ReportCard Component
// const ReportCard = ({ title, value, description, color }) => (
//   <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${color}-500`}>
//     <h2 className="text-xl font-bold">{title}</h2>
//     <p className="text-4xl font-bold mt-2">{value}</p>
//     <p className={`mt-2 text-${color}-500`}>{description}</p>
//   </div>
// );

// // Sample Data for Charts - Replace with your MongoDB Data
// const lineData = [
//   { name: "Jan", fed: 200 },
//   { name: "Feb", fed: 350 },
//   { name: "Mar", fed: 500 },
//   { name: "Apr", fed: 750 },
//   { name: "May", fed: 1200 },
// ];

// const barData = [
//   { school: "School A", fed: 300 },
//   { school: "School B", fed: 450 },
//   { school: "School C", fed: 600 },
// ];

// const pieData = [
//   { name: "School A", value: 300 },
//   { name: "School B", value: 450 },
//   { name: "School C", value: 600 },
// ];

// // ReportsPage Component
// const ReportsPage = () => {
//   return (
//     <div className="p-6">
//       {/* Header Section */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold">Reports</h1>
//         <p className="text-gray-600">Track monthly and school-specific statistics</p>
//       </div>

//       {/* Metrics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <ReportCard
//           title="Children Fed This Month"
//           value="3,250"
//           description="+5.2% from last month"
//           color="green"
//         />
//         <ReportCard
//           title="Total Schools Served"
//           value="15"
//           description="Includes 3 new schools"
//           color="blue"
//         />
//         <ReportCard
//           title="Monthly Reports"
//           value="Ready"
//           description="Download available below"
//           color="orange"
//         />
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
//         {/* Line Chart */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold">Feeding Progress Over Time</h2>
//           <LineChart
//             width={400}
//             height={250}
//             data={lineData}
//             margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
//           >
//             <Line type="monotone" dataKey="fed" stroke="#2F4F7F" strokeWidth={3} />
//             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//           </LineChart>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold">School Performance Metrics</h2>
//           <BarChart width={400} height={250} data={barData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="school" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="fed" fill="#FF9800" />
//           </BarChart>
//         </div>
//       </div>

//       {/* Pie Chart Section */}
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold">School Contributions</h2>
//         <div className="flex justify-center items-center">
//           <PieChart width={300} height={300}>
//             <Pie
//               data={pieData}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               fill="#8884d8"
//               label
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//           </PieChart>
//         </div>
//       </div>

//       {/* Reports Download Section */}
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold">Download Monthly Reports</h2>
//         <p className="mt-2 text-gray-600">Get detailed statistics in PDF or CSV format</p>
//         <div className="mt-4">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
//             Download PDF
//           </button>
//           <button className="bg-gray-200 text-black px-4 py-2 rounded">
//             Download CSV
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReportsPage;

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
} from "recharts";
import axios from "axios";

const ReportCard = ({ title, value, description, color }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${color}-500`}>
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-4xl font-bold mt-2">{value}</p>
    <p className={`mt-2 text-${color}-500`}>{description}</p>
  </div>
);

const ReportsPage = () => {
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB
    axios.get("http://localhost:5000/student").then((res) => {
      const data = res.data;

      // Transform data for line chart
      const lineTransformed = data.reduce((acc, student) => {
        const date = new Date(student.dateJoined).toISOString().split("T")[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {});
      setLineData(
        Object.entries(lineTransformed).map(([date, fed]) => ({ name: date, fed }))
      );

      // Transform data for bar chart
      const barTransformed = data.reduce((acc, student) => {
        acc[student.school] = (acc[student.school] || 0) + 1;
        return acc;
      }, {});
      setBarData(
        Object.entries(barTransformed).map(([school, fed]) => ({ school, fed }))
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
      const totalSchools = [...new Set(data.map((student) => student.school))]
        .length;
      setCardData([
        {
          title: "Children Fed This Month",
          value: totalStudents,
          description: "+5.2% from last month",
          color: "green",
        },
        {
          title: "Total Schools Served",
          value: totalSchools,
          description: "Includes 3 new schools",
          color: "blue",
        },
        {
          title: "Monthly Reports",
          value: "Ready",
          description: "Download available below",
          color: "orange",
        },
      ]);
    });
  }, []);

  // Pie Chart Colors
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-gray-600">Track monthly and school-specific statistics</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <ReportCard key={index} {...card} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Teaching Progress Over Time</h2>
          <LineChart
            width={400}
            height={250}
            data={lineData}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <Line type="monotone" dataKey="fed" stroke="#2F4F7F" strokeWidth={3} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">School Performance Metrics</h2>
          <BarChart width={400} height={250} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="school" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="fed" fill="#FF9800" />
          </BarChart>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">School Contributions</h2>
        <div className="flex justify-center items-center">
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      {/* Reports Download Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Download Monthly Reports</h2>
        <p className="mt-2 text-gray-600">Get detailed statistics in PDF or CSV format</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Download PDF
          </button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded">
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
