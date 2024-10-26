import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const AuthorSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthDate: Yup.date().required('Birth Date is required'),
  biography: Yup.string().required('Biography is required'),
});

const AuthorForm = ({ onSubmit, initialValues }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={AuthorSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field
          name="name"
          as={TextField}
          label="Name"
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />
        <Field
          name="birthDate"
          as={TextField}
          label="Birth Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          error={touched.birthDate && !!errors.birthDate}
          helperText={touched.birthDate && errors.birthDate}
        />
        <Field
          name="biography"
          as={TextField}
          label="Biography"
          multiline
          rows={4}
          error={touched.biography && !!errors.biography}
          helperText={touched.biography && errors.biography}
        />
        <Button type="submit" variant="contained">Submit</Button>
      </Form>
    )}
  </Formik>
);

export default AuthorForm;
