import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom"
import styled from "styled-components";
import Navigationlite from "./Navigationlite";
// import * as yup from "yup";
import logo from "../icon.svg";
import { addTemplate } from "../components/addTemplate";

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

  .input-field {
    border-radius: 0.5rem;
    font-size: 1.25rem;
    max-width: 20rem;
    margin: 10px auto;
    /* border-bottom: 5rem; */
  }
`;

// const UsersApi = "https://dev-libs.herokuapp.com/api/users";
// const TemplatesApi = "https://dev-libs.herokuapp.com/api/templates";
const UsersApi = "https://dev-libs.herokuapp.com/api/users/1/templates";

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

export default withRouter(Play);

function Play(props) {
  console.log(this)
  const [usersList, setUsersList] = useState([]);
  const [serverError, setServerError] = useState("");

  const addTemplateAndPush = v => {
    addTemplate(v)
      .then(() => props.history.push("/dashboard"))
      .catch(() => {
        console.log(props)
        props.history.push("/dashboard");
      });
  };

  return (
    <div>
      <UserForm onSubmit={formValues => addTemplateAndPush(formValues)} />
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

export const UserForm = ({ onSubmit }) => {
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
            <Navigationlite />
            <Form>
              <div className="header">
                <img src={logo} alt="logo" />
              </div>
              <h1>Lets Play!</h1>
              {/* {
              !props.dirty && <div>time to start typing!!</div>
              } */}
              <div id="programming_language">
                <Field
                  className="input-field"
                  name="programming_language"
                  type="text"
                  placeholder="Enter Programming Language here"
                />
                <ErrorMessage name="programming_language" component="div" />
              </div>
              <div id="noun">
                <Field
                  className="input-field"
                  name="noun"
                  type="text"
                  placeholder="Enter a Noun"
                />
                <ErrorMessage name="noun" component="div" />
              </div>
              <div id="verb">
                <Field
                  className="input-field"
                  name="verb"
                  type="text"
                  placeholder="Enter a Verb"
                />
                <ErrorMessage name="verb" component="div" />
              </div>
              <div id="ing_verb">
                <Field
                  className="input-field"
                  name="ing_verb"
                  type="text"
                  placeholder="Enter a Verb ending with -ing"
                />
                <ErrorMessage name="ing_verb" component="div" />
              </div>
              <div id="ed_verb">
                <Field
                  className="input-field"
                  name="ed_verb"
                  type="text"
                  placeholder="Enter a Verb enging with -ed"
                />
                <ErrorMessage name="ed_verb" component="div" />
              </div>
              <div id="noun2">
                <Field
                  className="input-field"
                  name="noun2"
                  type="text"
                  placeholder="Enter another Noun here"
                />
                <ErrorMessage name="noun2" component="div" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          </StyledPlay>
        );
      }}
    />
  );
};
