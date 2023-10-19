import React, { useEffect,useState } from 'react'
import axios from 'axios';
import './allDepartments.css'

const AllDepartments = () => {

    const[departments,setDepartments] = useState([]);

    useEffect(()=>{
        loadDepartments();
    },[])

    const loadDepartments=async()=>{
        try{
          const response=await axios.get('http://localhost:4000/alldepartments')
          console.log(response.data)
          setDepartments(response.data.results);
        }catch(e){
          console.log(e);
        }
    }

    const removeDepartment = (departmentId) => {
      axios.delete(`http://localhost:4000/deletedepartment/${departmentId}`)
    .then(() => {
        console.log("Successfully deleted department")
        loadDepartments();
      })
      .catch((error) => {
        console.error('Error deleting department', error);
      });
    }

  return (
    <div className="dept-container">
    <div className="dept-flex-container">
      {departments.map((dept) => (
        <div key={dept.department_id} className="dept-card">
          <h3>{dept.department_name}</h3>
          <button className="cancel-button-dept" onClick={() => removeDepartment(dept.department_id)}>Remove Department</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default AllDepartments