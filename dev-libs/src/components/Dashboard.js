import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import axiosWithAuth from "./utils/axiosWithAuth";
import { dummyData } from "./utils/data";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      updateSuccessMessage: '',
      updateError: '',
      deleteSuccessMessage: '',
      deleteError: '',
      usersList: dummyData
    };
  }

  componentDidMount(){
    const ID = localStorage.getItem("userID");
    axiosWithAuth()
    .get(`https://dev-libs.herokuapp.com/api/users/${ID}/templates`)
    .then(res => {
      console.log(res)
      this.setState({usersList: res.data})
    })
  }
  update = game => {
  axios
  .put('', game)
  .then(res => {
    this.setState({
      updateSuccessMessage: res.data.successMessage,
      putError: ''
    });
  })
  .catch(err => {
    this.setState({
      updateSuccessMessage: '',
      updateError: err.res.data.Error
    });
  }) ; 
};
  delete = game => {
    //     axios
    //     .delete(url, { params: requestData })
    // .then(function(response) {
    // console.log(response.data);
    // })
    // .catch(function(error) {
    // console.log(error);
    // });
  }
  render(){
  return(
      <>Dashboard!
      // Games here
      {this.state.usersList.length
        ? this.state.usersList.map(template => (
            <div key={template.id}>
              {/* {template.first_name}'s email address is {template.email} */}'
              I was programming in '{template.programming_language}', trying to
              get all of my '{template.noun}' to properly '{template.verb}'.
              However, nothing was actually '{template.ing_verb}'.. It was then
              I realized I hadn't even '{template.ed_verb}' my '{template.noun2}
              '.
            </div>
          ))
        : "No Stories Avialable!"}
      <button type="submit"><Link className = 'landing-btn' to='/play'>Play!</Link></button> 
      <button type="submit"><Link className = 'landing-btn' to='/edit'>Edit!</Link></button>
      </>
  );}
};

export default Dashboard
;
