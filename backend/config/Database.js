import mysql from 'mysql2'

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  database: process.env.db,
  connectionLimit: 10,
});

function connectToDatabase() {

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }

    connection.query(
      `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        department_id VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        department_admin_name VARCHAR(255) NOT NULL,
        department_admin_adhaar_number VARCHAR(255) NOT NULL,
        creation_date VARCHAR(255) NOT NULL,
        department_name VARCHAR(255) NOT NULL
      )`,
      (err, createTableResult) => {
        if (err) {
          console.error('Error creating user table:', err);
          return;
        }
    
        const isTableCreated = createTableResult.warningStatus === 0;
    
        if (isTableCreated) {
          const users = [
            { department_id: '1234567', password: 'ise', department_admin_name: 'abc', department_admin_adhaar_number: '123456781234', creation_date: '12-03-2023', department_name: 'ise' },
            { department_id: '123456', password: 'cse', department_admin_name: 'abc', department_admin_adhaar_number: '123456781234', creation_date: '12-03-2023', department_name: 'cse' },
            { department_id: '12345', password: 'ece', department_admin_name: 'abc', department_admin_adhaar_number: '123456781234', creation_date: '12-03-2023', department_name: 'ece' },
            { department_id: 'admin', password: 'admin', department_admin_name: 'meghana', department_admin_adhaar_number: '123456781234', creation_date: '12-03-2023', department_name: 'admin' }
          ];
    
          connection.query('INSERT INTO users (department_id, password, department_admin_name, department_admin_adhaar_number, creation_date, department_name) VALUES ?', [users.map(user => [user.department_id, user.password, user.department_admin_name, user.department_admin_adhaar_number, user.creation_date, user.department_name])], (err, insertResult) => {
            if (err) {
              console.error('Error inserting users:', err);
              return;
            }
            console.log(`${insertResult.affectedRows} users inserted successfully`);
          });
        } else {
          console.log('User table already exists');
        }
      }
    );    


connection.query(
  `CREATE TABLE IF NOT EXISTS events (
    booking_id INT PRIMARY KEY,
    dept_id INT,
    hall_name VARCHAR(255),
    event_date DATE,
    event_time TIME,
    event_name VARCHAR(255)
  )`,
  (err, results) => {
    if (err) {
      console.error('Error creating events table:', err);
      return;
    }
    console.log('Events table created successfully');
  }
);


    connection.release();
  });
}

export default connectToDatabase;
