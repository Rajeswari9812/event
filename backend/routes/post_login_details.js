
export const postLoginDetails = {
  path: '/logindetails',
  method: 'post',
  handler: async (req, res) => {
    const { departmentId, password } = req.body;

    pool.query(
      'SELECT * FROM users WHERE department_id = ?',
      [departmentId],
      (err, results) => {
        if (err) {
          console.error('Error querying database:', err);
          return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (results.length === 0 || results[0].password !== password) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful' });
      }
    );
  },
};
