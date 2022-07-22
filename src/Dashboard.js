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
import Portfolio from "./Portfolio.png";

function Dashboard(props) {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
    
  const refreshList = () => {
    props.client.getProfiles().then((response) => cProfiles(response.data));
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
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.linkedIn} target="_blank"> {current.linkedIn} </a>
       </div>
       );
     });
   };

   const gitHub = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.gitHub} target="_blank"> {current.gitHub} </a>
       </div>
       );
     });
   };

   const personalPortfolio = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
            <a href={current.portfolio} target="_blank"> {current.portfolio} </a>
       </div>
       );
     });
   };

  //  const email = () => {
  //   return profiles.map((current) => {
  //     return (
  //       <div key={current._id}>
  //           <a href={current.email} target="_blank"> {current.email} </a>
  //      </div>
  //      );
  //    });
  //  };


  const section = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-8">
            <div>
              <div className = "user"><strong>Username:</strong>  {current.userName}</div>
              <div className = "user"><strong>Course Title:</strong>   {current.courseTitle}</div>
            </div>
            </Card>
        </div>
      );
    });
  };

  const section1 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>
              {/* <div className = "fieldSpace"><strong>Username:</strong>  {current.userName}</div>
              <div className = "fieldSpace"><strong>Course Title:</strong>   {current.courseTitle}</div> */}
              <div className = "fieldSpac"><strong>Full Name:</strong>   {current.fullName}</div>       
              <div className = "fieldSpac"><strong>Email:</strong> {current.email}</div>
              <div className = "fieldSpac"><strong>Contact Number:</strong>   {current.contactNumber}</div>
             
            </div>
            </Card>
        </div>
      );
    });
  };
  
  const Media = () => {
    console.log(profiles)
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>                          
            
              <div className = "profilePicture"><img className="profileImage" src={current.image} width="100px" height="100px"/> <br></br><strong></strong></div>                          
              <div className = "cvSpace"><strong>Download CV Here:</strong> <a href={current.cv} target="_blank"> {current.cv}  </a></div> 
              <div className = "smediaIcon"><img src={LinkedIn} width="50" height="50" alt="LinkedIn Logo"/><strong></strong> </div>   
              <div className= "smediaLink">{linkedIn()}</div>           
              <div className = "smediaIcon"> <img src={GitHub} width="50" height="50" alt="TDA logo"/><strong></strong></div>
              <div className= "smediaLink">{gitHub()}</div>
              <div className = "smediaIcon"> <img src={Portfolio} width="50" height="50" alt="TDA logo"/><br></br><strong></strong> </div>    
              <div className= "smediaLink">{personalPortfolio()}</div>         
            </div>
           </Card>
        </div>
      );
    });
  };


  const section2 = () => {
    return profiles.map((current) => {
      // console.log(current)
      return (
        <div key={current._id}>
          <Card >
            <div>
              <div className = "fieldSpac"><strong>Full Bio:</strong> {current.bio}</div> <br></br>
              <div className = "fieldSpac"><strong>List of Skills:</strong> {current.skills}</div> 
              <div className = "fieldSpac"><strong>City:</strong>   {current.city}</div>         
              {/* <div className = "fieldSpace"><img src={LinkedIn} width="50" height="50" alt="LinkedIn Logo"/><strong>LinkedIn Account:</strong> {linkedIn()}</div>              
              <div className = "fieldSpace"> <img src={GitHub} width="50" height="50" alt="TDA logo"/><strong>gitHub Link:</strong> {gitHub()}</div>
              <div className = "fieldSpace"> <img src={WebPort} width="50" height="50" alt="TDA logo"/><strong>Personal Portfolio Link:</strong> {personalPortfolio()}</div> */}
              {/* <div className = "fieldSpace"><strong>Hired?:</strong> {current.employed} </div> */}
              {/* <div className = "fieldSpace"><strong>Image URL:</strong> {current.image} </div>
              <div className = "fieldSpace"><strong>CV File:</strong> {current.cv} </div> */}
            </div>
           </Card>
        </div>
      );
    });
  };

  const [visibleOutput, setVisibleOutput] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);


  const section3 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "">
              <div className = "add-submit">
                {/* <Button className = "buttonspace updatebutton"  onClick={() => removeProfile (current._id)}> Remove</Button> */}
                <br></br> 
                <Button className = " buttonspace updatebutton"  onClick={() => {updateProfile(current); setVisibleInput(false); setVisibleOutput(true)}}> Edit Profile</Button>
                {/* <button type="submit" id="submitbutton" onclick="document.getElementById('submitbutton').disabled = true;">Click Me</button> */}
              </div>
            </Card>
        </div>
      );
    });
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

          <div className="userField">
            <Col>{section()}</Col>
            <Col>{section3()}</Col>
          </div>

          

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
                      currentProfile={current}
                    />
                  </Col>
              </Row> 
              
            }

          </Container>


          {/* /****Column 2 - Profile Display table***************************************************************************************************************/}   
          <Container className = "column2Section2 col-md-8"> 

            {visibleInput &&  

              <div className = "col1">
              
                  <Row className="col-md-4">
                    <Col>{section1()}</Col> <br></br>
                    <Col>{section2()}</Col>
                  </Row>
          
                  {/* <Row className="col2 col-md-4">
                    <Col>{section2()}</Col>
                  </Row> */}

                  {/* <Col>{section1()}</Col>
                  <Col>{section2()}</Col> */}

              </div>
}

    
                {/* <Row className="col-md-4">
                  <div>{section3()}</div>
                </Row>  */}
            


          </Container> 


  </Container>
  
{/* /********************************************************************************************************************************/}      
    </Container>
      
{/* /**********************************************************************************************************************/}
    </Container>
  );
}

export default Dashboard;


