import React , {useState} from "react";
import Dashboard from "./Dashboard";
import { ApiClient } from "./apiClient";
import Login from "./Login";
import './Buttons.css';
import {Button, Row} from 'react-bootstrap';


function App() {

  const [token,changeToken] = useState(window.localStorage.getItem("token"));

  const login = (newToken) => {
    window.localStorage.setItem("token",newToken)
    changeToken(newToken);
  }

  const logout = () => {
    window.localStorage.removeItem("token")
    changeToken(undefined);
  }
  const client = new ApiClient(token, logout);

  return (
    <>
      {token ? (
        <>

        <Button  className = "logoutButton" onClick={logout} size="sm">
          Log Out
        </Button>
          
        <Dashboard client={client}  />

        <br></br>
        <Row>
       
          
        </Row>
        </>
      ) : (
        <Login loggedIn={(token) => login(token)} client={client} />
      )
      } 
    </>
  );
}
    


export default App;
