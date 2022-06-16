import React from 'react'

function BookList({books}) {
  return (
    <div>
      <h1>BookList</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>  
              <td>
                <button type='button'  className="btn btn-warning">Edit</button>
                <button type='button'  className="btn btn-danger">Delete</button>
              </td>
            </tr>
          
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookList