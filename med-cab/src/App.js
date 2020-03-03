import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './components/history'
import PrivateRoute from "./components/PrivateRoute";
import UserForm from './components/User/UserForm'
import SignupPage from "./components/login/SignupPage";
import LoginPage from "./components/login/LoginPage";
import UserDashboard from "./components/User/UserDashboard"


function App() {
  return (
    <>

    <UserForm />
      {/* <Router history={history}>
        <Switch>
        <PrivateRoute exact path='/user/dashboard' component={UserDashboard} />
        <PrivateRoute exact path="/user/userform" component={UserForm} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={SignupPage} />
          <Route component={LoginPage} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;


