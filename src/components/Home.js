import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Home = () => {
    const { departmentId } = useParams();
    const navigate= useNavigate();

    function handleEventClick(){
        navigate(`/bookevent/${departmentId}`);
    }

    function handleBookedClick(){
      navigate(`/bookedevents/${departmentId}`)
    }

  return (
    <div className="button-container">
      <button className="button" onClick={handleEventClick}>Book an Event</button>
      <button className="button" onClick={handleBookedClick}>Show Booked Events</button>
    </div>
  );
};

export default Home;
