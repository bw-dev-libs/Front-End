import React from "react";
import axiosWithAuth from './utils/axiosWithAuth';
import axios from 'axios';
import styled from "styled-components";

import logo from "../icon.svg";

const StyledLogin = styled.div`
  /* background: #f5f5f5; */
  /* background:red; */
  height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  .header{
    /* width: 100%; */
    /* background:green; */
  }
  img {
    max-width: 100px;
    /* border: 1rem solid red; */
    position: relative;
    top: -210px;
    margin-top: 0rem;
    margin-bottom: 5rem;
  }

  h1{
    font-size: 3rem;
    position: relative;
    /* top: -50px; */

    /* border: 1rem solid red; */
    /* border-bottom: 15rem; */
  }

  button {
    padding: 10px 15px;
    background-color: #55af64;
    color: white;
    border: 1px solid #55af64;
    background-color: 250ms;
    font-size: 1.2rem;
    font-weight:bold;
    border-radius: 0.5rem;
    width:21rem;
    margin-bottom:9rem;
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
 box-shadow:2px;
 /* border-bottom: 5rem; */
  }
 
  
  p{
    font-size:1.25rem;
    font-weight:bold;
    .login-span{
    color: #55af64;
    font-weight:normal;
  }
  }
`;

class Login extends React.Component {
    state= {
      credentials: {
        username: '',
        password: ''
      }
    };
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state.credentials)
      axios
      .post('https://dev-libs.herokuapp.com/api/auth/login', this.state.credentials)
      
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token);
        localStorage.setItem("userID", res.data.user);
        this.props.history.push('/Dashboard');
      })
      
    }
    render() {
  return (
    <StyledLogin>
      <div className="header">
                <img src={logo} alt="logo" />
              </div>
      

    <form onSubmit={this.handleSubmit}>
      <h1>Dev-Libs!</h1>
      <p>Login in here!</p>
      
      {/* <linearGradient
       
        id="linearGradient"
        x1="13"
        y1="193.49992"
        x2="307"
        y2="193.4992"
        gradientUnits="userSpaceOnUse">
        <stop
        style="stop-color:#55af64;"
        offset="0"
        id="stop876" />
        <stop
        style="stop-color:#f5f5f5;"
          offset="1"
          id="stop878" />
          </linearGradient>
          <path
        d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.0016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20.1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" /> */}
      <input
      className="input-field" 
      type="text"
      name="username"
      placeholder="username"
      value={this.state.credentials.username}
      onChange={this.handleChange}
      />
      <input
      className="input-field" 
      type="password"
      name="password"
      value={this.state.credentials.password}
      onChange={this.handleChange}
      placeholder="password"
      /><h5>By logging in you agree to the ridiculously long terms that you didn't read.</h5>
      <button>Login!</button>
    </form>
      </StyledLogin>
  );
    }
}

export default Login;