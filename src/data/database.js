const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "41296",
    database:"nederland_stemt" 
    });
    
module.exports = db;