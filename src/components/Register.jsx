import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './css/Register.css';
import logo from "../logo_white.png"


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
        alert('Email and Password fields cannot be blank');
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:8000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: formData.firstName,
                last_name: formData.lastName,
                username: formData.email.split('@')[0], // Use part of email as username
                email: formData.email,
                password: formData.password,
            }),
        });

        const data = await response.json();
        if (data.success) {
            // Save token to local storage
            localStorage.setItem('token', data.user.token);
            localStorage.setItem('email', data.user.email);
            localStorage.setItem('username', data.user.username);
            // Navigate to /chat
            navigate('/chat');
        } else {
            console.error('Registration failed:', data.message);
            alert(`Registration failed: ${data.message}`);
        }
    } catch (error) {
        console.error('Error during registration:', error);
        alert(`Error during registration: ${error}`);
    }
};


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const countries = [
    { code: 'PK', name: 'Pakistan' },
    { code: 'IN', name: 'India' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'IR', name: 'Iran' },
    { code: 'TUR', name: 'Turkey' },
    // Add more countries as needed
  ];

  return (
    <>
    <div className="centered-box">
      {/* <img src={register_image} alt="Person sitting at a desk" /> */}
      <div className="form-container">
          <img src={logo}
            style={{ width: "60px" , marginBottom:"20px"}}
            alt="" />
            <h2 style={{ marginBottom:"40px",color:"#AC24C9"}}>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='First Name'
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
            />
            <span
              style={{ position: 'absolute', right: '10px', top: '35%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'hide' : 'show'}
            </span>
          </div>
          <select
            name="country"
            placeholder='Country'
            value={formData.country}
            onChange={handleInputChange}
            style={{ color: '#999', fontSize: '1rem' }}
          >
            <option value="" >Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <p style={{ color: "#aaa" }}>
            Already have an account?
            <Link to="/login">
              <a className="btn">Login</a>
            </Link>
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
