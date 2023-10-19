export const updateBookedEventRoute = {
  path: '/updateevent/:bookingId',
  method: 'put',
  handler: async (req, res) => {
    const { bookingId } = req.params;
    const { event_name, hall_name, event_date, event_time } = req.body;

    const updateQuery = 'UPDATE events SET event_name=?, hall_name=?, event_date=?, event_time=? WHERE booking_id=?';
    const updateValues = [event_name, hall_name, event_date, event_time, bookingId];

    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      connection.query(updateQuery, updateValues, (err, result) => {
        connection.release();

        if (err) {
          console.error('Error updating event:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        if (result.affectedRows === 0) {
          res.status(404).json({ error: 'Event not found' });
          return;
        }

        res.status(200).json({ message: 'Event updated successfully' });
      });
    });
  },
};
