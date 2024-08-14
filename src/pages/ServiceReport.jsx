import React, { useState, useEffect } from 'react';
import AdminSidebar from '../pages/AdminSidebar';
import './ServiceReport.css'; // Importing the CSS file
import axios from 'axios'; // Ensure Axios is installed

const ServiceReport = () => {
  const [reports, setReports] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    serviceType: '',
    description: '',
    status: '',
    cost: '',
  });
  const [errors, setErrors] = useState({}); // State to handle validation errors

  useEffect(() => {
    // Fetch initial data
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/reports/findAll');
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(reports[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.serviceType.trim()) formErrors.serviceType = 'Service Type is required';
    if (!formData.description.trim()) formErrors.description = 'Description is required';
    if (!formData.status.trim()) formErrors.status = 'Status is required';
    if (!formData.cost.trim()) {
      formErrors.cost = 'Cost is required';
    } else if (isNaN(formData.cost)) {
      formErrors.cost = 'Cost must be a number';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return; // Stop if validation fails
    try {
      const response = await axios.put('http://localhost:8080/api/reports/update', formData);
      const updatedReport = response.data;
      const updatedReports = reports.map((report, index) =>
        index === editIndex ? updatedReport : report
      );
      setReports(updatedReports);
      setEditIndex(null);
      setFormData({
        serviceType: '',
        description: '',
        status: '',
        cost: '',
      });
    } catch (error) {
      console.error('Error updating report:', error);
    }
  };

  const handleAdd = async () => {
    if (!validate()) return; // Stop if validation fails
    try {
      const response = await axios.post('http://localhost:8080/api/reports/create', formData);
      const newReport = response.data;
      setReports([...reports, newReport]);
      setFormData({
        serviceType: '',
        description: '',
        status: '',
        cost: '',
      });
    } catch (error) {
      console.error('Error adding report:', error);
    }
  };

  const handleRemove = async (index) => {
    try {
      const id = reports[index].id;
      await axios.delete(`http://localhost:8080/api/reports/delete/${id}`);
      const updatedReports = reports.filter((_, i) => i !== index);
      setReports(updatedReports);
    } catch (error) {
      console.error('Error deleting report:', error);
    }
  };

  return (
    <div className="servicereport-container">
      <AdminSidebar />
      <div className="servicereport-main">
        <table className="servicereport-table">
          <thead>
            <tr>
              <th>Service Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={report.id}>
                <td>{report.serviceType}</td>
                <td>{report.description}</td>
                <td>{report.status}</td>
                <td>{report.cost}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="servicereport-form">
          <h2>{editIndex !== null ? 'Edit Report' : 'Add New Report'}</h2>
          <label>
            Service Type:
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
            />
            {errors.serviceType && <p className="error">{errors.serviceType}</p>}
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </label>
          <label>
            Status:
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
            {errors.status && <p className="error">{errors.status}</p>}
          </label>
          <label>
            Cost:
            <input
              type="text"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
            />
            {errors.cost && <p className="error">{errors.cost}</p>}
          </label>
          {editIndex !== null ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <button onClick={handleAdd}>Add</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceReport;




















// import React, { useState, useEffect } from 'react';
// import AdminSidebar from '../pages/AdminSidebar';
// import './ServiceReport.css'; 
// import axios from 'axios'; 

// const ServiceReport = () => {
//   const [reports, setReports] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [formData, setFormData] = useState({
//     serviceType: '',
//     description: '',
//     status: '',
//     cost: '',
//   });

//   useEffect(() => {
    
//     fetchReports();
//   }, []);

//   const fetchReports = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/reports/findAll');
//       setReports(response.data);
//     } catch (error) {
//       console.error('Error fetching reports:', error);
//     }
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setFormData(reports[index]);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.put('http://localhost:8080/api/reports/update', formData);
//       const updatedReport = response.data;
//       const updatedReports = reports.map((report, index) =>
//         index === editIndex ? updatedReport : report
//       );
//       setReports(updatedReports);
//       setEditIndex(null);
//       setFormData({
//         serviceType: '',
//         description: '',
//         status: '',
//         cost: '',
//       });
//     } catch (error) {
//       console.error('Error updating report:', error);
//     }
//   };

//   const handleAdd = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/reports/create', formData);
//       const newReport = response.data;
//       setReports([...reports, newReport]);
//       setFormData({
//         serviceType: '',
//         description: '',
//         status: '',
//         cost: '',
//       });
//     } catch (error) {
//       console.error('Error adding report:', error);
//     }
//   };

//   const handleRemove = async (index) => {
//     try {
//       const id = reports[index].id;
//       await axios.delete(`http://localhost:8080/api/reports/delete/${id}`);
//       const updatedReports = reports.filter((_, i) => i !== index);
//       setReports(updatedReports);
//     } catch (error) {
//       console.error('Error deleting report:', error);
//     }
//   };

//   return (
//     <div className="servicereport-container">
//       <AdminSidebar />
//       <div className="servicereport-main">
//         <table className="servicereport-table">
//           <thead>
//             <tr>
//               <th>Service Type</th>
//               <th>Description</th>
//               <th>Status</th>
//               <th>Cost</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.map((report, index) => (
//               <tr key={report.id}>
//                 <td>{report.serviceType}</td>
//                 <td>{report.description}</td>
//                 <td>{report.status}</td>
//                 <td>{report.cost}</td>
//                 <td>
//                   <button onClick={() => handleEdit(index)}>Edit</button>
//                   <button onClick={() => handleRemove(index)}>Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="servicereport-form">
//           <h2>{editIndex !== null ? 'Edit Report' : 'Add New Report'}</h2>
//           <label>
//             Service Type:
//             <input
//               type="text"
//               name="serviceType"
//               value={formData.serviceType}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Description:
//             <input
//               type="text"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Status:
//             <input
//               type="text"
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//             />
//           </label>
//           <label>
//             Cost:
//             <input
//               type="text"
//               name="cost"
//               value={formData.cost}
//               onChange={handleChange}
//             />
//           </label>
//           {editIndex !== null ? (
//             <button onClick={handleSave}>Save</button>
//           ) : (
//             <button onClick={handleAdd}>Add</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceReport;
