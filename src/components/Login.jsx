import { Form, Formik } from 'formik';
import React, {useEffect} from 'react'
import Input from './Input';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate= useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initialValues = {
    email:'',
    password: ''
  }
  const validationSchema = Yup.object({
    email:Yup.string().required("Required").matches(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, "Invalid email, correct format: example@gmail.com"),
    password: Yup.string().required('Required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Minimum eight characters, at least one letter, one number and one special character")
  });
  const onSubmit= (values) =>{ 
    alert(JSON.stringify(values, null, 2));
    navigate('/');
  }

  return (
    <div className='box'>
      <div className='sub-box'>
      <div style={{marginBottom:"3em"}}>
        <h1 className="heading">Login</h1>
        <p className="sub-heading">Don't have an account? <span><NavLink to="/register"> Sign up here</NavLink></span></p>
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
                <Input type='email' value={formik.values.email} label='Email' name='email' />
                <Input type='password' value={formik.values.password} label='Password' name='password' />
                <div style={{textAlign:"end", marginBottom:"30px", fontSize:"16px", lineHeight:"21px"}}>
                  <NavLink to="">Forgot your password?</NavLink>
                </div>
                <button type="submit" disabled={!formik.isValid || formik.isSubmitting}><strong>Sign In</strong></button>
                <span style={{margin:"0 25px"}}><NavLink to="/sale">Return to store</NavLink></span>
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
