import React from 'react';
import Play from '../Play';
import {Route, Redirect} from 'react-router-dom';
import Dashboard from '../Dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => {
   return( 
    <Route
      {...rest}
      render={() =>{
       if (localStorage.getItem('token'))  {
          return <Dashboard />;
        } else {
          return <Redirect to="/login" />;
        }}
      }
    />)
  };

  export default PrivateRoute;