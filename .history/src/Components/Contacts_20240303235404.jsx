import { useFormik } from "formik";
import React from "react";
import swal from 'sweetalert';
import * as Yup from 'yup'

export default function Contacts() {

    let validationSchema = Yup.object({
        name:Yup.string().required('name is required'),
        phone: Yup.string()
        .required("phone is required")
        .matches(/^01[0125][\d]{8}$/, "invalid phone"),
        age: Yup.number().required('age is required').positive().integer(),
        email: Yup.string().email().required('email is required'),
        password: Yup.string()
        .required("password is required")
        .matches(/^[A-Za-z][\w @]{5,9}$/, "invalid password ex(Ali@123)"),
        repassword: Yup.string()
        .required("rePassword is required")
        .oneOf([Yup.ref("password")], "rePassword not match with password"),


    })
    const formik = useFormik({
        initialValues:{
            name:'',
            phone:'',
            email:'',
            age:'',
            password:'',
            repassword:'',

        },
        onSubmit:submitForm,
        validationSchema,

    })
    function submitForm(values){
        console.log(values)

    }
   
  return (
    <div>
      <form onSubmit={formik.handleSubmit}
        className="row align-items-center vh-100 align-content-center"
      >
        <div className="col-md-6">
          <input
            className="form-control"
            name="name"
            placeholder="Enter your Name"
            onChange={formik.handleChange} onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
          <div
            className=" alert alert-danger mt-2 d-none"
            role="alert"
          >
          {formik.errors.name}
          </div>):''}
        </div>

        <div className="col-md-6">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange} onBlur={formik.handleBlur}

          />
          {formik.errors.email && formik.touched.email ? (

          <div
            className="alert alert-danger mt-2 d-none"
            role="alert"
          >
          {formik.errors.email}
          </div>):''}
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            className="form-control"
            name="phone"
            placeholder="Enter your Phone"
            onChange={formik.handleChange} onBlur={formik.handleBlur}

          />
          {formik.errors.phone && formik.touched.phone ? (

          <div
            className=" alert alert-danger mt-2 d-none"
            role="alert"
          >{formik.errors.phone}
          </div>): ''}
        </div>
        <div className="col-md-6 my-4">
          <input
            type="number"
            className="form-control"
            name="age"
            placeholder="Enter your Age"
            onChange={formik.handleChange} onBlur={formik.handleBlur}

          />
          {formik.errors.age && formik.touched.age ? (

          <div
            className=" alert alert-danger mt-2 d-none"
            role="alert"
          >
           {formik.errors.age}
          </div>):''}
        </div>
        <div className="col-md-6">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your Password"
            onChange={formik.handleChange} onBlur={formik.handleBlur}

          />
          {formik.errors.password && formik.touched.password ? (

          <div
            className=" alert alert-danger mt-2 d-none"
            role="alert"
          >
           {formik.errors.password}
          </div>):''}
        </div>
        <div className="col-md-6">
          <input
            type="password"
            className="form-control"
            name="repassword"
            placeholder=" Repassword"
            onChange={formik.handleChange} onBlur={formik.handleBlur}

          />
          {formik.errors.repassword && formik.touched.repassword ? (

          <div
            className=" alert alert-danger mt-2 d-none"
            role="alert"
          >
          {formik.errors.repassword}
          </div>):''}
        </div>
        <div className="col-md-12 d-flex justify-content-center mt-5">
          <button 
            disabled={!(formik.dirty && formik.isValid)}
            type="submit" className="btn btn-outline-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
