const express = require('express')
const mysql = require('mysql2')
const app = express()
const port = 4000

var connection = mysql.createConnection({
  host: "localhost",
  user: "our_project",
  password: "1234"
})

// simple query
connection.query(
  'SELECT * FROM our_project.product;',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    console.log(err);
  }
);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})