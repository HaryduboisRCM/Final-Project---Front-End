import React, { useState } from "react";

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
      alert("An eeror has occured, pleae try again later");
      console.log("Login error", error);
      cDisabled(false);
    })
  };

  return (
    
    <>
    <div className="loginarea">
      <br /><br /><br /><br /><br /><br />
      <div className="loginpage-header">
        Event Search
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
