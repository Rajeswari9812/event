import React from 'react'
import './SuccesfullyBookedEvent.css'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SuccesfulyBookedEvent = () => {

  const navigate =useNavigate();
  const {departmentId} = useParams();

function bookedEvents(){
  navigate(`/bookedevents/${departmentId}`)
}

  return (
 
    <div className="successful-container">
      <h1 className="title">Successfully Booked!</h1>
      <p className="message">Your event has been successfully booked.</p>
      <button className= "booked-button" onClick={bookedEvents}>Show All Booked Events</button>
    </div>

  )
}

export default SuccesfulyBookedEvent