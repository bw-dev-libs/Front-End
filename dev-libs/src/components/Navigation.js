import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/signup">Sign-Up</NavLink>
      <NavLink to="/login">Log-in</NavLink>
    </div>
  );
};

export default Navigation;
