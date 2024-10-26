import React from 'react';
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Publication Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.isbn}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.publicationDate}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onEdit(book)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => onDelete(book.isbn)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default BookList;
