import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';
import Members from './components/Gym/Members';
import Classes from './components/Gym/Classes';
import Schedules from './components/Gym/Schedules';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/members" component={Members} />
        <PrivateRoute path="/classes" component={Classes} />
        <PrivateRoute path="/schedules" component={Schedules} />
      </Switch>
    </Router>
  );
};

export default App;
