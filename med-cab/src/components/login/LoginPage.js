import React from "react";
import LoginForm from "./LoginForm";
import Header from "../header/Header"


const LoginPage = props => {
  return (
    <>
    <div>
      <Header />
      <h1>Log-In</h1>
      
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
