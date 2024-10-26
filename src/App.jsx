import React, { useState, useEffect } from 'react';
import { fetchBooks, addBook, updateBook, deleteBook, fetchAuthors, addAuthor, updateAuthor, deleteAuthor } from './services/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import AuthorForm from './components/AuthorForm';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  // Load books and authors from localStorage when component mounts
  useEffect(() => {
    setBooks(fetchBooks());
    setAuthors(fetchAuthors());
  }, []);

  const handleAddBook = (newBook) => {
    addBook(newBook);
    setBooks(fetchBooks()); // Refresh book list after adding
  };

  const handleUpdateBook = (updatedBook) => {
    updateBook(updatedBook);
    setBooks(fetchBooks()); // Refresh book list after updating
  };

  const handleDeleteBook = (isbn) => {
    deleteBook(isbn);
    setBooks(fetchBooks()); // Refresh book list after deleting
  };

  const handleAddAuthor = (newAuthor) => {
    addAuthor(newAuthor);
    setAuthors(fetchAuthors()); // Refresh author list after adding
  };

  const handleUpdateAuthor = (updatedAuthor) => {
    updateAuthor(updatedAuthor);
    setAuthors(fetchAuthors()); // Refresh author list after updating
  };

  const handleDeleteAuthor = (name) => {
    deleteAuthor(name);
    setAuthors(fetchAuthors()); // Refresh author list after deleting
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/manage-books"
          element={
            <>
              <BookForm onSubmit={handleAddBook} />
              <BookList books={books} onDelete={handleDeleteBook} onEdit={handleUpdateBook} />
            </>
          }
        />
        <Route
          path="/manage-authors"
          element={
            <>
              <AuthorForm onSubmit={handleAddAuthor} />
              <AuthorList authors={authors} onDelete={handleDeleteAuthor} onEdit={handleUpdateAuthor} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
