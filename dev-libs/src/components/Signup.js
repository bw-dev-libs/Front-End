import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import logo from "../icon.svg";

const RegistrationApi = "https://dev-libs.herokuapp.com/api/auth/register";
const initialUserForm = {
  username: "",

  password: ""
};

export default function Container() {
  const [serverError, setServerError] = useState("");

  // 2- THIS GOES INTO <Formik /> `onSubmit` prop
  const addUser = (formValues, actions) => {
    const userToPost = {
      username: formValues.username,

      password: formValues.password
    };
    axios
      .post(RegistrationApi, userToPost)
      .then(res => {
        // res.data contains the newly created friend
        // debugger;
        console.log(res.data);
        actions.resetForm();
        console.log("User created successfully");
      })
      .catch(err => {
        debugger;
      });
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <div>
      {/* should be its own component: */}
      {serverError}

      <UserForm onSubmit={addUser} />

      {/* should be its own component: */}
      {/* {usersList.length
        ? usersList.map(user => <div key={user.id}>{user.username}</div>)
        : "No Users Avialable!"} */}
    </div>
  );
}
//------------------------------------------------
const validate = formValues => {
  // const errors = {};
};
const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),

  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
});

const UserForm = ({ onSubmit }) => {
  return (
    <Formik
      validate={validate}
      validationSchema={validationSchema}
      initialValues={initialUserForm}
      onSubmit={onSubmit}
      render={props => {
        return (
          // we will use pre-baked components
          // supplied by formik lib (like Formik)
          <Form>
            <div className="header">
              <img src={logo} alt="logo" />
            </div>
            <h1>SIGN UP</h1>
            {/* {
                !props.dirty && <div>time to start typing!!</div>
              } */}
            <div>
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="username" component="div" />
            </div>

            <div>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Create Account</button>

            <p>
              Already have an account?
              <span>
                <Link className="login-span" to="/login">
                  {" "}
                  Log in
                </Link>
              </span>
            </p>
          </Form>
        );
      }}
    />
  );
};
// export default UserForm;
