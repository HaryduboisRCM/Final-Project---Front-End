import React, { useState, useEffect } from "react";
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
// import Link from 'react-bootstrap/Link'
import Add from './Add';
import Login from './Login';
import Card from 'react-bootstrap/Card'

import logo from "./TDA Logo.jpg";
import LinkedIn from "./LinkedInLogo.png";
import CV from "./CV Logo3.png";
import GitHub from "./GitHub Logo.png";


function Dashboard(props) {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [img, setImg] = useState();
  const [file, setFile] = useState();

  // Allow a user to insert an image of themsleves
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  const onFileChange = (e) => {
    const [file] = e.target.files;
    setFile(URL.createObjectURL(file));
  };

  // const onFileChange = event => { 
  //   // Update the state 
  //   this.setState({ selectedFile: event.target.files[0] }); 
  // }; 


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
  }, []);

  const section1 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>
              <div className = "fieldSpace"><strong>Username:</strong>  {current.userName}</div>
              <div className = "fieldSpace"><strong>Course Title:</strong>   {current.courseTitle}</div>
              <div className = "fieldSpace"><strong>Full Name:</strong>   {current.fullName}</div>
              <div className = "fieldSpace"><strong>Email:</strong>   {current.email}</div>
              <div className = "fieldSpace"><strong>Contact Number:</strong>   {current.contactNumber}</div>
              <div className = "fieldSpace"><strong>City:</strong>   {current.city}</div>
            </div>
            </Card>
        </div>
      );
    });
  };
  const section2 = () => {
    return profiles.map((current) => {
      return (
        <div key={current._id}>
          <Card className = "col-md-2">
            <div>
              <div className = "fieldSpace"><strong>Full Bio:</strong>   {current.bio}</div>
              <div className = "fieldSpace"><strong>List of Skills:</strong>   {current.skills}</div>
              <div className = "fieldSpace"><strong>LinkedIn Account:</strong>   {current.linkedIn}</div>
              <div className = "fieldSpace"><strong>gitHub Link:</strong>   {current.gitHub}</div>
              <div className = "fieldSpace"><strong>Personal Portfolio Link:</strong>   {current.portfolio}</div>
              <div className = "fieldSpace"><strong>Hired?:</strong>   {current.employed}</div>
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
                {/* <button className = "login-submit2"  onClick={() => removeProfile (current._id)}> remove</button> */}
                <button className = "login-submit2"  onClick={() => {updateProfile(current); setVisibleInput(true); setVisibleOutput(true)}}> update</button>
              </div>
            </Card>
        </div>
      );
    });
  };

  return (
    <>


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

<Container fluid className = " row mainContainer col-md-12">

    
      {/* /****Column 1 - Image and links***************************************************************************************************************/}
    
      <div className =" column1 col-md-4">
        col1
        <br></br> 
          <img className = "image" src={img} alt="" width = "150px" height = "150px"/>
        <br></br> 
          <input type="file" onChange={onImageChange} />
        <br></br> 
        <br></br> 
        <div className = "socialMedia">
          <div className = "socialSpacing">
            <img src={LinkedIn} width="50" height="50" alt="TDA logo"/>
            <input type="text" placeholder ="Add your LinkedIn Profile"/>                   
          </div>
          <div className = "socialSpacing">        
            <img src={CV} width="50" height="50" alt="TDA logo"/>
            {/* <input type="text" placeholder ="Upload your CV"/> */}
            <input type="file" onChange={onFileChange} /> 
            <button> 
              Upload
            </button> 
          </div>

          <div className = "socialSpacing">            
            <img src={LinkedIn} width="50" height="50" alt="TDA logo"/>
            <input type="text" placeholder ="Add your Personal Portfolio Website"/>                   
          </div>
          <div className = "socialSpacing">      
            <img src={GitHub} width="50" height="50" alt="TDA logo"/>
            <input type="text" placeholder ="Add your GitHub Profile"/>                   
          </div>
          <div className = "update-button">
            <button  className = "update-button"  onClick={() => updateProfile(current)}> Update</button>
          </div>
        </div>
      </div>



      {/* /****Column 2 - Name, details and 2 tabs***************************************************************************************************************/}      
    
      <div className = " row column2 col-md-8">
        col2
        <br></br>
        <br></br>
        Full Name : Rachel Bennett
        <br></br>
        <br></br>
        Job Title: Junior Web Developer


          {/* /****Column 2/1 - User Input form***************************************************************************************************************/}  
          <Container className = "row col-md-8">

          {visibleOutput && 

            <div className = "row column2Section1 col-md-4" id = "inputForm">
          
                <div className = "addForm">
                  <Add
                    client={props.client}
                    refreshList={() => {
                      refreshList();
                      cCurrent(undefined);
                    }}
                    currentProfile={current}
                  />
                </div>
            </div> }


            {/* /****Column 2/2 - Profile Display table***************************************************************************************************************/}    
            <div className = "column2Section2 col-md-4" id = "outputForm">
            {visibleInput &&  
             <div className = "cols">
              
                <div className="col1 col-md-2">
                  <div>{section1()}</div>
                </div>

                <div className="col2 col-md-2">
                  <div>{section2()}</div>               
                </div>     

              </div>}


              <div className="row3 col-md-4">
                <div>{section3()}</div>
              </div>

              </div>     
            
          </Container>
     </div>
  
{/* /********************************************************************************************************************************/}      
    </Container>
      
{/* /**********************************************************************************************************************/}
    </>
  );
}

export default Dashboard;


