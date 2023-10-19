
export const postUserDetails = {
  path: '/newuserdetails',
  method: 'post',
  handler: async (req, res) => {
    const { departmentId,
        password,
        adminName,
        adminAadhaar,
        creationDate,
        departmentName } = req.body;

    // Insert values into the user table
    const query = 'INSERT INTO users (department_id,password,department_admin_name,department_admin_adhaar_number,creation_date,department_name) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [departmentId,
        password,
        adminName,
        adminAadhaar,
        creationDate,
        departmentName];

    pool.query(query, values, (err, results) => {
      if (err) {
        console.error('Error inserting event:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      console.log('User inserted successfully');
      res.status(200).json({ message: 'User details submitted successfully' });
    });
  },
};
