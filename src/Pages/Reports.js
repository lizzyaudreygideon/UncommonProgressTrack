import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Users, Award, Brain, TrendingUp, Filter } from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  
  // Sample data - would come from your backend
  const progressData = [
    { month: 'Jan', completedProjects: 45, avgScore: 85, activeStudents: 50 },
    { month: 'Feb', completedProjects: 52, avgScore: 88, activeStudents: 48 },
    { month: 'Mar', completedProjects: 58, avgScore: 86, activeStudents: 52 },
    { month: 'Apr', completedProjects: 65, avgScore: 89, activeStudents: 55 },
  ];

  const skillsData = [
    { name: 'Logic', beginners: 20, intermediate: 15, advanced: 10 },
    { name: 'Loops', beginners: 25, intermediate: 12, advanced: 8 },
    { name: 'Variables', beginners: 30, intermediate: 10, advanced: 5 },
    { name: 'Events', beginners: 18, intermediate: 20, advanced: 7 },
  ];

  const downloadReport = () => {
    const reportElement = document.getElementById('report-content');

    html2canvas(reportElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('report.pdf');
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white shadow rounded-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Scratch Teaching Analytics</h1>
        <button 
          onClick={downloadReport} 
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Download Report
        </button>
      </div>

      {/* Report Content */}
      <div id="report-content">
        {/* Period Selector */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <select 
              className="bg-white border border-gray-300 rounded-md px-3 py-2"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          <button className="flex items-center space-x-2 bg-blue-600 text-white border border-blue-600 rounded-md px-4 py-2 hover:bg-blue-700">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Students</p>
                <p className="text-2xl font-bold">55</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-sm text-green-500">↑ 12% vs last month</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Completion Rate</p>
                <p className="text-2xl font-bold">87%</p>
              </div>
              <Award className="w-8 h-8 text-green-500" />
            </div>
            <span className="text-sm text-green-500">↑ 5% vs last month</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Skill Level</p>
                <p className="text-2xl font-bold">7.2</p>
              </div>
              <Brain className="w-8 h-8 text-purple-500" />
            </div>
            <span className="text-sm text-green-500">↑ 0.5 vs last month</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Projects</p>
                <p className="text-2xl font-bold">124</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-500" />
            </div>
            <span className="text-sm text-green-500">↑ 18% vs last month</span>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Progress Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completedProjects" stroke="#3b82f6" name="Completed Projects" />
                <Line type="monotone" dataKey="avgScore" stroke="#10b981" name="Average Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Skills Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="beginners" stackId="a" fill="#3b82f6" name="Beginners" />
                <Bar dataKey="intermediate" stackId="a" fill="#10b981" name="Intermediate" />
                <Bar dataKey="advanced" stackId="a" fill="#8b5cf6" name="Advanced" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
