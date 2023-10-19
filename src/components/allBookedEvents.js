import { useEffect, useState } from "react";
import axios from "axios";
import './bookedEvents.css'

function AllBookedEvents() {
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/bookedeventsdetails');
      setEvents(response.data.results)
    } catch (e) {
      console.log(e);
    }
  }

  const cancelBooking = (bookingId) => {
    axios.delete(`http://localhost:4000/deleteevent/${bookingId}`)
    .then(() => {
        console.log("Successfully deleted event")
        loadEvents();
      })
      .catch((error) => {
        console.error('Error deleting event', error);
      });
  }

  return (
    <div className="events-container">
      {events.map((event) => (
        <div key={event.booking_id} className="card">
          <h3>{event.event_name}</h3>
          <p>Booking ID: {event.booking_id}</p>
          <p>Department ID: {event.dept_id}</p>
          <p>Hall Name: {event.hall_name}</p>
          <p>Date: {event.event_date.split('T')[0]}</p> 
          <p>Time: {event.event_time}</p>
          <button className="cancel-button" onClick={() => cancelBooking(event.booking_id)}>Cancel Booking</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AllBookedEvents;
