const mysql = require("mysql");
require("dotenv").config(); // Load environment variables

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Set the maximum number of connections
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.on("connection", function (connection) {
  console.log(
    "MySQL connection established with thread ID:",
    connection.threadId
  );
});

pool.on("error", function (err) {
  console.error("MySQL pool error:", err);
});

module.exports = pool;
