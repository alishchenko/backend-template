/* Replace with your SQL commands */

-- Create the projects table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  age INT NOT NULL,
  role boolean DEFAULT true,
  created_at TIMESTAMP NOT NULL
);