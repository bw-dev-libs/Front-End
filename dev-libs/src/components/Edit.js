import React, { useState } from "react";
import axios from "axios";
import UserForm from '../components/Play';
import {addTemplate} from '../components/addTemplate';
import axiosWithAuth from './utils/axiosWithAuth';
import List from "../components/Delete";


const ID = localStorage.getItem("userID")


export class Edit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      initialTemplate: {
        programming_language: "",
        noun: "",
        verb: "",
        ing_verb: "",
        ed_verb: "",
        noun2: "",
        id: '',
      }
    };

  };
  componentDidMount(){
    const ID = this.props.match.params.id
    axiosWithAuth()
    .get(`/api/templates/${ID}`)
    .then(res => {
      console.log(res)
      this.setState({
      initialTemplate: {...res.data}})
    })
  }
  handleChange = e => {
    this.setState({
      initialTemplate: {
        ...this.state.initialTemplate,
        [e.target.name]: e.target.value
      }
    });
  };
  render(){
    return (
      <div>
        <h2>Edit</h2>
        <form>
          <input
          name="programming_language"
          type="text"
          onChange={this.handleChange}
          value={this.state.initialTemplate.programming_language}/>
          <input
          name="noun"
          type="text"
          onChange={this.handleChange}
          value={this.state.initialTemplate.noun}/>
          <input
          name="verb"
          type="text"
          onChange={this.handleChange}
          value={this.state.initialTemplate.verb}/>
          <input
          name="ing_verb"
          type="text"
          onChange={this.handleChange}
          value={this.state.initialTemplate.ing_verb}/>
          <input
          name="ed_verb"
          type="text"
          onChange={this.handleChange}
          value={this.state.initialTemplate.ed_verb}/>
          <input
          name="noun2"
          type="text"
          onChange={this.handleChange}
          value={this.state.initialTemplate.noun2}/>
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}

































// const initialTemplate = {
//   usersList: []
// };

// const WordList = ({ updateWords }) => {
  
//   const [editing, setEditing] = useState(false);
//   const [wordToEdit, setWordToEdit] = useState(initialTemplate);

//   const editWord = word => {
//     setEditing(true);
//     setWordToEdit(word);
//   };

//   const ID = localStorage.getItem("userID") 
//   const saveEdit = e => {
 
 
//   e.preventDefault();

//   axios 
   
//    .put(`https://dev-libs.herokuapp.com/api/templates/${ID}`)
//       .then(response => {
        
//         updateWords(response.data)
//       })
//       .catch(err => {
//         console.log('No', err)
//       });



// };
// const deleteWord = word => {
//     axios     
//       .delete(`https://dev-libs.herokuapp.com/api/templates/${ID}`, word)
//          .then(response => {
//           updateWords(response.data)
//          })
//          .catch(err => {
//           console.log('Nu-uh', err)
//          });
   
//    };
//   return (
//     <>
//     <form onSubmit={saveEdit}>
      

// <UserForm onSubmit={addTemplate} />

// {/* should be its own component: */}
// {wordToEdit.length
//   ? wordToEdit.map(template => (
//       <div key={template.id}>
//         {/* {template.first_name}'s email address is {template.email} */}'
//         I was programming in '{template.programming_language}', trying to
//         get all of my '{template.noun}' to properly '{template.verb}'.
//         However, nothing was actually '{template.ing_verb}'.. It was then
//         I realized I hadn't even '{template.ed_verb}' my '{template.noun2}
//         '.
//       </div>
//     ))
//   : "Nothing to edit!"}
//   <button>Submit Changes</button>
//     </form>
//     <List />
//     </>
//   );
// };

// export default WordList;