import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userRegister } from "../../actions";

import { Form } from "semantic-ui-react";
import { useInput } from "../hooks/useInput";


const SignupForm = props => {
  
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");




  const userRegister = e => {
    
    e.preventDefault();
    console.log(username, password);
    props.userRegister({
      username,
      password,
   
    });
    
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <Form size="massive" inverted>
        
        <Form.Input
          required
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={e => handleUsername(e.target.value)}
        />
        <Form.Input
          required
          label="Password"
          type="text"
          value={password}
          name="password"
          onChange={e => handlePassword(e.target.value)}
        />
        <p className="error">{props.error}</p>
        <Form.Group inline>
          <Form.Button size="massive" onClick={userRegister}>
            Submit
          </Form.Button>
          <Link className="login-link" to="/login">
            Login
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    options: state.options,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { userRegister }
)(SignupForm);
