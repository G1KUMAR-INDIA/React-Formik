import React from 'react';
import { Container, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Use the navigation bar to manage books and authors.
      </Typography>
    </Container>
  );
};

export default Dashboard;
