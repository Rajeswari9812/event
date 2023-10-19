import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
import { useNavigate, useParams} from "react-router-dom";
import './updateEvent.css'; // Import your custom CSS file

function UpdateEvent() {
  const { bookingId, departmentId } = useParams();
  const alert = useAlert();
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [hallName, setHallName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  useEffect(() => {
    loadBookingDetails();
  }, []);

  const loadBookingDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/bookedeventdetails/${bookingId}`);
      const bookingDetails = response.data.results;
      setEventName(bookingDetails.event_name);
      setHallName(bookingDetails.hall_name);
      setEventDate(bookingDetails.event_date.split("T")[0]);
      setEventTime(bookingDetails.event_time);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdate = async () => {
    try {
      // Send the updated booking details to the server
      await axios.put(`http://localhost:4000/updateevent/${bookingId}`, {
        event_name: eventName,
        hall_name: hallName,
        event_date: eventDate,
        event_time: eventTime,
      });
      console.log("Booking updated successfully");
      alert.success("Event Updated successfully!")
      navigate(`/bookedevents/${departmentId}`);
    } catch (error) {
      alert.error('Event updation unsuccessful!');
      console.error("Error updating booking", error);
    }
  };

  return (
    <div className="update-event">
    <div className="update-event-container">
      <h2 className="update-event-title">Update Booking</h2>
      <label className="update-event-label">
        Event Name:
        <input type="text" className="update-event-input" value={eventName} onChange={(e) => setEventName(e.target.value)} />
      </label>
      <label className="update-event-label">
        Hall Name:
        <input type="text" className="update-event-input" value={hallName} onChange={(e) => setHallName(e.target.value)} />
      </label>
      <label className="update-event-label">
        Event Date:
        <input type="date" className="update-event-input" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
      </label>
      <label className="update-event-label">
        Event Time:
        <input type="time" className="update-event-input" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
      </label>
      <button className="update-event-button" onClick={handleUpdate}>Update</button>
    </div>
    </div>
  );
}

export default UpdateEvent;
