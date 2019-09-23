import React from 'react';
import DevLibsPage from '../DevLibPage';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
   return( 
    <Route
      {...rest}
      render={() =>{
       if (localStorage.getItem('token'))  {
          return <DevLibsPage  />;
        } else {
          return <Redirect to="/login" />;
        }}
      }
    />)
  };

  export default PrivateRoute;