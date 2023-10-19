export const getAllDepartments = {
  path: '/alldepartments',
  method: 'get',
  handler: async (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const query = 'SELECT * FROM users';
      connection.query(query, (err, results) => {
        if (err) {
          console.error('Error retrieving departments:', err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        //returns a results object
        res.status(200).json({results:results});

        connection.release();
      });
    });
  },
};
