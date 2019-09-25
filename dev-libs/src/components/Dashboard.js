import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'

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
      <button type="submit"><Link className = 'landing-btn' to='/play'>Play!</Link></button> &nbsp;
      <button type="submit"><Link className = 'landing-btn' to='/edit'>Edit!</Link></button>
      </>
  );}
};

export default Dashboard
;
