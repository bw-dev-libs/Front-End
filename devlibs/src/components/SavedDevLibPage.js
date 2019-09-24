import React, { useState } from "react";
import axios from "axios";

const initialTemplate = {
  id: '',
  user_id: '',
  noun: '',
  verb: '',
  adjective: '',
  noun2: '',
  verb2: '',
  adjective2: ''
};

const SavedTemplate = ({ template, updateTemplate }) => {
  const [editing, setEditing] = useState(false);
  const [template, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

   
const saveEdit = e => {
 
 
  e.preventDefault();

axios     
   .put('http://localhost:5000/api/colors/:id')
      .then(response => {
        
        updateColors(response.data.colors.color)
      })
      .catch(err => {
        console.log('No', err)
      });



};


   
 const deleteColor = color => {
  axios     
    .delete('http://localhost:5000/api/colors/:id', color)
       .then(response => {
        updateColors(response.data.colors.color)
       })
       .catch(err => {
        console.log('Nu-uh', err)
       });
 
 };


  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
     
     {/* <div className="quotes-form">
       <h2>POST (add) a new quote</h2>
       <form onSubmit={this.postMessage}>
         <input
           type="text"
           name="quote"
           placeholder="Quote"
           onChange={this.handleChange}
           value={this.state.movieQuote.quote}
         />
         <input
           type="text"
           name="character"
           placeholder="Character"
           onChange={this.handleChange}
           value={this.state.movieQuote.character}
         />
         <input
           type="text"
           name="movie"
           placeholder="Movie"
           onChange={this.handleChange}
           value={this.state.movieQuote.movie}
         />
         
         <button className="quotes-btn" type="submit">
           POST quote
         </button>
       </form>
     </div>
   );
 } */}