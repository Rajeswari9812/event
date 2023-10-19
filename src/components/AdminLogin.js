import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import './AdminLoginForm.css'; 

const AdminLoginForm = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminId === 'admin' && password === 'admin') {
      navigate('/adminhome');
    } else {
      alert.error('Invalid Credentials!');
    }
  };

  return (
    <div className="admin-login-box">
    <div className="admin-login-form"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="adminId">Admin ID:</label>
          <input
            type="text"
            id="adminId"
            value={adminId}
            onChange={handleAdminIdChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button> 
      </form>
    </div>
    </div>
  );
};

export default AdminLoginForm;
