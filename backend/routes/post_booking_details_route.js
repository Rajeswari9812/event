
export const postBookingDetails = {
  path: '/bookeventdetails',
  method: 'post',
  handler: async (req, res) => {
    const bookingId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const { name, date, time, hallName, departmentId } = req.body;

    // Insert values into the events table
    const query = 'INSERT INTO events (booking_id, dept_id, hall_name, event_date, event_time, event_name) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [bookingId, departmentId,  hallName,date, time, name];

    pool.query(query, values, (err, results) => {
      if (err) {
        console.error('Error inserting event:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('Event inserted successfully');
      res.status(200).json({ message: 'Booking details submitted successfully' });
    });
  },
};
