import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import logo from "../icon.svg";

const UsersApi = "https://reqres.in/api/users";
const initialUserForm = {
  name: "",
  email: "",
  password: ""
};

export default function Play() {
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
      .post(UsersApi, friendToPost)
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

  // if(document.querySelector('#word-1').innerHTML === ''){
  //   document.querySelector('#word-2').style.display = 'none';
  // }
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
            <h1>Lets Play!</h1>
            {/* {
                !props.dirty && <div>time to start typing!!</div>
              } */}
            <div id="word-1">
              <Field name="word-1" type="text" placeholder="word" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div id="word-2">
              <Field name="word-2" type="email" placeholder="word" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div id="word-3">
              <Field name="word-3" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div id="word-4">
              <Field name="word-4" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div id="word-5">
              <Field name="word-5" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div id="word-6">
              <Field name="word-6" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div id="word-7">
              <Field name="word-7" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div id="word-8">
              <Field name="word-8" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div id="word-9">
              <Field name="word-9" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div id="word-10">
              <Field name="word-10" type="text" placeholder="word" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Back</button>&nbsp;&nbsp;
            <button type="submit">Next</button>
          </Form>
        );
      }}
    />
  );
};
