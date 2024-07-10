import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from "../logo_white.png"
import { Link, useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/user/get_users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);
    const userName = localStorage.getItem('username');
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/'); // Redirect to homepage or login page
    };
    return (
        <>
            <nav className="navbar justify-content-between">
                <a className="navbar-brand mr-5" style={{ marginLeft: "30px" }}>
                    <img src={logo} style={{ width: "60px" }} alt="" />
                </a>
                <div className='mr-5'>

                    {userName == 'admin' &&
                        <>
                            <Link to="/chat">
                                <button className="upload-button">Chat</button>
                            </Link>
                            <button className="selected-button">Users</button>
                            <Link to="/upload">
                                <button className="upload-button">Upload Documents</button>
                            </Link>
                            
                        </>
                    }
                    <button className="upload-button mr-5" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="row w-100">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="text-center mb-4">Neuron Service Users List</h2>
                        <ul className="list-group">
                            {users.map(user => (
                                <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5>{user.first_name} {user.last_name}</h5>
                                        <p className="mb-1">{user.email}</p>
                                        <small>{user.username}</small>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserList;
