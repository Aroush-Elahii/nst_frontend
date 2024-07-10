import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from "../logo_white.png";
import './css/Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/user/login', {
        email: username,
        password: password
      });

      const data = response.data;
      if (data.success) {
        // Save token and email to local storage
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('username', data.user.username);
        // Redirect to /chat
        navigate('/chat');
      } else {
        console.error('Login failed:', data.message);
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        // Handle the error response from the server
        alert(`Login failed: ${error.response.data.message}`);
      } else {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
      }
    }
  };

  const handleAppleLogin = () => {
    console.log('Logging in with Apple');
  };

  return (
    <div className="centered-box">
      <div className="login-page">
        <img src={logo} style={{ width: "60px", marginBottom:"20px" }} alt="" />
        <h3 style={{ marginBottom: "80px",color:"#AC24C9" }}>Sign In to Your Account</h3>
        <form>
          <div className="form-group">
            <input
              placeholder="Email"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <div className="login-button">
          <button type="button" onClick={handleLogin}>Log In</button>
        </div>
        <hr style={{ width: "50%" }} />
        <div className="alternate-login">
          <div className="create-account-button">
            <Link to="/register">
              <button type="button">Create an Account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
