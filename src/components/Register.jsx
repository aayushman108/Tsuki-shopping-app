import { Form, Formik } from 'formik';
import React, {useEffect} from 'react'
import Input from './Input';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialValues = {
    firstName:'',
    lastName: '',
    email:'',
    password:''
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email:Yup.string().required("Required").matches(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, "Invalid email, correct format: example@gmail.com"),
    password: Yup.string().required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Minimum eight characters, at least one letter, one number and one special character")
  });
  const onSubmit= (values) =>{ 
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <div className='box' style={{height: "auto"}}>
      <div className='sub-box'>
      <div style={{marginBottom:"3em"}}>
        <h1 className="heading">Create Account</h1>
        <p className="sub-heading">Already have an account? <span><NavLink to="/login"> Sign in here</NavLink></span></p>
      </div>
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
        {
          formik => {
            console.log(formik)
            return(
            <Form>
              <div className='input-fields'>
                <Input type='text' value={formik.values.firstName} label='First Name' name='firstName' />
                <Input type='text' value={formik.values.lastName} label='Last Name' name='lastName' />
                <Input type='email' value={formik.values.email} label='Email' name='email' />
                <Input type='password' value={formik.values.password} label='Password' name='password' />
                <button type="submit" disabled={!formik.isValid || formik.isSubmitting}><strong>Create</strong></button>
              </div>
            </Form>
          )
        }
        }
      </Formik>
      </div>
    </div>
  )
}

export default Register;
