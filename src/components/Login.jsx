import { Form, Formik } from 'formik';
import React from 'react'
import Input from './Input';

const Login = () => {
  const initialValues = {
    email:'',
    password: ''
  }
  const validationSchema = ;
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {
        formik => (
          <Form>
            <Input type='email' label='Email' name='email' />
            <Input type='password' label='Password' name='password' />
            <button type='submit'>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default Login;
