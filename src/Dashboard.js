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

import logo from "./TDA Logo.jpg";
import LinkedIn from "./LinkedInLogo.png";
import CV from "./CV Logo3.png";
import GitHub from "./GitHub Logo.png";


function Dashboard(props) {
  const [profiles, cProfiles] = useState([]);
  const [current, cCurrent] = useState(undefined);
  const [img, setImg] = useState();

  // Allow a user to insert an image of themsleves
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };


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

  const buildrows = () => {
    return profiles.map((current) => {
      return (
        <tr key={current._id}>
          <td>{current.userName}</td>        
          <td>{current.courseTitle}</td>
          <td>{current.fullName}</td>
          <td>{current.email}</td>
          <td>{current.contactNumber}</td>        
          <td>{current.city}</td>
          <td>{current.bio}</td>
          <td>{current.skills}</td>
          <td>{current.linkedIn}</td>
          <td>{current.gitHub}</td>
          <td>{current.portfolio}</td>
          <td>
          <div className = "add-submit">
            <button  className = "login-submit2"  onClick={() => removeProfile(current._id)}> remove</button>
            <button  className = "login-submit2"  onClick={() => updateProfile(current)}> update</button>
          </div>
          </td>
        </tr>



      
      );
    });
    console.log(profiles);
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
            <input type="text" placeholder ="Upload your CV"/>                   
          </div>
          <div className = "socialSpacing">            
            <img src={LinkedIn} width="50" height="50" alt="TDA logo"/>
            <input type="text" placeholder ="Add your Personal Portfolio Website"/>                   
          </div>
          <div className = "socialSpacing">      
            <img src={GitHub} width="50" height="50" alt="TDA logo"/>
            <input type="text" placeholder ="Add your GitHub Profile"/>                   
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
            <div className = "row column2Section1 col-md-4">
            col2/1
            {/* <Link to ={'/'} className="link">Profile</Link> */}
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
            </div>


            {/* /****Column 2/2 - Profile Display table***************************************************************************************************************/}    
            <div className = "column2Section2 col-md-4">
            col2/2
              {/* <Row>
                <Col>
                  Full Name
                </Col>
                <br></br>
                <Col>
                  Description
                </Col>
                <br></br>
                <Col>
                  City
                </Col>
                <br></br> */}
              {/* </Row> */}

              <tbody>{buildrows()}</tbody>
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


