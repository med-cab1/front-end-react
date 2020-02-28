import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userRegister } from "../../actions";
// import { FormContainer } from '../../styled-components'
import { Form } from "semantic-ui-react";
import { useInput } from "../hooks/useInput";

const SignupForm = props => {
  const [flavor, setFlavor, handleFlavor] = useInput("");
  const [effect, setEffect, handleEffect] = useInput("");
  const [condition, setCondition, handleCondition] = useInput("");
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");

  const userRegister = e => {
    // localStorage.setItem("type", type.value);
    e.preventDefault();
    console.log(username, password, flavor, condition, effect);
    props.userRegister({
      username,
      password,
     condition: "",
      flavors: {},
      effect: {}
    });
    setFlavor("");
    setEffect("");
    setCondition("");
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <Form size="massive" inverted>
        {/* <Form.Select 
                    required
                    name='type'
                    label='User Type'
                    options={props.options}
                    placeholder='User Type'
                    value={type.value}
                    onChange={(e, {value}) => handleType({value})}
                    // /> */}
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
        <Form.Input
          required
          label="Effect"
          type="checkbox"
          value={effect}
          name="effect"
          onChange={e => handleEffect(e.target.value)}
        />
        <Form.Input
          required
          label="Condition"
          type="checkbox"
          value={condition}
          name="condition"
          onChange={e => handleCondition(e.target.value)}
        />
        <Form.Input
          required
          label="Flavor"
          type="checkbox"
          value={flavor}
          name="flavor"
          onChange={e => handleFlavor(e.target.value)}
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
