import { ErrorMessage, Field } from 'formik';

const Input = ({name, label, value, ...rest}) => {

  return (
    <div>
      <div className='form-field' style={{}}>
        <label htmlFor={name} className={`form-field-label ${value? "value": ""}`}>{label}</label>
        <Field id={name} name={name} {...rest} style={{width: "100%", border: "1px solid black", outline: "none"}} />
        <div style={{minHeight: "32px"}}>
          <ErrorMessage name={name}>
            {
              errorMsg=> <p style={{fontSize: "13px", color: "red"}}>{errorMsg}</p>
            }
          </ErrorMessage>
        </div>
      </div>
    </div>
  )
}

export default Input;