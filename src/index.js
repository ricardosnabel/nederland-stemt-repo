import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch.js';

const DB_HOST = 'localhost';
const DB_USERNAME = 'root';
const DB_PASSWORD = 'password';
const DATABASE = 'nederland_stemt';

const express = require("express"); //import express


const mysql = require("mysql");
require('dotenv').config()
const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE,
});

const app = express()

app.listen(8081, () => {
    console.log("listening")
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);

