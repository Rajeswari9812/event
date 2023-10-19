import React, { useState,useRef} from 'react';
import axios from 'axios';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

const LoginForm = () => {
  const navigate =useNavigate();
  const alert = useAlert();
  const departmentIdRef = useRef(null);
  const passwordRef = useRef(null);
  const [departmentId, setDepartmentId] = useState('');
  const [password, setPassword] = useState('');

  const handleDepartmentIdChange = (e) => {
    setDepartmentId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const departmentId = e.target.elements.departmentId.value;
    const password = e.target.elements.password.value;

    axios.post('http://localhost:4000/logindetails', {
      departmentId,
      password
    })
    .then((response) => {
      console.log('Login successful');
      navigate(`/home/${departmentId}`); 
    })
    .catch((error) => {
      console.error('Error logging in', error);
      alert.error("Invalid Credentials!")
    });

    e.target.reset();
  };

  return (
    <div className='page-container'>
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="departmentId">Department ID:</label>
          <input
            type="text"
            id="departmentId"
            value={departmentId}
            onChange={handleDepartmentIdChange}
            autocomplete="off"
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
        <button type="submit">Login</button>
      </form>
      <div className="admin-login-text">
        <p>Are you an admin? <a href='/adminlogin'>Login here.</a></p>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
