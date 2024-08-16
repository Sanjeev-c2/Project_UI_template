import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/TaskOperations.css'

const TaskOperations = () => {
    const [rolesPermissions, setRolesPermissions] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');  // Store the selected role
    const [permissions, setPermissions] = useState({
        can_create: false,
        can_read: false,
        can_update: false,
    });

    useEffect(() => {
        // Fetch user details from local storage
        const storedUser = JSON.parse(localStorage.getItem('userDetails'));

        if (storedUser) {
            const userId = storedUser.user.id; // Assuming `id` is the user ID

            // Fetch the user's roles and permissions from the backend
            axios.get(`http://localhost:8000/api/permissions/${userId}`)
                .then(response => {
                    setRolesPermissions(response.data);  // Set the user roles and permissions
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    alert('Failed to load user data.');
                });
        }
    }, []);

    const handleRoleChange = (e) => {
        const selectedRole = e.target.value;
        setSelectedRole(selectedRole);

        // Find the selected role's permissions
        const selectedRolePermissions = rolesPermissions.find(
            rolePermission => rolePermission.role === selectedRole
        );

        // Update permissions based on the selected role
        if (selectedRolePermissions) {
            setPermissions(selectedRolePermissions.permissions);
            // Save the selected role and permissions to localStorage
            localStorage.setItem('selectedRole', selectedRole);
            localStorage.setItem('permissions', JSON.stringify(selectedRolePermissions.permissions));
        }
    };

    return (
        <div className="task-operations">
            <h3>Task Operations</h3>

            {/* Role selection dropdown */}
            <label htmlFor="role-select"><strong>Select Role:</strong></label>
            <select id="role-select" value={selectedRole} onChange={handleRoleChange}>
                <option value="">Select a role</option>
                {rolesPermissions.map((rolePermission, index) => (
                    <option key={index} value={rolePermission.role}>
                        {rolePermission.role}
                    </option>
                ))}
            </select>

            {/* Conditionally render operations based on selected role's permissions */}
            {selectedRole && (
                <div className="operations">
                    {permissions.can_create && (
                        <button>
                            <Link to='/landingpage/sample-form'>Create</Link>
                        </button>
                    )}
                    {permissions.can_read && (
                        <button>
                            <Link to='/landingpage/view-form'>Read</Link>
                        </button>
                    )}
                    {/* {permissions.can_update && (
                        <button>Update</button>
                    )} */}
                </div>
            )}
        </div>
    );
};

export default TaskOperations;
