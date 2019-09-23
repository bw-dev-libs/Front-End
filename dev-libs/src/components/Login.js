import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const initialLoginValues = {
  email: "",
  password: ""
};

const Login = () => {
  return <>
  <Formik initialValues={initialLoginValues}
  onSubmit={(values, { setSubmitting}) =>{
      console.log("Submitting")
  }}
  >
<div>
    <h1>Log in Form </h1>
</div>



  </Formik>
  </>;
};

export default Login;
