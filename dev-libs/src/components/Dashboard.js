import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import axiosWithAuth from "./utils/axiosWithAuth";
import { dummyData } from "./utils/data";
import styled from "styled-components";

import logo from "../icon.svg";
import Navigation from "./Navigation";
import Navigationlite from "./Navigationlite";

const DashboardStyled = styled.div`
  /* border: 2px solid red; */
  height: 100vh;
  /* max-width: 500px; */
  width: 100%;
  margin: 0 auto;
  .header {
    /* width: 100%; */
    /* background:green; */
  }
  h1 {
    font-size: 3rem;
    position: relative;
    /* top: -250px; */

    /* border: 1rem solid red; */
    /* border-bottom: 15rem; */
  }
  img {
    max-width: 100px;
    /* border: 1rem solid red; */
    position: relative;
    top: -210px;
    margin-top: 0rem;
    margin-bottom: 5rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 9rem;

    .landing-btn {
      width: 40%;
      padding: 10px 15px;
      background-color: #55af64;
      text-decoration: none;
      color: white;
      border: 1px solid #55af64;
      background-color: 250ms;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 0.5rem;
      &:hover {
        cursor: pointer;
        background-color: white;
        color: #55af64;
      }
    }
  }
`;

const Story = styled.div`
  position: relative;
  /* top: -250px; */
  border: 2px solid black;
  margin-bottom: 2rem;
  font-size: 1.25rem;
`;

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      updateSuccessMessage: "",
      updateError: "",
      deleteSuccessMessage: "",
      deleteError: "",
      usersList: dummyData
    };
  }

  componentDidMount() {
    const ID = localStorage.getItem("userID");
    axiosWithAuth()
      .get(`https://dev-libs.herokuapp.com/api/users/${ID}/templates`)
      .then(res => {
        console.log(res);
        this.setState({ usersList: res.data });
      });
  }
  // update = game => {
  //   axios
  //     .put("", game)
  //     .then(res => {
  //       this.setState({
  //         updateSuccessMessage: res.data.successMessage,
  //         putError: ""
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         updateSuccessMessage: "",
  //         updateError: err.res.data.Error
  //       });
  //     });
  // };
  delete = game => {
    //     axios
    //     .delete(url, { params: requestData })
    // .then(function(response) {
    // console.log(response.data);
    // })
    // .catch(function(error) {
    // console.log(error);
    // });
  };
  render() {
    return (
      <DashboardStyled>
        <Navigationlite />
        <div className="header">{/* <img src={logo} alt="logo" /> */}</div>
        <h1>My Dashboard</h1>
        {this.state.usersList.length
          ? this.state.usersList.map(template => (
              <Story key={template.id}>
                <br />I was programming in '{template.programming_language}',
                trying to get all of my '{template.noun}' to properly '
                {template.verb}
                '. However, nothing was actually '{template.ing_verb}'.. It was
                then I realized I hadn't even '{template.ed_verb}' my '
                {template.noun2}
                '. <br />
                <br />
              </Story>
            ))
          : "No Stories Avialable!"}
        <div className="buttons">
          <Link className="landing-btn" to="/play">
            Play!
          </Link>
          &nbsp; &nbsp;&nbsp;
          <Link className="landing-btn" to="/edit">
            Edit!
          </Link>
        </div>
      </DashboardStyled>
    );
  }
}

export default Dashboard;
