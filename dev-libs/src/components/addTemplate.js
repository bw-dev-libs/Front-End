import React from 'react';
import axiosWithAuth from "../components/utils/axiosWithAuth";

 export const addTemplate = (formValues, actions) => {
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
    return axiosWithAuth()
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