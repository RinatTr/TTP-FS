DROP DATABASE IF EXISTS stockify;
CREATE DATABASE stockify;

\c stockify;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR UNIQUE NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  balance DECIMAL (18, 2) DEFAULT 5000.00
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  ticker_symbol VARCHAR,
  shares INT,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  sale_price DECIMAL (18, 2),
  type VARCHAR
);
