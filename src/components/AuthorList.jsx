import React from 'react';
import { Button, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const AuthorList = ({ authors, onDelete, onEdit }) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Birth Date</TableCell>
            <TableCell>Biography</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author) => (
            <TableRow key={author.name}>
              <TableCell>{author.name}</TableCell>
              <TableCell>{author.birthDate}</TableCell>
              <TableCell>{author.biography}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onEdit(author)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => onDelete(author.name)}>
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

export default AuthorList;
