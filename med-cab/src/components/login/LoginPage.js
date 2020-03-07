import React from "react";
import LoginForm from "./LoginForm";
import Nav from "../Nav";
import styled from "styled-components";

const MyH1 = styled.h1 `
color: #659b6e;
position: relative;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 65px;
  padding: 30px;
  text-decoration: underline;
  
`;
const Container = styled.div`
text-align: center;

`;

const LoginPage = props => {
  return (
    <>
    <Container>
     
      
      <Nav />
      <MyH1>Log-In</MyH1>
      
        <LoginForm />
      </Container>
    </>
  );
};

export default LoginPage;
