import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './adminHome.css'

const AdminHome = () => {
    const navigate = useNavigate();

    function createNewUser(){
        navigate("/createnewuser")
    }

    function showBookedEvents(){
        navigate("/allbookedevents")
    }

    function showAllDepartments(){
      navigate("/alldepartments")
    }

  return (
    <div className='admin-body'>
    <div class="flex-box">
        <button onClick={createNewUser}>Create a new user</button>
        <button onClick={showBookedEvents}>Show all Booked events</button>
        <button onClick={showAllDepartments}>Show all Departments</button>
    </div>
    </div>
  )
}

export default AdminHome