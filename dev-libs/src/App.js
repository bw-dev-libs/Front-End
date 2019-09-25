import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Navigation from "./components/Navigation";
import Play from "./components/Play";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/play" component={Play} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
