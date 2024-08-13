import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserManagement.css'; 
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // State to track the user being edited
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
    }); // State for form data
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleLogout = async (userId) => {
        try {
            await axios.post(`http://localhost:8080/api/logout/${userId}`);
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleRemove = async (userId) => {
        try {
            await axios.delete(`http://localhost:8080/users/${userId}`);
            fetchUsers(); // Fetch the updated user list after successful removal
        } catch (error) {
            console.error('Error removing user:', error.response ? error.response.data : error.message);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user.id);
        setFormData({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
        });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:8080/users/${editingUser}`, formData);
            setEditingUser(null);
            fetchUsers(); // Fetch updated user list
        } catch (error) {
            console.error('Error updating user:', error.response ? error.response.data : error.message);
        }
    };

    const handleLogin = async (user) => {
        try {
            const response = await axios.post('http://localhost:8080/users/login', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                fetchUsers(); // Fetch updated user list after login
                navigate('/dashboard'); // Navigate to dashboard or another page
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="userman-user-management">
            <AdminSidebar />
            <div className="userman-user-management-content">
                <h1 className="userman">User Management</h1>
                
                {editingUser && (
                    <div className="userman-edit-form">
                        <h2>Edit User</h2>
                        <form>
                            <label>
                                First Name:
                                <input
                                    type="text"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleFormChange}
                                />
                            </label>
                            <label>
                                Last Name:
                                <input
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleFormChange}
                                />
                            </label>
                           
                            
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                />
                            </label>
                            
                            <button type="button" onClick={handleUpdate}>Update</button>
                            <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
                        </form>
                    </div>
                )}
                
                <table className="userman-user-table">
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            
                            <th>Email</th>
                            
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td><img src={user.profile || 'https://via.placeholder.com/50'} alt="Profile" className="userman-profile-pic" /></td>
                                <td>{user.firstname} {user.lastname}</td>
                                
                                <td>{user.email}</td>
                                
                                <td>
                                    <button className="userman-button" onClick={() => handleEdit(user)}>Edit</button>
                                    <button className="userman-remove-button" onClick={() => handleRemove(user.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
