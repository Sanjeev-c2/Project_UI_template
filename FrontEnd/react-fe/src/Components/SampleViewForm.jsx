import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/SampleViewForm.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const SampleViewForm = () => {
    const [data, setData] = useState([]);
    const [canUpdate, setCanUpdate] = useState(false);
    const [role, setRole] = useState('');

    const navigate = useNavigate(); // Initialize navigate function

    useEffect(() => {
        axios.get("http://localhost:8000/api/sample-forms/")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // Retrieve role and permissions from localStorage
        const savedRole = localStorage.getItem('selectedRole');
        const savedPermissions = JSON.parse(localStorage.getItem('permissions'));

        if (savedRole) {
            setRole(savedRole);
        }

        if (savedPermissions) {
            setCanUpdate(savedPermissions.can_update);
        }
    }, []);

    const editForm = (id) => {
        navigate(`/landingpage/edit-form/${id}`); // Use template literals for path
    };

    return (
        <div className="sample-view-form">
            <h2>Selected Role: {role}</h2> {/* Display the selected role */}
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.date}</td>
                            <td>{item.age}</td>
                            <td>
                                {canUpdate && (
                                    <button
                                        className="action-button"
                                        onClick={() => editForm(item.id)} // Use arrow function to pass id
                                    >
                                        Edit
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SampleViewForm;
