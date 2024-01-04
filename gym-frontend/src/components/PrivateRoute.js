import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add authentication check logic here

  return (
    <Route
      {...rest}
      render={props =>
        // If authenticated, render the component; otherwise, redirect to login
        true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
