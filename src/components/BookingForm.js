import React, { useState } from 'react';
import './BookingForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
  const {departmentId} = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [hallName, setHallName] = useState('');
  const [time,setTime]=useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  function handleTimeChange(e){
    setTime(e.target.value)
  }

  function handleHallNameChange(e) {
    setHallName(e.target.value);
  }

  function handleSubmitChange(e) {
    e.preventDefault();

    axios
      .post('http://localhost:4000/bookeventdetails', {
        name,
        date,
        time,
        hallName,
        departmentId
      })
      .then(response => {
        console.log('Booking details submitted successfully', response.data);
        navigate(`/successfullybooked/${departmentId}`);
      })
      .catch(error => {
        console.error('Error submitting booking details', error);
      });
  }

  return (
    <div className='main'>
      <h1 className="heading">Event Booking</h1>
      <form>
        <label htmlFor="event-name">Event Name:</label>
        <input
          type="text"
          id="event-name"
          name="eventName"
          value={name}
          onChange={handleNameChange}
          autocomplete="off"
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
          autocomplete="off"
          required
        />

        <label type="time">Time:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={handleTimeChange}
          autocomplete="off"
          required
        />


        <label htmlFor="hall-name">Hall Name:</label>
        <input
          type="text"
          id="hall-name"
          name="hallName"
          value={hallName}
          onChange={handleHallNameChange}
          autocomplete="off"
          required
        />

        <label htmlFor="department-id">Department ID:</label>
        <input type="text" id="department-id" name="departmentId" value={departmentId}  readOnly />

        <input
          className="form-button"
          type="submit"
          value="Book Event"
          onClick={handleSubmitChange}
        />
      </form>
    </div>
  );
};

export default BookingForm;
