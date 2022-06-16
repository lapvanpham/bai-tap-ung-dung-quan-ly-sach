import React from 'react';
import './App.css';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [books, setBooks] = React.useState([
    { title: 'To Kill a Mockingbird', quantity: 1 },
    { title: 'The Great Gatsby', quantity: 2 },
    { title: 'The Hobbit', quantity: 3 },
    { title: 'The Catcher in the Rye', quantity: 4 },
    { title: 'The Lord of the Rings', quantity: 5 },
  ]);

  return (
    <div className="App">
      <h1>Library</h1>

      <AddBookForm setBooks={setBooks}/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
