import { Form, Formik } from 'formik';
import React from 'react'
import Input from './Input';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    email:'',
    password: ''
  }
  const validationSchema = Yup.object({
    email:Yup.string().required("Required").matches(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, "Invalid email, correct format: example@gmail.com"),
    password: Yup.string().required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Minimum eight characters, at least one letter, one number and one special character")
  });
  const onSubmit = values => console.log('Form data', values);
  return (
    <div style={{display: "flex", flexWrap: "wrap", height:"75vh", justifyContent: "center", flexDirection:"column", alignItems: "center",padding:"40px 20px"}}>
      <div style={{padding: "30px 0", width: "min(500px, 80vw)"}}>
      <div style={{marginBottom:"3em"}}>
        <h1 className="text-center" style={{fontSize:"27px", fontWeight:"400px", lineHeight:"33px"}}>Login</h1>
        <p className="text-center" style={{fontSize:"16px", fontWeight:"400px", lineHeight:"24px"}}>Don't have an account? <span><NavLink to=""> Sign up here</NavLink></span></p>
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
              <div style={{display: "inline-block", width: "min(500px, 80vw)"}}>
                <Input type='email' value={formik.values.email} label='Email' name='email' />
                <Input type='password' value={formik.values.password} label='Password' name='password' />
                <div style={{textAlign:"end", marginTop: "20px", marginBottom:"30px", fontSize:"16px", lineHeight:"21px"}}>
                  <NavLink to="">Forgot your password?</NavLink>
                </div>
                <button type="submit" style={{}} disabled>Submit</button>
                <span>Return to store</span>
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

export default Login;
