import React from "react";
import { Route } from "react-router-dom";
import WordList from "../src/components/Edit";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Play from "./components/Play";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import PrivateRoute from "./components/utils/PrivateRoute";
import Navigation from  "./components/Navigation"

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/play" component={Play} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
