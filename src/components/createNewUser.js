import React, { useState } from 'react';
import axios from 'axios';
import './createNewUser.css';
import { useNavigate } from 'react-router-dom';

const CreateNewUser = () => {
  const navigate= useNavigate();
  const [departmentId, setDepartmentId] = useState('');
  const [password, setPassword] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminAadhaar, setAdminAadhaar] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [departmentName, setDepartmentName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    
        axios
          .post('http://localhost:4000/newuserdetails', {
            departmentId,
            password,
            adminName,
            adminAadhaar,
            creationDate,
            departmentName
          })
          .then(response => {
            console.log('User details submitted successfully', response.data);
            navigate(`/newusersuccess`);
          })
          .catch(error => {
            console.error('Error submitting booking details', error);
          });
      }

  return (
    <div className="department-form-container">
      <h2>Department Form</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="adminName">Department Id:</label>
          <input
            className="new-user-input"
            type="text"
            id="departmentId"
            value={departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="new-user-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="adminName">Department Admin Name:</label>
          <input
            className="new-user-input"
            type="text"
            id="adminName"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="adminAadhaar">Department Admin Aadhaar Number:</label>
          <input
            type="text"
            id="adminAadhaar"
            value={adminAadhaar}
            onChange={(e) => setAdminAadhaar(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="creationDate">Creation Date:</label>
          <input
            className="new-user-input"
            type="date"
            id="creationDate"
            value={creationDate}
            onChange={(e) => setCreationDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="departmentName">Department Name:</label>
          <input
            className="new-user-input"
            type="text"
            id="departmentName"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateNewUser;
