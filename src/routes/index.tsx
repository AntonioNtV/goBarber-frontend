import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/Signin/index';
import Signup from '../pages/Signup/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Signin} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
);

export default Routes;
