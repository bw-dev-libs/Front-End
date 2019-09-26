import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

import logo from "../icon.svg";

const StyledSignup = styled.div`
  /* background: #f5f5f5; */
  /* background:red; */
  height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  .header {
    /* width: 100%; */
    /* background:green; */
  }
  img {
    max-width: 100px;
    /* border: 1rem solid red; */
    position: relative;
    top: -210px;
    margin-top: 0rem;
    margin-bottom: 5rem;
  }

  h1 {
    font-size: 3rem;
    position: relative;
    top: -50px;

    /* border: 1rem solid red; */
    /* border-bottom: 15rem; */
  }

  button {
    padding: 10px 15px;
    background-color: #55af64;
    color: white;
    border: 1px solid #55af64;
    background-color: 250ms;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 0.5rem;
    width: 21rem;
    margin-bottom: 9rem;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: #55af64;
    }
  }
  .input-field {
    border-radius: 0.5rem;
    font-size: 1.25rem;
    max-width: 20rem;
    margin: 10px auto;
    box-shadow: 2px;
    /* border-bottom: 5rem; */
  }
  .error-field {
    border-radius: 0.5rem;
    font-size: 1rem;
    max-width: 20rem;
    margin: 1px auto;
    color: red;
    /* border-bottom: 5rem; */
  }

  p {
    font-size: 1.25rem;
    font-weight: bold;
    .login-span {
      color: #55af64;
      font-weight: normal;
    }
  }
`;
const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 5rem;
  /* border: 2rem solid red; */
  span {
    position: relative;
    right: 5rem;
    /* top: 1rem; */
  }
`;

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
          <StyledSignup>
            <Form>
              <div className="header">
                <img src={logo} alt="logo" />
              </div>
              <h1>SIGN UP</h1>
              {/* {
                !props.dirty && <div>time to start typing!!</div>
              } */}
              <StyledInput>
                <Field
                  className="input-field"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                <ErrorMessage
                  className="error-field"
                  name="username"
                  component="div"
                />

                <Field
                  className="input-field"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  className="error-field"
                  name="password"
                  component="div"
                />
              </StyledInput>

              <button type="submit">Create Account </button>

              <p>
                Already have an account?&nbsp;&nbsp;&nbsp;
                <span>
                  <Link className="login-span" to="/login">
                    Log in
                  </Link>
                </span>
              </p>
            </Form>
          </StyledSignup>
        );
      }}
    />
  );
};
// export default UserForm;
