
export const getSingleEventDetails = {
    path: '/bookedeventdetails/:bookingId',
    method: 'get',
    handler: async (req, res) => {
        const { bookingId } = req.params;

        pool.getConnection((err, connection) => {
          if (err) {
            console.error('Error connecting to MySQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
    
          const query = 'SELECT * FROM events WHERE booking_id = ?';
      connection.query(query, [bookingId], (err, results) => {

      if (err) {
        console.error('Error retrieving booked event:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: 'Booking not found' });
        return;
      }
      
      res.status(200).json({ results: results[0] });
    });
    connection.release();
        });
      },
  };
  