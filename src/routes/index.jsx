import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../view/Layout';
import Login from '../view/Login';
import PrivateRoute from '../components/PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Layout} />
        <Route path="/login" exact component={Login} />
        <Redirect from="/" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
