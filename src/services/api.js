// Helper function to get data from localStorage
const getFromStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Helper function to save data to localStorage
const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Books API
export const fetchBooks = () => {
  return getFromStorage('books');
};

export const addBook = (newBook) => {
  const books = getFromStorage('books');
  books.push(newBook);
  saveToStorage('books', books);
};

export const updateBook = (updatedBook) => {
  const books = getFromStorage('books');
  const updatedBooks = books.map((book) =>
    book.isbn === updatedBook.isbn ? updatedBook : book
  );
  saveToStorage('books', updatedBooks);
};

export const deleteBook = (isbn) => {
  const books = getFromStorage('books');
  const filteredBooks = books.filter((book) => book.isbn !== isbn);
  saveToStorage('books', filteredBooks);
};

// Authors API
export const fetchAuthors = () => {
  return getFromStorage('authors');
};

export const addAuthor = (newAuthor) => {
  const authors = getFromStorage('authors');
  authors.push(newAuthor);
  saveToStorage('authors', authors);
};

export const updateAuthor = (updatedAuthor) => {
  const authors = getFromStorage('authors');
  const updatedAuthors = authors.map((author) =>
    author.name === updatedAuthor.name ? updatedAuthor : author
  );
  saveToStorage('authors', updatedAuthors);
};

export const deleteAuthor = (name) => {
  const authors = getFromStorage('authors');
  const filteredAuthors = authors.filter((author) => author.name !== name);
  saveToStorage('authors', filteredAuthors);
};
