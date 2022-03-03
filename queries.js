const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'StudentLib',
  password: '123',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM students ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getBooks = (request, response) => {
  pool.query('SELECT * FROM books ORDER BY book_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getborrowBooksDetails = (request, response) => {
  pool.query('SELECT * FROM book_borrowed_details ORDER BY book_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDetails = (request, response) =>
pool.query('select * from books as A, students as B, book_borrowed_details as C WHERE B.user_id = C.student_id AND A.book_id = c.book_id',(error,results) =>{
if (error){
  throw error 
}
    response.status(200).json(results.rows)

})



module.exports = {
  getUsers,
  getBooks,
  getborrowBooksDetails,
  getDetails

}