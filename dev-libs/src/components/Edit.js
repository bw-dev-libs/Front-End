import React, { useState } from "react";
import axios from "axios";
import UserForm from '../components/Play';
import {addTemplate} from '../components/addTemplate';

const initialTemplate = {
  usersList: []
};

const WordList = ({ words, updateWords }) => {
  console.log(words);
  const [editing, setEditing] = useState(false);
  const [wordToEdit, setWordToEdit] = useState(initialTemplate);

  const editWord = word => {
    setEditing(true);
    setWordToEdit(word);
  };

  const ID = localStorage.getItem("userID") 
  const saveEdit = e => {
 
 
  e.preventDefault();

  axios 
   
   .put(`https://dev-libs.herokuapp.com/api/templates/${ID}`)
      .then(response => {
        
        updateWords(response.data)
      })
      .catch(err => {
        console.log('No', err)
      });



};
const deleteWord = word => {
    axios     
      .delete(`https://dev-libs.herokuapp.com/api/templates/${ID}`, word)
         .then(response => {
          updateWords(response.data)
         })
         .catch(err => {
          console.log('Nu-uh', err)
         });
   
   };
  return (
    <form onSubmit={saveEdit}>
      

<UserForm onSubmit={addTemplate} />

{/* should be its own component: */}
{wordToEdit.length
  ? wordToEdit.map(template => (
      <div key={template.id}>
        {/* {template.first_name}'s email address is {template.email} */}'
        I was programming in '{template.programming_language}', trying to
        get all of my '{template.noun}' to properly '{template.verb}'.
        However, nothing was actually '{template.ing_verb}'.. It was then
        I realized I hadn't even '{template.ed_verb}' my '{template.noun2}
        '.
      </div>
    ))
  : "No Users Avialable!"}
    </form>
  );
};

export default WordList;