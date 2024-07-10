import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../logo_white.png"
import './css/UploadDocument.css';

function UploadDocument() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  

  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const fetchUploadedFiles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/uploaded-files');
        setUploadedFiles(response.data.uploaded_files);
      } catch (error) {
        console.error('Error fetching uploaded files:', error);
      }
    };
    
    fetchUploadedFiles();
  }, [uploadStatus]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('File uploaded successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file.');
    }
  };

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
        <Link to="/chat">
          <button className="upload-button">Chat</button>
        </Link>
        <Link to="/users">
            <button className="upload-button">Users</button>
        </Link>

        <button className="selected-button">Upload Documents</button>
        
        
          <button className="upload-button mr-5" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

     
      <div className="upload-container">
        <div className="card upload-card">
          <div className="card-header">Upload Document</div>
          <div className="card-body">
            <div className="mb-3">
              <input type="file" className="form-control" onChange={handleFileChange} />
            </div>
            <button className="upload-btn" onClick={handleUpload}>Upload</button>
            {uploadStatus && <div className="mt-3 alert alert-info">{uploadStatus}</div>}
          </div>
        </div>
        {uploadedFiles.length > 0 && (
          <div className="uploaded-files mt-3">
            <h5>Uploaded Files</h5>
            <ul className="list-group">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="list-group-item">
                  {file.replace('./uploaded_files/', '')}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default UploadDocument;
