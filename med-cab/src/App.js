import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './components/history'
import PrivateRoute from "./components/PrivateRoute";
import User from './components/User/User'
import SignupPage from "./components/login/SignupPage";
import LoginPage from "./components/login/LoginPage";
// import TestDiner from "./components/User/testdiner";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
    
        <PrivateRoute exact path="/protected" component={User} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={SignupPage} />
          <Route component={LoginPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;