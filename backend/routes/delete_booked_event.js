export const deleteEvent = {
    path: '/deleteevent/:bookingId',
    method: 'delete',
    handler: async (req, res) => {
      const bookingId = req.params.bookingId;
      console.log(bookingId)
  
      pool.query(
        'DELETE FROM events WHERE booking_id = ?',
        [bookingId],
        (err, results) => {
          if (err) {
            console.error('Error querying database:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
          }
  
          if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Event not found' });
          }
  
          return res.status(200).json({ message: 'Event deleted successfully' });
        }
      );
    },
  };
  