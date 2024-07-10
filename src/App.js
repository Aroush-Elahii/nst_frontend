import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import UploadDocument from "./components/UploadDocument";
import Login from "./components/Login"
import Register from "./components/Register"
import UserList from "./components/UserList";


function App() {
  
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/upload" element={<UploadDocument />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UserList />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
