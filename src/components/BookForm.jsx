import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container } from '@mui/material';

const BookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publicationDate: Yup.date().required('Publication Date is required'),
});

const BookForm = () => {
  return (
    <Container>
      <Formik
        initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
        validationSchema={BookSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="title"
              as={TextField}
              label="Title"
              fullWidth
              margin="normal"
              error={touched.title && !!errors.title}
              helperText={touched.title && errors.title}
            />
            <Field
              name="author"
              as={TextField}
              label="Author"
              fullWidth
              margin="normal"
              error={touched.author && !!errors.author}
              helperText={touched.author && errors.author}
            />
            <Field
              name="isbn"
              as={TextField}
              label="ISBN"
              fullWidth
              margin="normal"
              error={touched.isbn && !!errors.isbn}
              helperText={touched.isbn && errors.isbn}
            />
            <Field
              name="publicationDate"
              as={TextField}
              label="Publication Date"
              type="date"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              error={touched.publicationDate && !!errors.publicationDate}
              helperText={touched.publicationDate && errors.publicationDate}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default BookForm;
