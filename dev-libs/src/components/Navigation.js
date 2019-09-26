import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../icon.svg";

const NavStyled = styled.div`
  margin-top: 1% auto;
  margin-bottom: 1%;
  background: #55af64;
  height: 200px;
  position: relative;
  left: -179px;
  top: -29px;
  width: 858px;
  border-radius: 2.2rem;
  border-top: 2px solid black;
  img {
    max-width: 100px;
    /* border: 1rem solid red; */
    position: relative;
    /* top: -210px; */
    margin-top: 0rem;
    margin-bottom: 5rem;
  }
  svg {
    position: relative;
    /* top: 120px; */
    top: -80px;

    width: 100%;

    max-width: 858px;
    height: 100px;
    /* fill: red; */
    fill: #f5f5f5;
  }
  .nav-link{
      color: white;
      font-weight: bold;
      padding: 2%;
      position: relative;
      right:-250px;
      /* margin:0 auto; */
    text-decoration:none;
    cursor: pointer;
    /* display:none; */
  }
`;

const Navigation = () => {
  return (
    <NavStyled><br/>
      <NavLink className='nav-link' to='/dashboard'>Check dashboard!</NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink className='nav-link' to='/play'>Lets Play!</NavLink>
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 290.99 154.01"
        preserveAspectRatio="none"
      >
        <path
          className="cls-1"
          d="m290.11099,0.306c-0.39301,0.473 -7.75598,1.117 -11.98199,2.297c-1.01401,0.283 -2.19901,0.605 -2.633,0.717c-1.33899,0.345 -8.19101,2.821 -9.48001,3.426c-0.28998,0.136 -1.11899,0.506 -1.84399,0.821c-3.22699,1.406 -9.077,4.455 -12.18298,6.349c-0.90802,0.553 -1.71301,1.006 -1.78802,1.006c-0.07599,0 -0.45898,0.22401 -0.85199,0.498c-0.392,0.274 -2.431,1.631 -4.53101,3.016c-10.08798,6.652 -19.366,14.35601 -30.81,25.58401c-10.19202,10 -18.21698,16.851 -26.07001,22.258c-0.94098,0.649 -1.771,1.23801 -1.84299,1.311c-0.535,0.534 -7.957,5.252 -10.138,6.44499c-1.01401,0.554 -2.26199,1.27 -2.772,1.59201c-2.05402,1.293 -12.037,6.103 -15.00299,7.228c-0.79701,0.302 -1.686,0.649 -1.97501,0.772c-0.28999,0.12299 -0.869,0.362 -1.28799,0.53099c-1.16301,0.46901 -8.26901,2.806 -9.90401,3.256c-0.79601,0.22 -2.10001,0.582 -2.897,0.80501c-0.79599,0.224 -2.33699,0.599 -3.42299,0.83499c-1.08601,0.23601 -2.44901,0.53801 -3.028,0.673c-11.36201,2.63701 -29.623,2.804 -42.26501,0.388c-3.87898,-0.742 -4.633,-0.90399 -6.58299,-1.42c-8.448,-2.23199 -12.173,-3.621 -19.882,-7.412c-3.83099,-1.88499 -5.58,-2.685 -8.03099,-3.677c-0.797,-0.32199 -1.745,-0.707 -2.10699,-0.855c-1.21201,-0.496 -7.21901,-2.513 -9.216,-3.095c-1.08701,-0.317 -2.272,-0.674 -2.634,-0.795c-0.362,-0.12 -1.547,-0.416 -2.633,-0.657c-1.086,-0.241 -2.68601,-0.60001 -3.55501,-0.79601c-7.613,-1.72 -17.695,-2.379 -24.403,-1.593c-5.666,0.664 -10.42101,1.714 -13.78,3.04201c-0.29001,0.114 -1.178,0.467 -1.97501,0.784c-0.797,0.31599 -2.544,1.12 -3.884,1.785l-2.436,1.211l0,39.847l0,39.84799l169.58499,0l169.58601,0l0,-73.07999l0,-73.08001l-2.173,-1.41199c-3.51501,-2.283 -10.25601,-5.41901 -13.349,-6.21c-3.47,-0.887 -6.40802,-1.593 -7.65201,-1.83801c-4.134,-0.816 -12.60001,-1.004 -18.16901,-0.405"
        />
      </svg>
    </NavStyled>
  );
};

export default Navigation;
