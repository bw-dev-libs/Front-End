import React from "react";
import logo from "../icon.svg";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <h1>DEVLIBS</h1>
      <button type="submit"><Link className = 'landing-btn' to='/signup'>Create Account!</Link></button> &nbsp;
      <button type="submit"><Link className = 'landing-btn' to='/login'>Log in!</Link></button>
    </>
  );
};

export default LandingPage;
