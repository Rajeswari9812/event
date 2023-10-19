import React from 'react'
import './newusersuccess.css'
import { useNavigate } from 'react-router-dom';

const NewUserSuccess = () => {
    const navigate = useNavigate();

  
  function homeSubmit(){
    navigate(`/adminhome`)
  }
  
    return (
      <div className="container-new-user">
        <h1 className="title">Successfully Registered User!</h1>
        <p className="message">Your event has been successfully booked.</p>
        <button className= "bookedbutton" onClick={homeSubmit}>Return To Home</button>
      </div>
    )
}
export default NewUserSuccess