const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ecommerce",
  password: "utkarsh",
  port: 8000, 
});

pool.connect((err) => {
  if (err) {
    console.log("Error connecting to the database!", err);
  } else {
    console.log("Connected to the database successfully!");
  }
});

module.exports = pool;
