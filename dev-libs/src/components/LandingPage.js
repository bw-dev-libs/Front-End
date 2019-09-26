import React from "react";
import logo from "../icon.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./less/LandingPage.less";

const StyledLandingPage = styled.div`
  background: #f5f5f5;
  height: 100vh;

  img {
    max-width: 400px;
    /* border: 1rem solid red; */
    margin-bottom: 0;
  }
  h1 {
    font-size: 4rem;
    /* border: 1rem solid red; */
    margin-top: 0;
  }
  button {
    padding: 10px 15px;
    background-color: #55af64;
    color: white;
    border: 1px solid #55af64;
    background-color: 250ms;
    font-size: 1.5rem;
    border-radius: 1rem;
    &:hover {
      cursor: pointer;
      background-color: white;
      color: #55af64;
    }
    &:hover .landing-btn {
      color: #55af64;
    }

    .landing-btn {
      text-decoration: none;
      color: white;
      &:hover {
        color: #55af64;
      }
    }
  }
`;

const LandingPage = () => {
  return (
    <StyledLandingPage>
      <img src={logo} alt="logo" />
      <h1>DEVLIBS</h1>
      <button type="submit">
        <Link className="landing-btn" to="/signup">
          Create Account!
        </Link>
      </button>{" "}
      &nbsp;
      <button type="submit">
        <Link className="landing-btn" to="/login">
          Log in!
        </Link>
      </button>
    </StyledLandingPage>
  );
};

export default LandingPage;
