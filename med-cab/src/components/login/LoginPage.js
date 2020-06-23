import React from "react";
import LoginForm from "./LoginForm";
import Nav from "../Nav";
import styled from "styled-components";

const H1 = styled.h1 `
color: green;
position: relative;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 65px;
  padding: 30px;
  text-decoration: none;
  
`;
const Container = styled.div`
text-align: center;

`;

const LoginPage = props => {
  return (
    <>
    <Container>
     
      
      <Nav />
      <H1>Log-In</H1>
      
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginPage;
