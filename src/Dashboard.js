import React, { useState, useEffect, Link, Route } from "react";
// import { Link } from "react-router-dom";
// import {Link } from "react";
import './App.css';
import './Login.css';
import './Navigation.css';
import './Buttons.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Add from './Add';
import Login from './Login';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import logo from "./TDA Logo.jpg";
import LinkedIn from "./LinkedInLogo.png";
import CV from "./CV Logo3.png";
import GitHub from "./GitHub Logo.png";
import WebPort from "./webport.png";

function Dashboard(props) {
  const [profiles, cProfiles] = useState({});
  const [current, cCurrent] = useState(undefined);
    
  const refreshList = () => {
    props.client.getGradProfile(props.token).then((response) => cProfiles(response.data));
  };

  const removeProfile = (id) => {
    props.client.removeProfile(id).then(() => refreshList());
  };

  const updateProfile = (profile) => {
    cCurrent(profile);
  };

  useEffect(() => {
    refreshList();
    console.log(props)
  }, []);


  const linkedIn = () => {
      return (
        <div>
            <a href={profiles.linkedIn} target="_blank"> {profiles.linkedIn} </a>
       </div>
       );
   };

   const gitHub = () => {
      return (
        <div>
            <a href={profiles.gitHub} target="_blank"> {profiles.gitHub} </a>
       </div>
       );
   };

   const personalPortfolio = () => {
      return (
        <div>
            <a href={profiles.portfolio} target="_blank"> {profiles.portfolio} </a>
       </div>
       );
   };

  //  const email = () => {
  //     return (
  //       <div>
  //           <a href={profiles.email} target="_blank"> {profiles.email} </a>
  //      </div>
  //      );

  //  };


  const section = () => {
      return (
        <div>
          <Card className = "col-md-8">
            <div>
              <div className = "fieldSpace"><strong>Username:</strong>  {profiles.userName}</div>
              <div className = "fieldSpace"><strong>Course Title:</strong>   {profiles.courseTitle}</div>
            </div>
            </Card>
        </div>
      );

  };

  const section1 = () => {
      return (
        <div>
          <Card className = "col-md-2">
            <div>
              <div className = "fieldSpace"><strong>Full Name:</strong>   {profiles.fullName}</div>       
              <div className = "fieldSpace"><strong>Email:</strong> {profiles.email}</div>
              <div className = "fieldSpace"><strong>Contact Number:</strong>   {profiles.contactNumber}</div>
             
            </div>
            </Card>
        </div>
      );
  };
  
  const Media = () => {
    console.log(profiles)
      return (
        <div>
          <Card className = "col-md-2">
            <div>                          
            
              <div className = "fieldSpace"><img src={profiles.image} width="100px" height="100px"/> <br></br><strong></strong></div>                          
              <div className = "fieldSpace"><strong>Download CV Here:</strong> <a href={profiles.cv} target="_blank"> {profiles.cv}  </a></div> 
              <div className = "fieldSpace"><img src={LinkedIn} width="50" height="50" alt="LinkedIn Logo"/><strong></strong> {linkedIn()}</div>              
              <div className = "fieldSpace"> <img src={GitHub} width="50" height="50" alt="TDA logo"/><strong></strong> {gitHub()}</div>
              <div className = "fieldSpace"> <img src={WebPort} width="50" height="50" alt="TDA logo"/><br></br><strong>Personal Portfolio:</strong> {personalPortfolio()}</div>             
            </div>
           </Card>
        </div>
      );
  };


  const section2 = () => {
      return (
        <div>
          <Card >
            <div>
              <div className = "fieldSpace"><strong>Full Bio:</strong> {profiles.bio}</div>
              <div className = "fieldSpace"><strong>List of Skills:</strong> {profiles.skills}</div> 
              <div className = "fieldSpace"><strong>City:</strong>   {profiles.city}</div>         
            </div>
           </Card>
        </div>
      );
  };

  const [visibleOutput, setVisibleOutput] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);


  const section3 = () => {
      return (
        <div>
          <Card className = "">
              <div className = "add-submit">
                <Button className = "buttonspace updatebutton"  onClick={() => removeProfile (profiles._id)}> Remove</Button>
                <br></br> 
                <Button className = " buttonspace updatebutton"  onClick={() => {updateProfile(profiles); setVisibleInput(false); setVisibleOutput(true)}}> Edit Profile</Button>
              </div>
            </Card>
        </div>
      );
  };

  return (
    <Container>


{/* /****Navigation Bar****************************************************************************************************************************/}
    

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




{/* /****Main Container*********************************************************************************************************************************/}

<Container fluid className = "mainContainer col-md-12">

      <Container fluid className ="column1 col-md-4">
      {/* /****Column 1 - Image and links***************************************************************************************************************/}
    
        <div>
        
          <div className = "socialSpacing">        
          </div>  
          
          <div className = "socialMedia">
            {Media()}
          </div>

        </div>

      </Container>

      {/* /****Column 2 - Name, details and 2 tabs***************************************************************************************************************/}      
    
      <Container className = "column2 col-md-8">

          <Row>
            <Col>{section()}</Col>
          </Row>

          {/* /****Column 2 - User Input form***************************************************************************************************************/}  
         <Container className = "column2Section1 col-md-8">

            {visibleOutput && 

              <Row >
            
                  <Col className = "addForm">
                    <Add
                      client={props.client}
                      refreshList={() => {
                        refreshList();
                        cCurrent(undefined);
                      }}
                      currentProfile={profiles}
                    />
                  </Col>
              </Row> 
              
            }

          </Container>


          {/* /****Column 2 - Profile Display table***************************************************************************************************************/}   
          <Container className = "column2Section2 col-md-8"> 

            {visibleInput &&  

              <div className = "col1">

                  <Col>{section1()}</Col>
                  <Col>{section2()}</Col>

              </div>

                }
    
            {visibleInput &&  

                  <Row className="col-md-4">
                    <div>{section3()}</div>
                  </Row> 

            }



          </Container> 


  </Container>
  
{/* /********************************************************************************************************************************/}      
    </Container>
      
{/* /**********************************************************************************************************************/}
    </Container>
  );
}

export default Dashboard;


