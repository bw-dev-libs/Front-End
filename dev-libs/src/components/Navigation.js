import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/signup">Sign-Up</Link>
      <Link to="/login">Log-in</Link>
    </>
  );
};

export default Navigation;
