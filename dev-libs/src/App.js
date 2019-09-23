import React from 'react';
import { Route } from "react-router-dom";

import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import Play from "./components/Play";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/play" component={Play} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App; 
