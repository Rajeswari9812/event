export const deleteDepartment = {
  path: '/deletedepartment/:departmentId',
  method: 'delete',
  handler: async (req, res) => {
    const departmentId = req.params.departmentId;
    console.log(departmentId);

    // Run the delete queries separately
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      // Delete query for users table
      connection.query('DELETE FROM users WHERE department_id = ?', [departmentId], (err, userResults) => {
        if (err) {
          console.error('Error querying database:', err);
          connection.release();
          return res.status(500).json({ message: 'Internal Server Error' });
        }

        // Delete query for events table
        connection.query('DELETE FROM events WHERE dept_id = ?', [departmentId], (err, eventResults) => {
          if (err) {
            console.error('Error querying database:', err);
            connection.release();
            return res.status(500).json({ message: 'Internal Server Error' });
          }

          if (userResults.affectedRows === 0 && eventResults.affectedRows === 0) {
            connection.release();
            return res.status(404).json({ message: 'Department and Event not found' });
          }

          connection.release();
          return res.status(200).json({ message: 'Department and Event deleted successfully' });
        });
      });
    });
  },
};
