import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GridView from './GridView'; // Import the GridView component
import './AdminDashboard.css';

const mockServiceRecords = [
  { name: 'Jan', completed: 0, pending: 0 },
  { name: 'Feb', completed: 0, pending: 0 },
  { name: 'Mar', completed: 0, pending: 0 },
  { name: 'Apr', completed: 0, pending: 0 },
  { name: 'May', completed: 0, pending: 0 },
  { name: 'Jun', completed: 0, pending: 0 },
  { name: 'Jul', completed: 0, pending: 0 },
  { name: 'Aug', completed: 0, pending: 0 },
  { name: 'Sep', completed: 0, pending: 0 },
  { name: 'Oct', completed: 0, pending: 0 },
  { name: 'Nov', completed: 0, pending: 0 },
  { name: 'Dec', completed: 0, pending: 0 },
];

const mockCarStatistics = [
  { name: 'Jan', totalCars: 9, rented: 0, available: 9 },
  { name: 'Feb', totalCars: 9, rented: 0, available: 9 },
  { name: 'Mar', totalCars: 9, rented: 0, available: 9 },
  { name: 'Apr', totalCars: 9, rented: 0, available: 9 },
  { name: 'May', totalCars: 9, rented: 0, available: 9 },
  { name: 'Jun', totalCars: 9, rented: 0, available: 9 },
  { name: 'Jul', totalCars: 9, rented: 0, available: 9 },
  { name: 'Aug', totalCars: 9, rented: 0, available: 9 },
  { name: 'Sep', totalCars: 9, rented: 0, available: 9 },
  { name: 'Oct', totalCars: 9, rented: 0, available: 9 },
  { name: 'Nov', totalCars: 9, rented: 0, available: 9 },
  { name: 'Dec', totalCars: 9, rented: 0, available: 9 },
];

const mockAccessoriesStatistics = [
  { name: 'Jan', total: 0, sold: 0 },
  { name: 'Feb', total: 0, sold: 0 },
  { name: 'Mar', total: 0, sold: 0 },
  { name: 'Apr', total: 0, sold: 0 },
  { name: 'May', total: 0, sold: 0 },
  { name: 'Jun', total: 0, sold: 0 },
  { name: 'Jul', total: 0, sold: 0 },
  { name: 'Aug', total: 0, sold: 0 },
  { name: 'Sep', total: 0, sold: 0 },
  { name: 'Oct', total: 0, sold: 0 },
  { name: 'Nov', total: 0, sold: 0 },
  { name: 'Dec', total: 0, sold: 0 },
];

function WelcomeDashboard() {
  const [serviceRecords, setServiceRecords] = useState([]);
  const [carStatistics, setCarStatistics] = useState([]);
  const [accessoriesStatistics, setAccessoriesStatistics] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setServiceRecords(mockServiceRecords);
    setCarStatistics(mockCarStatistics);
    setAccessoriesStatistics(mockAccessoriesStatistics);
  }, []);

  return (
    <div className="admindash-container">
      <AdminSidebar />
      <div className="admindash-content">
        <GridView /> {/* Add GridView at the top */}
        <div className="dashboard-section">
          <h2>Service Records</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={serviceRecords}>
              <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#4682B4" /> {/* Soft blue */}
              <Bar dataKey="pending" fill="#FF6347" /> {/* Soft red */}
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-section">
          <h2>Car Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={carStatistics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalCars" stroke="#4682B4" />
              <Line type="monotone" dataKey="rented" stroke="#FF6347" />
              <Line type="monotone" dataKey="available" stroke="#32CD32" /> {/* Soft green */}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard-section">
          <h2>Accessories Selling Statistics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accessoriesStatistics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#4682B4" />
              <Bar dataKey="sold" fill="#FF6347" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default WelcomeDashboard;
