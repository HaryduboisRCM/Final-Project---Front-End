import React, { useState } from "react";
import logo from "./TDA Logo.jpg";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

function Login(props) {
  // super(props);
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    console.log("submit");
    e.preventDefault();
    cDisabled(true);
    props.client
    .login(e.target.username.value, e.target.password.value)
    .then( (response) => {
      cDisabled(false);
      props.loggedIn(response.data.token);
    })
    .catch ( (error) => {
      alert("An error has occurred, please try again later");
      console.log("Login error", error);
      cDisabled(false);
    })
  };

  return (
    
    <>
    <div className="loginarea">
    <Navbar  className = "header col-md-12">
  <Container >
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="140"
        height="140"
        // className="d-inline-block align-top"
        alt="TDA logo"
      />
    </Navbar.Brand>
  </Container>
</Navbar>

      {/* <br /><br /> */}
      <div className="loginpage-header">
        The Developer Academy <br /> Employment Portal
      </div>
        <br />
        <br />
      <div className="loginheader">
        Login
      </div>
      <br />
      <div className="logininput">
      <form onSubmit={(e) => submitHandler(e)}>
        Username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        Password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <div className = "add-submit">
        <button className="login-submit" type="submit" disabled={disabled}>
          {" "}
          Submit
          {" "}
        </button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
}

export default Login;
