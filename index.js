const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())

const db = require('./queries')

app.get('/students', db.getUsers)

app.get('/books', db.getBooks)

app.get('/book_borrowed_details', db.getDetails)


app.listen('3000', () => {
  console.log("Server is running http://localhost:3000");
});
