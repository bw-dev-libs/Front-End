import React from 'react';
import SavedDevLibsPage from '../../../../devlibs/src/components/SavedDevLibPage';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
   return( 
    <Route
      {...rest}
      render={() =>{
       if (localStorage.getItem('token'))  {
          return <SavedDevLibsPage  />;
        } else {
          return <Redirect to="/login" />;
        }}
      }
    />)
  };

  export default PrivateRoute;