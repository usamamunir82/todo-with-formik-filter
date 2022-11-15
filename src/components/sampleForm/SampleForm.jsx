

import React from 'react'
import { useFormik } from 'formik';
import './sampleform.css'
import * as Yup from 'yup';

const SampleForm=()=> {
    const formik=useFormik({
initialValues:{
    name:'',
    password:'',
    email:''
},
validationSchema: Yup.object({
    name: Yup.string()
      .max(5, 'Must be 15 characters or less')
      .required('Required'),
      password: Yup.string()
      .max(2, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  }),

onSubmit:values=>{
    alert(JSON.stringify(values, null, 2));
}


    })
  return (
    <div className='formContainer'>
        <h1>
            Formik Form
        </h1>
<form onSubmit={formik.handleSubmit}>
    <div className='formFields'>
    <input   id="nameText"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         onBlur={formik.handleBlur}
         />
          {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}
    <input
    id="password"
    name="password"
    type="number"
    onChange={formik.handleChange}
    value={formik.values.password}
    onBlur={formik.handleBlur}
    />
     {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
    <input
     id="email"
     name="email"
     type="email"
     onChange={formik.handleChange}
     value={formik.values.email}
     onBlur={formik.handleBlur}
    />
     {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
    <button type='submit'>Submit Data</button>
    </div>

</form>



    </div>
  )
}

export default SampleForm;