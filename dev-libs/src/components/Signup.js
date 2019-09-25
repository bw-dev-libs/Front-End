import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link} from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import logo from "../icon.svg";


const UsersApi = "https://reqres.in/api/users";
const initialUserForm = {
  name: "",
  email: "",
  password: "",
  termsOfService: false
};

export default function Container() {
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState("");

  const fetchUsers = () => {
    axios
      .get(UsersApi)
      .then(res => {
        setUsersList(res.data.data);
      })
      .catch(err => {
        debugger;
        setServerError(err.message);
      });
  };

  // 2- THIS GOES INTO <Formik /> `onSubmit` prop
  const addUser = (formValues, actions) => {
    const friendToPost = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password
    };
    axios
      .post('https://dev-libs.herokuapp.com/api/auth/register', friendToPost)
      .then(res => {
        // res.data contains the newly created friend
        const newLyCreatedFriendFromServer = res.data;
        setUsersList(usersList.concat(newLyCreatedFriendFromServer));
        actions.resetForm();
      })
      .catch(err => {
        debugger;
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {/* should be its own component: */}
      {serverError}

      <UserForm onSubmit={addUser} />

      {/* should be its own component: */}
      {/* {usersList.length
        ? usersList.map(user => (
            <div key={user.id}>
              {user.name}  the address {user.email}
            </div>
          ))
        : "No Users Avialable!"} */}
    </div>
  );
}
//------------------------------------------------
const validate = formValues => {
  const errors = {};
  if (formValues.email === "waffle@syrup.com") {
    errors.email = "That email is already taken.";
  }
};
const validationSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter your email address"),
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
              <Field name="name" type="text" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit">Create Account</button>

            <p>
              Alread have an account?
              <span>
                <Link className ="login-span"to="/login"> Log in</Link>
              </span>
            </p>
          </Form>
        );
      }}
    />
  );
};
// export default UserForm;
