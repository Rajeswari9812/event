
export const getBookedEventsDetails = {
  path: '/bookedeventsdetails',
  method: 'get',
  handler: async (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const query = 'SELECT * FROM events';
      connection.query(query, (err, results) => {
        if (err) {
          console.error('Error retrieving booked events:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        res.status(200).json({results});

        connection.release();
      });
    });
  },
};
