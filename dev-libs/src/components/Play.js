import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axiosWithAuth from "./utils/axiosWithAuth";
// import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Navigationlite  from './Navigationlite'
// import * as yup from "yup";
import logo from "../icon.svg";

const StyledPlay = styled.div`
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

  .input-field{
 border-radius:0.5rem;
 font-size:1.25rem;
 max-width:20rem;
 margin: 10px auto;
 /* border-bottom: 5rem; */
  }
`;

// const UsersApi = "https://dev-libs.herokuapp.com/api/users";
// const TemplatesApi = "https://dev-libs.herokuapp.com/api/templates";
const UsersApi = "https://dev-libs.herokuapp.com/api/users/1/templates";

// const initialUserForm = {
//   username: "",
//   password: ""
// };
const initialTemplateForm = {
  id: "", //
  programming_language: "",
  noun: "",
  verb: "",
  ing_verb: "",
  ed_verb: "",
  noun2: "",
  user_id: ""
};

export default function Play() {
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState("");

  // const fetchUsers = () => {
  //   axios
  //     .get(UsersApi)
  //     .then(res => {
  //       // debugger
  //       setUsersList(res.data.data);
  //     })
  //     .catch(err => {
  //       debugger;
  //       setServerError(err.message);
  //     });
  // };

  // 2- THIS GOES INTO <Formik /> `onSubmit` prop
  const addTemplate = (formValues, actions) => {
    const templateToPost = {
      // id: formValues.id,
      programming_language: formValues.programming_language,
      noun: formValues.noun,
      verb: formValues.verb,
      ing_verb: formValues.ing_verb,
      ed_verb: formValues.ed_verb,
      noun2: formValues.noun2,
      // user_id: formValues.user_id,
      user_id: "1"
    };
    const ID = localStorage.getItem("userID");
    axiosWithAuth()
      .post(`https://dev-libs.herokuapp.com/api/users/${ID}/templates`, templateToPost)
      .then(res => {
        // res.data contains the newly created friend
        // const newlyCreatedTemplate = res.data;
        console.log(res.data);
        // setUsersList(usersList.concat(newlyCreatedTemplate));
        actions.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <div>
      {/* should be its own component: */}
      {serverError}

      <UserForm onSubmit={addTemplate} />

      {/* should be its own component: */}
      {usersList.length
        ? usersList.map(template => (
            <div key={template.id}>
              I was programming in '{template.programming_language}', trying to
              get all of my '{template.noun}' to properly '{template.verb}'.
              However, nothing was actually '{template.ing_verb}'.. It was then
              I realized I hadn't even '{template.ed_verb}' my '{template.noun2}
              '.
            </div>
          ))
        : null}
    </div>
  );
}
//------------------------------------------------
// const validate = formValues => {
//   // if(document.querySelector('#word-1').innerHTML === ''){
//   //   document.querySelector('#word-2').style.display = 'none';
//   // }
//   const errors = {};
//   if (formValues.email === "waffle@syrup.com") {
//     errors.email = "That email is already taken.";
//   }
// };
// const validationSchema = yup.object().shape({
//   name: yup.string().required("Please enter your name"),
//   email: yup.string().required("Please enter your email address"),
//   password: yup
//     .string()
//     .required("No password provided.")
//     .min(8, "Password is too short - should be 8 chars minimum.")
//     .matches(/(?=.*[0-9])/, "Password must contain a number.")
// });

const UserForm = ({ onSubmit }) => {
  return (
    <Formik
      // validate={validate}
      // validationSchema={validationSchema}
      initialValues={initialTemplateForm}
      onSubmit={onSubmit}
      render={props => {
        return (
          // we will use pre-baked components
          // supplied by formik lib (like Formik)
          <StyledPlay>
            <Navigationlite/>
            <Form>
              <div className="header">
                <img src={logo} alt="logo" />
              </div>
              <h1>Lets Play!</h1>
              {/* {
              !props.dirty && <div>time to start typing!!</div>
              } */}
              <div id="programming_language">
                <Field className="input-field"
                  name="programming_language"
                  type="text"
                  placeholder="Enter Programming Language here"
                />
                <ErrorMessage name="programming_language" component="div" />
              </div>
              <div id="noun">
                <Field className="input-field" name="noun" type="text" placeholder="Enter a Noun" />
                <ErrorMessage name="noun" component="div" />
              </div>
              <div id="verb">
                <Field className="input-field" name="verb" type="text" placeholder="Enter a Verb" />
                <ErrorMessage name="verb" component="div" />
              </div>
              <div id="ing_verb">
                <Field className="input-field"
                  name="ing_verb"
                  type="text"
                  placeholder="Enter a Verb ending with -ing"
                />
                <ErrorMessage name="ing_verb" component="div" />
              </div>
              <div id="ed_verb">
                <Field className="input-field"
                  name="ed_verb"
                  type="text"
                  placeholder="Enter a Verb enging with -ed"
                />
                <ErrorMessage name="ed_verb" component="div" />
              </div>
              <div id="noun2">
                <Field className="input-field"
                  name="noun2"
                  type="text"
                  placeholder="Enter another Noun here"
                />
                <ErrorMessage name="noun2" component="div" />
              </div>
              <button type="submit">Submit</button>
              {/* <button type="submit">Back</button>&nbsp;&nbsp; */}
              {/* <button type="submit">Next</button> */}
            </Form>
          </StyledPlay>
        );
      }}
    />
  );
};
