import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserRoleForm = () => {
    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState(null);
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');

    useEffect(() => {
        // Fetch roles from the server
        axios.get('http://localhost:8000/api/roles/')
            .then(response => {
                setRoles(response.data);
            })
            .catch(error => {
                console.error('Error fetching roles:', error);
            });
    }, []);

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/assign-role/', {
            user: userId,
            role: selectedRole
        })
        .then(() => {
            alert('Role assigned successfully!');
        })
        .catch(error => {
            console.error('Error assigning role:', error);
            alert('Failed to assign role.');
        });
    };

    // Logic to fetch user ID could be added here

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </label>
            <label>
                Role:
                <select value={selectedRole} onChange={handleRoleChange} required>
                    <option value="">Select Role</option>
                    {roles.map(role => (
                        <option key={role.id} value={role.id}>
                            {role.name}
                        </option>
                    ))}
                </select>
            </label>
            <button type="submit">Assign Role</button>
        </form>
    );
};

export default UserRoleForm;
