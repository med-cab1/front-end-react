import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import { userLogin } from "../../actions";
import { useInput } from "../hooks/useInput";




const LoginForm = props => {
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");

  const userLogin = e => {
    e.preventDefault();
    
    props.userLogin({
      username,
      password,
     
    });
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      
      <Form class="ui form" size="massive" inverted>
        
      <Form.Group inline>
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
          type="password"
          value={password}
          name="password"
          onChange={e => handlePassword(e.target.value)}
        />
        <p className="error">{props.error}</p>
        
          <Form.Button  class="ui button" size="massive" onClick={userLogin}>
            Submit
          </Form.Button>
          <Link className="login-link" to="/register">
            Register
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
  { userLogin }
)(LoginForm);
