import React from "react";
import axios from 'axios';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      updateSuccessMessage: '',
      updateError: '',
      deleteSuccessMessage: '',
      deleteError: '',
    };
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

  }
  render(){
  return(
      <>Dashboard!
      // Games here
      <button>Update!</button> 
      <button>Delete</button>
      </>
  );}
};

export default Dashboard
;
